
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#002145", "#0055B7", "#97D4E9"],
  waveWidth = 50,
  backgroundFill = "white",
  speed = "fast",
  waveOpacity = 0.7,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const layerRefs = useRef<HTMLDivElement[]>([]);
  const container = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [waveCount, setWaveCount] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (container.current) {
        const { width, height } = container.current.getBoundingClientRect();
        setDimensions({ width, height });
        setWaveCount(Math.floor(height / waveWidth) + 1);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [waveWidth]);

  const animationDuration = speed === "fast" ? "15s" : "25s";

  return (
    <div
      ref={container}
      className={cn("relative w-full overflow-hidden", containerClassName)}
      {...props}
    >
      {Array.from({ length: colors.length }).map((_, i) => (
        <div
          ref={(el) => el && (layerRefs.current[i] = el)}
          key={i}
          className="absolute inset-0 z-0"
          style={{
            opacity: waveOpacity,
          }}
        >
          <div
            className="absolute"
            style={{
              width: "200%",
              left: "-50%",
              animation: `wave ${animationDuration} infinite linear`,
              animationDelay: `${(i * 1) / 2}s`, // Stagger the animations
            }}
          >
            <svg
              viewBox={`0 0 ${dimensions.width} ${waveWidth}`}
              style={{
                width: "100%",
                height: `${waveCount * waveWidth}px`,
              }}
            >
              <defs>
                <linearGradient id={`gradient-${i}`}>
                  <stop offset="0%" stopColor={colors[i]} />
                  <stop offset="100%" stopColor={colors[(i + 1) % colors.length]} />
                </linearGradient>
              </defs>
              {Array.from({ length: waveCount }).map((_, j) => (
                <path
                  key={j}
                  fill={`url(#gradient-${i})`}
                  d={`M0 ${j * waveWidth} Q${dimensions.width / 4} ${
                    j * waveWidth + waveWidth / 2
                  } ${dimensions.width / 2} ${j * waveWidth} T${
                    dimensions.width
                  } ${j * waveWidth} V${dimensions.height} H0 Z`}
                />
              ))}
            </svg>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 z-10 bg-transparent" />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

