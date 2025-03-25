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
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        //    bgcolor: "#fbf9f9",
      }}
    >
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,

            pt: { md: 3, xs: -7 },
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
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
                  component="h1"
                  sx={{
                    fontWeight: "semi-bold",
                    mb: 2,
                    fontSize: { md: 44, xs: 28 },
                    lineHeight: { md: 1.1, xs: 1.2 },

                    color: "#1B1B1B",
                    // color: "white",
                  }}
                >
                  Maze Of Obstacles,{" "}
                  <Box
                    component="span"
                    sx={{ display: { xs: "block", md: "inline" } }}
                  >
                    Solutions Galore
                  </Box>
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    mt: { md: 4, xs: 3 },
                    display: { xs: "none", md: "flex" },
                  }}
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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // Ensures vertical alignment
              }}
            >
              <Box
                sx={{
                  mt: { md: 0, xs: "5vh" }, // Adjusted for consistency
                  height: "420px",
                  width: "600px",
                  borderRadius: 2,
                  transform: {
                    md: `perspective(1300px) rotateY(${rotationAngle}deg) scale(${zoomScale})`,
                    xs: "none",
                  },
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                  boxShadow: "10px 10px 20px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Centering the video inside
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
