"use client"

import { useEffect } from "react"
import { ReactLenis, useLenis } from "lenis/react"

export function SmoothScroll({ children }) {
  const lenis = useLenis()

  // Intercept anchor clicks and use lenis to scroll smoothly to the target
  useEffect(() => {
    if (!lenis) return

    const headerEl = document.querySelector("header")
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0

    function onDocumentClick(e) {
      const link = e.target.closest && e.target.closest('a[href*="#"]')
      if (!link) return

      const href = link.getAttribute("href")
      if (!href) return

      // Only handle hash links
      const hashIndex = href.indexOf("#")
      if (hashIndex === -1) return

      const hash = href.slice(hashIndex)

      // find target element
      const targetEl = document.querySelector(hash)
      if (!targetEl) return

      e.preventDefault()

      const top = window.scrollY + targetEl.getBoundingClientRect().top - headerHeight
      // use lenis to scroll to computed position
      try {
        lenis.scrollTo(top)
      } catch (err) {
        // fallback to native smooth scroll
        window.scrollTo({ top, behavior: "smooth" })
      }
    }

    document.addEventListener("click", onDocumentClick)
    return () => document.removeEventListener("click", onDocumentClick)
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        offset: 0,
        lerp: 0.08,
        duration: 1.5,
        immediate: false,
        lock: false,
        force: false,
      }}>
      {children}
    </ReactLenis>
  )
}
