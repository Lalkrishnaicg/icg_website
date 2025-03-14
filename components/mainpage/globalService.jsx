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
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -900]);

  // Service Data with Icons
  const services = [
    {
      name: "I-start",
      icon: <MonetizationOnIcon sx={{ fontSize: 50, color: "#4CAF50" }} />, // Green for financial growth
    },
    {
      name: "I-Legal",
      icon: <GavelIcon sx={{ fontSize: 50, color: "#2196F3" }} />, // Blue for law and trust
    },
    {
      name: "I-Protect",
      icon: <WorkIcon sx={{ fontSize: 50, color: "#FF5722" }} />, // Orange for security and protection
    },
    {
      name: "I-Talent",
      icon: <WorkIcon sx={{ fontSize: 50, color: "#9C27B0" }} />, // Purple for creativity and talent
    },
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
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            style={{ y: translateY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Box
              sx={{
                border: "2px solid #ccc",
                height: "250px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                gap: 2,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              {service.icon}
              <Typography variant="h4" fontWeight="bold">
                {service.name}
              </Typography>
              <ul
                style={{
                  textAlign: "left",
                  padding: 0,
                  margin: 0,
                  fontSize: 14,
                }}
              >
                <li>Service detail 1</li>
                <li>Service detail 2</li>
                <li>Service detail 3</li>
                <li>Service detail 4</li>
              </ul>
            </Box>
          </motion.div>
        ))}
      </Grid>
    </Grid>
  );
};

export default GlobalService;
