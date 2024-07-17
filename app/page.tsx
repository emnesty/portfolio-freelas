import React from "react";
import HeroSection from "./[locales]/components/HeroSection";
import InfiniteMovingCardsSection from "./[locales]/components/InfiniteMovingCardsSection";
import ProjectsSection from "./[locales]/components/ProjectsSection";
import { PrimaryFeatures } from "./[locales]/components/PrimaryFeatures";
import NewAboutSection from "./[locales]/components/NewAboutSection";

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
