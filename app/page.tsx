import React from "react";
import HeroSection from "./components/HeroSectionSection";
import InfiniteMovingCardsSection from "../app/components/InfiniteMovingCardsSection";
import { NavigationMenu } from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";
import StacksNew from "./components/StackSectionNew";
import { ProjectsCarrousel } from "./components/ProjectsCarrousel";

export default function Home() {

  return (
    < >
      <NavigationMenu />
      <HeroSection />
      <InfiniteMovingCardsSection />
      <AboutSection />
      <StacksNew />
      <ProjectsCarrousel />
      <AboutSection />
    </>
  );
}
