import HeroSection from "./components/HeroSectionSection";
import InfiniteMovingCardsSection from "../app/components/InfiniteMovingCardsSection";
import ProjectsSection from "./components/ProjectsSection";
import { NavigationMenu } from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";
import StacksNew from "./components/StackSectionNew";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <InfiniteMovingCardsSection />
      <AboutSection />
      <StacksNew />
      <ProjectsSection />
    </>
  );
}
