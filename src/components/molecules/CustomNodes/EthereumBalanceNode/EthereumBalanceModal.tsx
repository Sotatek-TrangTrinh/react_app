import { EditNodeModal } from "@/components/atoms/EditNodeModal";
import { Input } from "@/components/atoms/Input";
import { useReactFlowStore } from "@/store";
import { EthereumBalanceData } from "@/types";
import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { NodeProps } from "reactflow";

interface EthereumBalanceModalProps {
  node: NodeProps<EthereumBalanceData>;
  open: boolean;
  onClose: () => void;
}

const EthereumBalanceModal = ({
  node,
  open,
  onClose,
}: EthereumBalanceModalProps) => {
  const { data, id: nodeId } = node;
  const { label } = data;
  const [walletAddress, setWalletAddress] = useState(data.walletAddress);
  const { updateNodeData } = useReactFlowStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWalletAddress(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateNodeData(nodeId, { walletAddress });
  };

  return (
    <EditNodeModal open={open} onClose={onClose}>
      <Box>
        <form onSubmit={handleSubmit} key={`form-${nodeId}`}>
          <Typography
            component="h1"
            sx={{ fontSize: "22px", fontWeight: 500, mb: "24px" }}
          >
            {label}
          </Typography>
          <Input
            label="Wallet Address"
            value={walletAddress}
            onChange={handleChange}
          />

          <Button type="submit" color="primary" fullWidth sx={{ mt: "24px" }}>
            Update
          </Button>
        </form>
      </Box>
    </EditNodeModal>
  );
};

export default EthereumBalanceModal;
