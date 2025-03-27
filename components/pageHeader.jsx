"use client";
import React from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageHeader = () => {
  const pathName = usePathname();

  // Format the pathname into a breadcrumb-style title
  const formattedTitle = pathName
    .split("/")
    .filter((part) => part)
    .map((part) => part.replace(/-/g, " "))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" > ");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1, // Reduce header height
        px: 2,
        borderBottom: "1px solid #ccc",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/assets/icg.png"
        alt="Logo"
        sx={{
          width: { xs: 35, md: 90 }, // Adjust image size
          height: "auto",
          objectFit: "contain",
        }}
      />

      {/* Page Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* <Typography
          sx={{
            fontSize: { xs: "14px", md: "28px", textAlign: "start" }, // Slightly smaller font size
            fontWeight: "semi-bold",
            textTransform: "capitalize",
            //  pr: 20,
          }}
        >
          Home
        </Typography> */}
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "28px" }, // Slightly smaller font size
            fontWeight: "semi-bold",
            textTransform: "capitalize",
          }}
        >
          {formattedTitle || "Home"}
        </Typography>
      </Box>
      {/* Close Button */}
      <Link href="/">
        <IconButton sx={{ color: "black", p: 0.5 }}>
          {" "}
          {/* Smaller padding */}
          <CloseIcon fontSize="small" /> {/* Smaller icon */}
        </IconButton>
      </Link>
    </Box>
  );
};

export default PageHeader;
