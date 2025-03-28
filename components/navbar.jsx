"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Box
      position="fixed"
      sx={{
        top: { md: 40, xs: 24 },
        left: { md: 50, xs: 10 },
        bgcolor: "rgba(255, 255, 255, 0.9)", // Adjust the last value for transparency
        backdropFilter: "blur(1px)",
        borderRadius: { md: "20px", xs: "15px" },
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
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
              borderRadius: { md: 3, xs: 3 },
              "&:hover": { background: "#ff1a1a" },
            }}
          >
            <IconButton
              color="black"
              onClick={toggleDrawer(true)}
              sx={{
                fontSize: { md: 32, xs: 20 },
                color: "black",
                "&:hover": { backgroundColor: "red" }, // Fix: Direct hover effect
                "&:hover svg": { color: "white" }, // Fix: Target `CloseIcon` correctly
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: { md: 32, xs: 20 },
                  color: "black",
                  "&:hover": { color: "white" },
                }}
              />
            </IconButton>
          </Box>

          {/* Logo */}
          <Link href="/">
            <Box
              sx={{
                backgroundImage: `url("/assets/icg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: { md: "80px", xs: "45px" },
                height: { md: "80px", xs: "50px" },
              }}
            ></Box>
          </Link>
        </Toolbar>
      </motion.div>

      {/* Full-Screen Drawer */}
      <NavbarDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Navbar;
