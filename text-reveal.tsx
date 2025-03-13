
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export function TextRevealCard({
  text,
  revealText,
  className,
  children,
}: {
  text: string;
  revealText: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "p-4 rounded-lg border border-neutral-500 bg-white text-neutral-800 shadow-lg",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden relative h-8 mt-2">
          <h3
            className={cn(
              "text-xl font-bold",
              isInView ? "animate-reveal-text opacity-0" : "opacity-100"
            )}
          >
            {text}
          </h3>
          <h3
            className="text-xl font-bold text-ubc-blue absolute top-0 left-0"
            style={{
              clipPath: isInView
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 0 0, 0 100%, 0 100%)",
              transition: "clip-path 1s ease-in-out 0.5s",
            }}
          >
            {revealText}
          </h3>
        </div>
        <div className="text-sm opacity-0 animate-fade-in-delay">{children}</div>
      </div>
    </div>
  );
}
