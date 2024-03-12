"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infiniteMovingCards";

export default function InfiniteMovingCardsSection() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-herobackground dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was a pleasant surprise when I looked for 'aspiring designers' before opening external positions and found him at AmBev. His disciplined curiosity, to do a little bit every day, led him to play with figma for more than TWO YEARS just for fun. I couldn't move him...",
    name: "Caio Badu Nishihara",
    title: "Design Technologist | OPS & People | TEDx Speaker",
  },
  {
    quote:
      "Recomendo Luciano com olhos fechados. Conheci Luciano quando fazia a gestão de um outro time e posteriormente passei a gerenciar o time que ele fazia parte. Logo ele se destacou com profissionalismo e dedicação, senso de dono e sempre focado em...",
    name: "Agnaldo Lourenço",
    title: "IT Manager Operations at AmbevTech",
  },
  {
    quote:
      "Trabalhei com o Luciano em diversos produtos internos. Ele é muito dedicado, tem um olhar crítico e é bastante eficiente. Como designer admiro suas técnicas em IU e usabilidade de produtos.",
    name: "Áurea André",
    title: "Métricas e Processos de Design | Itaú Design Ops",
  },
  {
    quote:
      "Uma das pessoas mais impressionantes que já conheci. Sem exageros. Quando conheci o Luciano, ele trabalhava como operador de projeção no Cinema, e desde aquela época já tinha um amplo conhecimento...",
    name: "Alexandre Mendonça",
    title: "Arquiteto de Software | IoT | AI | Computer Vision",
  },
  {
    quote:
      "Trabalhar com o Luciano foi uma experiência enriquecedora. É paciente, sempre disposto a ensinar. Me acolheu e auxiliou a entender o contexto do produto, de forma clara, detalhada e positiva...",
    name: "Thais Maurin",
    title: "Product Designer @ AB InBev | User Experience | UX Strategy",
  },
  {
    quote:
      "Tive a oportunidade de colaborar com o Luciano em projetos de design e é com satisfação que recomendo este profissional. Trabalhamos em diversas fases de um produto complexo...",
    name: "Alfredo E. Viana",
    title: "Senior Product Designer | Design Ops",
  },
];
