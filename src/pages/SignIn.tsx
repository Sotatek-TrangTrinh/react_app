import { Box, Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import AppJourney from "@/components/molecules/AppJourney";
import { SignInWithOtherMethod } from "@/components/screens/signIn/SignInWithOtherMethod";
import { SignInWithEmailPassword } from "@/components/screens/signIn/SignInWithEmailPassword";

const SignIn = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" p="32px">
      <Box sx={{ maxWidth: "493px", px: "80px", flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            mb: "87px",
            color: "primary.dark",
          }}
        >
          Workflow
        </Typography>
        <Typography
          component="h1"
          sx={{ fontSize: "40px", marginBottom: "16px", fontWeight: 500 }}
        >
          Get Start Now
        </Typography>

        <Typography
          sx={{ fontSize: "16px", marginBottom: "52px" }}
          color="text.secondary"
        >
          Enter your credentials to access your account
        </Typography>
        <Stack spacing="44px">
          <SignInWithOtherMethod />

          <Divider sx={{ color: theme.palette.text.secondary }}>or</Divider>
          <SignInWithEmailPassword />

          <Stack direction="row" spacing="12px" justifyContent="center">
            <Typography>New to Workflow?</Typography>
            <Link href="/sign-up">Sign up</Link>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ width: "676px" }}>
        <AppJourney />
      </Box>
    </Stack>
  );
};

export default SignIn;
