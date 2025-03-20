"use client";
import AboutUs from "@/components/who-are-we/aboutUs";
import OurPeople from "@/components/who-are-we/ourPeople";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      {/* ABOUT US SECTION */}
      <AboutUs />
      <OurPeople />
    </Grid>
  );
};

export default page;
