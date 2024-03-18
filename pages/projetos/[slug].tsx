import { GetStaticPaths, GetStaticProps } from "next";
import { projetosData } from "../../app/data/projetosData";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Projeto {
  id: number;
  title: string;
  projectname: string;
  category: string;
  description: string;
  imgsrc: string;
  urlsite: string;
  urlgithub: string;
  descriptiondetails: string;
  descriptiondetails2: string;
  descriptiondetails3: string;
  videoUrl?: string;
}

// Definição da interface para as props da página
interface ProjetoProps {
  projeto: Projeto;
}

const ProjetoDetalhes = ({ projeto }: ProjetoProps) => {
  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Head>
        <title>{projeto.title}</title>
      </Head>
      <div className="bg-herobackground py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="container mx-auto px-6 lg:px-8">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
            >
              {projeto.projectname}
            </h1>
            <div className="w-full mt-5 grid max-w-xl grid-cols-1 text-base leading-7 text-slate-50 lg:max-w-none lg:grid-cols-1">
              <div>
                <p data-aos="fade-up" data-aos-duration="1100" className="mt-4">
                  {projeto.description}
                </p>
                <p data-aos="fade-up" data-aos-duration="1000" className="mt-8">
                  {projeto.descriptiondetails}
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link legacyBehavior href={projeto.urlsite}>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className=" bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site do projeto <span aria-hidden="true"> →</span>
                  </a>
                </Link>
                {/* <Link legacyBehavior href={projeto.urlgithub}>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className=" bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span aria-hidden="true"> →</span>
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="relative overflow-hidden pt-16 lg:pt-20">
              <div className="mx-auto max-w-7xl ">
                <img
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  src={projeto.imgsrc}
                  alt={projeto.title}
                />
              </div>
            </div>
          </div>
          <div className="py-12" data-aos="fade-up">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {projeto.videoUrl && (
                <div className="aspect-w-16 aspect-h-9 h-full w-full rounded-lg">
                  <iframe
                    src={projeto.videoUrl}
                    width="640"
                    height="360"
                    allow="autoplay fullscreen picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const projeto = projetosData.find((p) => p.slug === slug);

  if (!projeto) {
    return { notFound: true };
  }

  return { props: { projeto } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projetosData.map((projeto) => ({
    params: { slug: projeto.slug },
  }));

  return { paths, fallback: "blocking" };
};

export default ProjetoDetalhes;
