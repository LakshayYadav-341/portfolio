"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.8], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      className="relative w-full flex items-center justify-center p-4 overflow-hidden"
      ref={containerRef}
      style={{ minHeight: '60rem' }}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mt-48 mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  rotate,
  scale,
  children,
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-3xl mx-auto h-auto border-[#6C6C6C] p-2 md:p-6 rounded-[30px] overflow-hidden"
    >
      <div className="h-auto w-auto overflow-hidden rounded-2xl dark:bg-zinc-900 p-4">
        {children}
      </div>
    </motion.div>
  );
};
