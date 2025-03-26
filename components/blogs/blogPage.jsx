"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
} from "@mui/material";
import Image from "next/image";

const categories = ["Technology", "Health", "Travel", "Finance", "Education"];

const posts = [
  {
    id: 1,
    title: "Post 1",
    excerpt: "This is the first post.",
    image: "/assets/image_1.png",
  },
  {
    id: 2,
    title: "Post 2",
    excerpt: "This is the second post.",
    image: "/assets/image_2.png",
  },
  {
    id: 3,
    title: "Post 3",
    excerpt: "This is the third post.",
    image: "/assets/image_3.png",
  },
  {
    id: 4,
    title: "Post 4",
    excerpt: "This is the fourth post.",
    image: "/assets/image_4.png",
  },
  {
    id: 5,
    title: "Post 5",
    excerpt: "This is the fifth post.",
    image: "/assets/image_5.png",
  },
  {
    id: 6,
    title: "Post 6",
    excerpt: "This is the sixth post.",
    image: "/assets/image_8.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    excerpt: "This is the seventh post.",
    image: "/assets/image_9.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    excerpt: "This is the eighth post.",
    image: "/assets/image_10.jpg",
  },
];

export default function BlogList() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (id) => {
    router.push(`/post/${id}`);
  };

  // Filter posts based on search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Categories for Mobile (Fixed & Scrollable) */}
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          paddingY: 1,
          zIndex: 1000,
          overflowX: "auto",
          gap: 2,
          whiteSpace: "nowrap",
          boxShadow: 1,
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#ddd",
              padding: 1,
              borderRadius: 1,
              minWidth: "max-content",
            }}
          >
            <Typography variant="body1">{category}</Typography>
          </Box>
        ))}
      </Grid>

      {/* Sidebar for Categories (Hidden on md and smaller) */}
      <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            padding: 2,
            borderRadius: 2,
            boxShadow: 1,
            position: "sticky",
            top: 20,
            height: "fit-content",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Categories
          </Typography>
          <List>
            {categories.map((category, index) => (
              <div key={index}>
                <ListItem button>
                  <ListItemText primary={category} />
                </ListItem>
                {index < categories.length - 1 && <Divider />}
              </div>
            ))}
          </List>
        </Box>
      </Grid>

      {/* Blog Section with Sticky Search Bar */}
      <Grid item xs={12} md={9}>
        <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
          {/* Search Bar (Sticky Inside Blog Section) */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1000,
              backgroundColor: "#fff",
              padding: 2,
              boxShadow: 1,
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                borderRadius: 1,
                backgroundColor: "#fff",
              }}
            />
          </Box>

          {/* Blog Posts */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card
                    sx={{ cursor: "pointer", height: 360 }}
                    onClick={() => handleClick(post.id)}
                  >
                    <CardMedia sx={{ height: 270, position: "relative" }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h6">{post.title}</Typography>
                      <Typography variant="body2">{post.excerpt}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography
                variant="h6"
                sx={{ width: "100%", textAlign: "center", mt: 2 }}
              >
                No posts found.
              </Typography>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
