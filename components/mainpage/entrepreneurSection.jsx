"use client";
import { Grid, Box, Typography } from "@mui/material";
import React from "react";

const EntrepreneurSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: { md: "60px 60px", xs: "20px 20px" },
        bgcolor: "#f0f0f0",
        mt: { xs: 4, md: 0 },
      }}
    >
      {/* Left Side: Sticky Scrolling Text Content */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          position: { md: "sticky", xs: "relative" },
          top: "20px",
          alignSelf: "flex-start",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          display: "flex",
          gap: 2, // Adds spacing between line and text
          alignItems: "stretch", // Ensures child elements stretch to full height
        }}
      >
        {/* Left Vertical Line */}
        <Box
          sx={{
            width: "1px", // Thickness of the line
            backgroundColor: "black", // Line color
            borderRadius: "2px",
            minHeight: "100%", // Ensures it takes full height
            flexShrink: 0, // Prevents it from shrinking
          }}
        />

        {/* Content Section */}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ fontSize: { md: 38, xs: 24 }, color: "#1B1B1B " }}
          >
            The Entrepreneurial Journey
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { md: 24, xs: 16 } }}>
            Entrepreneurship is about innovation, persistence, and vision. It
            requires dedication to bring ideas to life. Entrepreneurs play a
            crucial role in shaping industries, overcoming challenges, and
            driving change.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side: Fixed-Size Polygon Model Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          {" "}
          <Box
            component="img"
            src="/assets/image_1.png"
            alt="Message Bubble Model"
            sx={{
              width: "100%",
              maxWidth: "600px", // Fixed width for consistency
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              clipPath:
                "polygon(10% 0%, 90% 0%, 90% 75%, 100% 90%, 75% 75%, 10% 75%)",
              display: { xs: "none", sm: "block" }, // Hide on xs, show on sm and above
            }}
          />
          <Box
            component="img"
            src="/assets/image_1.png"
            alt="Message Bubble Model"
            sx={{
              width: "100%",
              maxWidth: "600px", // Fixed width for consistency
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

              display: { sm: "block", md: "none" }, // Hide on xs, show on sm and above
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default EntrepreneurSection;
