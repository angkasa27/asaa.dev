export interface Project {
  title: string;
  description: string;
  stack: string[];
  projectUrl?: string;
  githubUrl?: string;
  enabledPreview: boolean;
  highlight: boolean;
  subtitle: string;
}

export const PROJECTS: Project[] = [
  {
    title: "fighterden.id",
    description:
      "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://fighterden.id/",
    // githubUrl: "https://github.com/mokletdev/mokletdev",
    subtitle: "Gym Landing Page",
    enabledPreview: true,
    highlight: true,
  },
  {
    title: "dev.moklet.org",
    description:
      "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://dev.moklet.org/",
    githubUrl: "https://github.com/mokletdev/mokletdev",
    subtitle: "Community Showcase",
    enabledPreview: true,
    highlight: true,
  },
  {
    title: "timotiusmuliawan.com",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion", "GSAP"],
    subtitle: "Interactive Portofolio",
    projectUrl: "https://www.timotiusmuliawan.com/",
    enabledPreview: true,
    highlight: true,
  },
  {
    title: "dwipatelco.co.id",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    subtitle: "Company Landing Page",
    projectUrl: "https://www.dwipatelco.co.id/",
    enabledPreview: true,
    highlight: true,
  },
  {
    title: "MeteoID",
    description:
      "Get accurate, real-time weather forecasts for all Indonesian regions. Powered by official BMKG meteorological data covering 91,000+ locations across Indonesia",
    stack: ["NextJS", "Tailwind CSS"],
    projectUrl: "https://meteoid.vercel.app/",
    githubUrl: "https://github.com/angkasa27/meteoid",
    subtitle: "Weather Forecast",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "JSON Schema Editor",
    description:
      "A visual JSON Schema editor built with React, TailwindCSS, and React Hook Form. Easily view and edit JSON schema structures without manually modifying JSON code.",
    stack: ["NextJS", "Typescript", "Tailwind CSS"],
    projectUrl: "https://json-schema-editor.asaa.dev/",
    githubUrl: "https://github.com/angkasa27/json-schema-editor",
    subtitle: "Support Tools",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "MyTEnS GoBeyond",
    description:
      "MyTEnS GoBeyond was revamped to deliver an enhanced user experience and improved functionality. This all-in-one tool was specifically designed to support Account Manager (AM) and AM's managers, providing them with a centralized solution for daily operations, reporting, and performance tracking, ultimately boosting productivity.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Material UI"],
    projectUrl: "https://mytens.co.id/",
    subtitle: "Executive Dashboard",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "NeuCentrIX",
    description:
      "Reprehenderit ullamco esse amet. Tempor culpa eiusmod ex do id laboris velit cupidatat proident sint cupidatat voluptate est elit. Eiusmod eiusmod officia non sint eiusmod. Magna deserunt reprehenderit consectetur nisi cupidatat amet nisi ut ex qui proident consectetur.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "i18next"],
    subtitle: "Company Landing Page",
    projectUrl: "http://www.neucentrix.co.id/en/",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "SuratBahagia",
    description:
      "Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily.",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://suratbahagia.asaa.dev/",
    subtitle: "Online Invitation Platform",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "Eid Mubarak!",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://eid-mubarak-project.vercel.app/",
    githubUrl: "https://github.com/angkasa27/eid-mubarak-project",
    subtitle: "Online Greeting Platform",

    enabledPreview: true,
    highlight: false,
  },
  {
    title: "MyComplaint",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["React", "Tailwind CSS", "NodeJs", "Express"],
    projectUrl: "https://angkasa27.github.io/react-tailwind-mycomplaint/",
    githubUrl:
      "https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard",
    subtitle: "Dashboard Website",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "Socied",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://socied.web.app/",
    githubUrl: "https://github.com/angkasa27/PD_hiedescom_final",
    subtitle: "Social Media Template",
    enabledPreview: true,
    highlight: false,
  },
  {
    title: "Traveline",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://traveline.web.app/",
    githubUrl: "https://github.com/angkasa27/PD-hiedescom2k20",
    subtitle: "Landing Page Template",
    enabledPreview: true,
    highlight: false,
  },
];
