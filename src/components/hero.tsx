"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Shield, Crown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )

      // Background INIURIA text parallax
      gsap.to(bgTextRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // CS2 character floating animation
      gsap.utils.toArray(".cs-character").forEach((element: any, index) => {
        gsap.set(element, { rotation: Math.random() * 20 - 10 })
        gsap.to(element, {
          y: -30,
          rotation: "+=10",
          duration: 3 + index * 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[140px]"
    >
      {/* Background INIURIA text */}
      <div ref={bgTextRef} className="iniuria-bg">
        INIURIA
      </div>

      {/* Hexagon patterns */}
      <div className="hex-pattern" style={{ top: "10%", left: "10%" }}></div>
      <div className="hex-pattern" style={{ top: "20%", right: "15%", animationDelay: "2s" }}></div>
      <div className="hex-pattern" style={{ bottom: "15%", left: "20%", animationDelay: "4s" }}></div>
      <div className="hex-pattern" style={{ bottom: "25%", right: "10%", animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 text-purple-400 purple-glow">
          INIURIA.US
        </h1>

        <p ref={subtitleRef} className="text-2xl md:text-3xl text-purple-300 mb-4 font-semibold italic">
          "Feel the power of the dark side"
        </p>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Multi-Game External Assistance Hub
          <br />
          <span className="text-purple-400">Licensed • Secure • Undetected • Professional</span>
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Crown className="mr-2" size={20} />
            Unlock Premium Access
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 hover:text-white px-8 py-4 text-lg font-semibold  shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Shield className="mr-2" size={20} />
            View All Games
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
            <div className="text-gray-400 text-sm">Supported Games</div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400 mb-1">50K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400 mb-1">14+ Years</div>
            <div className="text-gray-400 text-sm">Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
