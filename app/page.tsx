import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { InfiniteMovingCards } from "./components/ui/InfiniteMovingCards";
import { InfiniteMovingCardsDemo } from "./components/InfiniteCardSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsDemo />
    </>
  );
}
