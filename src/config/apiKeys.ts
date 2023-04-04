import "dotenv/config";


export const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
export const INFURA_API_KEY = process.env.INFURA_API_KEY

export const CMC_API_KEY = process.env.CMC_API_KEY

export const EXPLORER_API_KEYS = {
	mainnet: process.env.ETHERSCAN_API_KEY || "",
	optimisticEthereum: process.env.OPTISCAN_API_KEY || "",
	bsc: process.env.BSCSCAN_API_KEY || "",
	polygon: process.env.POLYSCAN_API_KEY || "",
	arbitrumOne: process.env.ARBISCAN_API_KEY || "",
	avalanche: process.env.SNOWTRACE_API_KEY || "",
}
