"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import arrow icon

const GetInTouchBox = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      position="fixed"
      sx={{
        top: 40,
        right: 50,
        // bgcolor: "#dde4f0",
        padding: "10px 15px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
        "&:hover": { backgroundColor: "#ff1a1a", color: "white" },
        height: 70,
      }}
    >
      <Link
        href="/contact"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color: "inherit",
        }}
      >
        <Typography fontWeight="bold">Get In Touch</Typography>
        <ArrowForwardIcon sx={{ fontSize: 20, marginLeft: 0.5 }} />
      </Link>
    </Box>
  );
};

export default GetInTouchBox;
