import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

import "./extensions";
import { buildNetworksConfig, ChainId, CMC_API_KEY, EXPLORER_API_KEYS } from "./src";
import { loadTasks } from "./tasks";

loadTasks();

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
	networks: buildNetworksConfig(ChainId.MAINNET, true),
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
