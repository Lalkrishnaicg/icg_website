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
      component={motion.div}
      animate={{ x: open ? -200 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      position="fixed"
      sx={{
        top: { md: 40, xs: 24 },
        left: { md: 60, xs: 10 },
        bgcolor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(10px)",
        borderRadius: { md: "20px", xs: "15px" },
        boxShadow:
          "0px 1px 2px 0px rgba(0,0,0,0.12),0px 2px 6px 0px rgba(0,0,0,0.08)",
      }}
    >
      <motion.div>
        <Toolbar
          sx={{
            width: "100%",
            gap: 1,
            pl: 0,
            pr: 0,
            minHeight: { xs: "auto" },
            padding: "14px !important",
          }}
        >
          {" "}
          <Box
            sx={{
              bgcolor: "#dde4f0",
              display: "flex",
              justifyContent: "center",
              borderRadius: { md: 3, xs: 3 },
              "&:hover": { background: "#202952" },
            }}
          >
            <IconButton
              color="black"
              onClick={toggleDrawer(true)}
              sx={{
                color: "black",
                borderRadius: { md: 3, xs: 3 },
                "&:hover": {
                  backgroundColor: "#202952",
                  boxShadow: "none",
                  borderRadius: 75,
                },
                "&:hover svg": { color: "white" },
                boxShadow: "none",
                "& .MuiTouchRipple-root": {
                  display: "none",
                },
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
          <Link href="/">
            <Box
              sx={{
                backgroundImage: `url("/assets/icg_logo.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: { md: "60px", xs: "45px" },
                height: { md: "35px", xs: "50px" },
              }}
            ></Box>
          </Link>
        </Toolbar>
      </motion.div>

      <NavbarDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Navbar;
