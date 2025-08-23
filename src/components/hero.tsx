"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Instagram } from "lucide-react";

// Replace with your actual profile image path
const PROFILE_IMAGE = "/unnamed.jpg";

const TITLES = [
  "AI Engineer",
  "Fullstack Developer",
  "Product Innovator",
  "Tech Visionary",
  "UI/UX Explorer",
  "Open Source Builder",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Parallax state
  // const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TITLES.length);
        setFade(true);
      }, 250);
    }, 1500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // useEffect(() => {
  //   const handleScroll = () => setOffsetY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-[1] text-center max-w-screen-lg flex flex-col items-center">
        {/* Profile Image with Neon Glow */}
        <div className="relative">
          <img
            src={PROFILE_IMAGE}
            alt="Profile"
            className="w-64 h-64 mt-10 rounded-full border-4 border-rose-500/70 object-cover 
            shadow-[0_0_45px_rgba(244,63,94,0.7)] hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-rose-500/25 blur-3xl -z-10" />
        </div>

        {/* Animated Titles */}
        <div className="h-14 mt-6 flex items-center justify-center">
          <span
            className={cn(
              "inline-block text-4xl md:text-5xl font-extrabold tracking-tight",
              "bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
              "transition-all duration-500 ease-in-out drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]",
              fade
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95"
            )}
          >
            {TITLES[index]}{" "}
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-[18px] md:text-2xl text-neutral-300 leading-relaxed drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]">
          Hi, I’m{" "}
          <span className="font-semibold text-rose-300">Shantanu Saha</span>, a
          passionate engineer who believes in{" "}
          <span className="text-pink-400">building and breaking solutions</span>{" "}
          to bring impact 🚀
        </p>

        {/* Social Media Buttons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-rose-600/90 to-pink-500/90 
            hover:from-rose-500 hover:to-pink-400 hover:scale-110 
            shadow-[0_0_25px_rgba(244,63,94,0.8)] transition-all duration-300 p-4 flex items-center"
            aria-label="GitHub"
          >
            <Github className="h-7 w-7 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rose-400/70 text-rose-300 
            hover:text-pink-200 hover:border-pink-400 
            hover:shadow-[0_0_20px_rgba(244,63,94,0.7)] 
            transition-all duration-300 p-4 flex items-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-7 w-7" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-pink-400/70 text-pink-300 
            hover:text-pink-200 hover:border-pink-400 
            hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] 
            transition-all duration-300 p-4 flex items-center"
            aria-label="Instagram"
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
