import { Input as InputBase, Typography } from "@mui/material";
import { ChangeEvent } from "react";

export interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
  endAdornment?: JSX.Element;
}

export const Input = ({
  value,
  onChange,
  label,
  errorMessage,
  placeholder = "",
  type = "text",
  endAdornment,
}: InputProps) => {
  return (
    <div>
      <Typography
        sx={{
          display: "block",
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "8px",
        }}
        component="label"
        color="text.primary"
      >
        {label}
      </Typography>
      <InputBase
        sx={{
          border: "solid 1px",
          borderColor: errorMessage ? "error.main" : "neutral.50",
          borderRadius: "16px",
          fontSize: "14px",
          fontWeight: 400,
          height: "52px",
          padding: "16px",
          width: "100%",
          "&::before": {
            borderBottom: "none!important",
          },
          "&::after": {
            borderBottom: "none!important",
          },
          "&.Mui-focused": {
            border: "solid 1px",
            borderColor: "primary.main",
          },
        }}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        endAdornment={endAdornment}
      />

      <Typography
        sx={{ fontSize: "13px", marginTop: "6px" }}
        color="error.main"
      >
        {errorMessage}
      </Typography>
    </div>
  );
};
