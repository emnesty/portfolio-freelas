import { projetosData } from "../../data/projetosData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return projetosData.map((projeto) => ({
    slug: projeto.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const projeto = projetosData.find((p) => p.slug === params.slug);

  if (!projeto) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: projeto.title,
  };
}

export default function ProjetoDetalhes({
  params,
}: {
  params: { slug: string };
}) {
  const projeto = projetosData.find((p) => p.slug === params.slug);

  if (!projeto) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex justify-center items-center">
          <Image
            src={projeto.images[0]}
            alt={projeto.title}
            width={600}
            height={400}
            className="rounded-md object-contain"
          />
          <div className="absolute bottom-0 bg-zinc-50 h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
        </div>
        <div className="flex flex-row justify-center my-8 flex-wrap">
          {projeto.images.map((image, idx) => (
            <Image
              key={`image-thumbnail-${idx}`}
              src={image}
              alt={`Project thumbnail ${idx}`}
              width={240}
              height={160}
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
            />
          ))}
        </div>
        <div className="flex lg:flex-row gap-4 items-start flex-col mt-20">
          <h1 className="font-black text-2xl mb-2">{projeto.title}</h1>
          <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
            {projeto.badge && (
              <span className="text-xs md:text-xs lg:text-xs bg-gray-300 px-2 py-1 rounded-lg text-secondary">
                {projeto.badge}
              </span>
            )}
            {projeto.badge2 && (
              <span className="text-xs md:text-xs lg:text-xs bg-gray-300 px-2 py-1 rounded-lg text-secondary">
                {projeto.badge2}
              </span>
            )}
            {projeto.badge3 && (
              <span className="text-xs md:text-xs lg:text-xs bg-gray-300 px-2 py-1 rounded-lg text-secondary">
                {projeto.badge3}
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="w-full mt-4">{projeto.description}</p>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mt-4">
          <p>{projeto.descriptiondetails}</p>
          <p>{projeto.descriptiondetails2}</p>
          <p>{projeto.descriptiondetails3}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center justify-center">
            <Link href="/projetos">
              <button className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Voltar para projetos
              </button>
            </Link>
          </div>
          {projeto.urlsite && (
            <a
              href={projeto.urlsite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Live Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
          {projeto.urlgithub && (
            <a
              href={projeto.urlgithub}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              GitHub Repo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
          {projeto.urlfigma && (
            <a
              href={projeto.urlfigma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Figma Prototype
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
