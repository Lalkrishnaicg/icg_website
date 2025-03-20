"use client";
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    main_heading: "Our Services",
    sub_headings: [
      {
        title: "Finance",
        sub_categories: [
          "Investment Banking",
          "Wealth Management",
          "Tax Advisory",
        ],
      },
      {
        title: "Consulting",
        sub_categories: ["Business Strategy", "IT Consulting", "HR Solutions"],
      },
      {
        title: "Law",
        sub_categories: [
          "Corporate Law",
          "Intellectual Property",
          "Litigation",
        ],
      },
    ],
  },
  {
    main_heading: "Our Company",
    sub_headings: [
      {
        title: "About",
        sub_categories: ["Mission & Vision", "Our History", "Leadership"],
      },
      {
        title: "People",
        sub_categories: ["Board of Directors", "Advisors", "Staff"],
      },
      {
        title: "Offices",
        sub_categories: ["New York", "London", "Tokyo"],
      },
    ],
  },
  {
    main_heading: "Insights",
    sub_headings: [
      {
        title: "Latest Reports",
        sub_categories: ["Quarterly Review", "Market Trends", "Industry News"],
      },
      {
        title: "Research & Analysis",
        sub_categories: ["Economic Research", "Policy Studies"],
      },
      {
        title: "Case Studies",
        sub_categories: ["Successful Strategies", "Client Stories"],
      },
    ],
  },
];

const NavbarDrawer = ({ open, toggleDrawer }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
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
          flexDirection: "column", // Ensure items stack vertically
          color: "black",
        },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          position: "sticky",
          width: "100%",
          p: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "2px solid #ddd",
          backgroundColor: "#f5f5f5", // Light background for distinction
          zIndex: 1000,
        }}
      >
        {/* ICG Logo */}
        <motion.div
          animate={{ x: open ? 40 : 0 }} // Moves left when the drawer opens
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          {/* <Link href="/"> */}
          <Button onClick={toggleDrawer(false)}>
            <Box
              sx={{
                backgroundImage: `url("/assets/icg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "90px",
                height: "90px",
                pr: 20,
              }}
            />
          </Button>
          {/* </Link> */}
        </motion.div>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: "50%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              border: "1px solid #4C4646",
              backgroundColor: "#f9f9f9",
              color: "black",
            },
          }}
        />

        {/* Close Icon */}
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            bgcolor: "#dde4f0",
            height: 50,
            width: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            right: 20,
          }}
        >
          <CloseIcon sx={{ fontSize: 30, color: "#0606f9" }} />
        </IconButton>
      </Box>

      {/* Main Content Section */}
      <Grid
        container
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Enables scrolling
          height: "calc(100vh - 100px)", // Adjusts height after fixing the top
        }}
      >
        {/* Left Section - Menu */}
        <Grid container>
          {/* Left Sidebar */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              height: "100vh",
              overflowY: "auto",
              p: 2,
              bgcolor: "#f9f9f9",
            }}
          >
            <List>
              {sections.map((category) => (
                <Box
                  key={category.main_heading}
                  sx={{ width: "100%", textAlign: "left" }}
                >
                  {/* Main Heading */}
                  <Typography
                    variant="h5"
                    sx={{ p: 1, borderBottom: "2px solid #ddd" }}
                  >
                    {category.main_heading}
                  </Typography>

                  {/* Sub-items */}
                  {category.sub_headings.map((service) => (
                    <ListItem
                      key={service.title}
                      button
                      onClick={() => {
                        setSelectedService(service.title);
                        setSelectedSubCategories(service.sub_categories || []);
                      }}
                      sx={{
                        py: 1,
                        height: "40px",
                        minHeight: "40px",
                        bgcolor:
                          selectedService === service.title
                            ? "#008cff"
                            : "transparent",
                        borderRadius: 2,
                        px: 3,
                        "&:hover, &:focus": {
                          bgcolor: "#cfe8fc",
                          border: "1px solid #008cff",
                          textShadow: "0 0 10px #ffffff",
                          boxShadow:
                            "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff",
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography sx={{ fontSize: "1.3rem", pl: 2 }}>
                            {service.title}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Grid>

          {/* Right Section - Selected Service Content */}
          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            sx={{ display: "flex", flexDirection: "column", p: 3 }}
          >
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={12} sx={{ border: "1px solid #D3D3D3", p: 2 }}>
                {/* Selected Service */}
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                  {selectedService || "Select a Service"}
                </Typography>
                <Typography variant="body1">
                  {selectedService
                    ? `Detailed information about ${selectedService}.`
                    : "Click on a service to see details."}
                </Typography>

                {/* Sub-items (if available) */}
                {/* Sub-Categories (if available) */}
                {selectedSubCategories.length > 0 && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                      Sub-Categories:
                    </Typography>
                    <List>
                      {selectedSubCategories.map((subCategory, index) => (
                        <ListItem key={index} sx={{ pl: 2 }}>
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: "1.1rem" }}>
                                {subCategory}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default NavbarDrawer;
