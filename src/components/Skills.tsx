import React from "react";
import { SkillsDock } from "@/components/ui/floating-dock";
import {
  IconBrandReact,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandAws,
  IconDatabase,
  IconBrandAngular,
  IconBrandDocker,
} from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Skills() {
  const skills = [
    // Programming Languages
    {
      name: "C++",
      icon: (
        <IconDatabase className="h-full w-full text-purple-600 dark:text-purple-400" />
      ),
      proficiency: 90,
      description:
        "Proficient in advanced algorithms, data structures, and system-level programming.",
    },
    {
      name: "JavaScript",
      icon: (
        <IconBrandJavascript className="h-full w-full text-yellow-500 dark:text-yellow-400" />
      ),
      proficiency: 90,
      description:
        "Expert in client-side and server-side scripting with ES6+ features.",
    },
    {
      name: "Solidity",
      icon: (
        <IconBrandDocker className="h-full w-full text-gray-600 dark:text-gray-400" />
      ),
      proficiency: 50,
      description:
        "Experience with developing, testing, and deploying Ethereum smart contracts.",
    },

    // Frontend
    {
      name: "HTML",
      icon: (
        <IconBrandHtml5 className="h-full w-full text-orange-500 dark:text-orange-400" />
      ),
      proficiency: 100,
      description: "Expert in semantic markup and responsive web design principles.",
    },
    {
      name: "React.js",
      icon: (
        <IconBrandReact className="h-full w-full text-blue-500 dark:text-blue-400" />
      ),
      proficiency: 90,
      description:
        "Advanced React development with modern hooks, state management, and component design.",
    },
    {
      name: "Angular",
      icon: (
        <IconBrandAngular className="h-full w-full text-red-500 dark:text-red-400" />
      ),
      proficiency: 80,
      description:
        "Experienced in building dynamic and scalable front-end applications.",
    },
    {
      name: "Next.js",
      icon: (
        <IconBrandReact className="h-full w-full text-black dark:text-gray-200" />
      ),
      proficiency: 90,
      description: "Full-stack web applications with server-side rendering.",
    },
    {
      name: "SCSS",
      icon: (
        <IconBrandCss3 className="h-full w-full text-pink-500 dark:text-pink-400" />
      ),
      proficiency: 80,
      description:
        "Efficient styling with modular and reusable SCSS components.",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <IconBrandTailwind className="h-full w-full text-cyan-500 dark:text-cyan-400" />
      ),
      proficiency: 80,
      description: "Responsive design, utility-first CSS, and custom component styling.",
    },

    // Backend
    {
      name: "Node.js",
      icon: (
        <IconBrandNodejs className="h-full w-full text-green-600 dark:text-green-500" />
      ),
      proficiency: 80,
      description: "Backend development, RESTful API design, and server-side JavaScript.",
    },
    {
      name: "Express.js",
      icon: (
        <IconBrandNodejs className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      proficiency: 80,
      description: "Building RESTful APIs and middleware for web applications.",
    },
    {
      name: "Smart Contracts",
      icon: (
        <IconBrandDocker className="h-full w-full text-gray-600 dark:text-gray-400" />
      ),
      proficiency: 50,
      description: "Development and testing of Ethereum-based smart contracts.",
    },

    // Databases
    {
      name: "MySQL",
      icon: (
        <IconDatabase className="h-full w-full text-blue-600 dark:text-blue-500" />
      ),
      proficiency: 90,
      description: "Designing efficient relational database systems.",
    },
    {
      name: "MongoDB",
      icon: (
        <IconDatabase className="h-full w-full text-green-500 dark:text-green-400" />
      ),
      proficiency: 90,
      description: "Document-based database with scalable architectures.",
    },
    {
      name: "PostgreSQL",
      icon: (
        <IconDatabase className="h-full w-full text-blue-800 dark:text-blue-700" />
      ),
      proficiency: 70,
      description: "Advanced SQL querying and relational database design.",
    },

    // Cloud
    {
      name: "AWS",
      icon: (
        <IconBrandAws className="h-full w-full text-orange-600 dark:text-orange-500" />
      ),
      proficiency: 60,
      description: "Experience in deploying and managing cloud infrastructure.",
    },
  ];

  const Title = [
    {
        text: "MY",
        className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
    },
    {
        text: "TECHNICAL",
        className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
    },
    {
        text: "SKILLS",
        className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
    },
    
];

  return (
    <div className="flex flex-col items-center justify-center min-h-[35rem] w-full p-4">
      <h2 className="text-6xl font-bold mb-8 text-center dark:text-white">
        <TypewriterEffectSmooth words={Title} />
      </h2>

      <div className="w-full max-w-4xl">
        <SkillsDock
          skills={skills}
          desktopClassName="mb-8"
          mobileClassName="justify-center"
        />
      </div>
    </div>
  );
}
