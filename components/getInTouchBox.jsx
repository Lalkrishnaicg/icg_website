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
        top: { md: 40, xs: 24 },
        right: { md: 50, xs: 30 },
        bgcolor: "rgba(255, 255, 255, 0.7)", // Adjust the last value for transparency
        padding: { md: "10px 15px", xs: "5px 8px" },
        borderRadius: { md: "20px", xs: "15px" },
        display: "flex",
        alignItems: "center",
        //  gap: 1,
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
        "&:hover": { backgroundColor: "#ff1a1a", color: "white" },
        height: { md: 70, xs: 57 },
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
        <Typography
          fontWeight="semi-bold"
          sx={{ fontSize: { md: 20, xs: 14 } }}
        >
          Get In Touch
        </Typography>
        <ArrowForwardIcon
          sx={{ fontSize: { md: 20, xs: 14 }, marginLeft: 0.5 }}
        />
      </Link>
    </Box>
  );
};

export default GetInTouchBox;
