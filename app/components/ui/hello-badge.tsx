import * as React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

interface WelcomeMessageProps {
  emoji: string;
  message: string;
}

const people = [
  {
    id: 1,
    name: "Luciano Silva",
    designation: "UX/UI Designer",
    image: "/images/avatar.png",
  },
];

function WelcomeMessage({ emoji, message }: WelcomeMessageProps) {
  return (
    <div className="w-full max-w-[320px] h-18 mb-6 items-center flex gap-2.5 p-2.5 text-lg text-center border border-solid bg-zinc-950 border-neutral-700 rounded-[100px]">
      <AnimatedTooltip items={people} />
      <div className="my-auto ml-4 font-medium text-zinc-400">{message}</div>
    </div>
  );
}

export default function BadgeWelcome() {
  return (
    <main>
      <WelcomeMessage emoji="👋" message="Olá, tudo bem?" />
    </main>
  );
}
