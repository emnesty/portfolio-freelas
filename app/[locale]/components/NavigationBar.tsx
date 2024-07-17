"use client";
import React from "react";
import { NavigationBar } from "./ui/floating-navbar";
import { Home, User, Briefcase, BookOpen, MessageCircle } from "lucide-react";

export function NavigationMenu() {
  const navItems = [
    {
      name: "Luciano Silva",
      link: "/",
      icon: <Home size={16} />,
    },
    {
      name: "Sobre",
      link: "/",
      icon: <User size={16} />,
    },
    {
      name: "Projetos",
      link: "/projetos",
      icon: <Briefcase size={16} />,
    },
  ];

  return (
    <div className="relative w-full">
      <NavigationBar navItems={navItems} />
    </div>
  );
}
