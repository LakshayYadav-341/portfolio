"use client";
import React, { useState, useMemo } from "react";
import { PinContainer } from "./ui/projectPin";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

const projects = [
  {
    title: "Mascot",
    href: "https://mascot-lilac.vercel.app/",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    github: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Mascot is a web platform that connects students with alumni for career guidance and job opportunities. Alumni can post job listings, while students can view opportunities and engage in real-time chat with alumni for mentorship and advice. Built in MERN Stack.",
    image: "/ai-profile-image.png",
    tags: ["Node.js", "Express"],
  },
];
const allTags = Array.from(
  new Set(projects.flatMap(project => project.tags || []))
).sort();

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTag, setSelectedTag] = useState("");

  const filteredProjects = useMemo(() => {
    return selectedTag
      ? projects.filter(project => project.tags?.includes(selectedTag))
      : projects;
  }, [selectedTag]);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-background/80 dark:from-gray-900 dark:to-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-primary dark:to-primary/80">
                My Projects
              </h2>
              <p className="mt-4 text-lg tracking-wide text-gray-600 dark:text-gray-200">
                A collection of my recent work and personal projects.
              </p>
            </div>
          </motion.h1>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setSelectedTag("")}
              className={`px-4 py-2 rounded-full text-sm transition-colors
              ${!selectedTag
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors
                ${selectedTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </LampContainer>
        <motion.div
          className="flex items-center justify-center gap-2 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-blue-500 dark:text-blue-400 md:text-3xl text-xl font-medium text-center 
          flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MousePointerClick className="w-6 h-6 md:w-8 md:h-8" />
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400
            bg-clip-text text-transparent font-bold"
              whileHover={{
                textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
              }}
            >
              Click on cards to test the application
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div key={index}>
              <PinContainer title={project.title} href={project.href} height="h-[30rem]">
                <div className="flex flex-col p-4 tracking-tight w-full h-[25rem] overflow-hidden bg-white dark:bg-gray-800/50 rounded-lg">
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover rounded-lg"
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

              <a className="flex items-center gap-2" href={project.github}>
                <p className="text-lg font-bold">GitHub Link - </p>
                <FaGithub />
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors dark:hover:bg-primary/80"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No projects found with the selected filter.
          </div>
        )}
      </div>
    </section>
  );
}