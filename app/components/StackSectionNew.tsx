"use client";

import React from "react";
import StacksComponent from "./ui/stack-cards";

const stacks = [
  {
    id: 1,
    name: "Figma",
    description: "Ferramenta de Design de Interfaces",
    iconPath: "images/figmaicon.svg",
    linkUrl: "https://www.figma.com",
  },
  {
    id: 2,
    name: "Framer",
    description: "Ferramenta de Design No-Code",
    iconPath: "images/framer-svgrepo-com.svg",
    linkUrl: "https://framer.com/",
  },
  {
    id: 3,
    name: "Tailwind",
    description: "Framework CSS para design ágil",
    iconPath: "images/tailwindicon.svg",
    linkUrl: "https://tailwindcss.com/",
  },
  {
    id: 4,
    name: "NextJS",
    description: "Framework de desenvolvimento React",
    iconPath: "images/nextjsicon.svg",
    linkUrl: "https://nextjs.org/",
  },
];

const StacksNew = () => {
  return (
    <section  className="bg-zinc-50 dark:bg-zinc-900 scroll-mt-20" id="stack">
      <div
        className="mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="flex items-center flex-col w-full px-5 pt-24 pb-24">
          <h1 className="w-full text-center text-3xl font-bold leading-8 dark:text-slate-200 text-slate-950">
            My Stack
          </h1>
          <p className="max-w-2xl mt-2.5 w-full text-center text-lg leading-7 dark:text-slate-200 text-slate-950">
            Compromisso de se manter atualizado com as últimas tendências e
            técnicas de design e desenvolvimento web.
          </p>
          <StacksComponent stacks={stacks} />
        </div>
      </div>
    </section>
  );
};

export default StacksNew;
