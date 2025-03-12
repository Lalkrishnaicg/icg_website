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
    <Box sx={{ flexGrow: 1, p: 2, mt: 6 }}>
      <Grid container spacing={2}>
        {/* Left Side (6 columns) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Top Left Section */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, height: 300, bgcolor: "#dde4f0" }}>
                <Typography variant="h4">Irish Consulting Group</Typography>
              </Paper>
            </Grid>

            {/* Bottom Left Section */}
            <Grid item xs={12} sx={{ height: 300 }}>
              {/* <Paper sx={{ p: 2, height: 150, bgcolor: "lightgreen" }}> */}
              <Box
                component="img"
                src="/assets/image_4.png" // Replace with your image URL
                alt="Cover"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />{" "}
              {/* </Paper> */}
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
                <Button variant="contained" onClick={handleViewMore}>
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
