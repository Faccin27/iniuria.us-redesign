"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black/90 backdrop-blur-sm border-t border-purple-500/30 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="Iniuria.us"
                width={400}
                height={400}
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium CS2 external assistance - licensed, secure, and approved.
              Join thousands of satisfied customers worldwide.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white border-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Support
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Counter-Strike Source
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Counter-Strike 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Tom Clancy's The Division
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  DOOM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Battlefiel 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Battlefield V
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Fallout 76
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Fórum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Tutorials
                </a>
              </li>{" "}
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Join Our Discord
            </h3>
            <p className="text-gray-400">
              Connect with the community and get real-time support
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0 flex-1">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord Server
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              50K+ Members
            </Button>
          </div>
          <div className="text-center mt-4 text-sm text-gray-500">
            Get instant support, share configs, and connect with the community
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 md:text-left">
              © {new Date().getFullYear()} Iniuria.us. All rights reserved.
            </p>
            <div>
              <Link
                href="https://faccindev.pro"
                target="_blank"
                className="text-gray-400 font-medium cursor-context-menu"
              >
                Developed by:{" "}
                <span className="text-red-500 hover:opacity-80 cursor-pointer">
                  FaccinDev
                </span>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end items-center space-x-4 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-400" />
                <span>Secure & Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
