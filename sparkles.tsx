
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  particleCount = 20,
  particleColor = "#FFF",
  particleDensity = 80,
  speed = 1,
  animate = true,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleCount?: number;
  particleColor?: string;
  particleDensity?: number;
  speed?: number;
  animate?: boolean;
}) => {
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [animationId, setAnimationId] = useState<number | null>(null);

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(ratio, ratio);
      }
      return true;
    }
    return false;
  };

  useEffect(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const observeResize = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          setCanvasSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    });

    observeResize.observe(canvas);

    const particles: Particle[] = [];

    const createParticles = () => {
      const particleCount = Math.min(
        canvasSize.width * canvasSize.height / particleDensity,
        200
      );
      
      if (particleCount > particles.length) {
        for (let i = particles.length; i < particleCount; i++) {
          particles.push(
            new Particle(
              canvas.width * Math.random(),
              canvas.height * Math.random(),
              minSize + Math.random() * (maxSize - minSize),
              particleColor
            )
          );
        }
      }
    };

    class Particle {
      public x: number;
      public y: number;
      public radius: number;
      public color: string;
      public vx: number;
      public vy: number;

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(speed: number, width: number, height: number) {
        this.x += this.vx * speed;
        this.y += this.vy * speed;

        if (this.x < 0 || this.x > width) {
          this.vx = -this.vx;
        }

        if (this.y < 0 || this.y > height) {
          this.vy = -this.vy;
        }
      }
    }

    const render = () => {
      if (!animate) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((particle) => {
        particle.draw(ctx);
        particle.update(speed, canvas.width, canvas.height);
      });

      const id = requestAnimationFrame(render);
      setAnimationId(id);
    };

    createParticles();
    render();

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      observeResize.disconnect();
    };
  }, [
    canvasSize.height,
    canvasSize.width,
    id,
    maxSize,
    minSize,
    particleColor,
    particleDensity,
    speed,
    animate,
    background,
    animationId,
  ]);

  return (
    <canvas
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};
