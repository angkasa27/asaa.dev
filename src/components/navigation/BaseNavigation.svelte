<script lang="ts">
	import ButtonIcon from "../ui/ButtonIcon.svelte";
	import ThemeToggle from "../ThemeToggle.svelte";
	import Icon from "@iconify/svelte";

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
			<Icon icon="lucide:home" />
		</a>
	</ButtonIcon>
  <div class="flex items-center gap-4">
    <a href="#about">About</a>
    <a href="/projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
  <ThemeToggle />
</div>
