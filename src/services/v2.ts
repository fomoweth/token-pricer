import { Token } from "@uniswap/sdk-core";
import invariant from "tiny-invariant";

import { ChainId } from "../constants";
import { Mapping, Provider } from "../types";
import { formatUnits, isAddress, parseUnits } from "../utils";

import { BaseService } from "./common";
import { TokenService } from "./tokens";

import {
	IUniswapV2Factory,
	IUniswapV2Factory__factory,
	IUniswapV2Pair,
	IUniswapV2Pair__factory
} from "../../typechain-types";


const UNISWAP_V2_FACTORY_ADDRESS = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
const PANCAKE_SWAP_FACTORY_ADDRESS = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
const QUICK_SWAP_FACTORY_ADDRESS = "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32"
const JOE_FACTORY_ADDRESS = "0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10"
const PANGOLIN_FACTORY_ADDRESS = "0xefa94DE7a4656D787667C749f7E1223D71E9FD88"

const SUSHI_FACTORY_ADDRESS: { [id in ChainId]: string | undefined } = {
	[ChainId.MAINNET]: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
	[ChainId.OPTIMISM]: undefined,
	[ChainId.BSC]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
	[ChainId.POLYGON]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
	[ChainId.ARBITRUM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
	[ChainId.AVALANCHE]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
}

export class V2PairPricerService extends BaseService<IUniswapV2Pair> {
	public readonly tokensService: TokenService
	public readonly pairAddresses: Mapping<string> = {}
	public readonly pairKeys: Set<string> = new Set()
	public readonly factories: Mapping<IUniswapV2Factory> = {}
	public readonly protocols: Set<string> = new Set()

	constructor(chainId: ChainId, protocols?: Mapping<string>, provider?: Provider) {
		super(chainId, IUniswapV2Pair__factory, provider)

		this.tokensService = new TokenService(chainId, provider)

		switch (chainId) {
			case ChainId.MAINNET:
				this.addProtocol("UNISWAP", UNISWAP_V2_FACTORY_ADDRESS)
				break

			case ChainId.BSC:
				this.addProtocol("PANCAKE_SWAP", PANCAKE_SWAP_FACTORY_ADDRESS)
				break

			case ChainId.POLYGON:
				this.addProtocol("QUICK_SWAP", QUICK_SWAP_FACTORY_ADDRESS)
				break

			case ChainId.AVALANCHE:
				this.addProtocol("TRADER_JOE", JOE_FACTORY_ADDRESS)
				this.addProtocol("PANGOLIN", PANGOLIN_FACTORY_ADDRESS)
				break
		}

		if (!!SUSHI_FACTORY_ADDRESS[chainId]) {
			this.addProtocol("SUSHI_SWAP", SUSHI_FACTORY_ADDRESS[chainId]!)
		}

		if (!!protocols) {
			Object.entries(protocols).map(([protocol, factoryAddress]) => {
				this.addProtocol(protocol, factoryAddress)
			})
		}
	}

	public async getLatestAnswer(protocol: string, base: string, quote: string) {
		const baseToken = await this.tokensService.getToken(base)
		const quoteToken = await this.tokensService.getToken(quote)

		const { pair } = await this.getPair(protocol, baseToken.address, quoteToken.address)

		const { reserve0, reserve1 } = await pair.getReserves()

		const [baseReserve, quoteReserve] = !!baseToken.sortsBefore(quoteToken)
			? [reserve0, reserve1]
			: [reserve1, reserve0]

		const price = parseUnits(1, baseToken.decimals).mul(quoteReserve).div(baseReserve)

		return formatUnits(price, quoteToken.decimals)
	}

	public async getPairState(protocol: string, tokenA: string, tokenB: string) {
		const { pair, token0, token1 } = await this.getPair(protocol, tokenA, tokenB)

		const [{ reserve0, reserve1, blockTimestampLast }, totalSupply] = await Promise.all([
			pair.getReserves(),
			pair.totalSupply()
		])

		return {
			pair: pair.address,
			token0: token0.address,
			token1: token1.address,
			liquidity: totalSupply.toString(),
			reserve0: reserve0.toString(),
			reserve1: reserve1.toString(),
			blockTimestampLast: blockTimestampLast.toString()
		}
	}

	public async getPair(protocol: string, tokenA: string | Token, tokenB: string | Token) {
		const factory = this.factories[protocol.toUpperCase()]
		invariant(!!factory, "Protocol not found")

		let token0 = typeof tokenA === "string" ? await this.tokensService.getToken(tokenA) : tokenA
		let token1 = typeof tokenB === "string" ? await this.tokensService.getToken(tokenB) : tokenB

		if (!token0.sortsBefore(token1)) {
			;[token0, token1] = [token1, token0]
		}

		const pairKey = `${protocol.toUpperCase()}-${token0.address}-${token1.address}`

		if (!this.pairKeys.has(pairKey)) {
			this.pairKeys.add(pairKey)

			const pairAddress = await factory.getPair(token0.address, token1.address)
			invariant(!!pairAddress, "Pair does not exist")

			this.pairAddresses[pairKey] = pairAddress
		}

		const pair = this.getContract(this.pairAddresses[pairKey])

		return { pair, token0, token1 }
	}

	public addProtocol(protocol: string, factoryAddress: string) {
		const protocolName = protocol.toUpperCase()

		invariant(!this.protocols.has(protocolName), "Protocol already exists")
		invariant(!!isAddress(factoryAddress), "Invalid factory address")

		this.protocols.add(protocolName)
		this.factories[protocolName] = IUniswapV2Factory__factory.connect(factoryAddress, this.provider)
	}
}
