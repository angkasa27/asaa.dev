"use client";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import { ReactNode, useMemo } from "react";
import { FloatingNavigation } from "./floating-navigation";
import { BaseNavigation } from "./base-navigation";

export const Navigation = ({ children }: { children: ReactNode }) => {
  const screen = useMediaQuery();

  const isMobile = useMemo(() => screen === "sm", [screen]);

  return (
    <>
      {!isMobile && <FloatingNavigation />}
      {children}
      {isMobile && (
        <>
          <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background pointer-events-none z-30" />
          <BaseNavigation className="fixed bottom-4 mx-auto inset-x-0 w-fit z-40" />
        </>
      )}
    </>
  );
};
