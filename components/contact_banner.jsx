"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const menuItems = [
    {
      text: "Enquire",
      icon: (
        <InfoIcon sx={{ fontSize: { lg: "34px", md: "28px", xs: "18px" } }} />
      ),
    },
    {
      text: "WhatsApp",
      icon: (
        <WhatsAppIcon
          sx={{ fontSize: { lg: "34px", md: "28px", xs: "18px" } }}
        />
      ),
    },
    {
      text: "Talk",
      icon: (
        <PhoneIcon sx={{ fontSize: { lg: "34px", md: "28px", xs: "18px" } }} />
      ),
    },
    {
      text: "Mail",
      icon: (
        <MailOutlineIcon
          sx={{ fontSize: { lg: "34px", md: "28px", xs: "18px" } }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: { md: 60, xs: 50 }, // Adjust height for smaller screens
        backgroundColor: "#222953",
        color: "white",
        zIndex: 10,
        py: { md: 2, xs: 1 }, // Reduce padding for xs
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { md: 4, xs: 1, lg: 8 }, // Reduce gap for xs
          height: "100%",
        }}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Button
              sx={{
                color: "white",
                px: { md: 2, xs: 1 }, // Reduce padding for xs
                minWidth: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 1, xs: 0.5 }, // Adjust icon-text spacing for xs
                }}
              >
                {item.icon}
                <Typography
                  sx={{
                    fontSize: { lg: "34px", md: "30px", xs: "12px" }, // Reduce text size for xs
                    fontWeight: "bold",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Button>

            {/* Vertical Divider (Hide on xs) */}
            {index !== menuItems.length - 1 && (
              <Box
                sx={{
                  width: "2px",
                  height: "60%", // Reduce height for xs
                  backgroundColor: "white",
                  display: { xs: "none", md: "block" }, // Hide on xs
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ContactBanner;
