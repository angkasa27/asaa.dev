import { ButtonIcon } from "@/components/ui/button-icon";
import { ThemeToggle } from "../theme-toggle";
import { LuHouse } from "react-icons/lu";
import Link from "next/link";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export const BaseNavigation = ({ className }: { className?: ClassValue }) => {
  return (
    <div
      className={cn(
        "flex max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-background bg-white backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 items-center justify-center gap-4",
        className
      )}
    >
      <ButtonIcon>
        <LuHouse />
      </ButtonIcon>
      <Link href="/#about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/#contact">Contact</Link>
      <ThemeToggle />
    </div>
  );
};
