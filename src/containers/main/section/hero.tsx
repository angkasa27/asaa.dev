import Image from "next/image";
import { HeroChips } from "./hero-chips";

// TODO: Add link to resume
// TODO: Add special chip to resume to indicate it's a link
// TODO: Add animation to #OpenToWork
// TODO: Add in animation to each component or even each word
// TODO: Change clock to email
// TODO: Onclick location to open google maps

export const HeroSection = async () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center"
    >
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <h1 className="inline-block xl:text-5xl/none text-center sm:text-left">
          Hi! I&apos;m Dimas Angkasa
        </h1>
        <h4 className="text-center sm:text-left">
          Software Engineer | Still fixing some bugs... 👨‍💻
        </h4>
        <HeroChips />
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
