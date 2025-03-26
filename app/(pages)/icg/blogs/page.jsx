import BlogList from "@/components/blogs/blogPage";
import { Grid } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Grid sx={{ mt: { md: 2, lg: 2 } }}>
      <BlogList />
    </Grid>
  );
};

export default page;
