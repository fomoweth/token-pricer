import { Token } from "@uniswap/sdk-core";
import { ChainId } from "../constants";


export const parseToken = (chainId: ChainId, tokenAddress: string, name: string, symbol: string, decimals: number) => {
	return new Token(chainId, tokenAddress, decimals, symbol, name)
}
