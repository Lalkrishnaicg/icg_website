"use client";
import CardGrid from "@/components/mainpage/cardSection";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Grid
      container
      //  spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{ px: 6 }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              fontWeight: "semi-bold",
              mb: 2,
              fontSize: { md: 48, xs: 28 },
              lineHeight: { md: 1.4, xs: 1.2 },

              color: "#1B1B1B",
              // color: "white",
            }}
          >
            Human resources
            <Box
              component="span"
              sx={{ display: { xs: "block", md: "block" } }}
            >
              Team @ICG
            </Box>
          </Typography>
          <Typography
            //  variant="h6"
            sx={{
              color: "text.secondary",

              fontSize: { md: 22, xs: 18 },
            }}
          >
            Hiring for 200+ positions across various user interests.{" "}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mt: { md: 0, xs: 3 },
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* <Button
              variant="contained"
              color="primary"
              //   component={Link}
              // href="contact-us"
              sx={{
                border: "2px solid #0606f9",
                borderRadius: "8px",
                borderColor: "#0606f9",
                backgroundColor: "white",
              }}
            >
              Connect Us
            </Button> */}
          </Stack>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Ensures vertical alignment
        }}
      >
        <Box
          sx={{
            mt: { md: 0, xs: "5vh" }, // Adjusted for consistency
            height: "420px",
            width: "600px",
            borderRadius: 2,
            // transform: {
            //   md: `perspective(1300px) rotateY(${rotationAngle}deg) scale(${zoomScale})`,
            //   xs: "none",
            // },
            transformOrigin: "center",
            transition: "transform 0.3s ease-out",
            boxShadow: "10px 10px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centering the video inside
            //  bgcolor: "#0d0c22",
            backgroundImage: "linear-gradient(to bottom, white, #dde4f0)", // Gradient from white to #dde4f0
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                color: "black",
                mt: -4,
                justifyContent: "center",
                textAlign: "center",
                fontSize: 24,
              }}
            >
              We collaborate with ambitious
              <Box
                component="span"
                sx={{ display: { xs: "block", md: "block" } }}
              >
                {" "}
                brands and people
              </Box>
            </Typography>

            <Box
              sx={{
                gap: 2,
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
                pt: 9,
              }}
            >
              {[
                "Development",
                "Marketing",
                "Business Development",
                "Content writer",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "white",
                    width: 200,
                    height: 80,
                    borderRadius: 6,
                    display: "flex", // Ensures text is centered
                    justifyContent: "center", // Centers horizontally
                    alignItems: "center", // Centers vertically
                    //  boxShadow: 1, // Optional: Adds a subtle shadow
                    fontWeight: "semi-bold", // Optional: Makes text stand out
                  }}
                >
                  {text}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                gap: 2,
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
              }}
            >
              {[
                "Development",
                "Marketing",
                "UI/UX",
                "Content writer",
                "Graphics",
                "HR",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "white",
                    width: 150,
                    height: 80,
                    borderRadius: 6,
                    display: "flex", // Ensures text is centered
                    justifyContent: "center", // Centers horizontally
                    alignItems: "center", // Centers vertically
                    // boxShadow: 2, // Optional: Adds a subtle shadow
                    fontWeight: "semi-bold", // Optional: Makes text stand out
                  }}
                >
                  {text}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ pt: 7 }}>
        <CardGrid />
      </Grid>
    </Grid>
  );
};

export default page;
