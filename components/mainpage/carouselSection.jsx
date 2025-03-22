"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/image_1.png", caption: "Caption 1" },
  { src: "/assets/image_2.png", caption: "Caption 2" },
  { src: "/assets/image_3.png", caption: "Caption 3" },
  { src: "/assets/image_4.png", caption: "Caption 4" },
  { src: "/assets/image_13.jpg", caption: "Caption 5" },
];

const CarouselSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const moveRight = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        pt: 5,
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          mb: 3,
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography sx={{ fontSize: "2rem", color: "#000908" }}>
            Top Notes
          </Typography>
        </motion.div>
      </Box>

      {/* Carousel Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          height: 400,
        }}
      >
        <motion.div
          animate={{ x: `-${selectedIndex * 320}px` }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          style={{
            display: "flex",
            gap: "20px",
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...images, ...images].map((item, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                animate={{ scale: isOdd ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ width: "320px", textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: isOdd ? "310px" : "290px",
                    height: isOdd ? "260px" : "240px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Typography sx={{ mt: 1, fontSize: "1rem", color: "#333" }}>
                  {item.caption}
                </Typography>
              </motion.div>
            );
          })}
        </motion.div>
      </Box>
    </Box>
  );
};

export default CarouselSection;
