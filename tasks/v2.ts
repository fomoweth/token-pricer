import chalk from "chalk";
import { task } from "hardhat/config";

import { V2PairPricerService } from "../src/services";


task('get-pair-price', 'retrieves the price of uniswap v2 pair')
	.addParam('base', 'address or ticker of base asset')
	.addParam('quote', 'address or ticker of quote asset')
	.addParam('protocol', 'name of protocol', 'uniswap')
	.setAction(async ({ base, quote, protocol }, hre) => {
		if (base.toUpperCase() === "ETH") {
			base = "WETH"
		}

		if (quote.toUpperCase() === "ETH") {
			quote = "WETH"
		}

		const chainId = hre.network.config.chainId!

		const pricer = new V2PairPricerService(chainId)

		const answer = await pricer.getLatestAnswer(protocol, base, quote)

		console.log(``)
		console.log(`[${base.toUpperCase()} / ${quote.toUpperCase()}]: ${chalk.cyanBright(answer)}`)
		console.log(``)
	})

task('get-pair-state', 'retrieves the state of uniswap v2 pair')
	.addParam('base', 'address or ticker of base asset')
	.addParam('quote', 'address or ticker of quote asset')
	.addParam('protocol', 'name of protocol', 'uniswap')
	.setAction(async ({ base, quote, protocol }, hre) => {
		if (base.toUpperCase() === "ETH") {
			base = "WETH"
		}

		if (quote.toUpperCase() === "ETH") {
			quote = "WETH"
		}

		const chainId = hre.network.config.chainId!

		const pricer = new V2PairPricerService(chainId)

		const pairState = await pricer.getPairState(protocol, base, quote)

		console.log(``)
		console.log(pairState)
		console.log(``)
	})

task('get-most-liquidity-pair', 'retrieves the state of uniswap v2 pair with most liquidity')
	.addParam('base', 'address or ticker of base asset')
	.addParam('quote', 'address or ticker of quote asset')
	.setAction(async ({ base, quote }, hre) => {
		if (base.toUpperCase() === "ETH") {
			base = "WETH"
		}

		if (quote.toUpperCase() === "ETH") {
			quote = "WETH"
		}

		const chainId = hre.network.config.chainId!

		const pricer = new V2PairPricerService(chainId)

		let result: {
			protocol: string
			pair: string
			token0: string
			token1: string
			liquidity: string
			reserve0: string
			reserve1: string
			blockTimestampLast: string
		} | undefined

		for (const protocol of pricer.protocols) {
			const pairState = await pricer.getPairState(protocol, base, quote)

			if (!!pairState && (!result || +pairState.liquidity > +result.liquidity)) {
				result = { protocol: protocol.toLowerCase().replace("_", "-"), ...pairState }
			}
		}

		console.log(``)
		console.log(result)
		console.log(``)
	})
