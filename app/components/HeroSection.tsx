"use client";

import { useState } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { GridPattern } from "./GridPattern";
import { MapPin } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Luciano Silva",
    designation: "Designer de Produto",
    image: "/images/avatar.png",
  },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="home">
      <div className="relative isolate pt-8">
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-96}
          interactive
        />
        <FadeIn>
          <div className="mt-24 rounded-4xl  py-20 sm:mt-32 lg:mt-56">
            <Container>
              <div className="max-w-4xl w-full">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-sm uppercase tracking-wider">
                    Santa Catarina - Brasil
                  </span>
                </div>
              </div>
              <h1 className="w-full text-left font-bold text-[2.60rem] leading-[3.0rem]  sm:tracking-tight  text-slate-850 sm:text-8xl">
                UX/UI Designer{" "}
                <img
                  className="inline-block lg:h-16 lg:w-16 h-6 w-6 rounded-full"
                  src="/images/avatar-novo.png"
                  alt=""
                />
                <span className="text-blue-500"> Desenvolvedor Front-End</span>
              </h1>
              <div className="flex w-full gap-4 items-center justify-start mt-4">
                <div className="flex items-start justify-start">
                  <p className="w-full max-w-[50rem] md:text-left max-sm:text-left text-lg leading-8 text-slate-400">
                    Com 10+ anos de experiência em empresas tech, conquistei
                    grande experiência mantendo e construindo produtos digitais
                    com consistência, clareza e inovação.
                  </p>
                </div>
              </div>
              <div className="flex w-full items-left justify-start text-center">
                <div className="flex -space-x-2 justify-center items-center mt-4 mb-4 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="../images/caiopic.jpeg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="../images/marllonpic.jpeg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="../images/aureapic.jpeg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="../images/xandepic.jpeg"
                    alt=""
                  />
                  <span className="pl-6 text-slate-400">+45 Recomendações</span>
                </div>
              </div>
            </Container>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
