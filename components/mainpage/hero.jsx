"use client";
import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import Link from "next/link";
import Navbar from "../navbar";
import { useEffect, useState } from "react";

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
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {" "}
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
              <Box sx={{ mt: 15 }}>
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
                  mt: 14,
                  height: "400px",
                  backgroundImage: "url('/assets/hero_image1.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  minHeight: 300,
                  transform: `perspective(1000px) rotateY(${rotationAngle}deg) scale(${zoomScale})`,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                  boxShadow: "10px 10px 20px rgba(0,0,0,0.3)",
                }}
              />
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
        }}
      >
        <Navbar />
      </Box>
    </Box>
  );
};

export default Hero;
