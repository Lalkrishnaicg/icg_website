import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputLabel,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const AssistSection = () => {
  return (
    <Grid>
      <Grid
        container
        sx={{
          width: "80%",
          height: "95vh",
          mt: 10,
        }}
      >
        {/* Left Section with Background Image */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundImage: "url('/assets/shape-01.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/* Overlay Image with Low Opacity */}
          <Box
            sx={{
              position: "absolute",
              width: "70%",
              height: "70%",
              backgroundImage: "url('/assets/icg.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />
        </Grid>
        {/* Right Colored Section */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            background: "#dddcf5",
            display: "flex",
            alignItems: "start",
            height: "100%",
            paddingLeft: "80px",
            paddingTop: "40px",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: 44,
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            LET<span style={{ color: "red" }}>'</span>S TALK
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: 20,
              marginBottom: 3,
            }}
          >
            Learn more about our core areas of expertise by selecting your topic
            of interest.
          </Typography>

          {/* Form Fields */}
          <Box sx={{ width: 500 }}>
            <TextField
              placeholder="Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, backgroundColor: "white" }}
            />
            <TextField
              placeholder="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, backgroundColor: "white" }}
            />
            <TextField
              placeholder="Phone No"
              type="tel"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, backgroundColor: "white" }}
            />

            <TextField
              placeholder="What service do you want?"
              select
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, backgroundColor: "white" }}
            >
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Mobile App Development">
                Mobile App Development
              </MenuItem>
              <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
              <MenuItem value="SEO Services">SEO Services</MenuItem>
            </TextField>
            <TextField
              placeholder="Let us know how we can help you?"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: 3,
            }}
          >
            <Button
              id="btn"
              variant="contained"
              sx={{
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
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AssistSection;
