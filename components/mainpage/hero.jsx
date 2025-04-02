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
import { LandingMarquee } from "../magicui/landingMarquee";

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
        // bgcolor: "#faf6f62b",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        {/* Removed maxWidth="lg" and added disableGutters */}
        <Container
          disableGutters
          sx={{
            width: "100%",
            maxWidth: "100% !important", // Override any inherited maxWidth
            pt: { md: 3, xs: -7 },
          }}
        >
          <Grid
            container
            //  spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100vh", width: "100%" }}
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
                px: { xs: 3, md: 6 }, // Add some padding for the content
              }}
            >
              <Box>
                <Typography
                  //  variant="h6"
                  sx={{
                    color: "text.secondary",
                    mb: { md: 0, xs: 0 },
                    mt: { md: 0, xs: 15 },
                    fontSize: { md: 16, xs: 18 },
                    fontWeight: "bold",
                  }}
                >
                  WELCOME TO ICG
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 100,
                    mb: 2,
                    fontSize: { md: 54, xs: 28 },
                    lineHeight: { md: 1.3, xs: 1.2 },
                    color: "#1B1B1B",
                    // color: "white",
                    pr: 4,
                  }}
                >
                  Guiding Your Business{" "}
                  <Box
                    component="span"
                    sx={{ display: { xs: "block", md: "inline" } }}
                  >
                    Towards{" "}
                    <i>
                      <span style={{ fontWeight: "bold" }}>Growth</span>
                    </i>
                  </Box>
                </Typography>
                <Typography
                  // component="h1"
                  sx={{
                    fontWeight: "semi-bold",
                    mb: 2,
                    fontSize: { md: 18, xs: 28 },
                    lineHeight: { md: 1.1, xs: 1.2 },
                    color: "#1B1B1B",
                    // color: "white",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
                <Box sx={{ display: "flex", gap: 1, pr: 3, pt: 4 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      border: "2px solid",
                      borderRadius: 1,
                      p: 1,
                      px: 3,
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      border: "2px solid",
                      borderRadius: 1,
                      bgcolor: "black",
                      p: 1,
                      px: 3,
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%", // Ensure grid item uses full width
              }}
            >
              <Box>
                <Button
                  // variant="contained"
                  sx={{
                    color: "white",
                    border: "2px solid",
                    borderRadius: 2,
                    top: "-13px",
                    marginTop: "-637px",
                    marginRight: "68px",
                    zIndex: 1000,
                    left: "558px",
                    width: "100%",
                    padding: "7px",
                    bgcolor: "black",
                  }}
                >
                  Get Started
                </Button>
              </Box>
              <LandingMarquee />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            zIndex: 1000,
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ display: "flex", textAlign: "left", pl: -10, zIndex: 1000 }}>
          <Typography sx={{ color: "black", pr: 5, fontSize: 20, mt: -88 }}>
            home
          </Typography>
          <Typography sx={{ color: "black", pr: 5, fontSize: 20, mt: -88 }}>
            about
          </Typography>{" "}
          <Typography sx={{ color: "black", pr: 5, fontSize: 20, mt: -88 }}>
            connect
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
