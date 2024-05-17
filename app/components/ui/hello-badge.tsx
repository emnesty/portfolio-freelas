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
    <div className="w-full max-w-[320px] h-18 mb-6 items-center flex gap-2.5 p-2.5 text-lg text-center border border-solid  border-neutral-300 dark:border-neutral-600 rounded-[100px]">
      <AnimatedTooltip items={people} />
      <div className="my-auto ml-4 font-medium text-slate-800 dark:text-slate-200">
        {message}
      </div>
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
