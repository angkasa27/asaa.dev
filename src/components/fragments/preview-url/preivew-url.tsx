// "use client";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import queryString from "query-string";
import Image, { ImageProps } from "next/image";
// import { useTheme } from "next-themes";

interface PreviewUrlProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  delay?: number;
}

export const PreviewUrl = ({
  url,
  className,
  width = 200,
  height = 125,
  alt = "",
  delay = 0,
  ...props
}: PreviewUrlProps) => {
  // const { resolvedTheme } = useTheme();

  const previewHeight = Math.ceil(1080 / height);

  const imageUrl = useMemo(() => {
    const params = queryString.stringify({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * previewHeight,
      "viewport.height": height * previewHeight,
      waitForTimeout: delay,
    });
    return `https://api.microlink.io/?${params}`;
  }, []);

  return (
    <Image
      src={imageUrl}
      width={width}
      height={height}
      className={cn(className)}
      alt={alt}
      {...props}
    />
  );
};
