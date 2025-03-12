import { Box } from "@mui/material";
import React from "react";

const TopHeader = () => {
  return (
    <Box
      sx={{
        // p: 1,
        height: 30,
        color: "black",
        bgcolor: "#dde4f0",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.03)", // Very subtle shadow
      }}
    >
      🎉 Your best consulting service
    </Box>
  );
};

export default TopHeader;
