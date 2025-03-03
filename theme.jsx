"use client";
import { createTheme } from "@mui/material/styles";
import { Barlow, K2D } from "next/font/google";

// Load the Barlow font from Google Fonts
const k2dFont = K2D({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: k2dFont.style.fontFamily || "K2D, sans-serif",
  },
});

export default theme;
