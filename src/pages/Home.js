import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/footer";
import Connects from "../components/connects";
import Trusted from "../components/trusted";
import BuiltIn from "../components/builtIn";
import Comparison from "../components/comparison";
import Faqs from "../components/faqs";
import CallToAction from "../components/callToAction";
import useIsMobile from "../components/context/useIsMobile";

function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div>
        <NavBar />
        <Hero />
        <About />
        <HowItWorks />
        <Connects />
        <Trusted />
        <BuiltIn />
        <Comparison />
        <Faqs />
        <CallToAction />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="max-w-[85rem] my-0 mx-auto">
        <Hero />
        <About />
        <HowItWorks />
        <Connects />
        <Trusted />
        <BuiltIn />
        <Comparison />
        <Faqs />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
