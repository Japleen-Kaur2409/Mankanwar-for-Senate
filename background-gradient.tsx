
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const animationClass = animate
    ? "after:animate-shimmer after:bg-[length:200%_100%] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent"
    : "";

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-ubc-blue via-ubc-lightblue to-ubc-gold p-0.5 rounded-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden h-full w-full rounded-[7px] bg-white px-4 py-8",
          containerClassName
        )}
      >
        <div
          className={cn(
            "absolute inset-0 z-10 after:absolute after:inset-0",
            animationClass
          )}
        />
        <div className="relative z-20">{children}</div>
      </div>
    </div>
  );
};
