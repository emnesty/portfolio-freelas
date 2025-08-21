"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Projeto {
  title: string
  images: string[]
  description: string
  descriptiondetails: string
  descriptiondetails2?: string
  descriptiondetails3?: string
  badge?: string
  badge2?: string
  badge3?: string
  urlsite?: string
  urlgithub?: string
  urlfigma?: string
}

export default function ProjetoDetalhesClient({ projeto }: { projeto: Projeto }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex justify-center items-center">
          <Image
            src={projeto.images[currentImageIndex]}
            alt={projeto.title}
            width={800}
            height={800}
            className="rounded-md object-contain"
          />
          <div className="absolute bottom-0 bg-white dark:bg-neutral-950 h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
        </div>
        <div className="flex flex-row justify-center my-8 flex-wrap">
          {projeto.images.map((image, idx) => (
            <Image
              key={`image-thumbnail-${idx}`}
              src={image}
              alt={`Project thumbnail ${idx}`}
              width={240}
              height={160}
              className={`h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border-4 rounded-lg cursor-pointer ${
                idx === currentImageIndex
                  ? "dark:border-neutral-500 border-neutral-500"
                  : "dark:border-neutral-800 border-neutral-100"
              }`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>
        <div className="flex lg:flex-row gap-4 items-start flex-col mt-20">
          <h1 className="text-zinc-800 dark:text-zinc-100 text-2xl">{projeto.title}</h1>
          <div className="flex gap-4 justify-center align-center">
            {projeto.badge && (
              <span className="text-xs md:text-xs lg:text-xs flex justify-center align-center bg-gray-100 px-4 py-2 rounded-lg">
                {projeto.badge}
              </span>
            )}
            {projeto.badge2 && (
              <span className="text-xs md:text-xs lg:text-xs flex justify-center align-center bg-gray-100 px-4 py-2 rounded-lg">
                {projeto.badge2}
              </span>
            )}
            {projeto.badge3 && (
              <span className="text-xs md:text-xs lg:text-xs flex justify-center content-center bg-gray-100 px-4 py-2 rounded-lg">
                {projeto.badge3}
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="w-full mt-4 text-zinc-600 dark:text-zinc-400">{projeto.description}</p>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-zinc-600 dark:text-zinc-400 mt-4">
          <p>{projeto.descriptiondetails}</p>
          <p>{projeto.descriptiondetails2}</p>
          <p>{projeto.descriptiondetails3}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center justify-center">
            <Link href="/projetos">
              <button className="rounded-md bg-white dark:bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border dark:border-neutral-600 border-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-900">
                Voltar para projetos
              </button>
            </Link>
          </div>
          {projeto.urlsite && (
            <a
              href={projeto.urlsite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md flex justify-center items-center gap-2 bg-white dark:bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border dark:border-neutral-600 border-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-900">
              Live Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
          {projeto.urlgithub && (
            <a
              href={projeto.urlgithub}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white dark:bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border dark:border-neutral-600 border-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-900">
              GitHub Repo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
          {projeto.urlfigma && (
            <a
              href={projeto.urlfigma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md flex items-center justify-center gap-2 bg-white dark:bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border dark:border-neutral-600 border-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-900">
              Figma Prototype
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M13 18l6-6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
