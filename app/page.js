import Header from "@/components/mainpage/header";
import Hero from "@/components/mainpage/hero";
import Footer from "@/components/mainpage/footer";
import FooterDetailed from "@/components/mainpage/footerDetails";
import LoaderPage from "@/components/loaderPage";
import Loader from "@/components/loader";
import Services from "@/components/mainpage/services";
import GlobalSerivce from "@/components/mainpage/globalService";
import QuoteIcg from "@/components/mainpage/heighlight";
import ExpertServices from "@/components/mainpage/expertServices";
import AssistSection from "@/components/mainpage/assistSection";
import Heiglight from "@/components/mainpage/heighlight";
import TopHeader from "@/components/mainpage/topHeader";
import EntrepreneurSection from "@/components/mainpage/entrepreneurSection";
import CarouselSection from "@/components/mainpage/carouselSection";
import Insights from "@/components/mainpage/insights";
import CardGrid from "@/components/mainpage/cardSection";

export default function Home() {
  return (
    <>
      {/* <IrishPage /> */}
      {/* <HeaderTest /> */}
      {/* <LoaderPage /> */}
      <Loader />
      {/* <TopHeader /> */}
      <Hero />
      {/* <GlobalSerivce /> */}
      {/* <QuoteIcg /> */}
      <EntrepreneurSection />
      {/* <CardGrid /> */}
      <CarouselSection />
      <Heiglight />

      {/* <Box sx={{ height: "100vh" }}> */}
      {/* <Services /> */}
      {/* <ExpertServices /> */}
      {/* </Box> */}
      {/* <AssistSection /> */}
      <Insights />
    </>
  );
}
