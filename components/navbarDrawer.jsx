"use client";
import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const NavbarDrawer = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
        },
      }}
    >
      <Grid container sx={{ height: "100%", width: "100%" }}>
        {/* Left Section - 4/12 (md), 3/12 (lg) */}
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "2px dotted #000",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
              <CloseIcon sx={{ fontSize: 30, color: "#0606f9" }} />
            </IconButton>
            <List>
              {["Home", "About", "Services", "Contact"].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ListItem button onClick={toggleDrawer(false)}>
                    <ListItemText
                      primary={text}
                      sx={{
                        textAlign: "center",
                        "& .MuiTypography-root": { fontSize: "1.5rem" },
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Right Section - 8/12 (md), 9/12 (lg) */}
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <h2>Content Goes Here</h2>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default NavbarDrawer;
