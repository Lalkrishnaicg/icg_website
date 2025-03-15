"use client";

import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopHeader = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
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
        top: visible ? "0px" : "-90px",
        left: "50%",
        transform: "translateX(-50%)",
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
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          gap: 7,
        }}
      >
        <Link href="/who-are-we">
          <Typography
            sx={{
              position: "relative",
              "&:hover, &:focus": {
                cursor: "pointer",
                color: "#ffffff",
                background: "#008cff",
                border: "1px solid #008cff",
                textShadow:
                  "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",
                boxShadow:
                  "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "100%",
                height: "2px",
                backgroundColor: "#ffffff",
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover:after": {
                transform: "scaleX(1)",
              },
            }}
          >
            Who are we
          </Typography>
        </Link>
        <Link href="/what-we-do">
          <Typography
            sx={{
              position: "relative",
              "&:hover, &:focus": {
                cursor: "pointer",
                color: "#ffffff",
                background: "#008cff",
                border: "1px solid #008cff",
                textShadow:
                  "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",
                boxShadow:
                  "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "100%",
                height: "2px",
                backgroundColor: "#ffffff",
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover:after": {
                transform: "scaleX(1)",
              },
            }}
          >
            What we do
          </Typography>
        </Link>
        <Link href="/what-we-do">
          <Typography
            sx={{
              position: "relative",
              "&:hover, &:focus": {
                cursor: "pointer",
                color: "#ffffff",
                background: "#008cff",
                border: "1px solid #008cff",
                textShadow:
                  "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",
                boxShadow:
                  "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "100%",
                height: "2px",
                backgroundColor: "#ffffff",
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover:after": {
                transform: "scaleX(1)",
              },
            }}
          >
            Contact
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default TopHeader;
