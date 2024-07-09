import { GetStaticPaths, GetStaticProps } from "next";
import { projetosData } from "../../app/data/projetosData";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Projeto {
  id: number;
  title: string;
  projectname: string;
  category: string;
  description: string;
  imgsrc: string;
  badge: string;
  badge2: string;
  badge3: string;
  urlsite: string;
  urlgithub: string;
  urlfigma: string;
  descriptiondetails: string;
  descriptiondetails2: string;
  descriptiondetails3: string;
  videoUrl?: string;
  images: string[];
}

interface ProjetoProps {
  projeto: Projeto;
}

const ProjetoDetalhes = ({ projeto }: ProjetoProps) => {
  const [activeImage, setActiveImage] = useState(projeto.images[0]);
  const t = useTranslations("Project");

  if (!projeto) {
    return <div>{t("notFound")}</div>;
  }

  return (
    <>
      <Head>
        <title>{projeto.title}</title>
      </Head>
      <div className="bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <img
              src={activeImage}
              alt={projeto.title}
              className="rounded-md object-contain"
              style={{ height: "400px", width: "600px" }}
            />
            <div className="absolute bottom-0 bg-zinc-50 h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
          </motion.div>
          <div className="flex flex-row justify-center my-8 flex-wrap">
            {projeto.images.map((image, idx) => (
              <button
                onClick={() => setActiveImage(image)}
                key={`image-thumbnail-${idx}`}
              >
                <img
                  src={image}
                  alt={`Project thumbnail ${idx}`}
                  className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
                />
              </button>
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
                  {t("backToProjects")}
                </button>
              </Link>
            </div>
            {projeto.urlsite && (
              <button>
                <a
                  href={projeto.urlsite}
                  target="__blank"
                  className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {t("livePreview")}
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
              </button>
            )}
            {projeto.urlgithub && (
              <button>
                <a
                  href={projeto.urlgithub}
                  target="__blank"
                  className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {t("githubRepo")}
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
              </button>
            )}
            {projeto.urlfigma && (
              <button>
                <a
                  href={projeto.urlfigma}
                  target="__blank"
                  className="rounded-md flex gap-2 items-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {t("figmaPrototype")}
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
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, locale } = context;
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const projeto = projetosData.find((p) => p.slug === slug);

  // Use a importação dinâmica para carregar as mensagens de localização
  const messages = (await import(`/app/messages/${locale}.json`)).default;

  if (!projeto) {
    return { notFound: true };
  }

  return { props: { projeto, messages } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projetosData.flatMap((projeto) => [
    { params: { slug: projeto.slug }, locale: "en" },
    { params: { slug: projeto.slug }, locale: "pt" },
  ]);

  return { paths, fallback: "blocking" };
};

export default ProjetoDetalhes;
