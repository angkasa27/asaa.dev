"use client";
import { ReactNode, useState } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { format } from "date-fns";

// TODO: Add animation to #OpenToWork
// TODO: Add in animation to each component or even each word
// TODO: Change clock to email

export const HeroChips = () => {
  const [time] = useState(format(new Date(), "HH:mm"));

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Link
        href="https://maps.app.goo.gl/iQfrcqzRpZvqV8Rt5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Chips>🇮🇩 Jakarta, Indonesia</Chips>
      </Link>
      <Chips>⏰︎ {time + " WIB"}</Chips>
      <Link href="https://drive.google.com/file/d/1Ak0a0UTBV-KZriZrge81jfZzq8q1Vnle/view?usp=sharing">
        <Chips className="cursor-pointer">✨ My Resume</Chips>
      </Link>
    </div>
  );
};

const Chips = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassValue;
}) => (
  <div
    className={cn(
      "items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex",
      className
    )}
  >
    {children}
  </div>
);
