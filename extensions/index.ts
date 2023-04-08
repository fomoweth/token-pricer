import { EthersProviderWrapper } from "@nomiclabs/hardhat-ethers/internal/ethers-provider-wrapper";
import { extendEnvironment } from "hardhat/config";
import { createProvider } from "hardhat/internal/core/providers/construction";
import { EthereumProvider } from "hardhat/types/provider";

import "./type-extensions";


extendEnvironment((hre) => {
	const providers: { [networkName: string]: EthereumProvider } = {}

	hre.getProvider = function getProvider(networkName: string): EthereumProvider {
		if (!providers[networkName]) {
			providers[networkName] = createProvider(
				networkName,
				this.config.networks[networkName],
				this.config.paths,
				this.artifacts,
			)
		}
		return providers[networkName]
	}

	hre.switchChain = function switchChain(networkName: string) {
		if (!this.config.networks[networkName]) {
			throw new Error(`Network not found: ${networkName}`)
		}

		if (!providers[this.network.name]) {
			providers[this.network.name] = this.network.provider
		}

		this.network.name = networkName
		this.network.config = this.config.networks[networkName]
		this.network.provider = this.getProvider(networkName)

		if ((this as any).ethers) {
			(this as any).ethers.provider = new EthersProviderWrapper(this.network.provider)
		}
	}
})