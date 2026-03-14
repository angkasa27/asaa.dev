<script lang="ts">
  import { onMount } from "svelte";
  import BaseNavigation from "./BaseNavigation.svelte";

  let isVisible = $state(true);
  let lastScrollY = 0;

  onMount(() => {
    lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        isVisible = true;
      } else if (currentScrollY > lastScrollY) {
        isVisible = false;
      } else if (currentScrollY < lastScrollY) {
        isVisible = true;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div class="fixed top-10 left-1/2 -translate-x-1/2 z-50">
  <div
    class={`transition-[opacity,transform] duration-200 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
    }`}
  >
    <BaseNavigation />
  </div>
</div>
