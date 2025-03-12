import { BentoSection } from "./section/bento";
import { BioSection } from "./section/bio";
import { HeroSection } from "./section/hero";
import { StackSection } from "./section/stack";

export const MainContainers = () => {
  return (
    <main className="*:mt-10">
      <HeroSection />
      <BioSection />
      <StackSection />
      <BentoSection />
    </main>
  );
};
