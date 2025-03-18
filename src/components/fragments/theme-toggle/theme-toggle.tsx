"use client";

import { ButtonIcon } from "@/components/ui/button-icon";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";

// TODO: Animate icon theme change
// TODO: Link the navigation

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const switchTheme: () => void = () => {
    switch (resolvedTheme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("light");
        break;
    }
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) switchTheme();

    document.startViewTransition(switchTheme);
  };

  return (
    <ButtonIcon
      onClick={toggleTheme}
      className="relative *:absolute *:top-1/2 *:transform *:-translate-y-1/2 *:transition-all *:duration-500 *:ease-out"
    >
      <BsMoonStars className="-rotate-180 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <BsSun className="rotate-0 scale-100 opacity-100 dark:rotate-180 dark:scale-50 dark:opacity-0" />
    </ButtonIcon>
  );
};
