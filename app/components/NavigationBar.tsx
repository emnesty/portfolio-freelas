"use client";
import React from "react";
import { NavigationBar } from "../components/ui/floating-navbar";
import { Home, User, Briefcase, BookOpen, MessageCircle } from "lucide-react";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslations } from "next-intl";

export function NavigationMenu() {
  const t = useTranslations("HeroSection");
  const d = useTranslations("Navigation");

  const navItems = [
    {
      name: d("home"),
      link: "/#home",
      icon: <Home size={16} />,
    },
    {
      name: d("about"),
      link: "/#about",
      icon: <User size={16} />,
    },
    {
      name: d("projects"),
      link: "/#projetos",
      icon: <Briefcase size={16} />,
    },
  ];

  return (
    <div className="relative w-full">
      <NavigationBar navItems={navItems} />
      {/* <SwitchLanguage title={t("language")} /> */}
    </div>
  );
}
