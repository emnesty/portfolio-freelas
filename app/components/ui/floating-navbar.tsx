"use client";

import React from "react";
import { cn } from "@/utils/cn";

export const NavigationBar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-md dark:bg-black bg-white bg-opacity-75 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={(e) => handleClick(e, item.link)}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "text-gray-800 dark:text-white"
            )}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};
