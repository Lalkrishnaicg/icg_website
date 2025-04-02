"use client";
import { MarqueeDemo } from "@/components/magicui/marqueeDemo";
// import { Marquee } from "@/components/magicui/marquee";
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
    <Grid container alignItems="center" justifyContent="center" sx={{ px: 6 }}>
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
          ></Stack>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mt: { md: 0, xs: "5vh" },
            height: "420px",
            width: "600px",
            borderRadius: 2,

            transformOrigin: "center",
            transition: "transform 0.3s ease-out",
            boxShadow: "10px 10px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "linear-gradient(to bottom, white, #dde4f0)",
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
            {/* 
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "semi-bold",
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "semi-bold",
                  }}
                >
                  {text}
                </Box>
              ))}
            </Box> */}
            {/* <Marquee /> */}
            <MarqueeDemo />
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ pt: 7, textAlign: "center" }}>
        <CardGrid />
      </Grid>
    </Grid>
  );
};

export default page;
