import { Currency, CurrencyAmount, Token } from "@uniswap/sdk-core";
import { BigNumberish } from "ethers";

import { parseUnits } from "./units";
import { ChainId } from "../constants";


export const parseCurrency = (chainId: ChainId, address: string, decimals: number) => {
	return new Token(chainId, address, decimals)
}

export const parseCurrencyAmount = <T extends Currency>(value: BigNumberish, currency: T) => {
	const parsedValue = parseUnits(value, currency.decimals).toString()

	if (parsedValue !== "0") {
		return CurrencyAmount.fromRawAmount(currency, parsedValue)
	}
}
