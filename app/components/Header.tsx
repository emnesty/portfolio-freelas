"use client";

import avatarImage from "../../public/images/eunova.jpeg";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Construction, Figma } from "lucide-react";

const products = [
  {
    name: "Templates",
    description: "Landing Pages e Dashboards de alta qualidade para seu SAAS.",
    href: "#",
    icon: RectangleGroupIcon,
  },
  {
    name: "Cursos & Videos",
    description:
      "Cursos e tutoriais para para melhorar suas habilidades em UX/UI Design",
    href: "/resources",
    icon: PlayCircleIcon,
  },
  {
    name: "UI Designs",
    description: "Arquivos de design prontos para usar no seu próximo projeto",
    href: "#",
    icon: Figma,
  },
  {
    name: "Icons",
    description: "Em Breve",
    href: "#",
    icon: Construction,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const storeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isStoreOpen) {
        setIsStoreOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        storeMenuRef.current &&
        event.target instanceof Node &&
        !storeMenuRef.current.contains(event.target)
      ) {
        setIsStoreOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStoreOpen]);

  return (
    <header className="fixed w-full bg-white border-b border-zinc-100 dark:bg-neutral-900  dark:border-zinc-800 z-50 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center gap-2">
          <a href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-2">
              <span className="sr-only">Luciano Silva</span>
              <span className="font-semibold dark:text-slate-200">
                LUCIANO SILVA
              </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200"
              onClick={() => setIsStoreOpen(!isStoreOpen)}
            >
              Loja & Recursos
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              ref={storeMenuRef}
              static
              className={`absolute inset-x-0 top-0 -z-10 bg-white dark:bg-neutral-900 pt-14 shadow-lg ring-1 ring-gray-900/5 transition ${
                isStoreOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-1 opacity-0 pointer-events-none"
              } duration-200 ease-out`}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4  gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50 border border-neutral-200 dark:hover:bg-neutral-950"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 dark:bg-neutral-950 group-hover:bg-white dark:group-hover:bg-neutral-900">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 dark:text-slate-200 group-hover:text-blue-500"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block font-semibold text-gray-900 dark:text-slate-200"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600 dark:text-slate-200">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="/projetos"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200"
          >
            Projetos
          </a>
          <a
            href="/#about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200"
          >
            Sobre
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Luciano Silva</span>
              <img alt="" src="/images/avatar-2.png" className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Loja
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/projetos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projetos
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
