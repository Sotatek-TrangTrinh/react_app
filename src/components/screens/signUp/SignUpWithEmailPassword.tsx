import { Input } from "@/components/atoms/Input";
import { PasswordInput } from "@/components/atoms/PasswordInput";
import { emailExpression } from "@/helper";
import { signUp } from "@/services/auth.service";
import { ErrorResponse, SignUpData, User } from "@/types";
import { Button, Checkbox, Link, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpWithEmailPassword = () => {
  const navigate = useNavigate();
  const mutation = useMutation<AxiosResponse<User>, ErrorResponse, SignUpData>(
    signUp,
    {
      onSuccess: () => {
        navigate("/sign-in");
      },
    }
  );
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { email, password, confirmPassword, terms } = formValue;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormValue({ ...formValue, email: value });

    const isValid = emailExpression.test(value);
    setEmailError(isValid ? "" : "Invalid email");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormValue({ ...formValue, password: value });
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormValue({ ...formValue, confirmPassword: value });
    if (password !== value) {
      setConfirmPasswordError("Password and Confirm password is not the same");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleTermsChange = () => {
    setFormValue({ ...formValue, terms: !terms });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue);
    mutation.mutate(formValue);
  };

  const isDisabled =
    !(email && password && confirmPassword && terms) ||
    !!(emailError || passwordError || confirmPasswordError);

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="24px">
        <Input
          value={email}
          onChange={handleEmailChange}
          label="User ID"
          placeholder="Enter your User ID"
          errorMessage={emailError}
        />

        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          placeholder="Enter your password"
          errorMessage={passwordError}
        />
        <PasswordInput
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Re-enter password"
          placeholder="Enter confirm password"
          errorMessage={confirmPasswordError}
        />
        <Stack direction="row" alignItems="center">
          <Checkbox
            checked={terms}
            onChange={handleTermsChange}
            sx={{
              padding: 0,
              marginRight: "12px",
            }}
          />
          <Typography
            sx={{ fontSize: "14px", marginRight: "4px" }}
            color="text.secondary"
          >
            I agree to the
          </Typography>
          <Link sx={{ fontSize: "14px" }}>Term & Policy</Link>
        </Stack>
      </Stack>

      <Button
        type="submit"
        color="primary"
        fullWidth
        sx={{ marginTop: "44px" }}
        disabled={isDisabled}
      >
        Sign up
      </Button>
    </form>
  );
};
