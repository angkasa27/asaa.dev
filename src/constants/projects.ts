export interface Project {
  title: string;
  description: string;
  stack: string[];
  projectUrl?: string;
  githubUrl?: string;
  highlight: boolean;
  subtitle: string;
  imageUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "fighterden.id",
    description:
      "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    projectUrl: "https://fighterden.id/",
    // githubUrl: "https://github.com/mokletdev/mokletdev",
    subtitle: "Gym Landing Page",
    highlight: true,
    imageUrl: "/projects/fighterden-id.jpg",
  },
  {
    title: "dev.moklet.org",
    description:
      "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    projectUrl: "https://dev.moklet.org/",
    githubUrl: "https://github.com/mokletdev/mokletdev",
    subtitle: "Community Showcase",
    highlight: true,
    imageUrl: "/projects/dev-moklet-org.jpg",
  },
  {
    title: "timotiusmuliawan.com",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    subtitle: "Interactive Portofolio",
    projectUrl: "https://www.timotiusmuliawan.com/",
    highlight: true,
    imageUrl: "/projects/timotiusmuliawan-com.jpg",
  },
  {
    title: "dwipatelco.co.id",
    description:
      "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
    subtitle: "Company Landing Page",
    projectUrl: "https://dwipatelco.co.id/",
    highlight: true,
    imageUrl: "/projects/dwipatelco-co-id.jpg",
  },
  {
    title: "MeteoID",
    description:
      "Get accurate, real-time weather forecasts for all Indonesian regions. Powered by official BMKG meteorological data covering 91,000+ locations across Indonesia",
    stack: ["NextJS", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://meteoid.vercel.app/",
    githubUrl: "https://github.com/angkasa27/meteoid",
    subtitle: "Weather Forecast",
    highlight: false,
    imageUrl: "/projects/meteoid.jpg",
  },
  {
    title: "JSON Schema Editor",
    description:
      "A visual JSON Schema editor built with React, TailwindCSS, and React Hook Form. Easily view and edit JSON schema structures without manually modifying JSON code.",
    stack: ["NextJS", "Typescript", "Tailwind CSS"],
    projectUrl: "https://json-schema-editor.asaa.dev/",
    githubUrl: "https://github.com/angkasa27/json-schema-editor",
    subtitle: "Support Tools",
    highlight: false,
    imageUrl: "/projects/json-schema-editor.jpg",
  },
  {
    title: "MyTEnS GoBeyond",
    description:
      "MyTEnS GoBeyond was revamped to deliver an enhanced user experience and improved functionality. This all-in-one tool was specifically designed to support Account Manager (AM) and AM's managers, providing them with a centralized solution for daily operations, reporting, and performance tracking, ultimately boosting productivity.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "Material UI"],
    projectUrl: "https://mytens.co.id/",
    subtitle: "Executive Dashboard",
    highlight: false,
    imageUrl: "/projects/mytens-gobeyond.jpg",
  },
  {
    title: "NeuCentrIX",
    description:
      "Reprehenderit ullamco esse amet. Tempor culpa eiusmod ex do id laboris velit cupidatat proident sint cupidatat voluptate est elit. Eiusmod eiusmod officia non sint eiusmod. Magna deserunt reprehenderit consectetur nisi cupidatat amet nisi ut ex qui proident consectetur.",
    stack: ["NextJS", "Typescript", "Tailwind CSS", "i18next"],
    subtitle: "Company Landing Page",
    projectUrl: "http://www.neucentrix.co.id/en/",
    highlight: false,
    imageUrl: "/projects/neucentrix.jpg",
  },
  {
    title: "SuratBahagia",
    description:
      "Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily.",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://suratbahagia.asaa.dev/",
    subtitle: "Online Invitation Platform",
    highlight: false,
    imageUrl: "/projects/suratbahagia.jpg",
  },
  {
    title: "Eid Mubarak!",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["NextJS", "Tailwind CSS", "Motion"],
    projectUrl: "https://eid-mubarak-project.vercel.app/",
    githubUrl: "https://github.com/angkasa27/eid-mubarak-project",
    subtitle: "Online Greeting Platform",

    highlight: false,
    imageUrl: "/projects/eid-mubarak.jpg",
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
    highlight: false,
    imageUrl: "/projects/mycomplaint.jpg",
  },
  {
    title: "Socied",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://socied.web.app/",
    githubUrl: "https://github.com/angkasa27/PD_hiedescom_final",
    subtitle: "Social Media Template",
    highlight: false,
    imageUrl: "/projects/socied.jpg",
  },
  {
    title: "Traveline",
    description:
      "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
    stack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://traveline.web.app/",
    githubUrl: "https://github.com/angkasa27/PD-hiedescom2k20",
    subtitle: "Landing Page Template",
    highlight: false,
    imageUrl: "/projects/traveline.jpg",
  },
];
