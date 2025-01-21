import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon!",
  description: "There is a lot of work that need to be done",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div />
      <div className="flex flex-col items-center text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <p className=" font-bold">Coming Soon!</p>
        <p className="">There is a lot of work that needs to be done</p>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://mas.angkasa27.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to mas.angkasa27.com →
        </a>
      </footer>
    </div>
  );
}
