"use client";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Finance Icon
import GavelIcon from "@mui/icons-material/Gavel"; // Legal Icon
import WorkIcon from "@mui/icons-material/Work"; // Consulting Icon
import React from "react";

const GlobalService = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Move boxes up as user scrolls down
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Service Data with Icons
  const services = [
    { name: "Finance", icon: <MonetizationOnIcon sx={{ fontSize: 50 }} /> },
    { name: "Legal", icon: <GavelIcon sx={{ fontSize: 50 }} /> },
    { name: "Consulting", icon: <WorkIcon sx={{ fontSize: 50 }} /> },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {/* Title */}
      <Grid item xs={12} textAlign="center">
        {/* <Typography variant="h4" fontWeight="bold">
          Global Services
        </Typography> */}
      </Grid>

      {/* Service Boxes with Scroll Animation */}
      <Grid
        item
        xs={12}
        md={10}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        {services.map((service, index) => (
          <motion.div key={service.name} style={{ y: translateY }}>
            <Box
              sx={{
                border: "1px dotted",
                height: "200px",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                //   fontWeight: "bold",
                gap: 2,
              }}
            >
              {service.icon}
              {service.name}
              {/* <Box
                sx={{
                  border: "1px dotted",
                  height: "30px",
                  width: "100px",
                  fontSize: 16,
                  borderRadius: 3,
                }}
              >
                know more
              </Box> */}
            </Box>
          </motion.div>
        ))}
      </Grid>
    </Grid>
  );
};

export default GlobalService;
