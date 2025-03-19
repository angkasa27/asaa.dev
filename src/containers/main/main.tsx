// import { BentoSection } from "./section/bento";
import { BioSection } from "./section/bio";
import { ContactSection } from "./section/contact";
import { HeroSection } from "./section/hero";
import { ProjectSection } from "./section/project";
import { StackSection } from "./section/stack";

export const MainContainers = () => {
  return (
    <main className="*:mt-24">
      <HeroSection />
      <BioSection />
      <StackSection />
      {/* <BentoSection /> */}
      <ProjectSection />
      <ContactSection />
    </main>
  );
};
