import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
        bgcolor: "background.default",
        pb: { xs: 8, md: 15, xl: 20, "2xl": 25 },
        pt: { xs: 15, md: 18, xl: 22, "2xl": 26 },
        // textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Irish consulting group
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mb: 4 }}>
          company
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" color="primary" component={Link} href="">
            Connect Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
