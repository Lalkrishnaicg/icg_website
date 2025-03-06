import { Grid, Box, Typography, TextField, MenuItem } from "@mui/material";
import React from "react";

const AssistSection = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "90vh",
      }}
    >
      {/* Left Section with Background Image */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundImage: "url('/assets/shape-01.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Main Content */}
        {/* <Box
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            position: "relative",
            zIndex: 2,
          }}
        >
          Image Section
        </Box> */}

        {/* Overlay Image with Low Opacity */}
        <Box
          sx={{
            position: "absolute",
            width: "70%", // Adjust size as needed
            height: "70%", // Adjust size as needed
            backgroundImage: "url('/assets/icg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.3, // Adjust opacity level
          }}
        />
      </Grid>
      {/* Right Colored Section */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          backgroundColor: "#98D8EF",
          display: "flex",
          alignItems: "start",
          height: "100%",
          paddingLeft: "80px", // Adjust left padding for alignment
          paddingTop: "40px", // Adjust top padding for spacing
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: 44,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          LET'S TALK
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: 20,
            marginBottom: 3,
          }}
        >
          Learn more about our core areas of expertise by selecting your topic
          of interest.
        </Typography>

        {/* Form Fields */}
        <Box sx={{ width: 500 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: "white" }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: "white" }}
          />
          <TextField
            label="Phone No"
            type="tel"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: "white" }}
          />
          <TextField
            label="What service do you want?"
            select
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: "white" }}
          >
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Mobile App Development">
              Mobile App Development
            </MenuItem>
            <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
            <MenuItem value="SEO Services">SEO Services</MenuItem>
          </TextField>
          <TextField
            label="Let us know how we can help you?"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AssistSection;
