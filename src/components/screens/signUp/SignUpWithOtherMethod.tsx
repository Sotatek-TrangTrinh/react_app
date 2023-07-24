import { Stack, Typography } from "@mui/material";
import { ReactComponent as GoogleIcon } from "@/assets/icons/google.svg";
import { ReactComponent as SeedIcon } from "@/assets/icons/seed.svg";
import { ReactComponent as MetamaskIcon } from "@/assets/icons/metamask.svg";
import { SignInMethodButton } from "@/components/atoms/SignInMethodButton";

export const SignUpWithOtherMethod = () => {
  const handleSignUpWithGoogle = () => {
    console.log("Signing up with Google");
  };

  const handleSignUpWithSeed = () => {
    console.log("Signing up with Seed");
  };

  const handleSignUpWithMetamask = () => {
    console.log("Signing up with Metamask");
  };

  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 500,
          marginBottom: "12px",
        }}
        color="text.secondary"
      >
        Continue with
      </Typography>
      <Stack direction="row" spacing="16px">
        <SignInMethodButton onClick={handleSignUpWithSeed}>
          <SeedIcon />
          <Typography>SEED</Typography>
        </SignInMethodButton>
        <SignInMethodButton onClick={handleSignUpWithGoogle}>
          <GoogleIcon />
          <Typography>Google</Typography>
        </SignInMethodButton>
        <SignInMethodButton onClick={handleSignUpWithMetamask}>
          <MetamaskIcon />
          <Typography>Metamask</Typography>
        </SignInMethodButton>
      </Stack>
    </div>
  );
};
