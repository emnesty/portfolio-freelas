"use client"

import { DirectionAwareHover } from "./ui/direction-aware-hover"
import { projetosData } from "../../app/data/projetosData"
import Link from "next/link"
import { FadeIn } from "./FadeIn"
import { Badge } from "./ui/badge"

export default function ProjectsSection() {
  return (
    <section id="projetos">
      <div className="bg-zinc-50 dark:bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="w-full flex flex-col items-start">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <Badge className="mb-2 border-zinc-100" color="zinc">
                  Cases
                </Badge>
                <h2 className="text-3xl text-left font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                  Projetos recentes
                </h2>
                <p className="mt-6 mb-20 text-left text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Aqui estão listados meus projetos, você pode visualizar em detalhes cada um deles para saber
                  mais.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {projetosData.slice(0, 6).map((project) => (
                  <Link legacyBehavior key={project.id} href={`/projetos/${project.slug}`}>
                    <a className="flex flex-col cursor-pointer">
                      <div className="h-[30rem] relative flex items-center justify-center">
                        <DirectionAwareHover imageUrl={project.imgsrc}>
                          <div className="pb-2">
                            <Badge color="zinc" className="mb-2 dark:bg-neutral-600">
                              {project.category}
                            </Badge>
                          </div>
                          <p className="font-bold text-xl">{project.title}</p>
                          <p className="font-normal text-sm">{project.projectname}</p>
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
  )
}
