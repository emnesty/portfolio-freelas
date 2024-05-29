"use client";

import { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import arrowAnimation from "../../public/ArrowDownLottie.json";
import BadgeWelcome from "./ui/hello-badge";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

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
              ></div>

              <h1
                className="mt-10 w-full text-center font-bold text-2xl tracking-tight dark:text-slate-200 text-slate-950 sm:text-7xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Designer de Produto e Desenvolvedor Frontend
              </h1>
              <div className="flex w-full items-center justify-center text-center p-8">
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
                  <span className="pl-6 dark:text-slate-500  text-slate-400">
                    +45 Recomendações
                  </span>
                </div>
              </div>

              <div
                className="flex w-full gap-4 items-center justify-center mt-4"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="w-full max-w-12 max-sm:hidden lg:block">
                  <Image
                    src={"/images/avatar.png"}
                    alt={"My Avatar Image"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <p className="w-full max-w-[33rem] md:text-left max-sm:text-center text-lg leading-8 dark:text-texthero text-slate-950">
                    Com 10+ anos de experiência, desenvolvo ideias e produtos
                    digitais com inovação e criatividade.
                  </p>
                </div>
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
