import {
  Connection,
  Edge,
  EdgeChange,
  MarkerType,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import { create } from "zustand";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  editingNode: string;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (newNodes: Node) => void;
  updateNodeData: (nodeId: string, nodeData: object) => void;
  onNodesDelete: (nodes: Node[]) => void;
  setEditingNode: (nodeId: string) => void;
};

export const useReactFlowStore = create<RFState>((set, get) => ({
  nodes: [],
  edges: [],
  editingNode: "",
  addNode: (newNode: Node) => {
    set((state) => ({ nodes: [...state.nodes, newNode] }));
  },
  updateNodeData: (nodeId: string, nodeData: object) => {
    const currentNodes = get().nodes;
    const newNodes = currentNodes.map((nd) => {
      if (nd.id === nodeId) return { ...nd, data: { ...nd.data, ...nodeData } };
      return nd;
    });
    set({ nodes: newNodes });
  },
  setNodes: (newNodes: Node[]) => {
    set({ nodes: newNodes });
  },
  onNodesChange: (changes: NodeChange[]) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },
  onConnect: (connection: Connection) => {
    console.log(connection);
    set({
      edges: addEdge(
        {
          ...connection,
          markerStart: {
            type: MarkerType.ArrowClosed,
          },
        },
        get().edges
      ),
    });
  },
  onNodesDelete: (deleted: Node[]) => {
    const edges = get().edges;
    const nodes = get().nodes;
    const newEdges = deleted.reduce((acc: Edge[], node: Node) => {
      const incomers = getIncomers(node, nodes, edges);
      const outgoers = getOutgoers(node, nodes, edges);
      const connectedEdges = getConnectedEdges([node], edges);

      const remainingEdges = acc.filter(
        (edge) => !connectedEdges.includes(edge)
      );

      const createdEdges = incomers.flatMap(({ id: source }) =>
        outgoers.map(({ id: target }) => ({
          id: `${source}->${target}`,
          source,
          target,
          markerStart: {
            type: MarkerType.ArrowClosed,
          },
        }))
      );

      return [...remainingEdges, ...createdEdges];
    }, edges);

    set({
      edges: newEdges,
    });
  },
  setEditingNode: (nodeId: string) => {
    set({
      editingNode: nodeId,
    });
  },
}));
