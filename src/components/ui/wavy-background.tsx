/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const WavyBackground = React.memo(function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) {
  const noise = useMemo(() => createNoise3D(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  const getSpeed = useCallback(() => (speed === "fast" ? 0.002 : 0.001), [speed]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;

    const waveColorsLight = ["#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#fde047"];
    const waveColorsDark = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#facc15"];
    const waveColors = colors ?? (theme === "dark" ? waveColorsDark : waveColorsLight);

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill || (theme === "dark" ? "#1a202c" : "#ffffff");
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [noise, blur, colors, theme, waveWidth, backgroundFill, waveOpacity, getSpeed]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return (
    <div className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: `blur(${blur}px)` }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
});
