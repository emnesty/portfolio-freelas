"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { projetosData } from "../data/projetosData";
import { FadeIn } from "../components/FadeIn";
import { Badge } from "../components/ui/badge";
import { SimpleLayout } from "../components/SimpleLayout";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projetosData
      : projetosData.filter((project) => project.category === filter);

  return (
    <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-eu2.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          className="opacity-20"
        />
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent to-white dark:to-neutral-950" />
      </div>
      <div className="z-10">
        <FadeIn>
          <SimpleLayout
            title="Projetos recentes"
            intro="Aqui estão listados meus projetos, você pode visualizar em detalhes cada um deles para saber mais."
          >
            {/* Filtros */}
            <div className="flex justify-center space-x-4 mb-8 relative z-30">
              <button
                onClick={() => setFilter("Todos")}
                className={`px-4 py-2 rounded-md ${filter === "Todos" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter("Design (UI)")}
                className={`px-4 py-2 rounded-md ${filter === "Design (UI)" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                Design (UI)
              </button>
              <button
                onClick={() => setFilter("Frontend")}
                className={`px-4 py-2 rounded-md ${filter === "Frontend" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                Frontend
              </button>
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projetos/${project.slug}`}
                    className="group"
                  >
                    <div className="relative h-[32rem] w-full overflow-hidden rounded-2xl">
                      <DirectionAwareHover imageUrl={project.imgsrc}>
                        <div className="pb-2">
                          <Badge
                            color="zinc"
                            className="mb-2 dark:bg-neutral-600"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <p className="font-bold text-xl">{project.title}</p>
                        <p className="font-normal text-sm">
                          {project.projectname}
                        </p>
                      </DirectionAwareHover>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </SimpleLayout>
        </FadeIn>
      </div>
    </div>
  );
}
