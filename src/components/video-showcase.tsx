"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
        sectionRef.current?.querySelector(".video-container") as Element,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * video.duration;
    video.currentTime = newTime;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    if (!isPlaying) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="video"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="parallax-bg absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-purple-400 purple-glow"
        >
          View in Action
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          See our product assistance tools in action across different games
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="video-container relative bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="/images/logo.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/tester.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <div
                ref={progressRef}
                className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer group/progress"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full relative transition-all duration-150 group-hover/progress:h-3"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    size="sm"
                    onClick={togglePlay}
                    className="bg-purple-600/80 hover:bg-purple-600 text-white border-0 w-12 h-12 rounded-full p-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-1" />
                    )}
                  </Button>

                  <Button
                    size="sm"
                    onClick={handleRestart}
                    className="bg-black/60 hover:bg-black/80 text-purple-400 border border-purple-500/30 hover:border-purple-500/50"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>

                  <Button
                    size="sm"
                    onClick={toggleMute}
                    className="bg-black/60 hover:bg-black/80 text-purple-400 border border-purple-500/30 hover:border-purple-500/50"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </Button>

                  <div className="text-sm text-gray-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    onClick={handleFullscreen}
                    className="bg-black/60 hover:bg-black/80 text-purple-400 border border-purple-500/30 hover:border-purple-500/50"
                  >
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Button
                  onClick={togglePlay}
                  className="bg-purple-600/90 hover:bg-purple-600 text-white border-0 w-20 h-20 rounded-full p-0 shadow-2xl shadow-purple-500/50"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Gaming Enhancement
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Watch how our product assistance tools provide competitive
              advantages across multiple games. See the precision, security, and
              performance that thousands of players trust. <br />
              Video by: katzenhook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
