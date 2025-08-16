import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { LuGithub } from "react-icons/lu";
import { SiInstagram, SiLinkedin } from "react-icons/si";

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
          <div></div>
        </BentoCardContainer>
        <BentoCardContainer className="col-span-6 row-start-7 col-start-1 sm:col-span-3 row-span-2 sm:row-start-auto sm:col-start-auto">
          About
        </BentoCardContainer>
        <Link
          href="https://www.linkedin.com/in/dimasangkasa"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 sm:col-span-3 sm:row-span-1 block h-full"
        >
          <BentoCardContainer
            className={cn(
              "flex flex-col items-center justify-center gap-1 h-full",
              "bg-blue-500 text-white"
            )}
          >
            <SiLinkedin className="size-6" />
            <p className="text-xs">Let&apos;s connect!</p>
          </BentoCardContainer>
        </Link>
        <BentoCardContainer className="col-span-6 sm:col-span-3 sm:row-span-1">
          Twitter
        </BentoCardContainer>
        <BentoCardContainer
          className={cn(
            "col-span-12 sm:col-span-6 sm:row-span-1",
            "relative p-4 overflow-hidden bg-gradient-to-br from-purple-600 to-orange-600 text-white"
          )}
        >
          <div className="relative z-10">
            <SiInstagram />
            <p className="text-xs drop-shadow-sm">Creative stuff!</p>
          </div>
          <div className="absolute top-0 right-4 aspect-square w-36 bg-red-50 rounded-lg rotate-12">
            {/* <PreviewUrl
              url="https://www.instagram.com/angka.asa"
              width={390}
              height={844}
              className="object-cover w-full"
              delay={3000}
            /> */}
          </div>
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
