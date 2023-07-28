import { DragEvent } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { NodeType } from '@/types';

interface ActionItemProps {
  title: string;
  description: string;
  nodeType: string;
}
function ActionItem({ title, description, nodeType }: ActionItemProps) {
  const theme = useTheme();

  const onDragStart = (event: DragEvent, _nodeType: string) => {
    const newEvent = { ...event };
    newEvent.dataTransfer.setData('application/reactflow', _nodeType);
    newEvent.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Stack
      sx={{
        border: 'solid 1px',
        borderColor: theme.palette.neutral[50],
        borderRadius: '15px',
        padding: '8px 12px',
      }}
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
    >
      <Typography
        sx={{ fontSize: '15px', fontWeight: 500 }}
        color="text.primary"
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '13px' }} color="text.secondary">
        {description}
      </Typography>
    </Stack>
  );
}

const INITIAL_ITEMS = [
  {
    title: 'Ethereum balance',
    description: 'Trigger',
    nodeType: NodeType.ETHEREUM_BALANCE,
  },
];

export function Sidebar() {
  const theme = useTheme();
  return (
    <Stack
      component="aside"
      width="260px"
      spacing="12px"
      p="15px"
      sx={{
        boxShadow: `0 0 5px ${theme.palette.neutral[50]}`,
      }}
    >
      {INITIAL_ITEMS.map(({ title, description, nodeType }) => (
        <ActionItem
          key={title}
          title={title}
          description={description}
          nodeType={nodeType}
        />
      ))}
    </Stack>
  );
}
