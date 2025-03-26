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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Import arrow icon
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Back icon for subcategory drawer
import { useMediaQuery, useTheme } from "@mui/material";

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
        // sub_categories: ["Business Strategy", "IT Consulting", "HR Solutions"],
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
        // sub_categories: ["Board of Directors", "Advisors", "Staff"],
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
  {
    main_heading: "ICG",
    sub_headings: [
      {
        title: "blogs",
      },
    ],
  },
];

const NavbarDrawer = ({ open, toggleDrawer }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);

  const handleOpenSubDrawer = (service) => {
    // setSelectedService(service);
    setSubDrawerOpen(true);
  };

  console.log("its-->", subDrawerOpen);
  const handleCloseSubDrawer = () => {
    setSubDrawerOpen(false);
  };
  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
    // Use Next.js Router, React Router, or a function to navigate
    // Example:
    // navigate(`/services/${page}`);
  };
  console.log("title-->", selectedService);
  return (
    <>
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
            flexDirection: "column",
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
            backgroundColor: "#f5f5f5",
            zIndex: 1000,
          }}
        >
          {/* ICG Logo */}
          <motion.div
            //    animate={{ x: open ? 40 : 0 }} // Moves left when the drawer opens
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
                  width: { md: "90px", xs: "80px" },
                  height: { md: "90px", xs: "70px" },
                  pr: { md: 20, xs: 0 },
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
              "&:hover": { backgroundColor: "red" }, // Fix: Direct hover effect
              "&:hover svg": { color: "white" }, // Fix: Target `CloseIcon` correctly
            }}
          >
            <CloseIcon
              sx={{
                fontSize: 40,
                color: "#1B1B1B", // Default color
              }}
            />
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
                    <Typography
                      //  variant="h5"
                      sx={{
                        p: 1,
                        borderBottom: "2px solid #ddd",
                        fontSize: 24,
                      }}
                    >
                      {category.main_heading}
                    </Typography>

                    {category.sub_headings.map((service) => {
                      const hasSubCategories =
                        service.sub_categories?.length > 0;

                      return hasSubCategories ? (
                        <ListItem
                          key={service.title}
                          button
                          onClick={() => {
                            setSelectedService(service.title);
                            setSelectedSubCategories(service.sub_categories);
                            handleOpenSubDrawer();
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
                              "& .arrow-icon": {
                                opacity: 1,
                                color: "black",
                              },
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: "1.3rem", pl: 2 }}>
                                {service.title}
                              </Typography>
                            }
                          />
                          <ArrowForwardIosIcon
                            className="arrow-icon"
                            sx={{
                              fontSize: 22,
                              color: "#008cff",
                              opacity: 0,
                              transition:
                                "opacity 0.1s ease-in-out, color 0.1s ease-in-out",
                            }}
                          />
                        </ListItem>
                      ) : (
                        // Wrap ListItem with Link if there are no subcategories
                        <Link
                          key={service.title}
                          href={`/icg/${service.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          passHref
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <ListItem
                            button
                            onClick={() => handleNavigation(service.title)}
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
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
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
                        </Link>
                      );
                    })}
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
              sx={{
                display: { md: "flex", xs: "none" },
                flexDirection: "column",
                p: 3,
              }}
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
                          <Link
                            key={subCategory}
                            href={`/${selectedService}/${subCategory
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            passHref
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <ListItem
                              key={index}
                              sx={{
                                pl: 2, // Default padding
                                //    transition: "all 0.3s ease-in-out", // Smooth transition effect
                                "&:hover, &:focus": {
                                  bgcolor: "#cfe8fc",
                                  border: "1px solid #008cff",
                                  textShadow: "0 0 10px #ffffff",
                                  boxShadow:
                                    "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff",
                                  pl: 4, // Increased padding on hover
                                  pr: 4, // Optional: Add right padding as well
                                  width: 300,
                                  "& .arrow-icon": {
                                    opacity: 1, // Show on hover
                                    color: "black",
                                  },
                                },
                              }}
                              // button
                              // onClick={() => handleNavigation(subCategory)}
                            >
                              <ListItemText
                                primary={
                                  <Typography sx={{ fontSize: "1.1rem" }}>
                                    {subCategory}
                                  </Typography>
                                }
                              />
                              <ListItemIcon
                                sx={{ minWidth: "auto", color: "black" }}
                              >
                                <ChevronRightIcon />
                              </ListItemIcon>
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
            {/* for mobile section subcategories drawer */}
            {/* Subcategory Drawer */}
          </Grid>
        </Grid>
      </Drawer>
      {isXs && (
        <Drawer
          anchor="right"
          open={subDrawerOpen}
          onClose={handleCloseSubDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              color: "black",
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleCloseSubDrawer} sx={{ color: "black" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: "black" }}>
              {selectedService}
            </Typography>
            <IconButton onClick={handleCloseSubDrawer} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List
            sx={{
              border: "1px solid",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedSubCategories.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Sub-Categories:
                </Typography>
                <List>
                  {selectedSubCategories.map((subCategory, index) => (
                    <Link
                      key={subCategory}
                      href={`/${selectedService}/${subCategory
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      passHref
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItem
                        key={index}
                        sx={{
                          pl: 2, // Default padding
                          //    transition: "all 0.3s ease-in-out", // Smooth transition effect
                          "&:hover, &:focus": {
                            bgcolor: "#cfe8fc",
                            border: "1px solid #008cff",
                            textShadow: "0 0 10px #ffffff",
                            boxShadow:
                              "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff",
                            pl: 4, // Increased padding on hover
                            pr: 4, // Optional: Add right padding as well
                            width: 300,
                            "& .arrow-icon": {
                              opacity: 1, // Show on hover
                              color: "black",
                            },
                          },
                        }}
                        // button
                        // onClick={() => handleNavigation(subCategory)}
                      >
                        <ListItemText
                          primary={
                            <Typography sx={{ fontSize: "1.1rem" }}>
                              {subCategory}
                            </Typography>
                          }
                        />
                        <ListItemIcon sx={{ minWidth: "auto", color: "black" }}>
                          <ChevronRightIcon />
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </>
            )}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default NavbarDrawer;
