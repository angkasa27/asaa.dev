<script lang="ts">
	import { onMount } from "svelte";
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
  aria-label="Toggle theme"
>
  <!-- Moon icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="-rotate-180 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
    aria-hidden="true"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
  <!-- Sun icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="rotate-0 scale-100 opacity-100 dark:rotate-180 dark:scale-50 dark:opacity-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
  </svg>
</ButtonIcon>
