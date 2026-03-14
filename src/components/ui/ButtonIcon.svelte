<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "@/lib/utils";

  interface Props {
    asChild?: boolean;
    class?: string;
    children?: Snippet;
  }

  let {
    asChild = false,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const baseClasses =
    "transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2 text-neutral-800 dark:text-neutral-200 *:size-[1.2rem] cursor-pointer";
</script>

{#if asChild}
  <span data-slot="button" class={cn(baseClasses, className)} {...rest}>
    {@render children?.()}
  </span>
{:else}
  <button
    data-slot="button"
    class={cn(baseClasses, className)}
    type="button"
    {...rest}
  >
    {@render children?.()}
  </button>
{/if}
