"use client";

import {
  Box,
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const OurPeople = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      id: 1,
      name: "Akhil",
      position: "CEO",
      src: "/assets/image_9.jpg",
      description:
        "A highly skilled business consultant with 10+ years of experience.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/akhil",
        instagram: "https://instagram.com/akhil",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CFO",
      src: "/assets/image_8.jpg",
      description: "Expert in financial strategies and planning.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/jane-smith",
        facebook: "https://facebook.com/jane-smith",
      },
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "CTO",
      src: "/assets/image_10.jpg",
      description: "Specialist in international business development.",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "CTO",
      src: "/assets/image_10.jpg",
      description: "Specialist in international business development.",
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "CTO",
      src: "/assets/image_10.jpg",
      description: "Specialist in international business development.",
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
      <Box sx={{ mt: 0 }}>
        <Typography
          sx={{
            textAlign: "start",
            pl: 13,
            fontSize: 44,
            textTransform: "uppercase",
            letterSpacing: "2px",
            //  pt: 6,
          }}
        >
          Our People
        </Typography>

        <Box sx={{ width: "90%", margin: "auto", p: 2, pt: 7 }}>
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
                      width: "80%",
                      height: "300px",
                      pt: 2,
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

                    {/* Name, Position, and Social Media Overlay */}
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

                      {/* Social Media Icons (Shown Only If Available) */}
                      {person.socialLinks && (
                        <Box
                          sx={{
                            mt: 1,
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                          }}
                        >
                          {person.socialLinks.linkedin && (
                            <IconButton
                              component="a"
                              href={person.socialLinks.linkedin}
                              target="_blank"
                              sx={{ color: "white" }}
                            >
                              <LinkedInIcon />
                            </IconButton>
                          )}
                          {person.socialLinks.instagram && (
                            <IconButton
                              component="a"
                              href={person.socialLinks.instagram}
                              target="_blank"
                              sx={{ color: "white" }}
                            >
                              <InstagramIcon />
                            </IconButton>
                          )}
                          {person.socialLinks.facebook && (
                            <IconButton
                              component="a"
                              href={person.socialLinks.facebook}
                              target="_blank"
                              sx={{ color: "white" }}
                            >
                              <FacebookIcon />
                            </IconButton>
                          )}
                        </Box>
                      )}
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
    </>
  );
};

export default OurPeople;
