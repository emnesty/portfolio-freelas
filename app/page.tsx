import HeroSection from "./components/HeroSectionSection";
import InfiniteMovingCardsSection from "../app/components/InfiniteMovingCardsSection";
import ProjectsSection from "./components/ProjectsSection";
import { NavigationMenu } from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <InfiniteMovingCardsSection />
      <ProjectsSection />
    </>
  );
}
