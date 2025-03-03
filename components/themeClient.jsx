"use client";
import React, { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import createCustomTheme from "./theme";

// Create a Theme Context
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProviderClient({ children }) {
  // Get initial theme from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("themeMode") || "light";
    }
    return "light";
  });

  // Memoize theme
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  // Toggle theme function
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", newMode); // Save theme mode
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook to access theme context
export function useThemeMode() {
  return useContext(ThemeContext);
}
