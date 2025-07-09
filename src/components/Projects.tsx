"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Types
type Project = {
  title: string;
  href?: string;
  github?: string;
  description: string;
  image: string;
  tags: string[];
};

// Lazy load unused component (if needed in future)
const PinContainer = dynamic(() => import("./ui/projectPin"), { ssr: false });

const projects: Project[] = [
  {
    title: "Mascot",
    href: "https://mascot-lilac.vercel.app/",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description:
      "Mascot is a web platform that connects students with alumni for career guidance and job opportunities.",
    image: "/mascot.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "S R Sports",
    href: "https://www.srsportsacademy.in",
    description:
      "Ongoing Freelancing project for S R sports academy. Built using Next.js and Tailwind CSS.",
    image: "/srsports.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Freelancing"],
  },
  {
    title: "PortFolio",
    href: "https://lakshayportfolio-ten.vercel.app/",
    github: "https://github.com/LakshayYadav-341/portfolio",
    description:
      "A beautiful frontend focused portfolio website built using Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "CPPSnippets",
    href: "https://marketplace.visualstudio.com/items?itemName=LakshayYadav.sidCppSnippets",
    github: "https://github.com/LakshayYadav-341/CppSnippets",
    description:
      "A VS Code extension that provides a collection of C++ code snippets for faster coding.",
    image: "/cpp.png",
    tags: ["Visual Studio Code", "C++", "Extension"],
  },
  {
    title: "Make Easy",
    href: "https://make-easy-gamma.vercel.app/",
    github: "https://github.com/LakshayYadav-341/Make-Easy.git",
    description:
      "A simple React app inspired by Scrimba UI, built using React and Bootstrap.",
    image: "/makeeasy.png",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Weather App",
    href: "https://weather-app-six-pi-35.vercel.app/",
    github: "https://github.com/LakshayYadav-341/Weather-App",
    description:
      "A weather app that fetches data from OpenWeatherMap API. Built with Angular and SCSS.",
    image: "/weather.png",
    tags: ["Angular", "SCSS", "OpenWeatherMap API"],
  },
  {
    title: "Robotic Arm Config",
    href: "https://robotic-arm-configurator.vercel.app/",
    github: "https://github.com/LakshayYadav-341/robotic-arm-configurator",
    description: "A web app for exploring basics of Three.js.",
    image: "/robot.png",
    tags: ["React", "Three.js"],
  },
];

const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

const isTouchDevice = () => {
  return typeof window !== "undefined" && "ontouchstart" in window;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isTouchDevice() || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const showOverlay = isTouchDevice() ? isInView : isHovered;

  return (
    <div
      key={index}
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => !isTouchDevice() && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice() && setIsHovered(false)}
    >
      <div className="flex flex-col p-4 h-[25rem] overflow-hidden bg-white dark:bg-gray-800/50 rounded-lg shadow-md transition-transform duration-300">
        <div className="relative w-full h-44 mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover rounded-lg transition-transform duration-500 ${
              showOverlay ? "scale-110" : "scale-100"
            }`}
            priority={index < 3} // Only prioritize first few images
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 z-10 bg-black/80 text-white flex items-center justify-center transition-opacity duration-300 ${
              showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl underline hover:text-primary transition"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={20} /> GitHub
                </a>
              )}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl underline hover:text-primary transition"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaExternalLinkAlt size={18} /> Live
                </a>
              )}
            </div>
          </div>
        </div>

        <h3 className="font-bold text-2xl mb-2 truncate text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTag, setSelectedTag] = useState("");

  const filteredProjects = useMemo(() => {
    return selectedTag
      ? projects.filter((project) => project.tags.includes(selectedTag))
      : projects;
  }, [selectedTag]);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section
      id="projects"
      className="w-full mt-10 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="mt-4 text-lg tracking-wide text-center text-gray-600 dark:text-gray-200">
          A collection of my recent work and personal projects.
        </p>

        {/* TAG FILTERS */}
        <div className="flex flex-wrap gap-2 justify-center my-8">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              !selectedTag
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            }`}
            aria-label="Show all projects"
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
              aria-label={`Filter projects by ${tag}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .slice(0, visibleProjects)
            .map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors dark:hover:bg-primary/80"
              aria-label="Load more projects"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No projects found with the selected filter.
          </div>
        )}
      </div>
    </section>
  );
}