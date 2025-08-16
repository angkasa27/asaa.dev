export interface Project {
  title: string;
  description: string;
  stack: string[];
  projectUrl: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Timotius Muliawan",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    projectUrl: "https://www.timotiusmuliawan.com/",
  },
  {
    title: "Dwipatelco",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS"],
    projectUrl: "https://www.dwipatelco.co.id/",
  },
  {
    title: "NeuCentrIX",
    description:
      "Reprehenderit ullamco esse amet. Tempor culpa eiusmod ex do id laboris velit cupidatat proident sint cupidatat voluptate est elit. Eiusmod eiusmod officia non sint eiusmod. Magna deserunt reprehenderit consectetur nisi cupidatat amet nisi ut ex qui proident consectetur.",
    stack: ["NextJS", "Typescript", "Tailwind CSS"],
    projectUrl: "https://www.neucentrix.co.id/en/",
  },
  {
    title: "SuratBahagia",
    description:
      "Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily.",
    stack: ["React", "Tailwind CSS", "NextJS"],
    projectUrl: "https://suratbahagia.asaa.dev/",
  },
  {
    title: "MokletDev",
    description:
      "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
    stack: ["React", "Tailwind CSS", "NextJS"],
    projectUrl: "https://mokletdev.vercel.app/",
    githubUrl: "https://github.com/mokletdev",
  },
];
