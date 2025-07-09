"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState, useMemo } from "react";

export const SkillsDock = ({
  skills,
  desktopClassName,
  mobileClassName,
}: {
  skills: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    description?: string;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  // Memoize skill list for performance
  const memoSkills = useMemo(() => skills, [skills]);
  return (
    <>
      <div className="hidden md:block">
        <SkillsDockDesktop skills={memoSkills} className={desktopClassName} />
      </div>
      <div className="block md:hidden">
        <SkillsDockMobile skills={memoSkills} className={mobileClassName} />
      </div>
    </>
  );
};

const SkillsDockMobile = ({
  skills,
  className,
}: {
  skills: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    description?: string;
  }[];
  className?: string;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  return (
    <div className={cn("relative flex flex-wrap gap-4 justify-center", className)}>
      {skills.map((skill, idx) => (
        <SkillIconMobile
          key={skill.name}
          skill={skill}
          idx={idx}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}
    </div>
  );
};

const SkillIconMobile = React.memo(function SkillIconMobile({
  skill,
  idx,
  hoveredSkill,
  setHoveredSkill,
}: {
  skill: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    description?: string;
  };
  idx: number;
  hoveredSkill: number | null;
  setHoveredSkill: (idx: number | null) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredSkill(idx)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="h-16 w-16 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center relative">
        {skill.icon}
      </div>
      <AnimatePresence>
        {hoveredSkill === idx && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-10 top-full mt-2 w-64 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg"
          >
            <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-neutral-700 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {skill.description || "No additional description available."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const SkillsDockDesktop = ({
  skills,
  className,
}: {
  skills: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    description?: string;
  }[];
  className?: string;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  // Memoize skill icon containers for performance
  const skillIconContainers = useMemo(
    () =>
      skills.map((skill) => (
        <SkillIconContainer
          key={skill.name}
          skill={skill}
          isHovered={hoveredSkill === skill.name}
          onHover={() => setHoveredSkill(skill.name)}
          onLeave={() => setHoveredSkill(null)}
        />
      )),
    [skills, hoveredSkill]
  );
  return (
    <div className="w-full">
      <div
        id="skills-dock-container"
        className={cn(
          "mx-auto flex flex-wrap items-center justify-center rounded-2xl px-5 py-4",
          "gap-4 sm:gap-6 md:gap-8 lg:gap-10",
          "max-w-screen-lg",
          className
        )}
      >
        {skillIconContainers}
      </div>
    </div>
  );
};

const SkillIconContainer = React.memo(function SkillIconContainer({
  skill,
  isHovered,
  onHover,
  onLeave,
}: {
  skill: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    description?: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave} className="relative cursor-pointer">
      <motion.div
        className={cn(
          "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
        )}
        style={{
          width: "60px",
          height: "60px",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="text-neutral-800 dark:text-neutral-200"
          style={{
            fontSize: "1.5rem",
            transition: "font-size 0.3s ease",
            transform: isHovered ? "scale(1.5)" : "scale(1)",
            borderRadius: isHovered ? "50%" : "",
            boxShadow: isHovered ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "",
          }}
        >
          {skill.icon}
        </div>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 top-full mt-2 w-64 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg"
          >
            <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-neutral-700 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {skill.description || "No additional description available."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
