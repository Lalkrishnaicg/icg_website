"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Navbar from "../navbar";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic transformations based on scroll
  const zoomScale = 1 + scrollPosition * 0.00008; // Slight zoom-in effect
  const rotationAngle = Math.max(-10 + scrollPosition * 0.04, -20); // Gradually reduce the angle

  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          //     bgcolor: "#f8f9fa",
          p: 2,
          position: "relative",
          mt: 2,
          left: 40,
        }}
      >
        {/* Expandable Box */}
        <Box
          sx={{
            p: 1,
            borderRadius: 6,
            cursor: "pointer",
            bgcolor: "white",
            boxShadow: 2,
            transition: "width 0.3s ease",
            width: expanded ? 450 : 180,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 30,
            overflow: "hidden",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {/* ICG Spotlight text stays fixed */}
          <Typography fontSize={17} sx={{ flexShrink: 0 }}>
            ICG <span style={{ color: "red" }}>S</span>potlight 💡
          </Typography>

          {/* Expanded content */}
          {expanded && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography fontSize={17} sx={{ color: "black" }}>
                Finance
              </Typography>
              <Typography fontSize={17}>Legal</Typography>
              <Typography fontSize={17}>Service</Typography>

              {/* Close Icon */}
              <IconButton onClick={() => setExpanded(false)} sx={{ p: 0 }}>
                <CloseIcon sx={{ fontSize: 13 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      {/* Navbar at the Bottom */}
      <Box>
        {/* Main Content */}
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Section (Text) */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "text.secondary", mb: 4 }}
                >
                  WELCOME TO ICG
                </Typography>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ fontWeight: "semi-bold", mb: 2 }}
                >
                  Maze Of Obstacles, Solutions Galore
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    href="#"
                    sx={{
                      border: "2px solid #0606f9", // Adjust border thickness and color
                      borderRadius: "8px", // Optional: Make corners rounded
                      // "&:hover": {
                      borderColor: "#0606f9", // Change border color on hover
                      backgroundColor: "white", // Optional: Change background on hover
                      // color: "#0606f9", // Optional: Change text color on hover
                      //  },
                    }}
                  >
                    Connect Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Section (Image) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: 0,
                  height: "440px",
                  borderRadius: 2,
                  minHeight: 300,
                  transform: `perspective(1300px) rotateY(${rotationAngle}deg) scale(${zoomScale})`,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                  boxShadow: "10px 10px 20px rgba(0,0,0,0.3)",
                  overflow: "hidden", // Ensures video stays within the box
                }}
              >
                <video
                  src="/assets/trail_vid2.mp4" // Replace with your actual video path
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          // width: "100%",
          // position: "absolute",
          //  bottom: 10,
          // left: 0,
          // zIndex: 1000,
          mt: 8,
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          // bgcolor: "black",
          zIndex: 1000,
          //  right: 7,
        }}
      >
        <Navbar />
      </Box>
    </Box>
  );
};

export default Hero;
