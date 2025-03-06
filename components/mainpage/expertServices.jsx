"use client";
import { Box, Grid, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const services = [
  { id: 1, title: "Service 1", image: "/assets/image_1.png" },
  { id: 2, title: "Service 2", image: "/assets/image_2.png" },
  { id: 3, title: "Service 3", image: "/assets/image_3.png" },
  { id: 4, title: "Service 4", image: "/assets/image_4.png" },
  { id: 5, title: "Service 5", image: "/assets/image_5.png" },
];

const ExpertServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(2); // Center item

  const moveLeft = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const moveRight = () => {
    setSelectedIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <Grid
      container
      sx={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //  backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      {/* Left Arrow */}
      <IconButton
        onClick={moveLeft}
        sx={{
          position: "absolute",
          left: 10,
          color: "black",
          zIndex: 10,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Carousel Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <AnimatePresence>
          {services.map((service, index) => {
            const offset = index - selectedIndex;
            return (
              <motion.div
                key={service.id}
                onClick={() => setSelectedIndex(index)}
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{
                  opacity: offset === 0 ? 1 : 0.9,
                  scale: offset === 0 ? 1.2 : 0.9,
                  x: offset * 100, // Move items left & right smoothly
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Service Box */}
                <Box
                  sx={{
                    width: offset === 0 ? "240px" : "200px",
                    height: offset === 0 ? "300px" : "280px",
                    backgroundColor: "#1565c0",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    boxShadow:
                      offset === 0
                        ? "0px 10px 20px rgba(0,0,0,0.5)"
                        : "0px 2px 5px rgba(0,0,0,0.2)",
                    textAlign: "center",
                    fontWeight: "bold",
                    position: "relative",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <Box sx={{ padding: "10px" }}>{service.title}</Box>
                </Box>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={moveRight}
        sx={{
          position: "absolute",
          right: 20,
          color: "black",
          zIndex: 10,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Grid>
  );
};

export default ExpertServices;
