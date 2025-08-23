import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            {/* Badge */}
            <Badge
              className="mb-4 bg-rose-500/20 border border-rose-400/40 text-rose-300 font-medium backdrop-blur-sm px-4 py-1.5 text-sm rounded-lg"
            >
              About Me
            </Badge>

            <ProfileImage className="mt-3 mb-8 block md:hidden" />

            {/* Heading */}
            <h2
              className="text-4xl font-bold mb-4 tracking-tight 
              text-rose-200 leading-tight"
            >
              Passionate about creating impactful web experiences
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-400 mb-6 text-justify leading-relaxed">
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
            <div className="flex flex-wrap gap-4 justify-start">
              {/* Github Button */}
              <Button
                className="rounded-full bg-gradient-to-r from-rose-600/90 to-pink-500/90 
                hover:from-rose-500 hover:to-pink-400 text-white font-medium 
                shadow-[0_0_18px_rgba(244,63,94,0.8)] 
                hover:scale-105 transition-all duration-300"
              >
                <GithubLogo />
                View Github
              </Button>

              {/* CV Button */}
              <Button
                variant="outline"
                className="rounded-full border border-rose-400/40 text-rose-300 font-medium
                bg-white/5 backdrop-blur-sm hover:text-pink-300 hover:border-pink-400 
                transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(244,63,94,0.6)]"
              >
                <Download />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden 
      bg-neutral-900/70 border border-rose-500/40 backdrop-blur-sm
      shadow-[0_0_20px_rgba(244,63,94,0.5)] hover:shadow-[0_0_25px_rgba(244,63,94,0.8)]
      transition-shadow duration-300"
    >
      <Image src="/placeholder.svg" alt="" className="object-cover" fill />
    </div>
  </div>
);

export default About;
