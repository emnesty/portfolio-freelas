import { getProjetosData, SupportedLocale } from "../../data/projetosData";
import { notFound } from "next/navigation";
import ProjetoDetalhesClient from "./ProjetoDetalhesClient";

export async function generateStaticParams() {
  const projetosData = getProjetosData("pt");
  return projetosData.map((projeto) => ({
    slug: projeto.slug,
  }));
}

export async function generateMetadata({
  params,
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const projetosData = getProjetosData(locale as SupportedLocale);
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
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const projetosData = getProjetosData(locale as SupportedLocale);
  const projeto = projetosData.find((p) => p.slug === params.slug);

  if (!projeto) {
    notFound();
  }

  return <ProjetoDetalhesClient projeto={projeto} />;
}
