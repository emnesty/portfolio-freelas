import { type Metadata } from "next";
import Image from "next/image";

import { Card } from "../components/Card";
import { SimpleLayout } from "../components/SimpleLayout";
import { Badge } from "../components/ui/badge";
import { FadeIn } from "../components/FadeIn";

const projects = [
  {
    name: "Curso de Figma 2024 Do básico ao avançado - Conhecendo o Figma - Aula 1",
    description: "Conheça mais sobre o Figma e suas funcionalidades.",
    link: {
      href: "https://www.youtube.com/watch?v=tLBefk6rr7U&t=1491s",
      label: "Acessar aula",
    },
    thumbnail: "/images/thumbs/thumb1.png",
    category: "Design",
    type: "course",
  },
  {
    name: "Curso de Figma 2024 Do básico ao avançado - Figma Education - Aula 2",
    description:
      "Aprenda a ter acesso de educação no Figma e como isso pode te ajudar.",
    link: { href: "#", label: "Acessar aula" },
    thumbnail: "/images/thumbs/thumb2.png",
    category: "Design",
    type: "course",
  },
];

const videos = [
  {
    name: "SwiftUI - HStack e VStack absolutamente do básico (Iniciante do Iniciante)",
    description:
      "Nesse vídeo eu falo um pouco sobre SwiftUI e suas propriedades a HStack e VStack.",
    link: { href: "https://youtu.be/26gcf21WFDI", label: "Acessar vídeo" },
    thumbnail: "/images/thumbs/thumb3.webp",
    category: "Desenvolvimento",
    type: "video",
  },
  {
    name: "Figma - Utilizando as variáveis do Figma de forma prática",
    description:
      "Vamos conhecer as variáveis no Figma e como elas podem ser úteis.",
    link: { href: "https://youtu.be/_ze3fAtgFlE", label: "Acessar vídeo" },
    thumbnail: "/images/thumbs/thumb4.webp",
    category: "Design",
    type: "video",
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title:
    "Luciano Silva UX/UI Designer - Front-End Developer - Curso gratuito de Figma 2024",
  description: "Guias e tutoriais sobre Desing e Desenvolvimento Web.",
};

export default function Resources() {
  return (
    <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-eu.png"
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
            title="Curso gratuito de Figma 2024"
            intro="Tenha acesso a diversos recursos para aprimorar suas habilidades em Design, na prática com projetos reais."
          >
            <ul
              role="list"
              className="grid grid-cols-1  gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project) => (
                <Card
                  as="li"
                  key={project.name}
                  className="border dark:border-neutral-800 border-gray-300 hover:border-blue-300 rounded-2xl p-4"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.thumbnail}
                      alt={`Thumbnail do projeto ${project.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <Badge className="mt-4" color="zinc">
                    {project.category}
                  </Badge>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" target="_blank" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
            <div className="max-w-2xl mt-16">
              <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Mais vídeos
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Vídeos sobre desenvolvimento web, design e muito mais.
              </p>
            </div>
            <div className="mt-16 sm:mt-20">
              <ul
                role="list"
                className="grid grid-cols-1  gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              >
                {videos.map((videos) => (
                  <Card
                    as="li"
                    key={videos.name}
                    className="border dark:border-neutral-800 border-gray-300 rounded-2xl p-4"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={videos.thumbnail}
                        alt={`Thumbnail do projeto ${videos.name}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <Card.Link href={videos.link.href}>
                        {videos.name}
                      </Card.Link>
                    </h2>
                    <Card.Description>{videos.description}</Card.Description>
                    <Badge className="mt-4" color="zinc">
                      {videos.category}
                    </Badge>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                      <LinkIcon className="h-6 w-6 flex-none" target="_blank" />
                      <span className="ml-2">{videos.link.label}</span>
                    </p>
                  </Card>
                ))}
              </ul>
            </div>
          </SimpleLayout>
        </FadeIn>
      </div>
    </div>
  );
}
