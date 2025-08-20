"use client"

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import ContactModal from "./ContactModal"
import { Button } from "./ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="fixed w-full  bg-white dark:bg-neutral-900 border-t border-b border-gray-200 dark:border-gray-700 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-2">
          <a href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-2">
              <span className="sr-only">Luciano Silva</span>
              <img
                src="/images/Logo Luciano - Horizontal.svg"
                alt="Luciano Silva"
                className="h-16 w-auto hidden sm:block"
              />
              <img
                src="/images/Logo Luciano - Vertical.svg"
                alt="Luciano Silva"
                className="h-20 w-auto block sm:hidden"
              />
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-200">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          <a href="/projetos" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">
            Projetos
          </a>
          <a href="/#about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">
            Sobre
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="hover:bg-blue-600 px-8 py-4 bg-blue-500 rounded-md text-white font-light transition duration-200 ease-linear ml-4">
            Entrar em contato
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 dark:bg-neutral-950  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Luciano Silva</span>
              <img src="/images/Logo Luciano - Vertical.svg" alt="Luciano Silva" className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-20">
                <a
                  href="/projetos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:bg-neutral-900">
                  Projetos
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:bg-neutral-900">
                  Sobre
                </a>
                <div className="-mx-3 px-3 py-2">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="hover:bg-blue-600 px-8 py-4 bg-blue-500 rounded-md text-white font-light transition duration-200 ease-linear w-full justify-center">
                    Entrar em contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
