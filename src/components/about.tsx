"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray(".stat-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50,000+",
      label: "Active Users",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "14 Years",
      label: "Experience",
      color: "from-purple-700 to-purple-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Support",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="parallax-bg absolute inset-0 bg-black/5" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-400 purple-glow"
        >
          The Power of the Dark Side
        </h2>

        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              For over 14 years, Iniuria.us has been the premier destination for
              Counter Strike and other games assistance. Our community-driven
              approach combines cutting-edge technology with unmatched security.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="text-purple-400 font-semibold">
                "Feel the power of the dark side"
              </span>{" "}
              - Join thousands of players who have discovered their true
              potential with our licensed and secure tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From beginners to professionals, our community provides the
              resources, support, and tools needed to dominate the battlefield.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
