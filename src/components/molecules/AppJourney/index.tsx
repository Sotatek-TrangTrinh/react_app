import { Box, Typography } from "@mui/material";
import BubbleImage from "@/assets/images/bubble.png";

const AppJourney = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "32px",
        paddingTop: "110px",
        paddingBottom: "76px",
        px: "80px",
      }}
    >
      <Typography
        component="h1"
        color="common.white"
        sx={{
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "72px",
          mb: "32px",
        }}
      >
        Start your Journey with us.
      </Typography>
      <Typography color="neutral.100" mb="130px">
        Lorem ipsum dolor sit amet consectetur. Aliquam nulla sit eget ac a
        risus faucibus id. Maecenas feugiat id nunc massa. Amet tristique a eget
        lorem non aliquet mattis suscipit cras.
      </Typography>
      <img src={BubbleImage} alt="bubble" width="100%" />
    </Box>
  );
};

export default AppJourney;
