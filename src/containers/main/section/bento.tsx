import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { LuGithub } from "react-icons/lu";

// TODO: Add content
// TODO: Add custom animation

export const BentoSection = () => {
  return (
    <section id="bento">
      <div className="grid grid-cols-12 gap-2 auto-rows-fr">
        <BentoCardContainer
          className={cn(
            "col-span-12 row-span-2 sm:col-span-6 sm:row-span-2",
            "p-4 flex flex-col"
          )}
        >
          <div className="flex-grow">
            <LuGithub className="size-6" />
          </div>
          <p className="text-lg font-semibold">GitHub</p>
          <p className="text-sm">All the stuff that i make</p>
        </BentoCardContainer>
        <BentoCardContainer className="col-span-12 row-span-2 sm:col-span-6 sm:row-span-2">
          <div>
            
          </div>
        </BentoCardContainer>
        <BentoCardContainer className="col-span-6 row-start-7 col-start-1 sm:col-span-3 row-span-2 sm:row-start-auto sm:col-start-auto">
          About
        </BentoCardContainer>
        <BentoCardContainer className="col-span-6 sm:col-span-3 sm:row-span-1">
          Linkedin
        </BentoCardContainer>
        <BentoCardContainer className="col-span-6 sm:col-span-3 sm:row-span-1">
          Twitter
        </BentoCardContainer>
        <BentoCardContainer className="col-span-12 sm:col-span-6 sm:row-span-1">
          Leetcode
        </BentoCardContainer>
        <BentoCardContainer className="col-span-6 sm:col-start-10 sm:row-start-3 sm:col-span-3 row-span-2">
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
  return (
    <div
      className={cn(
        "rounded-lg border hover:scale-95 transition-transform duration-200",
        className
      )}
    >
      {children}
    </div>
  );
};
