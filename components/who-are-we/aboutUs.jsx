import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 6, pt: 12 }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side - Text Content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                //  padding: "20px 40px",
                // textAlign: "start",
                // "&::before": {
                //   content: '""',
                //   position: "absolute",
                //   top: "-10px",
                //   left: "-20px",
                //   width: "120%",
                //   height: "120%",
                //   background: "#007BFF",
                //   clipPath:
                //     "polygon(5% 15%, 95% 5%, 100% 50%, 95% 95%, 5% 85%, 0% 50%)",
                //   zIndex: -1,
                //   borderRadius: "20px",
                //   transform: "rotate(-3deg)",
                // },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  //  fontWeight: "semi-bold",
                  //   textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "black",
                  position: "relative",
                }}
              >
                About ICG
              </Typography>
            </Box>
            <Typography sx={{ pt: 2, fontSize: 22 }}>
              <span style={{ fontSize: 26 }}>A</span>t ICG, we’re dedicated to
              building a solid foundation for the future by enhancing business
              reliability, delivering superior customer service, and regaining
              trust. Our commitment to integrity guides every decision we make,
              ensuring compliance with laws, regulations, and ethical standards.
              We rely on our Employee Code of Conduct to align our behaviors
              with our values, promoting honesty and ethical conduct in all
              aspects of our operations.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Vector Image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src="/assets/image_about_us.jpg" // Replace with your vector image
            alt="About Us Illustration"
            sx={{
              maxWidth: "90%",
              height: "auto",
              borderRadius: 2,

              // boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
