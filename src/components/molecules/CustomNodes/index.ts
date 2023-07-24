import EthereumBalanceNode from "./EthereumBalanceNode";
import { NodeType } from "@/types";

const CustomNodes = {
  [NodeType.ETHEREUM_BALANCE]: EthereumBalanceNode,
};

export default CustomNodes;
