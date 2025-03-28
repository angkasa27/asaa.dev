import { ProjectCard } from "@/components/fragments/project-card";

// TODO: Add redirect to project page
// TODO: Add custom animation
// TODO: Add animation to "Highlighted"

export const ProjectSection = () => {
  return (
    <section id="project">
      <div className="space-y-2">
        <div className="rounded-md bg-foreground text-background px-2 py-1 text-sm mx-auto w-fit">
          Epic Stuff 🔥
        </div>
        <h2 className="text-center">Some Projects</h2>
        <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-center">
          Building seamless and visually engaging web experiences is my passion.
          Explore a few of my highlighted projects, showcasing both stunning
          design and practical web tools.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <ProjectCard
          title="SuratBahagia"
          description="Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily. "
          stack={["React", "Tailwind CSS", "NextJS"]}
          projectUrl="https://suratbahagia.asaa.dev/"
        />
        <ProjectCard
          title="MokletDev"
          description="Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang."
          stack={["React", "Tailwind CSS", "NextJS"]}
          projectUrl="https://mokletdev.vercel.app/"
          githubUrl="https://github.com/mokletdev"
        />
      </div>
    </section>
  );
};
