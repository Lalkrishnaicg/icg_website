"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const services = [
  {
    id: 1,
    title: "Service 1",
    image: "/assets/image_1.png",
    description: "Detailed info about Service 1",
  },
  {
    id: 2,
    title: "Service 2",
    image: "/assets/image_2.png",
    description: "Detailed info about Service 2",
  },
  {
    id: 3,
    title: "Service 3",
    image: "/assets/image_3.png",
    description: "Detailed info about Service 3",
  },
  {
    id: 4,
    title: "Service 4",
    image: "/assets/image_4.png",
    description: "Detailed info about Service 4",
  },
  {
    id: 5,
    title: "Service 5",
    image: "/assets/image_5.png",
    description: "Detailed info about Service 5",
  },
  {
    id: 6,
    title: "Service 6",
    image: "/assets/image_6.png",
    description: "Detailed info about Service 6",
  },
  {
    id: 7,
    title: "Service 7",
    image: "/assets/image_7.png",
    description: "Detailed info about Service 7",
  },
];

const VISIBLE_ITEMS = 5;

const InfiniteCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(2); // Start at center
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Loop items infinitely by shifting array
  const getVisibleItems = () => {
    const start = selectedIndex - 1;
    return [...services, ...services];
  };

  const moveLeft = () => {
    setSelectedIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setSelectedIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <Grid
      container
      sx={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: "auto",
        width: "90%",
        maxWidth: 1400,
      }}
    >
      {/* Left Arrow */}
      <IconButton
        onClick={moveLeft}
        sx={{ position: "absolute", left: 20, color: "black", zIndex: 10 }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Carousel Wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          height: 400,
        }}
      >
        <motion.div
          key={selectedIndex}
          animate={{ x: `-${(selectedIndex % services.length) * 180}px` }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          style={{ display: "flex", gap: "50px", position: "relative" }}
        >
          {getVisibleItems().map((service, index) => {
            const isCenter = index === 2;

            return (
              <motion.div
                key={service.id}
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex + index - 2) % services.length
                  )
                }
                onMouseEnter={() => setHoveredIndex(service.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isCenter ? 1.5 : 1,
                  opacity: isCenter ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <Box
                  sx={{
                    width: "250px",
                    height: "320px",
                    backgroundColor: "#dde4f0",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    boxShadow: isCenter
                      ? "0px 10px 20px rgba(0,0,0,0.5)"
                      : "0px 5px 10px rgba(0,0,0,0.5)",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "90%",
                      objectFit: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <Box sx={{ padding: "10px" }}>{service.title}</Box>

                  {/* Hover Content */}
                  {hoveredIndex === service.id && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        backgroundColor: "black",
                        color: "red",
                        width: "100%",
                        padding: "10px",
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                        textAlign: "center",
                        height: 150,
                      }}
                    >
                      <Typography variant="body2">
                        {service.description}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </motion.div>
            );
          })}
        </motion.div>
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={moveRight}
        sx={{ position: "absolute", right: 20, color: "black", zIndex: 10 }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Grid>
  );
};

export default InfiniteCarousel;
