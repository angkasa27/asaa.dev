import { BentoSection } from "./section/bento";
import { BioSection } from "./section/bio";
import { HeroSection } from "./section/hero";
import { ProjectSection } from "./section/project";
import { StackSection } from "./section/stack";

export const MainContainers = () => {
  return (
    <main className="*:mt-10">
      <HeroSection />
      <BioSection />
      <StackSection />
      <BentoSection />
      <ProjectSection />
    </main>
  );
};
