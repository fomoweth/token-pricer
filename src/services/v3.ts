import { Price, Token } from "@uniswap/sdk-core";
import { FACTORY_ADDRESS, FeeAmount, TickMath } from "@uniswap/v3-sdk";
import invariant from "tiny-invariant";

import { ChainId } from "../constants";
import { Mapping, Provider, TokenModel } from "../types";
import { constants, mul } from "../utils";

import { BaseService } from "./common";
import { TokenService } from "./tokens";

import {
	IUniswapV3Factory,
	IUniswapV3Factory__factory,
	IUniswapV3Pool,
	IUniswapV3Pool__factory
} from "../../typechain-types";


const SUPPORTED_CHAINS: ChainId[] = [
	ChainId.MAINNET,
	ChainId.OPTIMISM,
	ChainId.BSC,
	ChainId.POLYGON,
	ChainId.ARBITRUM,
]

export interface PoolState {
	pool: string
	token0: TokenModel
	token1: TokenModel
	fee: FeeAmount
	liquidity: string
	sqrtRatioX96: string
	tick: number
}

export class V3PoolPricerService extends BaseService<IUniswapV3Pool> {
	public readonly tokensService: TokenService
	public readonly poolAddresses: Mapping<string> = {}
	public readonly poolKeys: Set<string> = new Set()
	public readonly factory: IUniswapV3Factory

	constructor(chainId: ChainId, provider?: Provider) {
		super(chainId, IUniswapV3Pool__factory, provider)

		invariant(!!SUPPORTED_CHAINS.includes(chainId), `Uniswap V3 is not supported on ${chainId}`)

		this.tokensService = new TokenService(chainId, provider)

		this.factory = IUniswapV3Factory__factory.connect(FACTORY_ADDRESS, this.provider)
	}

	public async getLatestAnswer(base: string, quote: string, fee: FeeAmount, period?: number) {
		const baseToken = await this.tokensService.getToken(base)
		const quoteToken = await this.tokensService.getToken(quote)

		let tick: number

		if (!!period) {
			tick = await this._twapTick(baseToken, quoteToken, fee, period)
		} else {
			({ tick } = await this.getPoolState(baseToken.address, quoteToken.address, fee))
		}

		const sqrtRatioX96 = TickMath.getSqrtRatioAtTick(tick)
		const ratioX192 = mul(sqrtRatioX96, sqrtRatioX96).toString()
		const Q192 = constants.Q192.toString()

		const price = baseToken.sortsBefore(quoteToken)
			? new Price(baseToken, quoteToken, Q192, ratioX192)
			: new Price(baseToken, quoteToken, ratioX192, Q192)

		return price.toFixed(quoteToken.decimals)
	}

	public async getPoolState(tokenA: string, tokenB: string, fee: FeeAmount) {
		const { pool, token0, token1 } = await this.getPool(tokenA, tokenB, fee)

		const [slot0, liquidity] = await Promise.all([
			pool.slot0(),
			pool.liquidity()
		])

		return {
			pool: pool.address,
			token0: {
				chainId: this.chainId,
				address: token0.address,
				name: token0.name!,
				symbol: token0.symbol!,
				decimals: token0.decimals
			},
			token1: {
				chainId: this.chainId,
				address: token1.address,
				name: token1.name!,
				symbol: token1.symbol!,
				decimals: token1.decimals
			},
			fee: fee,
			liquidity: liquidity.toString(),
			sqrtRatioX96: slot0.sqrtPriceX96.toString(),
			tick: slot0.tick,
		} as PoolState
	}

	private async _twapTick(tokenA: string | Token, tokenB: string | Token, fee: FeeAmount, period: number) {
		invariant(period > 0, "Period must be greater than 0")

		const { pool } = await this.getPool(tokenA, tokenB, fee)

		const { tickCumulatives } = await pool.observe([period, 0])

		const tickCumulativesDelta = +tickCumulatives[1].sub(tickCumulatives[0]).toString()

		let twapTick = tickCumulativesDelta / period

		if (tickCumulativesDelta < 0 && (tickCumulativesDelta % period != 0)) {
			twapTick--
		}

		return Math.round(twapTick)
	}

	private async getPool(tokenA: string | Token, tokenB: string | Token, fee: FeeAmount) {
		let token0 = typeof tokenA === "string" ? await this.tokensService.getToken(tokenA) : tokenA
		let token1 = typeof tokenB === "string" ? await this.tokensService.getToken(tokenB) : tokenB

		if (!token0.sortsBefore(token1)) {
			;[token0, token1] = [token1, token0]
		}

		const poolKey = `${token0.address}-${token1.address}-${fee}`

		if (!this.poolKeys.has(poolKey)) {
			this.poolKeys.add(poolKey)

			const poolAddress = await this.factory.getPool(token0.address, token1.address, fee)
			invariant(!!poolAddress, "Pool does not exist")

			this.poolAddresses[poolKey] = poolAddress
		}

		const pool = this.getContract(this.poolAddresses[poolKey])

		return { pool, token0, token1 }
	}

	public poolFees() {
		return Object.values(FeeAmount).filter((fee) => typeof fee === "number") as FeeAmount[]
	}

	public supportedChains() {
		return SUPPORTED_CHAINS.map((chainId) => ({ id: chainId, network: ChainId[chainId] })) as { id: number, network: string }[]
	}
}
