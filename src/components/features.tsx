"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Settings,
  Users,
  Download,
  BookOpen,
  Star,
  MessageCircle,
} from "lucide-react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      gsap.utils.toArray(".feature-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
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

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Game Community",
      description:
        "Connect across 15+ supported games with dedicated forums and expert communities.",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Professional Tools",
      description:
        "Access cutting-edge external assistance tools for competitive gaming advantage.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Advanced Configurations",
      description:
        "Pro-level configs optimized by professional players and gaming experts.",
      color: "from-purple-700 to-purple-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert Tutorials",
      description:
        "Comprehensive guides and tutorials for mastering every supported game.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Proven Results",
      description:
        "Join thousands of satisfied users who've elevated their gaming performance.",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Elite Support",
      description:
        "Premium Discord community with direct developer access and instant support.",
      color: "from-purple-500 to-purple-400",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="parallax-bg absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-400 purple-glow"
        >
          INIURIA FORUM
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card cursor-pointer bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 hover:bg-black/90 transition-all duration-300 group"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
