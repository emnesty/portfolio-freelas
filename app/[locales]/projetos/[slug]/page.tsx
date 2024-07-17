import { projetosData } from "../../[locales]/data/projetosData";
import { notFound } from "next/navigation";
import ProjetoDetalhesClient from "./ProjetoDetalhesClient";

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

  return <ProjetoDetalhesClient projeto={projeto} />;
}
