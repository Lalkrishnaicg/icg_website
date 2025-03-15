import { K2D } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { Suspense } from "react";
import LoaderPage from "@/components/loaderPage";
import Header from "@/components/mainpage/header";
import Loader from "@/components/loader";
import { ThemeProviderClient } from "@/components/themeClient";
import TopHeader from "@/components/mainpage/topHeader";

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
            <TopHeader />
            {children}
          </Suspense>{" "}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
