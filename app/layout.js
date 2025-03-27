import { K2D } from "next/font/google";
import "./globals.css";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { Suspense } from "react";
import LoaderPage from "@/components/loaderPage";
import Header from "@/components/mainpage/header";
import Loader from "@/components/loader";
import { ThemeProviderClient } from "@/components/themeClient";
import TopHeader from "@/components/mainpage/topHeader";
import Navbar from "@/components/navbar";

const k2dFont = K2D({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ICG",
  description: "Irish Consulting Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={k2dFont.className}>
        <ThemeProviderClient theme={theme}>
          <Suspense fallback={<LoaderPage />}>
            {/* <Header /> */}
            {/* <TopHeader /> */}
            {children}
            {/* <Box
              sx={{
                bottom: 0,
                left: 0,
                zIndex: 1000,
                display: { md: "flex", xs: "none" },
                justifyContent: "center",
              }}
            >
              <Navbar />
            </Box> */}
          </Suspense>{" "}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
