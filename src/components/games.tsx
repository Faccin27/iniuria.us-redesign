"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  Users,
  Download,
  MessageCircle,
  Settings,
  ShoppingCart,
} from "lucide-react";

export default function Games() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [userPurchases, setUserPurchases] = useState<string[]>([
    // fake user purchases
    "Counter-Strike 2",
    "Counter-Strike: Source",
  ]);

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

      gsap.utils.toArray(".game-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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

  const games = [
    {
      name: "Counter-Strike 2",
      status: "v5 Test",
      users: "205 Active",
      viewing: "32 Viewing",
      description: "Latest CS2 external assistance with advanced features",
      price: "39.99",
      categories: ["Support", "Discussion"],
    },
    {
      name: "Counter-Strike: Source",
      status: "Stable",
      users: "150+ Active",
      viewing: "18 Viewing",
      description: "Classic CS:Source support and community",
      price: "29.99",
      categories: ["Support", "Discussion"],
    },
    {
      name: "Tom Clancy's The Division",
      status: "Active",
      users: "89 Active",
      viewing: "12 Viewing",
      description: "Division series external assistance tools",
      price: "34.99",
      categories: ["Support", "Discussion"],
    },
    {
      name: "DOOM",
      status: "Supported",
      users: "45 Active",
      viewing: "8 Viewing",
      description: "DOOM series enhancement tools",
      price: "24.99",
      categories: ["Support", "Discussion"],
    },
    {
      name: "Battlefield Series",
      status: "Multi-Version",
      users: "120+ Active",
      viewing: "25 Viewing",
      description: "Battlefield 1 & V external assistance",
      price: "44.99",
      categories: [
        "BF1 Support",
        "BF1 Discussion",
        "BFV Support",
        "BFV Discussion",
      ],
    },
    {
      name: "Fallout 76",
      status: "Updated",
      users: "67 Active",
      viewing: "15 Viewing",
      description: "Fallout 76 enhancement and support tools",
      price: "32.99",
      categories: ["Support", "Discussion"],
    },
  ];

  const handlePurchase = (gameName: string) => {
    setUserPurchases([...userPurchases, gameName]);
  };

  return (
    <section
      id="games"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="parallax-bg absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-purple-400 purple-glow"
        >
          Supported Games Arsenal
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Professional external assistance across multiple gaming platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => {
            const isPurchased = userPurchases.includes(game.name);

            return (
              <div
                key={index}
                className={`game-card relative border rounded-2xl p-8 transition-all duration-300 group hover:transform hover:scale-105 flex flex-col h-full ${
                  isPurchased
                    ? "border-purple-500/50 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/25"
                    : "border-purple-500/30 hover:border-purple-500/50"
                }`}
              >
                {!isPurchased && (
                  <div className="absolute top-10 right-4 text-sm text-purple-400 font-semibold">
                    from - ${game.price}
                  </div>
                )}

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Settings className="w-4 h-4 mr-1" />
                    Selected
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors pr-20">
                      {game.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="text-green-400 font-semibold">
                        {game.status}
                      </span>
                      <span className="text-gray-400">{game.users}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-400 mb-4">
                      <Users className="w-4 h-4" />
                      {game.viewing}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {game.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Available Sections:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {game.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  {isPurchased ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-sm border-purple-500 hover:text-white text-purple-400 hover:bg-purple-500/10 bg-transparent group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Access
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handlePurchase(game.name)}
                      className="flex-1 text-sm border-purple-500 hover:text-white text-purple-400 hover:bg-purple-500/10 bg-transparent group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300"
                      variant="outline"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy Product
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/50 hover:text-white text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/50 hover:text-white text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            View All Games & Premium Features
          </Button>
        </div>
      </div>
    </section>
  );
}
