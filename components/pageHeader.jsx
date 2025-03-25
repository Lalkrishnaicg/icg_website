import React from "react";
import { Box, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const PageHeader = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" }, // Show only on xs, hide on md+
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid #ccc", // Divider effect
      }}
    >
      {/* Left: Logo */}
      <Box
        component="img"
        src="/assets/icg.png" // Replace with your logo path
        alt="Logo"
        sx={{ width: 40, height: 40, objectFit: "contain" }}
      />

      {/* Right: Close Icon */}
      <Link href="/">
        <IconButton sx={{ color: "black" }}>
          <CloseIcon />
        </IconButton>
      </Link>
    </Box>
  );
};

export default PageHeader;
