"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

// React Icons
import {
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="relative py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 sm:gap-12">
          {/* Tech Stack Grid - ONLY on desktop */}
          <div className="hidden md:block">
            <TechStackGrid className="flex-shrink-0" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <Badge
              className="mb-4 bg-red-600/20 border border-red-500/40 text-red-300 font-medium backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm rounded-lg"
            >
              About Me
            </Badge>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight 
              text-red-200 leading-snug sm:leading-tight"
            >
              Passionate about creating impactful web experiences
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-400 mb-6 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
              I’m Shantanu Saha, a B.Tech graduate in Electronics and Communication
              Engineering, passionate about software development, IoT solutions, and
              leading projects that create real-world value. My journey has been shaped
              by building applications and systems that combine technical depth with
              practical impact.
              <br />
              Driven by impact, I focus on turning ideas into scalable solutions—whether
              it’s developing assistive IoT devices, crafting innovative software, or
              guiding teams toward delivering successful outcomes. I believe technology
              should not only solve problems but also inspire meaningful change.
              <br />
              Beyond development, I actively engage in hackathons, collaboration, and
              community building, where I continue to grow as both a technologist and a
              leader.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Shantanu7854/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="rounded-full bg-gradient-to-r from-red-700/90 to-red-500/90 
                  hover:from-red-600 hover:to-rose-500 text-white font-medium 
                  shadow-[0_0_15px_rgba(220,38,38,0.8)] 
                  hover:scale-105 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6"
                >
                  <GithubLogo />
                  View Github
                </Button>
              </a>

              <a
                href="https://drive.google.com/file/d/1AOvKw79EY0hmLZsD1OJmMESGWYIFQ0xx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full border border-red-400/40 text-red-300 font-medium
                  bg-white/5 backdrop-blur-sm hover:text-red-200 hover:border-red-400 
                  transition-all duration-300 
                  hover:shadow-[0_0_12px_rgba(220,38,38,0.6)] text-sm sm:text-base px-4 sm:px-6"
                >
                  <Download />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tech Stack Grid Component (desktop only)
const TechStackGrid = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const icons = [
    { Icon: SiCplusplus, color: "text-blue-500" },
    { Icon: SiPython, color: "text-yellow-400" },
    { Icon: SiHtml5, color: "text-orange-500" },
    { Icon: SiCss3, color: "text-blue-400" },
    { Icon: SiJavascript, color: "text-yellow-300" },
    { Icon: SiTypescript, color: "text-blue-600" },
    { Icon: SiAngular, color: "text-red-600" },
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiNextdotjs, color: "text-white" },
    { Icon: SiFlask, color: "text-gray-300" },
    { Icon: SiDjango, color: "text-green-600" },
    { Icon: SiTailwindcss, color: "text-sky-400" },
    { Icon: SiMysql, color: "text-orange-400" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: SiGit, color: "text-red-500" },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-red-400/30 shadow-lg",
        className
      )}
    >
      {icons.map(({ Icon, color }, i) => (
        <div
          key={i}
          className={`flex items-center justify-center text-3xl ${color} hover:scale-110 transition-transform duration-300`}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default About;
