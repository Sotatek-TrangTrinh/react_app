import { Stack, Typography } from "@mui/material";
import { ReactComponent as GoogleIcon } from "@/assets/icons/google.svg";
import { ReactComponent as SeedIcon } from "@/assets/icons/seed.svg";
import { ReactComponent as MetamaskIcon } from "@/assets/icons/metamask.svg";
import { SignInMethodButton } from "@/components/atoms/SignInMethodButton";

export const SignInWithOtherMethod = () => {
  const handleSignInWithGoogle = () => {
    console.log("Signing in with Google");
  };

  const handleSignInWithSeed = () => {
    console.log("Signing in with Seed");
  };

  const handleSignInWithMetamask = () => {
    console.log("Signing in with Metamask");
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
        <SignInMethodButton onClick={handleSignInWithSeed}>
          <SeedIcon />
          <Typography>SEED</Typography>
        </SignInMethodButton>
        <SignInMethodButton onClick={handleSignInWithGoogle}>
          <GoogleIcon />
          <Typography>Google</Typography>
        </SignInMethodButton>
        <SignInMethodButton onClick={handleSignInWithMetamask}>
          <MetamaskIcon />
          <Typography>Metamask</Typography>
        </SignInMethodButton>
      </Stack>
    </div>
  );
};
