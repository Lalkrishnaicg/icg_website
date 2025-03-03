import Header from "@/components/mainpage/header";
import Hero from "@/components/mainpage/hero";

import Footer from "@/components/mainpage/footer";
import FooterDetailed from "@/components/mainpage/footerDetails";
import LoaderPage from "@/components/loaderPage";
import Loader from "@/components/loader";

export default function Home() {
  return (
    <>
      {/* <IrishPage /> */}
      {/* <HeaderTest /> */}
      {/* <LoaderPage /> */}
      <Loader />
      <Hero />
      <FooterDetailed />
    </>
  );
}
