<script lang="ts">
  import { cn } from "@/lib/utils";
  import Icon from "@iconify/svelte";
</script>

<div class="flex gap-2 flex-wrap justify-center">
  <a
    href="https://maps.app.goo.gl/iQfrcqzRpZvqV8Rt5"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={cn(
        "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold hover-pop transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex",
      )}
    >
      🇮🇩 Jakarta, Indonesia
    </div>
  </a>
  <a
    href="https://github.com/angkasa27"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={cn(
        "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold hover-pop transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex cursor-pointer gap-1",
      )}
    >
      <Icon icon="logos:github-icon" width={14} height={14} />
      angkasa27
    </div>
  </a>
  <a
    href="https://drive.google.com/file/d/1wy8W_EPYwHdqZP-8PksRZyNrXD0SJ53m"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={cn(
        "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold hover-pop transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex cursor-pointer",
      )}
    >
      ✨ My Resume
    </div>
  </a>
</div>
