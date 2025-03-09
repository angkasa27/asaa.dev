import { BioSection } from "./section/bio";
import { HeroSection } from "./section/hero";

export const MainContainers = () => {
  return (
    <main className="*:mt-10">
      <HeroSection />
      <BioSection />
    </main>
  );
};
