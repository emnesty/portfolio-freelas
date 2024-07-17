import React from "react";
import HeroSection from "./components/HeroSection";
import InfiniteMovingCardsSection from "../[locales]/components/InfiniteMovingCardsSection";
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
