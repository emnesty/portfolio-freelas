import React from "react";
import HeroSection from "../components/HeroSection";
import InfiniteMovingCardsSection from "../components/InfiniteMovingCardsSection";
import { NavigationMenu } from "../components/NavigationBar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <PrimaryFeatures />
      <AboutSection />
      <InfiniteMovingCardsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
