import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const History = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          //  height: { xs: "250px", md: "400px" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          px: 3, // Adds padding to the left
          position: "relative",
        }}
      >
        {/* Overlay to ensure text visibility */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // color: "black",
          }}
        />

        {/* Left-Aligned Title */}
        <Typography
          // variant="h1"
          //   fontWeight="bold"
          sx={{
            zIndex: 2,
            position: "relative",
            textAlign: "left",
            fontSize: 80, // Large size without extra boldness
            pl: { md: 20 },
          }}
        >
          History
        </Typography>
      </Box>

      {/* Content Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              {/* <Typography variant="h4" fontWeight="bold" color="primary">
                Journey
              </Typography> */}
              <Typography variant="body1" sx={{ mt: 0 }}>
                To be a global leader in innovation and excellence, inspiring
                the world with our solutions, creativity, and commitment to
                sustainability.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/history_image.jpg"
              alt="Vision"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default History;
