"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = React.memo(function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Memoize gradient classes for performance
  const gradientClasses = useMemo(
    () =>
      cn(
        "relative flex min-h-[45vh] md:min-h-[40vh] flex-col items-center justify-start overflow-hidden",
        "w-full rounded-lg shadow-lg",
        "transition-colors duration-300",
        className
      ),
    [className]
  );

  return (
    <div className={gradientClasses}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Right gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto right-1/2 h-36 bg-gradient-to-r from-transparent dark:to-cyan-500 to-cyan-300 opacity-40 dark:opacity-50 blur-2xl"
        />
        {/* Left gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto left-1/2 h-36 bg-gradient-to-l from-transparent dark:to-indigo-500 to-indigo-300 opacity-40 dark:opacity-50 blur-2xl"
        />
        <div className="relative z-10 flex items-center">
          {/* Center gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto h-36 w-64 bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 from-cyan-300 to-indigo-300 opacity-40 dark:opacity-50 blur-2xl"
          />
          {/* Content container */}
          <div className="relative z-20 px-4">{children}</div>
        </div>
      </div>
    </div>
  );
});

export default LampContainer;