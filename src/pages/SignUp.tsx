import { Box, Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import AppJourney from "@/components/molecules/AppJourney";
import {
  SignUpWithEmailPassword,
  SignUpWithOtherMethod,
} from "@/components/screens/signUp";

const SignUp = () => {
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
          sx={{ fontSize: "40px", marginBottom: "16px", fontWeight: "500" }}
        >
          Sign up
        </Typography>

        <Stack spacing="44px">
          <SignUpWithOtherMethod />

          <Divider sx={{ color: theme.palette.text.secondary }}>or</Divider>

          <SignUpWithEmailPassword />

          <Stack direction="row" spacing="12px" justifyContent="center">
            <Typography>Have an account?</Typography>
            <Link href="/sign-in">Login</Link>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ width: "676px" }}>
        <AppJourney />
      </Box>
    </Stack>
  );
};

export default SignUp;
