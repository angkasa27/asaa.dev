import { format } from "date-fns-tz";
import Image from "next/image";
import { id } from "date-fns/locale";
import { ReactNode, useMemo } from "react";

export const HeroSection = () => {
  console.log(
    Intl.DateTimeFormat().resolvedOptions().timeZone // get user timezone
  );

  const jakartaTime = useMemo(
    () => format(new Date(), "hh:mm aa", { locale: id, timeZone: "Asia/Jakarta" }),
    []
  );

  return (
    <section id="hero" className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center">
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <h1 className="inline-block xl:text-5xl/none text-center sm:text-left">
          Hi! I&apos;m Dimas Angkasa
        </h1>
        <h3 className="sm:text-xl text-center sm:text-left">#OpenToWork | Software Engineer 👨‍💻</h3>
        <div className="flex gap-2 flex-wrap justify-center">
          <Chips>🇮🇩 Jakarta, Indonesia</Chips>
          <Chips>⏰︎ {jakartaTime}</Chips>
          <Chips>✨ Resume</Chips>
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

const Chips = ({ children }: { children: ReactNode }) => (
  <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex cursor-pointer">
    {children}
  </div>
);
