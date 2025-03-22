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
import GetInTouchBox from "../getInTouchBox";

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

  const zoomScale = 1 + scrollPosition * 0.00008;
  const rotationAngle = Math.max(-10 + scrollPosition * 0.04, -20);

  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar at the Bottom */}
      <Box>
        {/* Main Content */}
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,

            //  mt: 12,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            {/* Left Section (Text) */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Box>
                <Typography
                  //  variant="h6"
                  sx={{
                    color: "text.secondary",
                    mb: { md: 4, xs: 0 },
                    mt: { md: 0, xs: 15 },
                    fontSize: { md: 22, xs: 18 },
                  }}
                >
                  WELCOME TO ICG
                </Typography>
                <Typography
                  //  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: "semi-bold",
                    mb: 2,
                    fontSize: { md: 44, xs: 24 },
                    lineHeight: { md: 1.1 }, // Adjust line height to reduce spacing
                  }}
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
                    href="contact-us"
                    sx={{
                      border: "2px solid #0606f9",
                      borderRadius: "8px",

                      borderColor: "#0606f9",
                      backgroundColor: "white",
                    }}
                  >
                    Connect Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  height: "420px",
                  width: "600px",
                  borderRadius: 2,
                  transform: `perspective(1300px) rotateY(${rotationAngle}deg) scale(${zoomScale})`,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                  boxShadow: "10px 10px 20px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                }}
              >
                <video
                  src="/assets/vid/trail_vid2.mp4"
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
          bottom: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          bottom: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GetInTouchBox />
      </Box>
    </Box>
  );
};

export default Hero;
