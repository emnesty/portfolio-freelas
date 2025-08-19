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
    <header
      className="fixed w-full bg-white dark:bg-neutral-900 border-t border-b border-gray-200 dark:border-gray-700 z-50"
      style={{
        height: "72px",
      }}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-2">
          <a href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-2">
              <span className="sr-only">Luciano Silva</span>
              <span className="font-semibold dark:text-slate-200">LUCIANO SILVA</span>
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
          <Button color="blue" onClick={() => setContactOpen(true)} className="ml-4">
            Entrar em contato
          </Button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 dark:bg-neutral-950  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Luciano Silva</span>
              <img alt="" src="/images/avatar-2.png" className="h-10 w-auto" />
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
              <div className="space-y-2 py-6">
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
                  <Button color="blue" onClick={() => setContactOpen(true)} className="w-full justify-center">
                    Entrar em contato
                  </Button>
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
