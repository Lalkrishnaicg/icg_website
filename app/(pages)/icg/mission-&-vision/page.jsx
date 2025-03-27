import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const page = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          color: "white",
          textAlign: "start",
          px: 2,
          position: "relative",
          //   p: 6,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            // pt: 8,
            pl: 15,
            zIndex: 2,
            position: "relative",
            color: "black",
            textAlign: "start",
          }}
        >
          Key Values at ICG
        </Typography>
      </Box>

      {/* Vision Section */}
      <Box sx={{ color: "black", py: 8 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold">
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Our vision is to be the global leader in innovation,
                sustainability, and excellence, fostering a future where
                businesses and communities thrive together.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/vision.jpg"
                alt="Vision"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ backgroundColor: "black", color: "white", py: 8 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box
                component="img"
                src="/assets/mission.jpg"
                alt="Mission"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                We strive to empower individuals and businesses with
                cutting-edge technology and solutions that drive sustainable
                growth and lasting impact.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default page;
