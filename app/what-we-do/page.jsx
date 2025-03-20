"use client";
import { Box, Grid, Typography, Modal, Backdrop, Fade } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Consulting from "@/components/what-we-do/consulting";

const page = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      id: 1,
      name: "John Doe",
      src: "/assets/image_6.jpg",
      description:
        "A highly skilled business consultant with 10+ years of experience.",
    },
    {
      id: 2,
      name: "Jane Smith",
      src: "/assets/image_6.jpg",
      description: "Expert in financial strategies and planning.",
    },
    {
      id: 3,
      name: "Michael Brown",
      src: "/assets/image_6.jpg",
      description: "Specialist in international business development.",
    },
    {
      id: 4,
      name: "Emma Wilson",
      src: "/assets/image_6.jpg",
      description: "HR professional with a passion for team building.",
    },
    {
      id: 5,
      name: "David Johnson",
      src: "/assets/image_6.jpg",
      description: "Tech enthusiast and software architect.",
    },
    {
      id: 6,
      name: "Sophia Lee",
      src: "/assets/image_6.jpg",
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
    <Grid>
      <Consulting />
    </Grid>
  );
};

export default page;
