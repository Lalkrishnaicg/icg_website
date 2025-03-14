"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const TopHeader = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true); // Show when scrolling up
      } else {
        setVisible(false); // Hide when scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      sx={{
        border: "1px dotted",
        borderRadius: 5,
        mt: 2,
        zIndex: 1000,
        position: "fixed",
        top: visible ? "0px" : "-90px", // Moves out of view when hidden
        left: "50%",
        transform: "translateX(-50%)", // Centers it horizontally
        width: "40%",
        height: 40,
        color: "black",
        bgcolor: "#dde4f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.03)",
        transition: "top 0.3s ease-in-out",
        userSelect: "none",
        "&:hover, &:focus": {
          cursor: "pointer",
          color: "#ffffff",
          background: "#008cff",
          border: "1px solid #008cff",
          textShadow: "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",
          boxShadow:
            "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Space between items
          alignItems: "center", // Aligns items properly
          width: "90%", // Ensures it takes full width
          gap: 7,
        }}
      >
        <Typography>Who are we</Typography>
        <Typography>What we do</Typography>
        <Typography>Contact</Typography>
      </Box>
    </Box>
  );
};

export default TopHeader;
