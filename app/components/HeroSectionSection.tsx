"use client";

import { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import arrowAnimation from "../../public/ArrowDownLottie.json";
import BadgeWelcome from "./ui/hello-badge";

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
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="relative isolate pt-8">
          <div className="mx-auto flex flex-col max-w-7xl px-6 py-16 sm:py-22 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-22">
            <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
              <div
                className="flex justify-center items-center pt-6"
                data-aos="fade-up"
                data-aos-duration="1050"
              >
                <BadgeWelcome />
              </div>

              <h1
                className="mt-10 max-w-[730px] text-center text-4xl tracking-tight dark:text-slate-200 text-slate-950 sm:text-6xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Designer de Produto e Desenvolvedor Frontend
              </h1>
              <div
                className="flex -space-x-2 justify-center items-center p-4 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="950"
              >
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="../images/caiopic.jpeg"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="../images/marllonpic.jpeg"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="../images/aureapic.jpeg"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="../images/xandepic.jpeg"
                  alt=""
                />
                <span className="pl-6 dark:text-slate-600  text-slate-400">
                  +45 Recomendações
                </span>
              </div>
              <div className=" w-full flex items-center justify-center">
                <p
                  className="mt-6 w-full max-w-lg  text-center text-lg leading-8 dark:text-texthero text-slate-950"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  Com 10+ anos de experiência, desenvolvo ideias e produtos
                  digitais com inovação e criatividade.
                </p>
              </div>
              <div
                className="mt-10 flex max-sm:flex-col max-sm:gap-10 items-center  justify-center gap-x-6"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-purple-500 to-purple-600 px-16 max-sm:px-14 max-sm:w-full py-4 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-lg hover:shadow-purple-500/30">
                  <span className="text-sm">Projetos concluídos</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                </button> */}
              </div>
            </div>
            <Lottie
              animationData={arrowAnimation}
              loop={true}
              className="w-full max-w-14 pt-24"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
