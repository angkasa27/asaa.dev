<script lang="ts">
  import Icon from "@iconify/svelte";

  interface SliderItem {
    label: string;
    icon?: string;
  }

  interface Props {
    items: SliderItem[];
    label?: string;
    durationSeconds?: number;
    reverse?: boolean;
    gapPx?: number;
  }

  let {
    items = [],
    label = "Infinite slider",
    durationSeconds = 24,
    reverse = false,
    gapPx = 40,
  }: Props = $props();

  const sanitizedItems = $derived(
    items.filter((item) => item?.label?.trim().length),
  );
  const repeatedItems = $derived([...sanitizedItems, ...sanitizedItems]);
  const safeDuration = $derived(Math.max(8, durationSeconds));
  const safeGap = $derived(Math.max(0, gapPx));
</script>

<div
  class={["slider", reverse && "reverse"]}
  style:--slider-duration={`${safeDuration}s`}
  style:--gap={`${safeGap}px`}
  role="region"
  aria-label={label}
>
  {#if sanitizedItems.length > 0}
    <div class="track" aria-hidden="true">
      {#each repeatedItems as item, index (`${item.label}-${index}`)}
        <span
          class="item inline-flex flex-none items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
        >
          {#if item.icon}
            <span class="icon" aria-hidden="true">
              <Icon icon={item.icon} />
            </span>
          {/if}
          <span class="item-label">{item.label}</span>
        </span>
      {/each}
    </div>
    <ul class="sr-list">
      {#each sanitizedItems as item, index (`${item.label}-${index}-sr`)}
        <li>{item.label}</li>
      {/each}
    </ul>
  {:else}
    <p class="empty">No items provided.</p>
  {/if}
</div>

<style>
  .slider {
    --gap: 2.5rem;
    --slider-duration: 24s;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .track {
    display: flex;
    align-items: center;
    gap: var(--gap);
    width: max-content;
    animation: scroll var(--slider-duration) linear infinite;
    will-change: transform;
  }

  .slider.reverse .track {
    animation-direction: reverse;
  }

  .slider:hover .track,
  .slider:focus-within .track {
    animation-play-state: paused;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
  }

  .icon :global(svg) {
    width: 100%;
    height: 100%;
  }

  .item-label {
    line-height: 1;
  }

  .empty {
    margin: 0;
    font-size: 0.95rem;
    color: currentColor;
    opacity: 0.7;
  }

  .sr-list {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .track {
      animation-duration: 0.01ms;
      animation-iteration-count: 1;
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - (var(--gap) / 2)));
    }
  }
</style>
