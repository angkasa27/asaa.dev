<script lang="ts">
  import { onMount } from "svelte";
  import { Moon, Sun } from "lucide-svelte";
  import ButtonIcon from "./ui/ButtonIcon.svelte";

  type ThemeMode = "dark" | "light";

  let isDark = $state(false);
  let isMounted = $state(false);

  const applyTheme = (mode: ThemeMode) => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
    isDark = mode === "dark";
  };

  const resolveInitialTheme = (): ThemeMode => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored === "dark" || stored === "light") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const toggleTheme = () => {
    if (!isMounted) return;
    const next = isDark ? "light" : "dark";
    applyTheme(next);
  };

  onMount(() => {
    isMounted = true;
    applyTheme(resolveInitialTheme());
  });
</script>

<ButtonIcon
  onclick={toggleTheme}
  class="relative *:absolute *:top-1/2 *:transform *:-translate-y-1/2 *:transition-all *:duration-500 *:ease-out"
>
  <Moon
    size={20}
    class="-rotate-180 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
  />
  <Sun
    size={20}
    class="rotate-0 scale-100 opacity-100 dark:rotate-180 dark:scale-50 dark:opacity-0"
  />
</ButtonIcon>
