"use client";
import { Box, Grid, Typography, Modal, Backdrop, Fade } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      id: 1,
      name: "Akhil",
      position: "ceo",
      src: "/assets/image_9.jpg",
      description:
        "A highly skilled business consultant with 10+ years of experience.",
    },
    {
      id: 2,
      position: "ceo",

      name: "Jane Smith",
      src: "/assets/image_8.jpg",
      description: "Expert in financial strategies and planning.",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "ceo",

      src: "/assets/image_10.jpg",
      description: "Specialist in international business development.",
    },
    {
      id: 4,
      name: "Emma Wilson",
      position: "ceo",

      src: "/assets/image_11.jpg",
      description: "HR professional with a passion for team building.",
    },
    {
      id: 5,
      name: "David Johnson",
      position: "ceo",

      src: "/assets/image_12.jpg",
      description: "Tech enthusiast and software architect.",
    },
    {
      id: 6,
      name: "Sophia Lee",
      position: "ceo",

      src: "/assets/image_9.jpg",
      description: "Marketing guru with a creative vision.",
    },
  ];

  const handleOpen = (person) => {
    setSelectedPerson(person);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPerson(null);
  };

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      {/* ABOUT US SECTION */}
      <Box
        sx={{
          height: "50vh",
          width: 700,
          pl: 10,
          pt: 15,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            padding: "20px 40px",
            textAlign: "start",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-10px",
              left: "-20px",
              width: "120%",
              height: "120%",
              background: "#007BFF",
              clipPath:
                "polygon(5% 15%, 95% 5%, 100% 50%, 95% 95%, 5% 85%, 0% 50%)",
              zIndex: -1,
              borderRadius: "20px",
              transform: "rotate(-3deg)",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "'Brush Script MT', cursive",
              letterSpacing: "2px",
              color: "#fff",
              position: "relative",
            }}
          >
            About Us
          </Typography>
        </Box>
        <Typography sx={{ pt: 2, fontSize: 18 }}>
          <span style={{ fontSize: 22 }}>A</span>t ICG, we’re dedicated to
          building a solid foundation for the future by enhancing business
          reliability, delivering superior customer service, and regaining
          trust. Our commitment to integrity guides every decision we make,
          ensuring compliance with laws, regulations, and ethical standards. We
          rely on our Employee Code of Conduct to align our behaviors with our
          values, promoting honesty and ethical conduct in all aspects of our
          operations. We extend our gratitude for your ongoing dedication to
          providing top-notch legal, financial, strategic planning & accounting,
          human resources & payroll administration and international business
          consulting services.
        </Typography>
      </Box>

      {/* IMAGE GALLERY SECTION */}
      <Box sx={{ bgcolor: "#dde4f0", mt: 20 }}>
        <Box sx={{ width: "80%", margin: "auto", p: 4 }}>
          <Grid container spacing={2}>
            {people.map((person, index) => (
              <Grid item xs={6} md={index < 2 ? 6 : 4} key={person.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleOpen(person)}
                  style={{ cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={person.src}
                      alt={person.name}
                      sx={{
                        border: "1px dotted",
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    {/* Name and Position Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        textAlign: "center",
                        p: 1,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {person.name}
                      </Typography>
                      <Typography variant="body2">{person.position}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* MODAL SECTION */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {selectedPerson && (
              <>
                <Typography variant="h5" fontWeight="bold">
                  {selectedPerson.name}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedPerson.description}
                </Typography>
                <Box
                  component="img"
                  src={selectedPerson.src}
                  alt={selectedPerson.name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    mt: 2,
                  }}
                />
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default page;
