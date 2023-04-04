import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

import { buildHardhatNetworkConfig, buildNetworkConfig, ChainId, CMC_API_KEY, EXPLORER_API_KEYS } from "./src";


const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: "0.8.15",
				settings: {
					viaIR: true,
					evmVersion: "istanbul",
					optimizer: {
						enabled: true,
						runs: 1_000_000,
					},
					metadata: {
						bytecodeHash: "none",
					},
				},
			}
		],
	},
	networks: {
		hardhat: buildHardhatNetworkConfig(ChainId.MAINNET, true),
		mainnet: buildNetworkConfig(ChainId.MAINNET),
		optimism: buildNetworkConfig(ChainId.OPTIMISM),
		bsc: buildNetworkConfig(ChainId.BSC),
		polygon: buildNetworkConfig(ChainId.POLYGON),
		arbitrum: buildNetworkConfig(ChainId.ARBITRUM),
		avalanche: buildNetworkConfig(ChainId.AVALANCHE),
	},
	etherscan: {
		apiKey: EXPLORER_API_KEYS
	},
	gasReporter: {
		enabled: !!CMC_API_KEY,
		coinmarketcap: CMC_API_KEY,
		currency: "USD",
	},
	mocha: {
		timeout: 60000,
	},
};

export default config;
