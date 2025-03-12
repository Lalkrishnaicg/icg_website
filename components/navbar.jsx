"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <Box
      position="fixed"
      sx={{
        //   padding: "3px",
        // width: 150,
        bgcolor: "transparent",
        // bgcolor: "rgba(255, 255, 255, 0.9)", // Transparent background
        backdropFilter: "blur(10px)", // Glass effect
        WebkitBackdropFilter: "blur(10px)", // Safari support
        borderRadius: "20px", // Optional rounded corners
        // padding: "10px 20px", // Add some padding
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)", // Soft shadow
        //  backgroundColor: " #ff0000",
        // color: "white",
      }}
    >
      <Toolbar sx={{ display: "flex", gap: 0 }}>
        {/* Left Side - Logo / Title */}

        {/* Right Side - Menu Button */}
        <Box
          sx={{
            bgcolor: "#dde4f0",
            justifyContent: "center",
            display: "flex",
            justifyItems: "center",
            width: 50,
            borderRadius: 3,
            "&:hover": {
              background: "#ff1a1a",
            },
          }}
        >
          {" "}
          <IconButton color="black" onClick={toggleDrawer(true)}>
            <MenuIcon
              sx={{ fontSize: 32, color: "black" }}
              style={
                {
                  // color: "#0606f9",
                  // "&:hover": {
                  //   backgroundColor: "#fff",
                  // },
                }
              }
            />
          </IconButton>
        </Box>

        {/* <Box
          sx={{
            backgroundImage: `url("/assets/icg.png")`, // Correct way to reference an image
            backgroundSize: "cover", // Ensures the image covers the box
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents repetition
            width: "150px", // Adjust width
            height: "50px", // Adjust height as needed
          }}
        ></Box> */}
        {/* <Typography variant="h6" sx={{ fontWeight: "bold", letterSpacing: 1 }}>
          ICG
        </Typography> */}
        <Box
          sx={{
            backgroundImage: `url("/assets/icg.png")`, // Correct way to reference an image
            backgroundSize: "cover", // Ensures the image covers the box
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents repetition
            width: "80px",
            height: "80px",
          }}
        ></Box>
      </Toolbar>

      {/* Full-Screen Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw", // Full screen width
            height: "100vh", // Full screen height
            backgroundColor: "white",
            color: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <IconButton
            onClick={toggleDrawer(false)}
            style={{ color: "#0606f9" }}
          >
            <CloseIcon style={{ fontSize: 30, color: "#0606f9" }} />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List sx={{ textAlign: "center" }}>
          {["Home", "About", "Services", "Contact"].map((text, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText
                primary={text}
                sx={{ textAlign: "center", fontSize: "1.5rem" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
