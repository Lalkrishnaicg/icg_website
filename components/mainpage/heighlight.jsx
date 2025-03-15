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
      title: "How to Improve Web Performance?",
      description: "Learn the best practices to enhance your website speed.",
      image: "/assets/image_1.png",
    },
    {
      id: 2,
      title: "React vs Next.js: Which One to Choose?",
      description:
        "A comparison of React and Next.js for modern web development.",
      image: "/assets/image_2.png",
    },
    {
      id: 3,
      title: "Understanding Redux Toolkit in 5 Minutes",
      description: "A quick guide to using Redux Toolkit efficiently.",
      image: "/assets/image_3.png",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleViewMore = () => {
    setVisibleIndex((prev) => (prev + 1 < blogs.length ? prev + 1 : prev));
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2, margin: 6 }}>
      <Grid container spacing={2}>
        {/* Left Side (6 columns) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Top Left Section */}
            <Grid item xs={12}>
              <Paper
                sx={{ p: 2, height: 300, bgcolor: "#dde4f0", borderRadius: 6 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap", // Ensures responsiveness
                    pl: 6,
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
              p: 3,
              height: 600,
              bgcolor: "#dde4f0",
              overflow: "hidden",
              borderRadius: 6,
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Latest Blogs
            </Typography>

            {/* Horizontal Scroll Wrapper */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "hidden",
                width: "100%",
              }}
            >
              {blogs
                .slice(visibleIndex, visibleIndex + 2)
                .map((blog, index) => (
                  <Card
                    key={blog.id}
                    sx={{
                      minWidth: index === 0 ? 300 : 100, // First blog full, next 20%
                      transition: "all 0.3s ease-in-out",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "100%", height: 350, objectFit: "cover" }}
                      image={blog.image}
                      alt={blog.title}
                    />
                    <CardContent
                      sx={{ display: index === 0 ? "block" : "none" }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Box>

            {/* View More Button */}
            {visibleIndex + 1 < blogs.length && (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                {/* <Button variant="contained" onClick={handleViewMore}>
                  View More
                </Button> */}
                <Button
                  id="btn"
                  onClick={handleViewMore}
                  variant="contained"
                  sx={{
                    opacity: 1,
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
