"use client";
import React, { useEffect, useRef } from "react";

const BLOB_COLORS_LIGHT = [
  "rgba(186, 230, 253, 0.35)", // blue
  "rgba(232, 121, 249, 0.25)", // purple
  "rgba(253, 186, 140, 0.25)", // orange
  "rgba(134, 239, 172, 0.25)", // green
];
const BLOB_COLORS_DARK = [
  "rgba(59, 130, 246, 0.18)", // blue
  "rgba(168, 85, 247, 0.18)", // purple
  "rgba(251, 191, 36, 0.13)", // yellow
  "rgba(16, 185, 129, 0.13)", // green
];

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const blobs = Array.from({ length: 4 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 120 + Math.random() * 100,
      dx: -0.3 + Math.random() * 0.6,
      dy: -0.3 + Math.random() * 0.6,
      color: prefersDark ? BLOB_COLORS_DARK[i % BLOB_COLORS_DARK.length] : BLOB_COLORS_LIGHT[i % BLOB_COLORS_LIGHT.length],
      phase: Math.random() * Math.PI * 2,
    }));

    const particles = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 3 + Math.random() * 5,
      dx: -0.5 + Math.random() * 1,
      dy: -0.5 + Math.random() * 1,
      color: prefersDark ? 
        `rgba(${100 + Math.random() * 100}, ${100 + Math.random() * 100}, ${200 + Math.random() * 55}, 0.6)` :
        `rgba(${50 + Math.random() * 100}, ${50 + Math.random() * 100}, ${150 + Math.random() * 105}, 0.4)`,
      floatPhase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: -0.03 + Math.random() * 0.06,
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Animate blobs
      blobs.forEach((blob, ) => {
        blob.x += blob.dx + Math.sin(performance.now() / 2000 + blob.phase) * 0.2;
        blob.y += blob.dy + Math.cos(performance.now() / 2000 + blob.phase) * 0.2;
        blob.phase += 0.002;
        // Bounce off edges
        if (blob.x < -blob.r) blob.x = width + blob.r;
        if (blob.x > width + blob.r) blob.x = -blob.r;
        if (blob.y < -blob.r) blob.y = height + blob.r;
        if (blob.y > height + blob.r) blob.y = -blob.r;
        ctx.beginPath();
        ctx.ellipse(blob.x, blob.y, blob.r, blob.r * (0.8 + Math.random() * 0.4), blob.phase, 0, 2 * Math.PI);
        ctx.fillStyle = blob.color;
        ctx.filter = "blur(16px)";
        ctx.fill();
        ctx.filter = "none";
      });

      // Animate particles (geometric shapes)
      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.floatPhase += 0.02 + 0.01 * i;
        particle.rotation += particle.rotationSpeed;
        // Float up and down
        const floatY = Math.sin(particle.floatPhase) * 15;
        // Bounce off edges
        if (particle.x < -particle.size) particle.x = width + particle.size;
        if (particle.x > width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = height + particle.size;
        if (particle.y > height + particle.size) particle.y = -particle.size;
        
        // Draw different shapes based on index
        ctx.save();
        ctx.translate(particle.x, particle.y + floatY);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        
        if (i % 4 === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, 2 * Math.PI);
          ctx.fill();
        } else if (i % 4 === 1) {
          // Square
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        } else if (i % 4 === 2) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
        } else {
          // Diamond
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground; 