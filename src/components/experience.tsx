import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-10 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-rose-500/40 group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-rose-500 bg-slate-900 shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-rose-500/20 border border-rose-400/40 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Building2 className="size-5 text-rose-300" />
          </div>
          <span className="text-base sm:text-lg font-semibold text-slate-200">
            {company}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-medium text-rose-200">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm">
            <Calendar className="size-4 text-rose-400/70" />
            <span className="text-rose-400/70">{period}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="rounded-full bg-slate-800/50 border border-rose-500/30 
              text-rose-300 hover:bg-rose-600/30 hover:text-rose-100 
              hover:shadow-[0_0_10px_rgba(244,63,94,0.6)] transition-all text-xs sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "SPAATECH, INC",
      period: "Jan 2025 - Jun 2025",
      description:
        "Worked as a full stack developer, contributed to ERP systems, designed wireframes and prepared documentation.",
      technologies: ["Angular", "Django", "TypeScript", "MySQL"],
    },
    {
      title: "Frontend Developer Intern + Tech Product Manager",
      company: "Oriens Infotech (Techno Billion AI)",
      period: "Apr 2024 - Dec 2024",
      description:
        "Worked as a Frontend Developer and also assumed the role of Tech Product Manager with responsibilities including team management, stakeholder ideation, product architecture design, and goal setting.",
      technologies: ["React", "Next.js", "TypeScript", "Redux"],
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital India Corporation",
      period: "Jan 2024 - Mar 2024",
      description:
        "Worked with the DigiLocker team on the MyBharat Website as a Frontend Developer.",
      technologies: ["Angular", "TypeScript", "Ionic"],
    },
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-4 bg-rose-500/20 border border-rose-400/40 text-rose-300 font-medium backdrop-blur-sm px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg">
            Experience
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-200 tracking-tight drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
