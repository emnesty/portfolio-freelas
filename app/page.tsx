import React from "react";
import HeroSection from "./components/HeroSectionSection";
import InfiniteMovingCardsSection from "../app/components/InfiniteMovingCardsSection";
import { NavigationMenu } from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";
import StacksNew from "./components/StackSectionNew";
import { ProjectsCarrousel } from "./components/ProjectsCarrousel";
import ProjectsSection from "./components/ProjectsSection";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { SecondaryFeatures } from "./components/SecondaryFeatures";
import { Reviews } from "./components/Review";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <PrimaryFeatures />
      {/* <SecondaryFeatures /> */}
      <AboutSection />
      <InfiniteMovingCardsSection />
      {/* <StacksNew /> */}
      <ProjectsSection />
      <Footer />
    </>
  );
}
