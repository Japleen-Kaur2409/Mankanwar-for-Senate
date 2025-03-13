
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingNav({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 mx-auto w-full z-50",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-4xl flex justify-center items-center px-4 transition-all duration-300 ease-in-out",
          isScrolled ? "py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md" : "py-4"
        )}
      >
        <div className="flex gap-8 items-center">
          {navItems.map((navItem, index) => (
            <a
              key={navItem.name}
              href={navItem.link}
              onClick={() => handleItemClick(index)}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-all duration-500 rounded-md",
                activeIndex === index
                  ? "text-ubc-blue"
                  : "text-ubc-grey hover:text-ubc-blue",
                isScrolled ? "py-1" : "py-2"
              )}
            >
              <span className="flex items-center gap-2">
                {navItem.icon && navItem.icon}
                <span>{navItem.name}</span>
              </span>
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ubc-blue" />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
