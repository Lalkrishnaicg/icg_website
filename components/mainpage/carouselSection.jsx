"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  { src: "/assets/image_1.png", caption: "Caption 1" },
  { src: "/assets/image_2.png", caption: "Caption 2" },
  { src: "/assets/image_3.png", caption: "Caption 3" },
  { src: "/assets/image_4.png", caption: "Caption 4" },
  { src: "/assets/image_13.jpg", caption: "Caption 5" },
  { src: "/assets/image_6.jpg", caption: "Caption 6" },
];

const CarouselSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(1);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 900) {
        setItemsPerRow(4); // Show 4 images for md and larger screens
      } else {
        setItemsPerRow(1); // Show 1 image for smaller screens
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);

    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  // Move to next images
  const moveRight = () => {
    setSelectedIndex((prev) =>
      prev + itemsPerRow < images.length ? prev + itemsPerRow : 0
    );
  };

  // Move to previous images
  const moveLeft = () => {
    setSelectedIndex((prev) =>
      prev - itemsPerRow >= 0 ? prev - itemsPerRow : images.length - itemsPerRow
    );
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
        <Typography sx={{ fontSize: "2rem", color: "#000908" }}>
          Latest Notes
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { md: 2, xs: 0 },
        }}
      >
        {/* Left Button */}
        <IconButton
          onClick={moveLeft}
          sx={{
            position: "absolute",
            left: 10,
            zIndex: 10,
            color: "#fff",
            bgcolor: "#ff1a1a",
            "&:hover": { bgcolor: "#000" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Image Display */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
            gap: "10px",
            width: "100%",
            textAlign: "center",
            px: { md: 0, xs: 3 },
          }}
        >
          {images
            .slice(selectedIndex, selectedIndex + itemsPerRow)
            .map((item, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "260px", md: "200px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                  }}
                >
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                {/* Caption Below */}
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "1rem",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {item.caption}
                </Typography>
              </Box>
            ))}
        </Box>

        {/* Right Button */}
        <IconButton
          onClick={moveRight}
          sx={{
            position: "absolute",
            right: 10,
            zIndex: 10,
            color: "#fff",
            bgcolor: "#ff1a1a",
            "&:hover": { bgcolor: "#000" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarouselSection;
