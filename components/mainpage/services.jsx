import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "100vh", overflow: "hidden", margin: 4 }}
    >
      {/* Left Side: Fixed Heading */}
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            position: "sticky",
            top: 2,
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
      <Grid item xs={12} md={8} sx={{ height: "100vh", overflowY: "auto" }}>
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
          <Box sx={{ pt: 5, width: 600, height: 400, mt: 2, border: 1, pl: 6 }}>
            <Typography variant="h4">Legal</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
              lorem nec erat egestas consectetur.
            </Typography>
          </Box>

          {/* Service 2 */}
          <Box sx={{ py: 5, width: 600, height: 400, border: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Financial
            </Typography>
            <Typography>
              Nulla facilisi. Proin tincidunt, lectus nec dapibus luctus, felis
              felis commodo urna.
            </Typography>
          </Box>

          {/* Service 3 */}
          <Box sx={{ py: 5, width: 600, height: 400, border: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Consulting
            </Typography>
            <Typography>
              Nulla facilisi. Proin tincidunt, lectus nec dapibus luctus, felis
              felis commodo urna.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Services;
