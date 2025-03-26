"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const Heiglight = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Improve Web Performance Ai?",
      description: "Learn the best practices to enhance your website speed.",
      image: "/assets/image_1.png",
    },
    {
      id: 2,
      title: "Bussiness data?",
      description:
        "A comparison of React and Next.js for modern web development.",
      image: "/assets/image_2.png",
    },
    {
      id: 3,
      title: "Bussiness data improve using AI?",
      description: "A quick guide to using Redux Toolkit efficiently.",
      image: "/assets/image_3.png",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleViewMore = () => {
    setVisibleIndex((prev) => (prev + 1 < blogs.length ? prev + 1 : prev));
  };

  return (
    <Box sx={{ flexGrow: 1, p: { md: 2, xs: 0 }, margin: { md: 6, xs: 1 } }}>
      <Grid container spacing={2}>
        {/* Left Side (6 columns) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Top Left Section */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,

                  height: 300,
                  bgcolor: "#dde4f0",
                  borderRadius: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap",
                    pl: { md: 6, xs: 0 },
                    pt: 8,
                    gap: 8,
                  }}
                >
                  <Box>
                    <Typography variant="h6">Irish Consulting Group</Typography>
                    <Typography variant="h4" sx={{ pt: 2 }}>
                      ICG <span style={{ fontSize: 30 }}>at</span> 2025
                    </Typography>
                  </Box>

                  <Button
                    id="btn"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      textTransform: "uppercase",
                      borderRadius: "16px",
                      fontSize: "17px",
                      fontWeight: "500",
                      bgcolor: "#082f54",
                      color: "white",
                      cursor: "pointer",
                      border: "1px solid #ffffff80",
                      transition: "0.5s ease",
                      userSelect: "none",
                      "&:hover, &:focus": {
                        color: "#ffffff",
                        background: "#008cff",
                        border: "1px solid #008cff",
                        textShadow:
                          "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",

                        boxShadow:
                          "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
                      },
                      "&:hover .icon": {
                        transform: "rotate(-90deg)",
                      },
                    }}
                    endIcon={
                      <SendIcon
                        className="icon"
                        sx={{
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    }
                  >
                    Watch the video
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Bottom Left Section */}
            <Grid item xs={12} sx={{ height: 300, position: "relative" }}>
              {/* Image */}
              <Box
                component="img"
                src="/assets/image_4.png"
                alt="Cover"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />

              {/* Text Overlay (Without affecting button) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  fontSize: "1.9rem",
                  fontWeight: "bold",
                  // backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional for better text readability
                  borderRadius: 6,
                }}
              >
                Dummy Data
              </Box>

              {/* Button (Placed separately to avoid overlay effect) */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2, // Ensures it's above the overlay
                }}
              >
                <Button
                  id="btn"
                  variant="contained"
                  sx={{
                    padding: "10px 20px",
                    textTransform: "uppercase",
                    borderRadius: "16px",
                    fontSize: "17px",
                    fontWeight: "500",
                    bgcolor: "#082f54",
                    color: "white",
                    cursor: "pointer",
                    //  border: "1px solid #ffffff80",
                    transition: "0.5s ease",
                    userSelect: "none",
                    "&:hover, &:focus": {
                      color: "#ffffff",
                      background: "#008cff",
                      border: "1px solid #008cff",
                      textShadow:
                        "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",
                      boxShadow:
                        "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
                    },
                    "&:hover .icon": {
                      transform: "rotate(-90deg)", // Rotates the icon upwards
                    },
                  }}
                  endIcon={
                    <SendIcon
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  }
                >
                  Try Your self
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side (6 columns) */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: { md: 3, xs: 2 },
              height: 600,
              bgcolor: "#fff",
              overflow: "hidden",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Latest Blogs
            </Typography>

            {/* Blog Container */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "hidden",
                width: "100%",
                flexGrow: 1, // Makes content fill space
              }}
            >
              {blogs.slice(visibleIndex, visibleIndex + 2).map((blog) => (
                <Card
                  key={blog.id}
                  sx={{
                    minWidth: 300,
                    transition: "all 0.3s ease-in-out",
                    overflow: "hidden",
                    bgcolor: "white",
                    color: "black",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { md: "100%" },
                      height: 300,
                      objectFit: "cover",
                    }}
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1, // Ensures equal height for all cards
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      maxWidth: { xs: "100%", sm: "100%" }, // Limits width on mobile
                      //   mx: "auto", // Centers content
                      px: { xs: 1, sm: 2 }, // Adjusts padding for better spacing
                      textAlign: "left",
                      width: { xs: "300px" },
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: { xs: "1rem", sm: "1.25rem" }, // Adjusts font size on mobile
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "black",
                        flexGrow: 1,
                        fontSize: { xs: "0.85rem", sm: "1rem" }, // Reduces text size on mobile
                      }}
                    >
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* View More Button - Always Centered */}
            {visibleIndex + 1 < blogs.length && (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  onClick={handleViewMore}
                  variant="contained"
                  sx={{
                    padding: "10px 20px",
                    textTransform: "uppercase",
                    borderRadius: "16px",
                    fontSize: "17px",
                    fontWeight: "500",
                    bgcolor: "#082f54",
                    color: "white",
                    cursor: "pointer",
                    border: "1px solid #ffffff80",
                    transition: "0.5s ease",
                    "&:hover, &:focus": {
                      color: "#ffffff",
                      background: "#008cff",
                      border: "1px solid #008cff",
                      textShadow: "0 0 30px #ffffff, 0 0 100px #ffffff",
                      boxShadow: "0 0 10px #008cff",
                    },
                    "&:hover .icon": {
                      transform: "rotate(-90deg)",
                    },
                  }}
                  endIcon={
                    <SendIcon
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  }
                >
                  View More
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Heiglight;
