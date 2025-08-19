"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; 2025 Luciano Silva, Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="p-4 rounded-md border border-zinc-100 dark:border-zinc-700 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Voltar ao topo">
            <ArrowUp className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
