import { ChainId } from "../../constants";
import { TokenModel } from "../../types";
import { isAddress, isSameAddress } from "../../utils";

import mainnet from "./mainnet.json";
import optimism from "./optimism.json";
import bsc from "./bsc.json";
import polygon from "./polygon.json";
import arbitrum from "./arbitrum.json";
import avalanche from "./avalanche.json";


const TOKEN_LIST: { [chainId in ChainId]: TokenModel[] } = {
	[ChainId.MAINNET]: JSON.parse(JSON.stringify(mainnet, null, 4)),
	[ChainId.OPTIMISM]: JSON.parse(JSON.stringify(optimism, null, 4)),
	[ChainId.BSC]: JSON.parse(JSON.stringify(bsc, null, 4)),
	[ChainId.POLYGON]: JSON.parse(JSON.stringify(polygon, null, 4)),
	[ChainId.ARBITRUM]: JSON.parse(JSON.stringify(arbitrum, null, 4)),
	[ChainId.AVALANCHE]: JSON.parse(JSON.stringify(avalanche, null, 4)),
}

export const getTokens = (chainId: ChainId, targets: string[] = []) => {
	const tokenList = TOKEN_LIST[chainId]

	if (targets.length === 0) {
		return tokenList
	}

	return targets.reduce<TokenModel[]>((acc, target) => {
		const token = tokenList.find((token) =>
			!!isAddress(target)
				? isSameAddress(target, token.address)
				: target.toUpperCase() === token.symbol.toUpperCase()
		)

		if (!!token) {
			acc.push(token)
		} else {
			console.log(`${target} not found from the token list`)
		}

		return acc
	}, [])
}

export const getToken = (chainId: ChainId, target: string) => {
	const [token] = getTokens(chainId, [target])

	if (!token) {
		throw new Error(`${target} not found from token list`)
	}

	return token
}
