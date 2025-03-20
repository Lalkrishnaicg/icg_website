"use client";

import { Box, Button, Grid2, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import SendIcon from "@mui/icons-material/Send";

const FooterDetails = () => {
  return (
    <Grid2 sx={{ backgroundColor: "#dde4f0", mt: 15, height: 800 }}>
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "center",
          //    mx: 10,
          mt: 4,
        }}
      >
        <Box
          sx={{
            border: "1px dotted",
            height: 400,
            width: 1300,
            display: "flex",
            textAlign: "center",
            borderRadius: 6,
            bgcolor: "white",
            color: "black",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontStyle: "italic",
          }}
        >
          <Typography sx={{ fontSize: 50, fontWeight: 500 }}>
            Let ICG mind your bussiness
          </Typography>
          <Button
            id="btn"
            variant="contained"
            sx={{
              mt: 2,
              opacity: 1,
              padding: "10px 20px",
              textTransform: "uppercase",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "500",
              bgcolor: "#082f54",
              color: "white",
              cursor: "pointer",
              border: "1px solid #ffffff80",
              transition: "0.5s ease",
              userSelect: "none",
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
                transform: "rotate(-90deg)",
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
      </Grid2>
      <Grid2
        sx={{
          mt: 2,
        }}
      >
        <Box
          sx={{
            height: 400,
            width: "100%",
            bgcolor: "white",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              //  justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 6,
              width: "90%",
            }}
          >
            <Box
              sx={{
                color: "black",
                fontSize: 28,
                textAlign: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 28,
                      textAlign: "center",
                      width: 600,
                    }}
                  >
                    {" "}
                    Maze Of Obstacles,
                    <br /> Solutions Galore
                  </Typography>
                  <>
                    <Box sx={{ color: "black", textAlign: "center" }}>
                      <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                        Updates
                      </Typography>
                      <Box sx={{ marginTop: 2, fontSize: 20 }}>
                        <ul>Blog</ul>
                        <ul>Vlogs</ul>
                        <ul>Events</ul>
                        <ul>News & PR</ul>
                      </Box>
                    </Box>

                    <Box sx={{ color: "black", textAlign: "center" }}>
                      <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                        Irish Life
                      </Typography>
                      <Box sx={{ marginTop: 2, fontSize: 20 }}>
                        <ul>Life@Iish</ul>
                        <ul>Careers@Irish</ul>
                        <ul>Local Locations</ul>
                      </Box>
                    </Box>
                  </>
                </Box>
                <Typography
                  sx={{ color: "black", fontSize: 14, textAlign: "center" }}
                >
                  Navigates the maze of obstacles with expert business
                  solutions. Our team delivers results-driven strategies,
                  proactive risk mitigation, and innovative guidance to drive
                  your success. We prioritize collaboration, innovation, and
                  integrity, ensuring excellence and transparency in everything
                  we do.
                </Typography>
                <Box sx={{ marginTop: 7, fontSize: 20, textAlign: "start" }}>
                  <Typography>Lets Go Social</Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "start", gap: 2 }}
                  >
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
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};
export default FooterDetails;
