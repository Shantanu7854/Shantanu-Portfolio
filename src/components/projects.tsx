import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-rose-500/30 bg-slate-900/30 backdrop-blur-sm transition-all hover:border-rose-400/60 hover:bg-slate-800/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]">
      {/* Project Image */}
      <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-800/50">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-rose-200">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="rounded-full bg-slate-800/50 border border-rose-500/30 text-rose-300 
              hover:bg-rose-600/30 hover:text-rose-100 
              hover:shadow-[0_0_10px_rgba(244,63,94,0.5)] transition-all text-xs sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {liveUrl && (
            <Button
              className="rounded-full bg-rose-500 hover:bg-rose-400 text-slate-900 font-medium 
              shadow-lg hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all duration-300 
              border border-rose-400/50 text-sm sm:text-base"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              className="rounded-full border border-rose-400/40 text-rose-300 font-medium 
              hover:bg-rose-500/10 hover:text-rose-100 hover:border-rose-300/50 
              backdrop-blur-sm transition-all duration-300 shadow-none bg-transparent text-sm sm:text-base"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "SyllabiWise",
      description:
        "An AI-powered platform that bridges academic syllabi with curated YouTube playlists for personalized learning.",
      image: "/Project 2.png",
      technologies: ["React", "Django", "JWT Auth", "Gemini API", "Context API"],
      liveUrl: "https://syllabi-wise-frontend.vercel.app/",
      githubUrl: "https://github.com/Shantanu7854/SyllabiWise",
    },
    {
      title: "Cab Map",
      description:
        "A web app that extracts precise addresses from Google Maps links and enables cab booking with distance and fare estimation.",
      image: "/Project 1.png",
      technologies: ["Next.js", "Flask", "Unalix", "Open Street Map API"],
      liveUrl: "https://map-link-locator-frontend.vercel.app/",
      githubUrl: "https://github.com/Shantanu7854/Cab-Map",
    },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-4 bg-rose-500/20 border border-rose-400/40 text-rose-300 font-medium backdrop-blur-sm px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg">
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-rose-200 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]">
            Some of my works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
