import { IconButton, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SignInMethodButtonProps {
  onClick: () => void;
  children: ReactNode;
}
export const SignInMethodButton = ({
  onClick,
  children,
}: SignInMethodButtonProps) => {
  const theme = useTheme();
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "solid 1px",
        borderColor: theme.palette.neutral[50],
        borderRadius: "24px",
        cursor: "pointer",
        gap: "12px",
        width: "154px",
        height: "48px",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      {children}
    </IconButton>
  );
};
