import chalk from "chalk";
import { task } from "hardhat/config";

import { ChainLinkPricerService } from "../src/services";


task('get-latest-answer', 'retrieves the latest answer from chainlink aggregator')
	.addParam('base', 'ticker of base asset')
	.addParam('quote', 'ticker of quote asset')
	.setAction(async ({ base, quote }, hre) => {
		const chainId = hre.network.config.chainId!

		const pricer = new ChainLinkPricerService(chainId)

		const answer = await pricer.getLatestAnswer(base, quote)

		console.log(``)
		console.log(`[${base.toUpperCase()}-${quote.toUpperCase()}]: ${chalk.cyanBright(answer)}`)
		console.log(``)
	})

task('get-feed', 'retrieves the chainlink feed data')
	.addParam('base', 'ticker of base asset')
	.addParam('quote', 'ticker of quote asset')
	.setAction(async ({ base, quote }, hre) => {
		const chainId = hre.network.config.chainId!

		const pricer = new ChainLinkPricerService(chainId)

		const feed = pricer.getFeed(base.toUpperCase(), quote.toUpperCase())

		console.log(``)

		if (!feed) {
			console.log("Feed not found")
		} else {
			console.log(feed)
		}

		console.log(``)
	})

task('chainlink-supported-networks', 'retrieves the list of supported network')
	.setAction(async (_, hre) => {
		const chainId = hre.network.config.chainId!

		const pricer = new ChainLinkPricerService(chainId)

		const supportedNetworks = pricer.supportedChains()

		console.log(``)
		console.log(supportedNetworks)
		console.log(``)
	})