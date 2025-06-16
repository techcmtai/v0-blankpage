"use client"

import { type ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (pathname !== window.location.pathname) {
      setTransitionStage("fadeOut")
      setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage("fadeIn")
      }, 300)
    }
  }, [pathname, children])

  return (
    <div className={`transition-opacity duration-300 ${transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"}`}>
      {displayChildren}
    </div>
  )
}
