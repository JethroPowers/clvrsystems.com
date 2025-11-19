"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(
  sectionIds: string[],
  options: {
    threshold?: number
    rootMargin?: string
  } = {},
) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const { threshold = 0.2, rootMargin = "0px 0px -70% 0px" } = options

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin,
        threshold,
      },
    )

    sectionIds.forEach((id) => {
      if (id) {
        // Skip empty IDs
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        if (id) {
          // Skip empty IDs
          const element = document.getElementById(id)
          if (element) {
            observer.unobserve(element)
          }
        }
      })
    }
  }, [sectionIds, options])

  return activeId
}
