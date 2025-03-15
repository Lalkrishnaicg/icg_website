import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Grid
      // container
      // spacing={2}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        mt: 6,
      }}
    >
      {/* Left Side: Fixed Heading */}
      <Grid item xs={12} md={6} sx={{ height: "100vh" }}>
        <Box
          sx={{
            position: "sticky",
            //   top: 2,
            height: "100vh", // Full viewport height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dotted",
            padding: 6,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Our Services
          </Typography>
        </Box>
      </Grid>

      {/* Right Side: Scrollable Section */}
      <Grid item xs={12} md={6} sx={{ overflowY: "auto", height: "100vh" }}>
        <Box
          sx={{
            //  pr: 10,
            scrollBehavior: "smooth",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            pl: 5, // Adjust padding for spacing
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          {/* Service 1 */}
          <Box sx={{ pt: 5, width: 800, height: 700, border: 1, pl: 6 }}>
            <Typography variant="h4">Legal</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
              lorem nec erat egestas consectetur.
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "70%", // Adjust size as needed
                height: "70%", // Adjust size as needed
                backgroundImage: "url('/assets/image_6.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //  opacity: 0.3, // Adjust opacity level
              }}
            />
          </Box>

          {/* Service 2 */}

          <Box sx={{ pt: 5, width: 800, height: 700, border: 1, pl: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Financial
            </Typography>
            <Typography>
              Nulla facilisi. Proin tincidunt, lectus nec dapibus luctus, felis
              felis commodo urna.
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "70%", // Adjust size as needed
                height: "70%", // Adjust size as needed
                backgroundImage: "url('/assets/image_7.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //  opacity: 0.3, // Adjust opacity level
              }}
            />
          </Box>

          {/* Service 3 */}
          <Box sx={{ pt: 5, width: 800, height: 700, border: 1, pl: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Consulting
            </Typography>
            <Typography>
              Nulla facilisi. Proin tincidunt, lectus nec dapibus luctus, felis
              felis commodo urna.
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "70%", // Adjust size as needed
                height: "70%", // Adjust size as needed
                backgroundImage: "url('/assets/image_8.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //  opacity: 0.3, // Adjust opacity level
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Services;
