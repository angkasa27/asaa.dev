<script lang="ts">
  import queryString from "query-string";

  interface Props {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    delay?: number;
    class?: string;
  }

  let {
    url,
    alt = "",
    width = 300,
    height = 200,
    delay = 0,
    class: className,
    ...rest
  }: Props = $props();

  const imageUrl = $derived(() => {
    const scale = Math.ceil(1080 / height);
    const params = queryString.stringify({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * scale,
      "viewport.height": height * scale,
      waitForTimeout: delay,
      format: "webp",
      quality: 70,
    });
    return `https://api.microlink.io/?${params}`;
  });

  const fallbacks = $derived(() => [
    imageUrl(),
    `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`,
    "/fallback-image.png",
  ]);

  let idx = $state(0);

  const currentSrc = $derived(() => {
    const src = fallbacks()[Math.min(idx, fallbacks().length - 1)];
    return src;
  });

  function handleError() {
    if (idx < fallbacks().length - 1) {
      idx = idx + 1;
    }
  }
</script>

<img
  src={currentSrc()}
  {alt}
  class={className}
  loading="lazy"
  onerror={handleError}
  {...rest}
/>
