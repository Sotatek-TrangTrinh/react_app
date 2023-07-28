import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { ReactComponent as EthDiamondIcon } from '@/assets/icons/eth-logo-diamond.svg';
import EthereumBalanceModal from './EthereumBalanceModal';
import { useReactFlowStore } from '@/store';
import { EthereumBalanceData } from '@/types';

const EthereumBalanceNode = (props: NodeProps<EthereumBalanceData>) => {
  const { data, id, selected } = props;
  const theme = useTheme();
  const { label } = data;
  const { editingNode, setEditingNode } = useReactFlowStore();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // if event is double click
    if (event.detail === 2) {
      setOpen(true);
      setEditingNode(id);
    }
  };

  useEffect(() => {
    if (id !== editingNode) setOpen(false);
  }, [editingNode, id]);

  return (
    <div>
      <Box
        sx={{
          border: 'solid 1px',
          borderColor: selected ? 'primary.main' : 'neutral.50',
          padding: '15px',
          borderRadius: '10px',
          width: '280px',
          backgroundColor: 'white',
        }}
        onClick={handleClick}
      >
        <Stack direction="row" spacing="20px">
          <EthDiamondIcon width="40px" />
          <Box>
            <Typography
              color="text.primary"
              sx={{ fontSize: '18px', fontWeight: 500 }}
            >
              {label}
            </Typography>
            <Typography color="text.secondary">
              Address: {data.walletAddress || 'TBD'}
            </Typography>
          </Box>
        </Stack>
        <Handle
          type="source"
          position={Position.Top}
          style={{
            width: '8px',
            height: '8px',
            background: theme.palette.neutral[50],
            borderColor: theme.palette.neutral[50],
          }}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          style={{
            width: '8px',
            height: '8px',
            background: theme.palette.neutral[50],
            borderColor: theme.palette.neutral[50],
          }}
        />
      </Box>

      <EthereumBalanceModal
        node={props}
        key={id}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default EthereumBalanceNode;
