"use client"

import { ReactLenis, useLenis } from 'lenis/react'


export function SmoothScroll({children}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root  options={{
      offset: 0,
      lerp: 0.08,
      duration: 1.5,
      immediate: false,
      lock: false,
      force: false,
      
    }}  >
      {children}
    </ReactLenis>
  )
}