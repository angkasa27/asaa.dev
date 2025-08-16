import { format } from "date-fns-tz";
import Image from "next/image";
import { id } from "date-fns/locale";
import { ReactNode, useMemo } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import Link from "next/link";

// TODO: Add link to resume
// TODO: Add special chip to resume to indicate it's a link
// TODO: Add animation to #OpenToWork
// TODO: Add in animation to each component or even each word
// TODO: Change clock to email
// TODO: Onclick location to open google maps

export const HeroSection = () => {
  const jakartaTime = useMemo(
    () =>
      format(new Date(), "hh:mm aa", { locale: id, timeZone: "Asia/Jakarta" }),
    []
  );

  return (
    <section
      id="hero"
      className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center"
    >
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <h1 className="inline-block xl:text-5xl/none text-center sm:text-left">
          Hi! I&apos;m Dimas Angkasa
        </h1>
        <h4 className="text-center sm:text-left">Software Engineer | Still Fixing some bugs... 👨‍💻</h4>
        <div className="flex gap-2 flex-wrap justify-center">
          <Chips>🇮🇩 Jakarta, Indonesia</Chips>
          <Chips>⏰︎ {jakartaTime}</Chips>
          <Link
            href="https://drive.google.com/file/d/1Ak0a0UTBV-KZriZrge81jfZzq8q1Vnle/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Chips className="cursor-pointer">✨ Resume</Chips>
          </Link>
        </div>
      </div>
      <Image
        src="https://avatars.githubusercontent.com/u/41984181?v=4"
        alt="GitHub Avatar"
        width={112}
        height={112}
        className="rounded-lg size-28 border"
      />
    </section>
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
