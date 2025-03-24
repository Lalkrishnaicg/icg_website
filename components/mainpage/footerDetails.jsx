"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaReddit,
  FaTumblr,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import SendIcon from "@mui/icons-material/Send";

const FooterDetails = () => {
  return (
    <Grid container sx={{ mt: 10, py: 4 }}>
      {/* Contact Box Section */}
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 400,
          backgroundColor: "#dde4f0",
          py: 5,
        }}
      >
        <Box
          sx={{
            border: "1px dotted",
            width: "90%",
            display: "flex",
            textAlign: "center",
            borderRadius: 6,
            bgcolor: "white",
            color: "black",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontStyle: "italic",
            backgroundImage: `url("/assets/contact_us_bg.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography sx={{ fontSize: 50, fontWeight: 500, mb: 2 }}>
            Let ICG mind your business
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              padding: "12px 24px",
              minWidth: "200px",
              textTransform: "uppercase",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "500",
              bgcolor: "#082f54",
              color: "white",
              border: "1px solid #ffffff80",
              transition: "0.5s ease",
              "&:hover, &:focus": {
                color: "#ffffff",
                background: "#008cff",
                border: "1px solid #008cff",
                textShadow:
                  "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",

                boxShadow:
                  "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
              },
              "&:hover .icon": {
                transform: "rotate(-90deg)", // Rotates the icon upwards
              },
            }}
            endIcon={
              <SendIcon
                className="icon"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            }
          >
            Get In Touch
          </Button>
        </Box>
      </Grid>

      {/* Footer Navigation Section */}
      <Grid item xs={12} md={12} sx={{ py: 7, bgcolor: "white" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: { md: "90%", xs: "100%" },
              justifyContent: "space-between",
            }}
          >
            {/* Left Text */}
            <Typography
              sx={{
                fontSize: 36,
                textAlign: "left",
                width: { xs: "100%", md: "33%" },
                mb: { xs: 2, md: 0 },
              }}
            >
              Maze Of Obstacles, <br /> Solutions Galore
            </Typography>

            {/* Center Navigation */}
            <Box
              sx={{
                textAlign: "center",
                width: { xs: "100%", md: "33%" },
                mb: { xs: 2, md: 0 },
              }}
            >
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Blog</li>
                <li>Vlogs</li>
                <li>Events</li>
                <li>News & PR</li>
              </ul>
            </Box>

            {/* Right Assistance Section */}
            <Box sx={{ textAlign: "start", width: { xs: "100%", md: "33%" } }}>
              <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>
                We Assist You
              </Typography>
              <Typography sx={{}}>
                We appreciate the chance to engage with you. Feel free to share
                your inquiries and feedback—our dedicated professionals are here
                to assist you.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 150,
                    height: 40,
                    textTransform: "uppercase",
                    borderRadius: "16px",
                    fontSize: "12px",
                    fontWeight: "500",
                    bgcolor: "#082f54",
                    color: "white",
                    "&:hover, &:focus": {
                      color: "#ffffff",
                      background: "#008cff",
                      border: "1px solid #008cff",
                      textShadow:
                        "0 0 30px #ffffff, 0 0 100px #ffffff, 0 0 1px #ffffff",

                      boxShadow:
                        "0 0 1px #008cff, 0 0 0px #008cff, 0 0 2px #008cff, 0 0 0px #008cff",
                    },
                    "&:hover .icon": {
                      transform: "rotate(-90deg)", // Rotates the icon upwards
                    },
                  }}
                  endIcon={
                    <SendIcon
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  }
                >
                  Connect Us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Footer Main Content */}
      <Grid item xs={12} md={12} sx={{ py: 3, bgcolor: "white" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "90%",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Left: ICG Logo & Name */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flex: "0 0 auto",
              }}
            >
              <Box
                component="img"
                src="/assets/icg.png"
                alt="ICG Logo"
                sx={{
                  width: 100,
                  height: 120,
                  objectFit: "contain",
                  borderRadius: 6,
                }}
              />
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: "left",
                  letterSpacing: 2,
                  lineHeight: 0.9, // Adjust this value to control the line height
                }}
              >
                Irish <br /> Consulting <br /> Group
              </Typography>
            </Box>

            {/* Middle: Business Solutions Text */}
            <Box
              sx={{
                textAlign: "start",
                flex: 1,
                mt: 2,
                lineHeight: 0.7, // Adjust this value to control the line height
                p: 3,
              }}
            >
              <Typography sx={{ fontSize: 12 }}>
                Navigate the maze of obstacles with expert business solutions.
                Our team delivers results-driven strategies, proactive risk
                mitigation, and innovative guidance to drive your success. We
                prioritize collaboration, innovation, and integrity, ensuring
                excellence and transparency in everything we do.
              </Typography>
            </Box>

            {/* Right: Social Media Icons */}
            <Box sx={{ fontSize: 20, textAlign: "right", mt: 4 }}>
              <Typography sx={{ fontWeight: 600 }}>Let's Go Social</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <FaFacebookF />
                <PiInstagramLogoFill />
                <FaLinkedinIn />
                <BsTwitterX />
                <FaYoutube />
                <FaPinterest />
                <FaReddit />
                <FaTumblr />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FooterDetails;
