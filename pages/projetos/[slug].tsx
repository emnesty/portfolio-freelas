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
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{projeto.projectname}</h1>
          <p>{projeto.description}</p>
          <Image
            src={projeto.imgsrc}
            alt={projeto.title}
            width={500}
            height={300}
          />
          <div>
            <Link legacyBehavior href={projeto.urlsite}>
              <a target="_blank" rel="noopener noreferrer">
                Visitar site do projeto
              </a>
            </Link>
            <Link legacyBehavior href={projeto.urlgithub}>
              <a target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </Link>
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
