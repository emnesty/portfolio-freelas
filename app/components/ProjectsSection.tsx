"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { projetosData } from "../../app/data/projetosData";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

export default function ProjectsSection() {
  return (
    <section id="projetos">
      <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="w-full flex flex-col items-start">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl text-left font-bold tracking-tight dark:text-slate-200 text-slate-950 sm:text-4xl">
                  Projetos recentes
                </h2>
                <p className="mt-6 mb-20 text-left text-lg leading-8 dark:text-slate-100 text-slate-400">
                  Aqui estão listados meus projetos, você pode visualizar em
                  detalhes cada um deles para saber mais.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {projetosData.map((project) => (
                  <Link
                    legacyBehavior
                    key={project.id}
                    href={`/projetos/${project.slug}`}
                  >
                    <a className="flex flex-col cursor-pointer">
                      <div className="h-[22rem] relative flex items-center justify-center">
                        <DirectionAwareHover imageUrl={project.imgsrc}>
                          <div className="pb-2">
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                              {project.category}
                            </span>
                          </div>
                          <p className="font-bold text-xl">{project.title}</p>
                          <p className="font-normal text-sm">
                            {project.projectname}
                          </p>
                        </DirectionAwareHover>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-20 flex items-center justify-center">
              <Link href="/projetos">
                <button className="hover:bg-blue-600 px-8 py-4 bg-blue-500 rounded-md text-white font-light transition duration-200 ease-linear">
                  Visualizar todos os projetos
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
