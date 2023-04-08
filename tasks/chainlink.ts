import chalk from "chalk";
import { task } from "hardhat/config";

import { ChainLinkPricerService } from "../src/services";


task('latest-answer', 'retrieves latest answer on chainlink aggregator')
	.addParam('base', 'address of the token to fetch the price')
	.addParam('quote', 'ticker of quote asset: ETH | BTC | USD')
	.setAction(async ({ base, quote }, hre) => {
		const chainId = hre.network.config.chainId

		const pricer = new ChainLinkPricerService(chainId!)

		const answer = await pricer.getLatestAnswer(base, quote)

		console.log(``)
		console.log(`[${base.toUpperCase()} / ${quote.toUpperCase()}]: ${chalk.cyanBright(answer)}`)
		console.log(``)
	})


task('get-feed', 'retrieves the address of chainlink aggregator')
	.addParam('base', 'address of the token to fetch the price')
	.addParam('quote', 'ticker of quote asset: ETH | BTC | USD')
	.setAction(async ({ base, quote }, hre) => {
		const chainId = hre.network.config.chainId

		const pricer = new ChainLinkPricerService(chainId!)

		const feed = pricer.getFeed(base.toUpperCase(), quote.toUpperCase())

		console.log(``)

		if (!feed) {
			console.log("Feed not found")
		} else {
			console.log(feed)
		}

		console.log(``)
	})
