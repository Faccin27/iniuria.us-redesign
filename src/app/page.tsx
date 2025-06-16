"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export default function HomePage() {
  const smootherRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Initialize ScrollSmoother
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: smootherRef.current,
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      })

      // Parallax background elements
      gsap.utils.toArray(".parallax-bg").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      // Floating animations for CS characters
      gsap.utils.toArray(".floating").forEach((element: any, index) => {
        gsap.to(element, {
          y: -20,
          duration: 2 + index * 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <div ref={smootherRef}>
        <div className="min-h-screen bg-zinc-950 relative">
          {/* Lightning and CS:GO character effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Lightning effects */}
            <div className="lightning"></div>
            <div className="lightning"></div>
            <div className="lightning"></div>
            <div className="lightning"></div>
            <div className="lightning"></div>

            {/* CS:GO Characters with parallax */}
            <div className="csgo-character csgo-character-1 parallax-bg" data-speed="0.5"></div>
            <div className="csgo-character csgo-character-2 parallax-bg" data-speed="0.3"></div>
            <div className="csgo-character csgo-character-3 parallax-bg" data-speed="0.7"></div>
            <div className="csgo-character csgo-character-4 parallax-bg" data-speed="0.4"></div>

            {/* Energy lines */}
            <div className="energy-line" style={{ top: "20%" }}></div>
            <div className="energy-line" style={{ top: "60%", animationDelay: "1s" }}></div>
            <div className="energy-line" style={{ top: "80%", animationDelay: "2s" }}></div>

            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
