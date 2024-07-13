import { type Metadata } from "next";
import Image from "next/image";
import { Container } from "./Container";

import portraitImage from "../../public/images/eunova.jpeg";
import { Badge } from "./ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Olá, sou o Luciano e sou apaixonado por Design e Tecnologia",
};

export default function NewAboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-neutral-950">
      <Container className="pt-16 pb-16 sm:pb-32 sm:pt-32 ">
        <div className="sm:flex items-center gap-y-16 lg:gap-12">
          <div className="lg:pl-20 items-center flex justify-center">
            <div className="max-w-xs px-2.5 lg:max-w-none mb-5">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 36rem, 24rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first">
            <Badge className="mb-2" color="zinc">
              Quem sou eu
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
              Olá, sou o Luciano e sou apaixonado por Design e Tecnologia
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Há mais de 10 anos no mercado de tecnologia, conquiestei meu
                espaço e adiquiri experiência em grandes empresas de tecnologia.
                Atualmente, sou UX/UI Designer a mais de 3 anos e aspirante
                Desenvolvedor Frontend, com foco em criar experiências digitais
                inovadoras e acessíveis para todos os usuários.
              </p>
              <p>
                Recifense, morando atualmente em Blumenau-SC pai do Arthur e
                marido da Madlyn, curto um fifinha de vez em quando e boa
                música.
              </p>
              <p>Vamos compartilhar ideias e aprender juntos? </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
