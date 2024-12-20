import React from "react";
import { SkillsDock } from "@/components/ui/floating-dock";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";



export function Skills() {
  const skills = [
    {
      name: "C++",
      icon: (
        <Image
          width={100}
          height={100}
          src="/cpp.svg"
          alt="C++ logo"
          className="h-full w-full text-purple-600 dark:text-purple-400"
        />
      ),
      proficiency: 90,
      description:
        "Proficient in advanced algorithms, data structures, and system-level programming.",
    },
    {
      name: "JavaScript",
      icon: (
        <Image
          width={100}
          height={100}
          src="/js.svg"
          alt="JavaScript logo"
          className="h-full w-full text-yellow-500 dark:text-yellow-400"
        />
      ),
      proficiency: 90,
      description:
        "Expert in client-side and server-side scripting with ES6+ features.",
    },
    {
      name: "Solidity",
      icon: (
        <Image
          width={100}
          height={100}
          src="/solidity.svg"
          alt="Solidity logo"
          className="h-full w-full text-gray-600 dark:text-gray-400"
        />
      ),
      proficiency: 50,
      description:
        "Experience with developing, testing, and deploying Ethereum smart contracts.",
    },
    {
      name: "HTML",
      icon: (
        <Image
          width={100}
          height={100}
          src="/html5.svg"
          alt="HTML5 logo"
          className="h-full w-full text-orange-500 dark:text-orange-400"
        />
      ),
      proficiency: 100,
      description:
        "Expert in semantic markup and responsive web design principles.",
    },
    {
      name: "React.js",
      icon: (
        <Image
          width={100}
          height={100}
          src="/react.svg"
          alt="React.js logo"
          className="h-full w-full text-blue-500 dark:text-blue-400"
        />
      ),
      proficiency: 90,
      description:
        "Advanced React development with modern hooks, state management, and component design.",
    },
    {
      name: "Angular",
      icon: (
        <Image
          width={100}
          height={100}
          src="/angular.svg"
          alt="Angular logo"
          className="h-full w-full text-red-500 dark:text-red-400"
        />
      ),
      proficiency: 80,
      description:
        "Experienced in building dynamic and scalable front-end applications.",
    },
    {
      name: "Next.js",
      icon: (
        <Image
          width={100}
          height={100}
          src="/next.js.svg"
          alt="Next.js logo"
          className="h-full w-full text-red-500 dark:text-red-400"
        />
      ),
      proficiency: 80,
      description:
        "Experienced in building dynamic and scalable Next.js applications.",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Image
          width={100}
          height={100}
          src="/tailwind.svg"
          alt="Tailwind CSS logo"
          className="h-full w-full text-cyan-500 dark:text-cyan-400"
        />
      ),
      proficiency: 80,
      description:
        "Responsive design, utility-first CSS, and custom component styling.",
    },
    {
      name: "Node.js",
      icon: (
        <Image
          width={100}
          height={100}
          src="/node.svg"
          alt="Node.js logo"
          className="h-full w-full text-green-600 dark:text-green-500"
        />
      ),
      proficiency: 80,
      description:
        "Backend development, RESTful API design, and server-side JavaScript.",
    },
    {
      name: "Express.js",
      icon: (
        <Image
          width={100}
          height={100}
          src="/express.svg"
          alt="Express.js logo"
          className="h-full w-full text-gray-500 dark:text-gray-400"
        />
      ),
      proficiency: 80,
      description: "Building RESTful APIs and middleware for web applications.",
    },
    {
      name: "MySQL",
      icon: (
        <Image
          width={100}
          height={100}
          src="/mysql.svg"
          alt="MySQL logo"
          className="h-full w-full text-blue-600 dark:text-blue-500"
        />
      ),
      proficiency: 90,
      description: "Designing efficient relational database systems.",
    },
    {
      name: "MongoDB",
      icon: (
        <Image
          width={100}
          height={100}
          src="/mongodb.svg"
          alt="MongoDB logo"
          className="h-full w-full text-green-500 dark:text-green-400"
        />
      ),
      proficiency: 90,
      description: "Document-based database with scalable architectures.",
    },
    {
      name: "PostgreSQL",
      icon: (
        <Image
          width={100}
          height={100}
          src="/postgresql.svg"
          alt="PostgreSQL logo"
          className="h-full w-full text-green-500 dark:text-green-400"
        />
      ),
      proficiency: 90,
      description: "Experienced with PostgreSQL.",
    },
    {
      name: "AWS",
      icon: (
        <Image
          width={100}
          height={100}
          src="/aws.svg"
          alt="AWS logo"
          className="h-full w-full text-orange-600 dark:text-orange-500"
        />
      ),
      proficiency: 60,
      description:
        "Experience in deploying and managing cloud infrastructure on AWS.",
    },
  ];


  const title = [
    "MY",
    "TECHNICAL",
    "SKILLS",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[35rem] w-full p-4">
      <h2 className="text-6xl font-bold mb-8 text-center dark:text-white">
        <TypewriterEffectSmooth words={title.map((text) => ({
          text,
          className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
        }))} />
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
