"use client";
import { createTheme } from "@mui/material/styles";
import { K2D } from "next/font/google";

// Load the K2D font from Google Fonts
const k2dFont = K2D({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Function to create a theme dynamically
export const createCustomTheme = (mode) =>
  createTheme({
    typography: {
      fontFamily: k2dFont.style.fontFamily || "K2D, sans-serif",
    },
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#faf6f62b" : "#faf6f62b",
        contrastText: mode === "dark" ? "#faf6f62b" : "#faf6f62b",
      },
      secondary: {
        main: "#faf6f62b",
      },
      // background: {
      //   default: mode === "dark" ? "#121212" : "#f5f5f5",
      //   paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      // },
      text: {
        //  primary: mode === "dark" ? "#ffffff" : "#000000",
        primary: "#1B1B1B", // Set this to your desired text color
        secondary: "#666666",
      },
    },
  });

export default createCustomTheme;
