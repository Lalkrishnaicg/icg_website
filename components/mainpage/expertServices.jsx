"use client";
import { Box, Grid, IconButton, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/assets/image_9.jpg",
    testimonial: "Great service, highly recommend!",
    detailedInfo: "John had a wonderful experience with our service.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/assets/image_8.jpg",
    testimonial: "Excellent support and fast response.",
    detailedInfo: "Jane loved the quick response and support.",
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "/assets/image_10.jpg",
    testimonial: "Best experience ever!",
    detailedInfo: "Michael enjoyed our premium services.",
  },
  {
    id: 4,
    name: "Emily White",
    avatar: "/assets/image_11.jpg",
    testimonial: "Very satisfied with the quality.",
    detailedInfo: "Emily found our service top-notch.",
  },
  {
    id: 5,
    name: "Robert Green",
    avatar: "/assets/image_12.jpg",
    testimonial: "Affordable and high-quality!",
    detailedInfo: "Robert loved the balance of cost and quality.",
  },
];

const InfiniteCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate to enable smooth looping

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const moveLeft = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const moveRight = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          textAlign: "start",
          pl: 20,
          pt: 20,
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 1 }} // Start position
          animate={{ y: 0, opacity: 1, scale: 1.2 }} // End position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <Typography sx={{ fontSize: "2.1rem", color: "#000908" }}>
            what customers say
          </Typography>
        </motion.div>
      </Box>
      <Grid
        container
        sx={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          margin: "auto",
          width: "75%",
          maxWidth: 1200,
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={moveLeft}
          sx={{ position: "absolute", left: -60, color: "black", zIndex: 10 }}
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
            height: 350,
          }}
        >
          <motion.div
            key={selectedIndex}
            animate={{ x: `-${selectedIndex * 280}px` }} // Move each card by 280px (card width + gap)
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{
              display: "flex",
              gap: "28px",
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => {
              const actualIndex = index % testimonials.length;
              const isCenter = actualIndex === selectedIndex;

              return (
                <motion.div
                  key={index}
                  onClick={() => setSelectedIndex(actualIndex)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    scale: isCenter ? 1.2 : 1,
                    opacity: isCenter ? 1 : 0.8,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    width: "330px",
                  }}
                >
                  <Box
                    sx={{
                      width: "300px",
                      height: "280px",
                      //  backgroundColor: "#f5f5f5",
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                      boxShadow: isCenter
                        ? "0px 3px 6px rgba(0,0,0,0.5)"
                        : "0px 2px 4px rgba(0,0,0,0.4)",
                      textAlign: "center",
                      padding: "20px",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      src={testimonial.avatar}
                      sx={{
                        width: 100,
                        height: 100,
                        mb: 2,
                        border: "3px solid #007bff",
                      }}
                    />

                    {/* Name */}
                    <Typography variant="h6" fontWeight="bold">
                      {testimonial.name}
                    </Typography>

                    {/* Testimonial Text */}
                    <Typography variant="body2" color="gray">
                      {testimonial.testimonial}
                    </Typography>

                    {/* Hover Content */}
                    {hoveredIndex === index && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          backgroundColor: "black",
                          color: "white",
                          width: "100px",
                          padding: "3px",
                          borderBottomLeftRadius: "8px",
                          borderBottomRightRadius: "8px",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="body2">
                          {testimonial.detailedInfo}
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
          sx={{ position: "absolute", right: -60, color: "black", zIndex: 10 }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Grid>
    </>
  );
};

export default InfiniteCarousel;
