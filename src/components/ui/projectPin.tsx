"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PinContainer(
  {
    children,
    title,
    href,
    className,
    containerClassName,
    height,
  }: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
    height?: string;
  }) {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        `relative group/pin z-5 cursor-pointer ${height} max-w-[43rem]`,
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={href || "/"} passHref>
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2 top-1/2 flex justify-start items-start rounded-2xl border dark:bg-black bg-white dark:border-white/[0.1] border-gray-300 group-hover/pin:dark:border-white/[0.2] group-hover/pin:border-gray-400 transition duration-1000 overflow-hidden w-full max-w-2xl"
          >
            <div className={cn("relative z-5 w-full", className)}>{children}</div>
          </div>
        </div>
      </Link>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

const PinPerspective = ({
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-full h-full flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[6] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <Link
            href={href || "/"}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-1 rounded-full dark:bg-zinc-950 bg-gray-200 py-0.5 px-4 ring-1 dark:ring-white/10 ring-gray-400"
          >
            <span className="relative z-2 dark:text-white text-gray-800 text-xs font-bold inline-block py-0.5">
              {href}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r dark:from-emerald-400/0 dark:via-emerald-400/90 dark:to-emerald-400/0 from-gray-500/0 via-gray-500/90 to-gray-500/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </Link>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] dark:bg-sky-500/[0.08] bg-blue-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] dark:bg-sky-500/[0.08] bg-blue-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] dark:bg-sky-500/[0.08] bg-blue-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b dark:from-transparent dark:to-cyan-500 from-transparent to-blue-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b dark:from-transparent dark:to-cyan-500 from-transparent to-blue-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 dark:bg-cyan-600 bg-blue-700 translate-y-[14px] w-[4px] h-[4px] rounded-full z-4 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 dark:bg-cyan-300 bg-blue-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-4" />
        </>
      </div>
    </motion.div>
  );
};