<script lang="ts">
  import { Github, ExternalLink } from "lucide-svelte";
  import { cn } from "@/lib/utils";
  import type { ClassValue } from "clsx";
  import type { Project } from "@/constants/projects";
  import PreviewUrl from "../PreviewUrl.svelte";

  interface Props extends Project {
    className?: ClassValue;
  }

  let { title, stack, projectUrl, githubUrl, subtitle, className }: Props =
    $props();
</script>

<div
  class={cn(
    "rounded-lg border transition-transform duration-200 overflow-hidden flex flex-col",
    className,
  )}
>
  <div
    class="flex justify-center items-center w-full aspect-video bg-neutral-900 text-white border-b relative overflow-hidden"
  >
    {#if projectUrl}
      <PreviewUrl
        url={projectUrl}
        width={640}
        height={360}
        class="object-cover w-full relative z-10"
        delay={3000}
      />
    {/if}
    <Github class="size-16 absolute" />
  </div>
  <div class="p-2 flex flex-col gap-2 flex-grow">
    <div>
      <p class="font-semibold tracking-tight text-base">{title}</p>
      <p class="font-sans text-xs">{subtitle}</p>
    </div>
    <div class="flex gap-1">
      {#each stack as tech (tech)}
        <div
          class="rounded border font-semibold border-transparent bg-secondary text-secondary-foreground px-1 py-0 text-[10px]"
        >
          {tech}
        </div>
      {/each}
    </div>
    <div class="flex gap-2">
      {#if githubUrl}
        {@render buttonRedirect(githubUrl, "github", "Source")}
      {/if}
      {#if projectUrl}
        {@render buttonRedirect(projectUrl, "external", "Live")}
      {/if}
    </div>
  </div>
</div>

{#snippet buttonRedirect(href, icon, label)}
  <a
    class="items-center rounded border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-1 text-[10px]"
    {href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="btn-icon" aria-hidden="true">
      {#if icon === "github"}
        <Github />
      {:else}
        <ExternalLink />
      {/if}
    </span>
    {label}
  </a>
{/snippet}

<style>
  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0.875rem;
    height: 0.875rem;
    flex: 0 0 auto;
  }

  .btn-icon :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
