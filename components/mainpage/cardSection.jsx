import React from "react";
import Link from "next/link";
import { Box, Card, Typography } from "@mui/material";

const cards = [
  {
    id: 1,
    text: "Card 1",
    area: "card1",
    image: "/assets/image_1.png",
    page: "page1",
  },
  {
    id: 2,
    text: "Card 2",
    area: "card2",
    image: "/assets/image_2.png",
    page: "page2",
  },
  { id: 3, text: "Card 3", area: "card3", page: "page3" },
  { id: 4, text: "Card 4", area: "card4", page: "page4" },
  {
    id: 5,
    text: "Card 5",
    area: "card5",
    image: "/assets/image_3.png",
    page: "page5",
  },
  { id: 6, text: "Card 6", area: "card6", page: "page6" },
];

const CustomCard = ({ text, area, image, page }) => {
  return (
    <Box sx={{ gridArea: area }}>
      <Link href={`/${page}`} passHref>
        <Card
          sx={{
            backgroundColor: image ? "transparent" : "#898989",
            color: "#ccc",
            width: 390,
            height: 230,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover, &:focus": {
              color: "black",
              bgcolor: "white",
            },
          }}
        >
          {image && (
            <img
              src={image}
              alt="Card Cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "4px",
                zIndex: 1,
              }}
            />
          )}
          <Typography variant="h6" sx={{ position: "relative", zIndex: 1 }}>
            {text}
          </Typography>
        </Card>
      </Link>
    </Box>
  );
};

const CardGrid = () => {
  return (
    <Box
      sx={{
        px: 18,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridTemplateAreas: `
          "card6    .        card1"    
          "card2    card3    .     "   
          "card4    .        card5"    
        `,
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        pt: 5,
        py: 5,
        bgcolor: "#0d0c22",
      }}
    >
      {cards.map((card) => (
        <CustomCard
          key={card.id}
          text={card.text}
          area={card.area}
          image={card.image}
          page={card.page}
        />
      ))}
    </Box>
  );
};

export default CardGrid;
