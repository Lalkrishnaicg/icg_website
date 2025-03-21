import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const VisionMission = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "250px", md: "400px" },
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?business,success')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ zIndex: 2, position: "relative" }}
        >
          Our Vision & Mission
        </Typography>
      </Box>

      {/* Vision & Mission Content */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Vision Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, color: "text.secondary" }}
              >
                To be a global leader in innovation and excellence, inspiring
                the world with our solutions, creativity, and commitment to
                sustainability.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://source.unsplash.com/600x400/?vision,leadership"
              alt="Vision"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>

          {/* Mission Section */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              component="img"
              src="https://source.unsplash.com/600x400/?mission,goal"
              alt="Mission"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, color: "text.secondary" }}
              >
                Our mission is to drive positive change through cutting-edge
                solutions, empowering businesses and individuals to reach new
                heights of success.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisionMission;
