import React, { useState } from "react";
import Link from "next/link";
import { projetosData } from "../app/data/projetosData";
import { DirectionAwareHover } from "@/app/components/ui/direction-aware-hover";
import Head from "next/head";
import BarUnderline from "@/app/components/ui/tab-underline";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const ProjetosPage = ({ messages }: { messages: any }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Todos");
  const t = useTranslations("Projects");

  const filteredProjects =
    selectedTab === "Todos"
      ? projetosData
      : projetosData.filter((project) => project.category === selectedTab);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </Head>
      <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-xl mx-auto lg:mx-0 mb-6">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-3xl font-bold text-center tracking-tight dark:text-slate-200 text-slate-950 sm:text-4xl"
              >
                {t("title")}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="mt-6 mb-20 text-lg text-center leading-8 dark:text-slate-200 text-slate-950"
              >
                {t("intro")}
              </p>
              <div className="flex items-center justify-center">
                <Link href="/">
                  <button className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {t("backToHome")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8 mb-12" data-aos="fade-up" data-aos-duration="900">
            <BarUnderline
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl
              data-aos="fade-up"
              data-aos-duration="900"
              className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
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
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`/app/messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};

export default ProjetosPage;
