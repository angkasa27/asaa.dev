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
  <div class={"floating-nav " + (isVisible ? "" : "floating-nav--hidden")}>
    <BaseNavigation />
  </div>
</div>

<style>
  .floating-nav {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 200ms ease,
      transform 200ms ease;
  }

  .floating-nav--hidden {
    opacity: 0;
    transform: translateY(-8px);
  }
</style>
