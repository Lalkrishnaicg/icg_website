import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        color: "black",
        py: 1,
        px: { md: 14, xs: 3 }, // Added padding for spacing
      }}
    >
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Left-aligned copyright text */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            © 2025 Irish Consulting Group
          </Typography>
        </Box>

        {/* Right-aligned links */}
        <Stack direction="row" spacing={2}>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">Terms of Service</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
