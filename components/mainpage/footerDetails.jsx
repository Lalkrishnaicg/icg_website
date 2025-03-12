"use client";

import { Box, Grid2, Typography } from "@mui/material";
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

const FooterDetails = () => {
  return (
    <Grid2 sx={{ backgroundColor: "#dde4f0", mx: 0, mt: 5, height: 700 }}>
      <Box sx={{ backgroundColor: "#dde4f0" }}>
        <Grid2
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            mx: 10,
            pl: 3,
            mt: 4,
          }}
        >
          <Box sx={{ color: "black", fontSize: 28 }}>
            {/* <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
              Irish Expert
            </Typography> */}
            Maze Of Obstacles,
            <br /> Solutions Galore
            <Box sx={{ marginTop: 7, fontSize: 28 }}>
              {" "}
              {/* We provides Studying abroad, Visa <br />
              Services, Immigration, Forex & Ticketing,
              <br /> Global Landing & Post Landing Support. */}
            </Box>
            <Box sx={{ marginTop: 7, fontSize: 20 }}>
              <Typography>Lets Go Social</Typography>
              <Box sx={{ display: "flex" }}>
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
          <Box sx={{ color: "black" }}>
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

          <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
              Irish Life
            </Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Life@Iish</ul>
              <ul>Careers@Irish</ul>
              <ul>Local Locations</ul>
            </Box>
          </Box>

          <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Home</ul>
              <ul>About Us</ul>
              <ul>Study Abroad</ul>
              <ul>Local Locations</ul>
              <ul>Immigration</ul>
              <ul>Visa application</ul>
              <ul>Find course</ul>
            </Box>
          </Box>
          {/* <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
              Irish Subsidiary
            </Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Irish Academe</ul>
              <ul>Irish Shipping</ul>
            </Box>
          </Box> */}
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            mx: 10,
            pl: 3,
            mt: 4,
          }}
        >
          <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
              Irish Life
            </Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Life@Iish</ul>
              <ul>Careers@Irish</ul>
              <ul>Local Locations</ul>
            </Box>
          </Box>

          {/* <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
              Head Office
            </Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Southampton, UK</ul>
              <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
                Global Office
              </Typography>
              <ul>Dubai, UAE</ul>
            </Box>
          </Box> */}
          {/* <Box sx={{ color: "black" }}>
            <Typography sx={{ fontSize: 28, fontWeight: 600 }}></Typography>
            <Box sx={{ marginTop: 2, fontSize: 20 }}>
              <ul>Life@Iish</ul>
              <ul>Careers@Irish</ul>
              <ul>Local Locations</ul>
            </Box>
          </Box> */}
        </Grid2>
      </Box>
    </Grid2>
  );
};
export default FooterDetails;
