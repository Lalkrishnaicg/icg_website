import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        color: "white",
        py: 1,
        px: { xs: 2, md: 6 },
        position: "relative",
        mb: { md: 7.5, xs: 6 },
        //  mt: -10,
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { xs: "center", md: "center" },
          textAlign: "center",
        }}
      >
        {/* Copyright Section (Full Width) */}
        <Grid2 item="true" xs={12} md="auto">
          <Typography
            sx={{
              display: "flex",
              fontSize: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Irish Group{" "}
            <MdOutlineCopyright size={20} style={{ marginLeft: 4 }} /> 2023 All
            Rights Reserved
          </Typography>
        </Grid2>

        {/* Policies Section */}
        {[
          "Refund Policy",
          "Privacy Policy",
          "Disclaimer",
          "Anti Fraud Policy",
          "Terms & Conditions",
          "Designed by AdMagneto Media",
        ].map((item, index) => (
          <React.Fragment key={item}>
            <Grid2 item="true" xs={6} md="auto">
              <Typography sx={{ fontSize: 18 }}>{item}</Typography>
            </Grid2>

            {/* Vertical Divider (Hidden on Small Screens) */}
            {index < 5 && (
              <Grid2 item="true" sx={{ display: { xs: "none", md: "block" } }}>
                <Box
                  sx={{
                    width: "1px",
                    height: "24px",
                    backgroundColor: "white",
                  }}
                />
              </Grid2>
            )}
          </React.Fragment>
        ))}
      </Grid2>
    </Box>
  );
};

export default Footer;
