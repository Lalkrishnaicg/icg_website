"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import NavbarDrawer from "./navbarDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <Box
      position="fixed"
      sx={{
        bgcolor: "transparent",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Animated Toolbar */}
      <motion.div
        animate={{ x: open ? -200 : 0 }} // Moves left when the drawer opens
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Toolbar sx={{ display: "flex", gap: 0 }}>
          {/* Menu Button */}
          <Box
            sx={{
              bgcolor: "#dde4f0",
              display: "flex",
              justifyContent: "center",
              width: 50,
              borderRadius: 3,
              "&:hover": { background: "#ff1a1a" },
            }}
          >
            <IconButton color="black" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: "black" }} />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              backgroundImage: `url("/assets/icg.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "80px",
              height: "80px",
            }}
          ></Box>
        </Toolbar>
      </motion.div>

      {/* Full-Screen Drawer */}
      <NavbarDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Navbar;
