// import { BentoSection } from "./section/bento";
import { BioSection } from "./section/bio";
import { ContactSection } from "./section/contact";
import { HeroSection } from "./section/hero";
import { ProjectSection } from "./section/project";
import { StackSection } from "./section/stack";

export const MainContainer = () => {
  return (
    <main className="space-y-24">
      <div className="space-y-12 sm:pt-12">
        <HeroSection />
        <BioSection />
      </div>
      <StackSection />
      {/* <BentoSection /> */}
      <ProjectSection />
      <ContactSection />
    </main>
  );
};
