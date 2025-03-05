"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "../themeClient";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";
// import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIndex, setOpenIndex] = useState(-1);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleSubmenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenIndex(index);
  };

  const handleCloseSubmenu = () => {
    setAnchorEl(null);
    setOpenIndex(-1);
  };

  const pathname = usePathname();

  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar
      position={sticky ? "fixed" : "absolute"}
      sx={{
        backg: sticky ? "background.default" : "transparent",
        boxShadow: sticky ? 1 : 0,
        transition: "all 0.3s",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/icg.png" alt="logo" width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        {/* <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
          {menuData.map((menuItem, index) => (
            <Box key={index}>
              {menuItem.path ? (
                <Button
                  component={Link}
                  href={menuItem.path}
                  sx={{
                    color:
                      pathname === menuItem.path
                        ? "primary.main"
                        : "text.primary",
                    textTransform: "none",
                  }}
                >
                  {menuItem.title}
                </Button>
              ) : (
                <>
                  <Button
                    onClick={(event) => handleSubmenu(event, index)}
                    sx={{ textTransform: "none", color: "text.primary" }}
                  >
                    {menuItem.title}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openIndex === index}
                    onClose={handleCloseSubmenu}
                  >
                    {menuItem.submenu.map((submenuItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        component={Link}
                        href={submenuItem.path}
                        onClick={handleCloseSubmenu}
                      >
                        {submenuItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          ))}
        </Box> */}

        {/* Sign In / Sign Up & Theme Toggler */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            component={Link}
            href="/signin"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Sign In
          </Button>
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Sign Up
          </Button>
          {/* <ThemeToggler /> */}
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setNavbarOpen(true)}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={navbarOpen}
        onClose={() => setNavbarOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuData.map((menuItem, index) => (
            <ListItem key={index} disablePadding>
              {menuItem.path ? (
                <ListItemButton
                  component={Link}
                  href={menuItem.path}
                  onClick={() => setNavbarOpen(false)}
                >
                  <ListItemText primary={menuItem.title} />
                </ListItemButton>
              ) : (
                <>
                  <ListItemButton
                    onClick={(event) => handleSubmenu(event, index)}
                  >
                    <ListItemText primary={menuItem.title} />
                  </ListItemButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openIndex === index}
                    onClose={handleCloseSubmenu}
                  >
                    {menuItem.submenu.map((submenuItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        component={Link}
                        href={submenuItem.path}
                        onClick={handleCloseSubmenu}
                      >
                        {submenuItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
