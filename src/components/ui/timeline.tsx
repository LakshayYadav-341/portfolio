"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState, memo, useCallback } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  links?: React.ReactNode;
}

// Memoized timeline entry for performance
const TimelineEntryComponent = memo(function TimelineEntryComponent({ item, index }: { item: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="grid grid-cols-12 mb-20"
    >
      <div className="col-span-1 md:col-span-3 sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-80 self-start">
        <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 font-bold text-neutral-500 dark:text-neutral-500">
          {item.title}
        </h3>
      </div>
      <div className="col-span-11 md:col-span-9 relative pl-0 md:pl-12 mx-auto w-full">
        <h3 className="md:hidden block text-2xl mb-4 md:pl-4 pl-8 text-left font-bold text-neutral-500 dark:text-neutral-500">
          {item.title}
        </h3>
        {item.content}
      </div>
    </motion.div>
  );
});
TimelineEntryComponent.displayName = "TimelineEntryComponent";

export const Timeline = memo(function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Only recalculate height when data changes or ref changes
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Use useCallback for stable render
  const renderEntry = useCallback(
    (item: TimelineEntry, index: number) => (
      <TimelineEntryComponent item={item} index={index} key={item.title} />
    ),
    []
  );

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="w-auto mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white max-w-4xl">
          My Experience
        </h2>
      </div>
      <div ref={ref} className="relative w-auto mx-auto pb-10">
        {data.map(renderEntry)}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
});
Timeline.displayName = "Timeline";
