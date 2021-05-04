import { ChainId } from '@lychees/uniscam-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.ROPSTEN]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.KOVAN]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.RINKEBY]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.GÖRLI]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.BSC_MAINNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.BSC_TESTNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.HECO_MAINNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  [ChainId.HECO_TESTNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609',
  // @XXX: Deployed by Frank, ready when uniscam-sdk have ChainId of OKChain Testnet
  // [ChainId.OKCHAIN_TESTNET]: '0xbed5513c2fd4eae41bad3aff77ec9ef372aaf578',
  [ChainId.MATIC_MAINNET]: '0xB1B37799d76ed163873bbf60Be8871F5eEa12609'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
