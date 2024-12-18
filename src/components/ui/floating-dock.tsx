"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState    } from "react";

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
  return (
    <>
      <div className="hidden md:block">
        <SkillsDockDesktop skills={skills} className={desktopClassName} />
      </div>
      <div className="block md:hidden">
        <SkillsDockMobile skills={skills} className={mobileClassName} />
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
        <div
          key={skill.name}
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
                <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
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
      ))}
    </div>
  );
};

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
    const mouseX = useMotionValue(Infinity);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
    return (
      <div className="w-full">
        <motion.div
          id="skills-dock-container"
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(
            "mx-auto z-20 flex flex-wrap items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-5 py-4",
            "gap-4",
            "sm:gap-6 md:gap-8 lg:gap-10",
            "max-w-screen-lg",
            className
          )}
        >
          {skills.map((skill) => (
            <SkillIconContainer
              key={skill.name}
              mouseX={mouseX}
              skill={skill}
              isHovered={hoveredSkill === skill.name}
              onHover={() => setHoveredSkill(skill.name)}
              onLeave={() => setHoveredSkill(null)}
            />
          ))}
        </motion.div>
      </div>
    );
  };
  

  function SkillIconContainer({
    // mouseX,
    skill,
    isHovered,
    onHover,
    onLeave,
  }: {
    mouseX: MotionValue<number>;
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
    const ref = useRef<HTMLDivElement>(null);
    const localMouseX = useMotionValue(Infinity); // Local mouseX for individual icons
  
    const handleMouseMove = (e: React.MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (bounds) {
        localMouseX.set(e.pageX - (bounds.x + bounds.width / 2));
      }
    };
  
    const handleMouseLeave = () => {
      localMouseX.set(Infinity);
      onLeave();
    };
  
    const widthTransform = useTransform(localMouseX, [-150, 0, 150], [60, 100, 60]);
    const heightTransform = useTransform(localMouseX, [-150, 0, 150], [60, 100, 60]);
    const widthTransformIcon = useTransform(localMouseX, [-150, 0, 150], [32, 48, 32]);
    const heightTransformIcon = useTransform(localMouseX, [-150, 0, 150], [32, 48, 32]);
  
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  
    return (
      <div
        ref={ref}
        onMouseEnter={onHover}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ width, height }}
          className={cn(
            "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative cursor-pointer",
            isHovered && "ring-2 ring-blue-500"
          )}
        >
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {skill.icon}
          </motion.div>
        </motion.div>
  
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 top-full mt-2 w-64 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
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
  }
  

export default SkillsDock;
