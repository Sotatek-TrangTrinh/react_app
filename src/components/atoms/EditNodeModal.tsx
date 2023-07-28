import { Box, IconButton, Modal, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface EditNodeModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const EditNodeModal = ({
  open,
  onClose,
  children,
}: EditNodeModalProps) => {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-node__title"
      aria-describedby="edit-node__description"
      hideBackdrop
      sx={{
        width: '300px',
        height: '450px',
        background: 'white',
        borderRadius: '15px',
        boxShadow: `${theme.palette.neutral[50]}  0px 0px 5px`,
        padding: '20px',
        top: 'auto',
      }}
    >
      <Box sx={{ outline: 'none' }}>
        <IconButton
          sx={{ position: 'absolute', right: '20px' }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};
