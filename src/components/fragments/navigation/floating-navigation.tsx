"use client";

import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { BaseNavigation } from "./base-navigation";

export const FloatingNavigation = () => {
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
          transition: { duration: 0.3 },
        },
        hide: {
          opacity: 0,
          translateY: -100,
          willChange: "opacity, transform",
          transition: { duration: 0.3 },
        },
      }}
      animate={showFloatingBar ? "visible" : "hide"}
      className="max-w-fit fixed top-10 inset-x-0 mx-auto"
    >
      <BaseNavigation />
    </motion.div>
  );
};
