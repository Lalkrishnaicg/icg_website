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
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          p: 2,
          position: "relative",
          mt: 2,
          left: 40,
        }}
      >
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
          <Typography fontSize={17} sx={{ flexShrink: 0 }}>
            ICG <span style={{ color: "red" }}>S</span>potlight 💡
          </Typography>

          {expanded && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography fontSize={17} sx={{ color: "black" }}>
                Finance
              </Typography>
              <Typography fontSize={17}>Legal</Typography>
              <Typography fontSize={17}>Service</Typography>

              <IconButton onClick={() => setExpanded(false)} sx={{ p: 0 }}>
                <CloseIcon sx={{ fontSize: 13 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box> */}
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
            sx={{ height: "100vh" }} // Ensures full viewport height
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
                    href="contact-us"
                    sx={{
                      border: "2px solid #0606f9",
                      borderRadius: "8px",
                      // "&:hover": {
                      borderColor: "#0606f9",
                      backgroundColor: "white",
                      // color: "#0606f9",
                      //  },
                    }}
                  >
                    Connect Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Section (Image) */}
            {/* Right Section (Video) */}
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
          // width: "100%",
          // position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          //  right: 7,
        }}
      >
        <Navbar />
      </Box>
    </Box>
  );
};

export default Hero;
