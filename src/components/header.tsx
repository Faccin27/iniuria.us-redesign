"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30 h-[120px]"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center pt-2">
          <Image
            src="/images/logo.png"
            alt="Iniuria.us"
            width={700}
            height={0}
            className="h-full w-full"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#games"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Games
          </a>
          <a
            href="#video"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Demo
          </a>
          <a
            href="#about"
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0">
            Get Started
          </Button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/30">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#games"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Games
            </a>
            <a
              href="#video"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Demo
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
