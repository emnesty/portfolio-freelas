"use client";

import * as React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function ProjectsCarrousel() {
  useEffect(() => {
    gsap.fromTo(
      "#animated-image",
      { x: "40%" }, 
      {
        x: "0%", 
        duration:2.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#animated-image",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className="bg-zinc-50 dark:bg-zinc-900 py-24 sm:py-32 overflow-x-hidden"
    >
      <div className="py-20 bg-white max-md:pl-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-4 ml-8 text-4xl font-semibold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
            <h1>Analytics that feels like it’s from the future</h1>
          </div>
          <div className="mt-5 ml-8 text-xl leading-8 text-slate-600 w-[768px] max-md:max-w-full">
            <p>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
        <div className="flex gap-4 self-center pr-2.5 mt-16 -ml-6 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col justify-center rounded-lg">
            <img
              id="animated-image"
              loading="lazy"
              src="/images/app.svg"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
