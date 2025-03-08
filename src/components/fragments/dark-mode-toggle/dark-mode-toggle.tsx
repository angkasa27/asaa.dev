import { ButtonIcon } from "@/components/ui/button-icon";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "system" | "dark" | "light";

export const DarkModeToggle = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | undefined;
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    applyTheme(newTheme);
  };

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ButtonIcon
      onClick={() =>
        handleThemeChange(activeTheme === "dark" ? "light" : "dark")
      }
    >
      {activeTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </ButtonIcon>
  );
};
