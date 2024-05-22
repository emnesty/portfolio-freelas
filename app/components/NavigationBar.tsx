"use client";
import React from "react";
import { NavigationBar } from "../components/ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";

export function NavigationMenu() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sobre",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "CV",
    //   link: "#",
    //   icon: (
    //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];
  return (
    <div className="relative  w-full">
      <NavigationBar navItems={navItems} />
    </div>
  );
}
