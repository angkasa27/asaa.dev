<script lang="ts">
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import { cn } from "@/lib/utils";

  let time = $state("00:00");

  onMount(() => {
    time = format(new Date(), "HH:mm");

    const interval = setInterval(() => {
      time = format(new Date(), "HH:mm");
    }, 60000);

    return () => clearInterval(interval);
  });
</script>

<div class="flex gap-2 flex-wrap justify-center">
  <a
    href="https://maps.app.goo.gl/iQfrcqzRpZvqV8Rt5"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={cn(
        "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex",
      )}
    >
      🇮🇩 Jakarta, Indonesia
    </div>
  </a>
  <div
    class={cn(
      "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex",
    )}
  >
    ⏰︎ {time} WIB
  </div>
  <a
    href="https://drive.google.com/file/d/1Ak0a0UTBV-KZriZrge81jfZzq8q1Vnle/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={cn(
        "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex cursor-pointer",
      )}
    >
      ✨ My Resume
    </div>
  </a>
</div>
