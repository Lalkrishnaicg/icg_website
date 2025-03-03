import { Box } from "@mui/material";
import React from "react";

const IrishPage = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          zIndex: 9999,
          height: 16,
          // display: 'flex',
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: 4,
            backgroundColor: "#E00815",
          }}
        />
        <Box
          sx={{
            height: 4,
            backgroundColor: "#1C375B",
          }}
        />
        <Box
          sx={{
            height: 4,
            backgroundColor: "#FFFFFF",
          }}
        />
        <Box
          sx={{
            height: 4,
            backgroundColor: "#6F8197",
          }}
        />
      </Box>
    </>
  );
};

export default IrishPage;
