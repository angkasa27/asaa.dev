import { ProjectCard } from "@/components/fragments/project-card";

// TODO: Add redirect to project page
// TODO: Add custom animation

export const ProjectSection = () => {
  return (
    <section id="project">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2 text-center">
          Some of my Projects
        </h2>
        <p className="text-muted-foreground  lg:text-base/relaxed text-center">
          From a project that help me as a developer
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10">
        <ProjectCard
          title="SuratBahagia"
          description="Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily. "
          stack={["React", "Tailwind CSS", "NextJS"]}
          projectUrl="https:/suratbahagia.asaa.dev/"
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
