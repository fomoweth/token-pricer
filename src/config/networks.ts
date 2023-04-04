import { HttpNetworkUserConfig, NetworksUserConfig } from "hardhat/types";

import { ChainId, getNetwork } from "../constants";
import { ALCHEMY_API_KEY, INFURA_API_KEY } from "./apiKeys";


export const getRpcUrl = (chainId: ChainId) => {
	const network = getNetwork(chainId)
	const { alchemy, infura } = network.rpcUrl

	if (!!ALCHEMY_API_KEY && !!alchemy) {
		return alchemy.concat(ALCHEMY_API_KEY)
	}

	if (!!INFURA_API_KEY && !!infura) {
		return infura.concat(INFURA_API_KEY)
	}

	return "http://localhost:8545"
}

export const buildNetworksConfig = (forkId: ChainId, enableFork: boolean) => {
	const accounts = {
		mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
		initialIndex: 0,
		count: 20,
		path: "m/44'/60'/0'/0",
	}

	const config: NetworksUserConfig = {
		hardhat: {
			chainId: forkId,
			forking: {
				enabled: (!!INFURA_API_KEY || !!ALCHEMY_API_KEY) && enableFork === true,
				url: getRpcUrl(forkId),
			},
			accounts: accounts
		},
	}

	return Object.entries(ChainId).reduce<NetworksUserConfig>((acc, [key, value]) => {
		if (!!isNaN(+key) && !isNaN(+value)) {
			const networkName = key.toLowerCase()
			const networkId = +value as ChainId

			const networkConfig: HttpNetworkUserConfig = {
				chainId: networkId,
				url: getRpcUrl(networkId),
				accounts: accounts
			}

			acc[networkName] = networkConfig
		}

		return acc
	}, config)
}
