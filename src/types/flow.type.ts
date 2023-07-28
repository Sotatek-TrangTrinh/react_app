export enum NodeType {
  ETHEREUM_BALANCE = 'ethereumBalance',
}

export interface EthereumBalanceData {
  label: string;
  walletAddress: string;
}
