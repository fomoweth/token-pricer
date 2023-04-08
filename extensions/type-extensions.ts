import "hardhat/types/runtime";
import { EthereumProvider } from "hardhat/types/provider";


declare module "hardhat/types/runtime" {
	export interface HardhatRuntimeEnvironment {
		switchChain(networkName: string): void
		getProvider(networkName: string): EthereumProvider
	}
}
