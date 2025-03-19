import { useState, useEffect } from "react";

export type MediaQueries = "sm" | "md" | "lg" | "xl" | "xxl";

export const SM_SCREEN = ["sm"];
export const MD_SCREEN = ["sm", "md"];
export const LG_SCREEN = ["sm", "md", "lg"];
export const XL_SCREEN = ["sm", "md", "lg", "xl"];
export const XXL_SCREEN = ["sm", "md", "lg", "xl", "xxl"];

const BREAK_POINTS: Record<MediaQueries, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const useMediaQuery = () => {
  const [screen, setScreen] = useState<MediaQueries>("xxl");

  useEffect(() => {
    const updateScreen = () => {
      const breakpoints = Object.values(BREAK_POINTS);
      let screen: MediaQueries = "xxl";

      for (let i = 0; i < breakpoints.length; i++) {
        const breakpoint = breakpoints[i];
        if (window.innerWidth < breakpoint) {
          screen = Object.keys(BREAK_POINTS)[i] as MediaQueries;
          break;
        }
      }

      setScreen(screen);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  return screen;
};

export { useMediaQuery };