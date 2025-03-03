"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const reviews = [
  {
    blog_name: "Best Colleges & Universitiesto Study in the USA ",
    date: "July 15, 2024",
    comment:
      "Irish Expert made my visa process seamless! Highly recommend their services.",
    cover_image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&q=60&w=3000",
  },
  {
    blog_name: "Guide for Planning a Careerin the UK ",
    date: "July 10, 2024",
    comment:
      "Professional and friendly team. Helped me with everything for my study abroad journey!",
    cover_image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&q=60&w=3000",
  },
  {
    blog_name: "Planning to settle in Canada with PR",
    date: "July 5, 2024",
    comment:
      "Got my PR with their assistance! Excellent service and very knowledgeable staff.",
    cover_image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&q=60&w=3000",
  },
];

const Blogs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 6,
        mx: { md: 3, xs: 0 },
      }}
    >
      {/* Section Title */}
      <Typography sx={{ color: "#E00815", fontSize: 20 }}>
        New Articles
      </Typography>
      <Typography
        sx={{
          fontSize: { md: 40, lg: 40 },
          mt: 2,
          color: "#222953",
          fontWeight: 600,
        }}
      >
        Featured Blogs
      </Typography>
      <Typography
        sx={{
          mx: "auto",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "67%",
          mt: 3,
        }}
      >
        Discover new ideas and perspectives through our blog.
      </Typography>

      {/* Swiper Carousel */}
      <Box sx={{ width: "100%", overflow: "hidden", mt: 6 }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 }, // xs: 1 image
            600: { slidesPerView: 2 }, // sm: 2 images
            900: { slidesPerView: 3 }, // md: 3 images
            1200: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          style={{ width: "100%", height: "100%" }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} style={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: { lg: "80%", md: "70%", xs: "90%" },
                  height: 450,
                  mx: { md: 6, xs: 3 },
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  border: "1px solid #E00815",
                  borderTop: "none",
                  borderRadius: "0px 0px 10px 10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                }}
              >
                {/* Cover Image with Gradient Overlay */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                    overflow: "hidden",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  <img
                    src={review.cover_image}
                    alt={review.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                    }}
                  />
                </Box>

                {/* Reviewer Name & Date */}
                <Typography
                  sx={{ fontSize: 18, color: "#2B2B2B", mt: 2, ml: 1 }}
                >
                  {review.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { md: 20, lg: 24 },
                    fontWeight: 600,
                    color: "#222953",
                    ml: 1,
                    mt: 3,
                  }}
                >
                  {review.blog_name}
                </Typography>

                {/* Comment */}
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#2B2B2B",
                    width: "85%",
                    ml: 1,
                    mt: 1,
                  }}
                >
                  "{review.comment}"
                </Typography>

                {/* View More Button */}
                <Button
                  //  variant="contained"
                  sx={{
                    // backgroundColor: "#E00815",
                    color: "#E00815",
                    borderRadius: "20px",
                    px: 3,
                    textTransform: "none",
                    fontSize: 18,
                    ml: 0,
                    mt: "auto",
                    mb: 2,
                    fontWeight: 600,
                    //  "&:hover": { backgroundColor: "#C00713" },
                  }}
                >
                  View More
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Typography
          sx={{
            mt: 3,
            textAlign: "end",
            justifyContent: "flex-end",
            display: "flex",
            mr: 7,
            fontSize: 24,
            gap: 1,
            color: "#222953",
            fontWeight: 600,
          }}
        >
          View more
          <ArrowForwardIcon
            sx={{ fontSize: 20, mt: 1, color: "#222953", fontWeight: 600 }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Blogs;
