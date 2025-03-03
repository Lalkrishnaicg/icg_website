import { Box } from "@mui/material";
import React from "react";
const LoaderPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2200));
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        zIndex: 9999,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#E00815",
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#1C375B",
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#6F8197",
        }}
      />
    </Box>
  );
};

export default LoaderPage;
