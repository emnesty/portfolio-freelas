"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { projetosData } from "../../app/data/projetosData";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projetos">
      <div className="bg-zinc-50 dark:bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-3xl text-left font-bold tracking-tight dark:text-slate-200 text-slate-950 sm:text-4xl"
              >
                Projetos recentes
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="mt-6 mb-20 text-left text-lg leading-8 dark:text-slate-200 text-slate-950"
              >
                Aqui estão listados meus projetos, você pode visualizar em
                detalhes cada um deles para saber mais.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl
              data-aos="fade-up"
              data-aos-duration="900"
              className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
            >
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
            </dl>
          </div>
          <div
            className="pt-20 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <Link href="/projetos">
              <button className=" hover:bg-[rgba(0,118,255,0.9)] px-8 py-4 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                Visualizar todos os projetos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
