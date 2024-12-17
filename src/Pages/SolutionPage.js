import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../solutionPage/HeroSection";
import UseCases from "../solutionPage/UseCases";
import PlatformSupported from "../solutionPage/PlatformSupported";
import NewsLetter from "../solutionPage/NewsLetter";
import Footer from "../Components/Footer";

import Testimonals from "../solutionPage/Testimonals";
import OfferSection from "../solutionPage/OfferSection";
import Chat from "../Components/Chat";

function SolutionPage() {
  return (
    <>
      <Chat />
      <Navbar />
      <HeroSection />
      <UseCases />
      <OfferSection />

      <Testimonals />
      <PlatformSupported />

      <NewsLetter />
      <Footer />
    </>
  );
}

export default SolutionPage;
