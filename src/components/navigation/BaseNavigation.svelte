<script lang="ts">
	import ButtonIcon from "../ui/ButtonIcon.svelte";
	import ThemeToggle from "../ThemeToggle.svelte";

  let { class: className = "" } = $props();
</script>

<div
  class={[
    "flex max-w-fit border border-transparent dark:border-white/20 rounded-full dark:bg-background bg-white backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 items-center justify-center gap-2",
    className,
  ]}
>
	<ButtonIcon asChild class="flex items-center justify-center">
		<a href="/" aria-label="Home">
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
        class="size-5"
        aria-hidden="true"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
		</a>
	</ButtonIcon>
  <div class="flex items-center gap-4">
    <a href="/#about">About</a>
    <a href="/projects">Projects</a>
    <a href="/#contact">Contact</a>
  </div>
  <ThemeToggle />
</div>
