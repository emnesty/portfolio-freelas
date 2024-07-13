import React from "react";
import HeroSection from "./components/HeroSectionSection";
import InfiniteMovingCardsSection from "../app/components/InfiniteMovingCardsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import NewAboutSection from "./components/NewAboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrimaryFeatures />
      <NewAboutSection />
      <InfiniteMovingCardsSection />
      <ProjectsSection />
    </>
  );
}
