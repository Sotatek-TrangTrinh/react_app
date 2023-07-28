import { Node, XYPosition } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import { NodeType } from '@/types';

const getNodeId = () => uuidv4();

const getNodeData = (type: NodeType) => {
  switch (type) {
    case NodeType.ETHEREUM_BALANCE:
      return {
        label: 'ETH Balance',
        walletAddress: '',
      };
    default:
      return {
        label: 'default node',
      };
  }
};

export const createNewNode = (type: NodeType, position: XYPosition) => {
  const data = getNodeData(type);
  const newNode: Node = {
    id: getNodeId(),
    type,
    position,
    data,
  };
  return newNode;
};
