"use client";

import { ButtonIcon } from "@/components/ui/button-icon";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

// TODO: Animate icon theme change
// TODO: Link the navigation

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme: () => void = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) switchTheme();

    document.startViewTransition(switchTheme);
  };

  return (
    <ButtonIcon onClick={toggleTheme}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </ButtonIcon>
  );
};
