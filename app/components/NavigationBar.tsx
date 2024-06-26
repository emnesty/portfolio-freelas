import React from "react";
import { NavigationBar } from "../components/ui/floating-navbar";
import { Home, User, Briefcase, BookOpen, MessageCircle } from "lucide-react";

export function NavigationMenu() {
  const navItems = [
    {
      name: "Luciano Silva",
      link: "#home",
      icon: <Home size={16} />,
    },
    {
      name: "Sobre",
      link: "#about",
      icon: <User size={16} />,
    },
    {
      name: "Projetos",
      link: "#projetos",
      icon: <Briefcase size={16} />,
    },
  ];

  return (
    <div className="relative w-full">
      <NavigationBar navItems={navItems} />
    </div>
  );
}
