import React from "react";
import Link from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const cards = [
  {
    id: 1,
    text: "HR Planning",
    image: "/assets/image_1.png",
    page: "icg/hr/hrPlanning",
  },
  {
    id: 2,
    text: "HR Policies & Statutory Compliance",
    image: "/assets/image_2.png",
    page: "icg/hr/hrPolicy",
  },
  {
    id: 3,
    text: "Payroll Administration",
    image: "/assets/image_3.png",
    page: "icg/hr/payRollAdministration",
  },
  {
    id: 4,
    text: "Recruitment & Talent Acquisition",
    image: "/assets/image_4.png",
    page: "icg/hr/recruitment",
  },
];

const CustomCard = ({ text, image, page }) => {
  return (
    <Link href={`/${page}`} passHref>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          cursor: "pointer",
          overflow: "hidden",
          "&:hover .overlay": {
            height: "100%",
          },
        }}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={text}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        )}
        <CardActionArea
          className="overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "20%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "height 0.3s ease-in-out",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h6">{text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const CardGrid = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ px: { xs: 2, sm: 3, md: 12 }, pt: 5, pb: 5, bgcolor: "#0d0c22" }}
    >
      {cards.map((card) => (
        <Grid
          item
          key={card.id}
          xs={12} // 1 column on extra-small screens (mobile devices)
          sm={6} // 2 columns on small screens and up (tablets and desktops)
          display="flex"
          justifyContent="center"
        >
          <CustomCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
