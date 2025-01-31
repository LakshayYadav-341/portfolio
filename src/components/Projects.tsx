"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { MousePointerClick } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Lazy load components
const PinContainer = dynamic(() => import("./ui/projectPin"));

const projects = [
  {
    title: "Mascot",
    href: "https://mascot-lilac.vercel.app/",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description:
      "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/mascot.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "S R Sports",
    href: "https://www.srsportsacademy.in",
    github: "#",
    description:
      "Ongoing Freelancing project for S R sports academy. The website is built using Next.js and Tailwind CSS. The website is still under development.",
    image: "/srsports.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Freelancing"],
  },
  {
    title: "PortFolio",
    href: "https://lakshayportfolio-ten.vercel.app/",
    github: "https://github.com/LakshayYadav-341/portfolio",
    description: "A beautiful frontend focused portfolio website built using Next.js and Tailwind CSS. The website is hosted on Vercel.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "CPPSnippets",
    href: "https://marketplace.visualstudio.com/items?itemName=LakshayYadav.sidCppSnippets",
    github: "https://github.com/LakshayYadav-341/CppSnippets",
    description: "A Visual Studio Code extension that provides a collection of C++ code snippets for faster coding. The extension is published on the Visual Studio Code Marketplace.",
    image: "/cpp.png",
    tags: ["Visual Studio Code", "C++", "Extension"],
  },
  {
    title: "Make Easy",
    href: "https://make-easy-gamma.vercel.app/",
    github: "https://github.com/LakshayYadav-341/Make-Easy.git",
    description: "A simple react based frontend web application; design inspired from Scrimba. The app is built using React and bootstrap.",
    image: "/makeeasy.png",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Weather App",
    href: "https://weather-app-six-pi-35.vercel.app/",
    github: "https://github.com/LakshayYadav-341/Weather-App",
    description: "A simple weather app that fetches weather data using the OpenWeatherMap API. The app is built using Angular and SCSS.",
    image: "/weather.png",
    tags: ["Angular", "SCSS", "OpenWeatherMap API"],
  },
  {
    title: "Robotic Arm Configuration",
    href: "https://robotic-arm-configurator.vercel.app/",
    github: "https://github.com/LakshayYadav-341/robotic-arm-configurator",
    description: "A simple web application for understanding basics of Three.js.",
    image: "/robot.png",
    tags: ["React", "Three.js"],
  },
];
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags || []))
).sort();

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTag, setSelectedTag] = useState("");

  const filteredProjects = useMemo(() => {
    return selectedTag
      ? projects.filter((project) => project.tags?.includes(selectedTag))
      : projects;
  }, [selectedTag]);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section className="w-full mt-10 py-20 bg-gradient-to-b from-background to-background/80 dark:from-gray-900 dark:to-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-center text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
        >
          My Projects
        </h1>
        <p className="mt-4 text-lg tracking-wide text-center text-gray-600 dark:text-gray-200">
          A collection of my recent work and personal projects.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center my-8">
          <button
            onClick={() => setSelectedTag("")}
            aria-label="Show all projects"
            className={`px-4 py-2 rounded-full text-sm transition-colors ${!selectedTag
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              aria-label={`Show projects with ${tag}`}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${selectedTag === tag
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center gap-2 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-blue-500 dark:text-blue-400 md:text-3xl text-xl font-medium text-center flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MousePointerClick className="w-6 h-6 md:w-8 md:h-8" />
            </motion.span>
            <motion.span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              Click on cards to test the application
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div key={index}>
              <PinContainer
                title={project.title}
                href={project.href}
                height="h-[30rem]"
              >
                <div className="flex flex-col p-4 tracking-tight w-full h-[25rem] overflow-hidden bg-white dark:bg-gray-800/50 rounded-lg">
                  <div className="relative w-full h-44 mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-2xl mb-2 truncate text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </PinContainer>
              <a
                className="flex items-center gap-2"
                href={project.github}
                aria-label={`GitHub link for ${project.title}`}
              >
                <p className="text-lg font-bold">GitHub Link - </p>
                <FaGithub />
              </a>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              aria-label="Load more projects"
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors dark:hover:bg-primary/80"
            >
              Load More Projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No projects found with the selected filter.
          </div>
        )}
      </div>
    </section>
  );
}
