import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";
import Header from "./components/Header";

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luciano Silva UX/UI Designer - Front-End Developer",
  description:
    "Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo.",
  metadataBase: new URL("https://lucianosilva.cc/"),
  applicationName: "Luciano Silva Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Luciano Silva",
    "UX/UI Designer",
    "Product Designer",
    "Front-End Developer",
    "Experiência em Tecnologia",
    "Portfólio Criativo",
    "Recomendações Profissionais",
    "Habilidades de Design",
    "Desenvolvimento Web",
    "LinkedIn Networking",
    "Projetos GitHub",
    "Expertise Técnico",
    "Design Criativo",
    "Indústria de Tecnologia",
    "Desenvolvedor Experiente",
    "Inovação Digital",
  ],
  openGraph: {
    type: "website",
    url: "https://lucianosilva.cc/",
    title: "Luciano Silva UX/UI Designer - Front-End Developer",
    description:
      "Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo.",
    siteName: "Luciano Silva UX/UI Designer - Front-End Developer",
    images: [
      {
        url: "https://www.lucianosilva.cc/images/opengraph-image.jpg",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={sora.className}>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
