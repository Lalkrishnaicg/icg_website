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
        top: 40,
        left: 50,
        bgcolor: "transparent",
        backdropFilter: "blur(1px)",
        borderRadius: "20px",
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
              borderRadius: 3,
              "&:hover": { background: "#ff1a1a" },
            }}
          >
            <IconButton
              color="black"
              onClick={toggleDrawer(true)}
              sx={{
                fontSize: 32,
                color: "black",
                "&:hover": { color: "white" },
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: 32,
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
                width: "80px",
                height: "80px",
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
