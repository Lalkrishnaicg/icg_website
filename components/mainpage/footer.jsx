import { Box, Typography, Stack, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "black",
        py: 3,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">© 2025 Irish Consulting Group</Typography>
          <Stack direction="row" spacing={2}>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms of Service</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
