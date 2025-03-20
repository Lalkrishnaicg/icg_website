"use client";

import { Box, Grid, Typography, Modal, Backdrop, Fade } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const OurPeople = () => {
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
    <>
      <Grid>
        {/* IMAGE GALLERY SECTION */}
        <Box sx={{ bgcolor: "#dde4f0", mt: 5 }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              fontSize: 44,
              textTransform: "uppercase",
              //   fontFamily: "'monospace', cursive",
              letterSpacing: "2px",
              pt: 6,
            }}
          >
            Our People
          </Typography>
          <Box sx={{ width: "80%", margin: "auto", p: 4, pt: 7 }}>
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
                        <Typography variant="body2">
                          {person.position}
                        </Typography>
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
    </>
  );
};

export default OurPeople;
