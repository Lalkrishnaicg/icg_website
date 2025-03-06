import Header from "@/components/mainpage/header";
import Hero from "@/components/mainpage/hero";

import Footer from "@/components/mainpage/footer";
import FooterDetailed from "@/components/mainpage/footerDetails";
import LoaderPage from "@/components/loaderPage";
import Loader from "@/components/loader";
import Services from "@/components/mainpage/services";
import GlobalSerivce from "@/components/mainpage/globalService";
import QuoteIcg from "@/components/mainpage/quoteIcg";
import ExpertServices from "@/components/mainpage/expertServices";
import AssistSection from "@/components/mainpage/assistSection";

export default function Home() {
  return (
    <>
      {/* <IrishPage /> */}
      {/* <HeaderTest /> */}
      {/* <LoaderPage /> */}
      <Loader />
      <Hero />
      <GlobalSerivce />
      {/* <QuoteIcg /> */}

      <AssistSection />
      <ExpertServices />
      <Services />
      <FooterDetailed />
    </>
  );
}
