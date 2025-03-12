import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

// TODO: Add content
// TODO: Add custom animation

export const BentoSection = () => {
  return (
    <section id="bento">
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        <BentoCardContainer className="col-span-2 row-span-2">
          Github
        </BentoCardContainer>
        <BentoCardContainer className="col-span-2 row-span-2">
          Github2
        </BentoCardContainer>
        <BentoCardContainer className="col-span-1 row-span-2">
          About
        </BentoCardContainer>
        <BentoCardContainer className="col-span-1 row-span-1">
          Linkedin
        </BentoCardContainer>
        <BentoCardContainer className="col-span-1 row-span-1">
          Twitter
        </BentoCardContainer>
        <BentoCardContainer className="col-span-2 row-span-1">
          Leetcode
        </BentoCardContainer>
        <BentoCardContainer className="col-start-4 row-start-3 col-span-1 row-span-2">
          Discord
        </BentoCardContainer>
      </div>
    </section>
  );
};

const BentoCardContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassValue;
}) => {
  return <div className={cn("rounded-lg border hover:scale-95 transition-transform duration-200", className)}>{children}</div>;
};
