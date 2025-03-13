
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBorder = () => {
      const angle = Math.random() * 360;
      const x = Math.cos(angle * (Math.PI / 180));
      const y = Math.sin(angle * (Math.PI / 180));
      setPosition({ x, y });
    };

    const interval = setInterval(moveBorder, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Component
      className={cn(
        "relative h-fit w-fit bg-transparent",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 z-[1] rounded-md flex items-center justify-center bg-slate-950",
          className
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute inset-0 z-0 rounded-md bg-gradient-to-br from-ubc-blue via-ubc-lightblue to-ubc-gold",
          borderClassName
        )}
        style={{
          transform: `translate(${position.x * 3}px, ${position.y * 3}px)`,
          transition: `transform ${duration}ms ease-in-out`,
        }}
      />
    </Component>
  );
};
