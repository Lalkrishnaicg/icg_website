import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Insights = () => {
  return (
    <Grid
      container
      //  spacing={2}
      sx={{
        display: "flex",
        alignItems: "stretch", // Ensures children take full height
        justifyContent: "center",
        bgcolor: "#f0f0f0",
        minHeight: { md: "95vh", xs: "35vh" }, // Ensures the entire section has enough height

        mt: 10,
      }}
    >
      {/* Left Side Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: { md: "80vh", xs: "40vh" }, // Ensures the left side matches the right side
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          backgroundImage: "linear-gradient(to bottom, #2C2C2C, #192f84)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 20, sm: 20, md: 40 },
            p: 8,
            textAlign: "center",
          }}
        >
          Have you at any point thought why so many businesses in India close
          down despite having a great product or service?
        </Typography>

        <Box
          sx={{
            position: "absolute", // Fix it to the bottom of the Grid
            bottom: { md: 20, xs: -30 }, // Adjust bottom spacing
            width: "90%",
            display: "flex",
            justifyContent: "center", // Center the button horizontally
            alignItems: "center",
            height: { md: 80, xs: 80 },
            bgcolor: "white",
            //     borderRadius: 6,
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
            Ask Your thought
          </Button>
        </Box>
      </Grid>

      {/* Right Side Text */}
      <Grid
        item
        xs={12}
        md={6}
        component="img"
        src="/assets/building_image.jpg"
        alt="Message Bubble Model"
        sx={{
          width: "100%", // Ensures the image takes full width
          height: { md: "100vh", xs: "50vh" }, // Ensures full height of the viewport
          objectFit: "cover", // Ensures the image covers the entire grid area
          //   borderRadius: "10px",
        }}
      />
    </Grid>
  );
};

export default Insights;
