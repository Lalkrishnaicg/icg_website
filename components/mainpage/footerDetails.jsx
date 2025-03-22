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
    <Grid container sx={{ backgroundColor: "#dde4f0", mt: 15, py: 5 }}>
      {/* Contact Box Section */}
      <Grid
        item
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            border: "1px dotted",
            height: 400,
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
              "&:hover": { background: "#008cff", border: "1px solid #008cff" },
            }}
            endIcon={<SendIcon />}
          >
            Get In Touch
          </Button>
        </Box>
      </Grid>

      {/* Footer Navigation Section */}
      <Grid item xs={12} md={12} sx={{ py: 3, bgcolor: "white" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            {/* Left Text */}
            <Typography
              sx={{
                fontSize: 28,
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
            <Box sx={{ textAlign: "right", width: { xs: "100%", md: "33%" } }}>
              <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>
                We Assist You
              </Typography>
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
                  "&:hover": {
                    background: "#008cff",
                    border: "1px solid #008cff",
                  },
                }}
                endIcon={<SendIcon />}
              >
                Watch the video
              </Button>
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
                }}
              >
                Irish <br /> Consulting <br /> Group
              </Typography>
            </Box>

            {/* Middle: Business Solutions Text */}
            <Box sx={{ textAlign: "start", flex: 1 }}>
              <Typography sx={{ fontSize: 14 }}>
                Navigate the maze of obstacles with expert business solutions.
                Our team delivers results-driven strategies, proactive risk
                mitigation, and innovative guidance to drive your success. We
                prioritize collaboration, innovation, and integrity, ensuring
                excellence and transparency in everything we do.
              </Typography>
            </Box>

            {/* Right: Social Media Icons */}
            <Box sx={{ fontSize: 20, textAlign: "right" }}>
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
