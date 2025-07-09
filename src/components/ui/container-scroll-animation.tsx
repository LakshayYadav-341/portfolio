"use client";
import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = React.memo(
  ({ titleComponent, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isMobile, setIsMobile] = useState(false);

    // Only set isMobile on mount and resize
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Memoize scale dimensions for performance
    const scaleDimensions = useMemo(() => {
      return isMobile ? [0.7, 0.9] : [1.05, 1];
    }, [isMobile]);

    const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
    const translate = useTransform(scrollYProgress, [-2, 0.5], [0, 0]);

    return (
      <div
        className="relative w-full h-auto flex items-center justify-center md:px-4 overflow-hidden"
        ref={containerRef}
      >
        <div
          className="w-full relative md:p-8"
          style={{ perspective: "1000px" }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} scale={scale} translate={translate}>
            {children}
          </Card>
        </div>
      </div>
    );
  }
);

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}

export const Header: React.FC<HeaderProps> = React.memo(({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mt-24 mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
});

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = React.memo(({ rotate, scale, translate, children }) => {
  return (
    <motion.div
      style={{ rotateX: rotate, scale, translateY: translate }}
      className="max-w-3xl mx-auto h-auto border border-neutral-300 dark:border-neutral-700 p-2 md:p-6 rounded-[30px] overflow-hidden shadow-lg bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="h-auto w-auto overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 md:p-4">
        {children}
      </div>
    </motion.div>
  );
});
