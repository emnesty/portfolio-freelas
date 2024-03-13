"use client";

import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../components/ui/directionAwareHover";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição breve do Projeto 1.",
    imageUrl: "/path/to/your/project1-image.jpg",
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do Projeto 2.",
    imageUrl: "/path/to/your/project2-image.jpg",
  },
  {
    title: "Projeto 3",
    description: "Descrição breve do Projeto 3.",
    imageUrl: "/path/to/your/project3-image.jpg",
  },
  // Adicione mais projetos conforme necessário
];

export default function ProjectsSection() {
  const imageUrl = "/images/eu.jpeg";

  return (
    <div className="bg-bgsecondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Projetos recentes
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-6 mb-20 text-lg leading-8 text-gray-300"
          >
            Aqui estão listados meus projetos, você pode visualizar em detalhes
            cada um deles para saber mais.
          </p>
        </div>
        <div className="mx-auto  max-w-2xl lg:max-w-none">
          <dl
            data-aos="fade-up"
            data-aos-duration="900"
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            {projects.map((projects) => (
              <div key={projects.title} className="flex flex-col">
                <div className="h-[22rem] relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={imageUrl}>
                    <p className="font-bold text-xl">{projects.title}</p>
                    <p className="font-normal text-sm">
                      {projects.description}
                    </p>
                  </DirectionAwareHover>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
