"use client";

import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { ButtonIcon } from "@/components/ui/button-icon";
import { ThemeToggle } from "../theme-toggle";
import { LuHouse } from "react-icons/lu";

export const FloatingBar = () => {
  const { scrollY } = useScroll();
  const [showFloatingBar, setShowFloatingBar] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    const diff = previous !== undefined ? current - previous : 0;
    setShowFloatingBar(diff < 0);
  });

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 1,
        },
        visible: {
          opacity: 1,
          translateY: 0,
          willChange: "opacity, transform",
          transition: { duration: 0.2 },
        },
        hide: {
          opacity: 0,
          translateY: -100,
          willChange: "opacity, transform",
          transition: { duration: 0.2, delay: 0.2 },
        },
      }}
      animate={showFloatingBar ? "visible" : "hide"}
      className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent bg-white backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2 items-center justify-center gap-4"
    >
      <ButtonIcon>
        <LuHouse />
      </ButtonIcon>
      <p>About</p>
      <p>Projects</p>
      <p>Contact</p>
      <ThemeToggle />
    </motion.div>
  );
};
