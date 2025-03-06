"use client";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const quote = "DREAM BIG WORK HARD. Maze Of Obstacles, Solutions Galore.";

const QuoteIcg = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#211C84",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        // top: 0, // Ensures it's sticky at the top
        zIndex: 10,
      }}
    >
      <Box>
        <Typography
          variant="h2"
          component="div"
          sx={{
            display: "flex",
            gap: 1,
            fontWeight: "bold",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          {quote.split("").map((letter, index) => {
            // Each letter changes color at different scroll progress points
            const letterProgress = useTransform(
              scrollYProgress,
              [index / quote.length, (index + 5) / quote.length], // Spread effect
              ["black", "white"]
            );

            return (
              <motion.span
                key={index}
                drag
                dragConstraints={{ left: 0, right: 0 }} // Restrict drag movement
                style={{
                  color: letterProgress,
                  textShadow: "2px 2px 10px rgba(255,255,255,0.8)", // Initial subtle glow
                  transition: "color 0.3s ease-in-out",
                }}
                whileHover={{ scale: 1.2, filter: "brightness(1.5)" }} // Hover effect
              >
                {letter === " " ? "\u00A0" : letter} {/* Space Handling */}
              </motion.span>
            );
          })}
        </Typography>
      </Box>
    </Grid>
  );
};

export default QuoteIcg;
