import { DragEvent, useCallback, useRef, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  ReactFlowInstance,
  Node,
  Background,
} from 'reactflow';
import { Box, Stack } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { shallow } from 'zustand/shallow';
import CustomNodes from '@/components/molecules/CustomNodes';
import { Sidebar, createNewNode } from '@/components/screens/workflowDetails';
import { NodeType } from '@/types';
import { useReactFlowStore, RFState } from '@/store';
import 'reactflow/dist/style.css';

const selector = (state: RFState) => state;

const FlowPlayGround = () => {
  const reactFlowWrapper = useRef(null);
  const {
    nodes,
    addNode,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodesDelete,
  } = useReactFlowStore(selector, shallow);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    const newEvent = { ...event };
    newEvent.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      if (!(reactFlowWrapper.current && reactFlowInstance)) return;
      const reactFlowBounds = (
        reactFlowWrapper.current as HTMLElement
      ).getBoundingClientRect();
      const type = event.dataTransfer?.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: Node = createNewNode(type as NodeType, position);

      addNode(newNode);
    },
    [reactFlowInstance, addNode]
  );

  const handleDeleteNode = (_nodes: Node[]) => {
    onNodesDelete(_nodes);
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Stack direction="row" justifyContent="right">
        <ConnectButton />
      </Stack>
      <Box sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
        <ReactFlowProvider>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }} ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              nodeTypes={CustomNodes}
              onNodesDelete={handleDeleteNode}
            >
              <Controls />
              <Background gap={16} />
            </ReactFlow>
          </Box>
        </ReactFlowProvider>
      </Box>
    </Box>
  );
};

const WorkflowDesign = () => {
  return <FlowPlayGround />;
};

export default WorkflowDesign;
