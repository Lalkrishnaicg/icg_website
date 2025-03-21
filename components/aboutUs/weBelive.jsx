import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const WeBelieve = () => {
  // Dummy Data
  const beliefs = [
    {
      title: "Innovation",
      description:
        "We believe in continuous innovation to stay ahead in the industry.",
      image: "https://source.unsplash.com/500x500/?innovation,tech",
    },
    {
      title: "Collaboration",
      description: "Teamwork and partnerships drive our success and growth.",
      image: "https://source.unsplash.com/500x500/?teamwork,collaboration",
    },
    {
      title: "Integrity",
      description:
        "We maintain transparency and integrity in everything we do.",
      image: "https://source.unsplash.com/500x500/?integrity,honesty",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        //  bgcolor: "#f3f6fc"
      }}
    >
      {/* Section Title */}
      <Typography
        // variant="h3"
        align="start"
        // fontWeight="bold"
        sx={{ mb: 4, color: "#000908", fontSize: 44 }}
      >
        What We Believe In
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} justifyContent="center">
        {beliefs.map((belief, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "350px",
                bgcolor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                mx: "auto",
              }}
            >
              {/* Background Image */}
              <Box
                component="img"
                src={belief.image}
                alt={belief.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />

              {/* Text Content */}
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  sx={{ mb: 1 }}
                >
                  {belief.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {belief.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeBelieve;
