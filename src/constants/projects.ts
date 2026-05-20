export interface Project {
  title: string;
  description: string;
  contribution: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
  highlight: boolean;
  imageUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Kartu.me",
    description:
      "Just-works, easy-to-use yet highly customizable link-in-bio platform.",
    contribution:
      "Designed and built a link-in-bio platform that balances simplicity and customization, allowing users to create personalized landing pages with ease while offering flexible design options to suit individual branding needs.",
    tags: ["Link-in-Bio", "Personal Branding"],
    projectUrl: "https://kartu.me/",
    highlight: false,
  },
  {
    title: "Resume Editor",
    description:
      "No-login resume editor for building structured CVs with swappable layouts and exportable portable data.",
    contribution:
      "Built an end-to-end resume authoring tool with live canvas editing, layout switching, and PDF/JSON export so users can customize presentation without losing structured content.",
    tags: ["Resume Builder", "Document Editor", "Productivity"],
    projectUrl: "https://resume-editor.asaa.dev/",
    githubUrl: "https://github.com/angkasa27/resume-editor",
    highlight: false,
  },
  // {
  //   title: "Email Operations Dashboard",
  //   description:
  //     "Internal dashboard for monitoring inbound and outbound company email activity across connected mailboxes.",
  //   contribution:
  //     "Built a searchable operations dashboard with IMAP sync, message audit trails, and near-real-time monitoring to give the company clearer visibility into email traffic and mailbox health.",
  //   // tags: ["Internal Tool", "Operations Dashboard", "Email Monitoring"],
  //   tags: ["Internal Tool", "Email Monitoring"],
  //   githubUrl: "https://github.com/angkasa27/email-ops-dashboard",
  //   highlight: false,
  // },
  {
    title: "Fighter Den Iswahjudi",
    description: "Marketing website for a gym at Iswahjudi Air Force Base.",
    contribution:
      "Designed and developed a responsive site that packages memberships, facilities, schedules, and contact flows into a clearer visitor journey and a stronger online presence.",
    tags: ["Marketing Website", "Motion Design"],
    highlight: true,
    projectUrl: "https://fighterden.id/",
    imageUrl: "/projects/fighter-den-iswahjudi.jpg",
  },
  {
    title: "Dwipa Telco Corporate Website",
    description:
      "Corporate website for a telecom infrastructure company specializing in fiber optic and tower projects.",
    contribution:
      "Rebuilt the company’s public web presence from the ground up, improving how services, company information, vendor flows, and contact entry points are presented to prospects and partners.",
    tags: ["Corporate Website", "B2B", "Lead Capture"],
    projectUrl: "https://dwipatelco.co.id/",
    highlight: true,
    imageUrl: "/projects/dwipa-telco-corporate-website.jpg",
  },
  {
    title: "MokletDev Community Showcase",
    description:
      "Community website that showcases GitHub projects from students, teachers, and alumni of SMK Telkom Malang.",
    contribution:
      "Built a browsable project showcase that aggregates repositories through the GitHub API, making community work easier to explore and discover.",
    // tags: ["Community Platform", "GitHub API", "Project Showcase"],
    tags: ["Community Platform", "GitHub API"],
    projectUrl: "https://dev.moklet.org/",
    githubUrl: "https://github.com/mokletdev/mokletdev",
    highlight: true,
    imageUrl: "/projects/moklet-dev-community-showcase.png",
  },
  {
    title: "Timotius Muliawan Portfolio",
    description: "Interactive portfolio website for a product designer.",
    contribution:
      "Crafted a motion-driven portfolio experience with structured case-study storytelling and polished responsive layouts to better communicate the designer’s work and personality.",
    // tags: ["Portfolio Website", "Motion Design", "Case Studies"],
    tags: ["Portfolio Website", "Motion Design"],
    projectUrl: "https://www.timotiusmuliawan.com/",
    highlight: true,
    imageUrl: "/projects/timotius-muliawan-portfolio.jpg",
  },
  {
    title: "MeteoID",
    description:
      "Weather dashboard concept focused on presenting forecast information in a clear and compact interface.",
    contribution:
      "Built a responsive weather UI that emphasizes quick-glance metrics, forecast cards, and a polished dashboard layout for everyday usability.",
    tags: ["Dashboard UI", "Weather App"],
    projectUrl: "https://meteoid.vercel.app/",
    githubUrl: "https://github.com/angkasa27/meteoid",
    highlight: false,
    imageUrl: "/projects/meteoid.jpg",
  },
  {
    title: "Visual JSON Schema Editor",
    description:
      "Browser-based tool for building, editing, and validating JSON Schema visually.",
    contribution:
      "Built a structured editor with recursive schema controls, import/export, and live synchronization to make complex schema authoring more approachable than editing raw JSON by hand.",
    tags: ["Developer Tool", "Interactive UI", "JSON Schema"],
    projectUrl: "https://json-schema-editor.asaa.dev/",
    githubUrl: "https://github.com/angkasa27/json-schema-editor",
    highlight: false,
    imageUrl: "/projects/visual-json-schema-editor.jpg",
  },
  {
    title: "neuCentrIX Corporate Website",
    description:
      "Corporate landing pages for Telkom’s data center and digital infrastructure brand.",
    contribution:
      "Built landing pages that translate enterprise service offerings, certifications, and nationwide coverage into a clearer digital experience for prospective customers.",
    tags: ["Enterprise Website", "Corporate Landing Page"],
    // tags: ["Enterprise Website", "Corporate Landing Page", "B2B"],
    projectUrl: "https://neucentrix.telkom.co.id/en/",
    highlight: false,
    imageUrl: "/projects/neucentrix-corporate-website.jpg",
  },
  {
    title: "Eid Mubarak Digital Card",
    description:
      "Interactive digital greeting card created for Eid al-Fitr celebrations.",
    contribution:
      "Designed and built a lightweight celebratory web experience focused on visual presentation, festive interaction, and shareable seasonal messaging.",
    tags: ["Interactive Web", "Seasonal Project", "Frontend"],
    projectUrl: "https://eid-mubarak-project.vercel.app/",
    githubUrl: "https://github.com/angkasa27/eid-mubarak-project",
    highlight: false,
    imageUrl: "/projects/eid-mubarak-digital-card.jpg",
  },
  {
    title: "MyComplaint",
    description:
      "Digital reporting platform created as a final vocational school project.",
    contribution:
      "Designed and developed a web-based complaint and reporting system, helping communicate the product’s purpose and workflow more clearly.",
    tags: ["Digital Reporting", "Student Project"],
    projectUrl: "https://angkasa27.github.io/react-tailwind-mycomplaint/",
    githubUrl:
      "https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard",
    highlight: false,
    imageUrl: "/projects/mycomplaint.jpg",
  },
  {
    title: "Socied",
    description:
      "Concept social platform for education, designed during a web design competition with a pandemic-learning theme.",
    contribution:
      "Built a pure HTML, CSS, and JavaScript prototype in a 40-hour competition setting, translating the idea of a professional-network-style platform into an education-focused product concept.",
    // tags: ["Competition Project", "Educational Platform", "HTML CSS JS"],
    tags: ["Competition Project", "Educational Platform"],
    projectUrl: "https://socied.web.app/",
    githubUrl: "https://github.com/angkasa27/PD_hiedescom_final",
    highlight: false,
    imageUrl: "/projects/socied.jpg",
  },
  {
    title: "Traveline",
    description:
      "Tourism landing page concept created for a web design competition themed around destinations in Indonesia.",
    contribution:
      "Built a pure HTML, CSS, and JavaScript promotional website that presents Indonesian travel destinations through a clean, campaign-style landing page experience.",
    // tags: ["Competition Project", "Tourism Website", "HTML CSS JS"],
    tags: ["Competition Project", "Tourism Website"],
    projectUrl: "https://traveline.web.app/",
    githubUrl: "https://github.com/angkasa27/PD-hiedescom2k20",
    highlight: false,
    imageUrl: "/projects/traveline.jpg",
  },
];

// export const PROJECTS: Project[] = [
//   {
//     title: "fighterden.id",
//     description:
//       "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
//     contribution: "",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
//     projectUrl: "https://fighterden.id/",
//     // githubUrl: "https://github.com/mokletdev/mokletdev",
//     subtitle: "Gym Landing Page",
//     highlight: true,
//     imageUrl: "/projects/fighterden-id.jpg",
//   },
//   {
//     title: "dev.moklet.org",
//     description:
//       "Create a website showcasing GitHub repository projects for the Moklet community, a group consisting of students, teachers, and alumni of SMK Telkom Malang.",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
//     projectUrl: "https://dev.moklet.org/",
//     githubUrl: "https://github.com/mokletdev/mokletdev",
//     subtitle: "Community Showcase",
//     highlight: true,
//     imageUrl: "/projects/dev-moklet-org.png",
//   },
//   {
//     title: "timotiusmuliawan.com",
//     description:
//       "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "Motion"],
//     subtitle: "Interactive Portofolio",
//     projectUrl: "https://www.timotiusmuliawan.com/",
//     highlight: true,
//     imageUrl: "/projects/timotiusmuliawan-com.jpg",
//   },
//   {
//     title: "dwipatelco.co.id",
//     description:
//       "Quis occaecat velit culpa pariatur minim culpa est nisi. Laborum do dolor eiusmod in mollit non veniam occaecat ex Lorem nisi. Adipisicing sit adipisicing cupidatat dolor eiusmod enim. Adipisicing commodo voluptate culpa non eu dolor minim.",
//     stack: ["Svelte", "Typescript", "Tailwind CSS", "GSAP"],
//     subtitle: "Company Landing Page",
//     projectUrl: "https://dwipatelco.co.id/",
//     highlight: true,
//     imageUrl: "/projects/dwipatelco-co-id.jpg",
//   },
//   {
//     title: "MeteoID",
//     description:
//       "Get accurate, real-time weather forecasts for all Indonesian regions. Powered by official BMKG meteorological data covering 91,000+ locations across Indonesia",
//     stack: ["NextJS", "Tailwind CSS", "TypeScript"],
//     projectUrl: "https://meteoid.vercel.app/",
//     githubUrl: "https://github.com/angkasa27/meteoid",
//     subtitle: "Weather Forecast",
//     highlight: false,
//     imageUrl: "/projects/meteoid.jpg",
//   },
//   {
//     title: "JSON Schema Editor",
//     description:
//       "A visual JSON Schema editor built with React, TailwindCSS, and React Hook Form. Easily view and edit JSON schema structures without manually modifying JSON code.",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "Json Schema"],
//     projectUrl: "https://json-schema-editor.asaa.dev/",
//     githubUrl: "https://github.com/angkasa27/json-schema-editor",
//     subtitle: "Support Tools",
//     highlight: false,
//     imageUrl: "/projects/json-schema-editor.jpg",
//   },
//   {
//     title: "MyTEnS GoBeyond",
//     description:
//       "MyTEnS GoBeyond was revamped to deliver an enhanced user experience and improved functionality. This all-in-one tool was specifically designed to support Account Manager (AM) and AM's managers, providing them with a centralized solution for daily operations, reporting, and performance tracking, ultimately boosting productivity.",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "Material UI"],
//     projectUrl: "https://mytens.co.id/",
//     subtitle: "Executive Dashboard",
//     highlight: false,
//     imageUrl: "/projects/mytens-gobeyond.jpg",
//   },
//   {
//     title: "NeuCentrIX",
//     description:
//       "Reprehenderit ullamco esse amet. Tempor culpa eiusmod ex do id laboris velit cupidatat proident sint cupidatat voluptate est elit. Eiusmod eiusmod officia non sint eiusmod. Magna deserunt reprehenderit consectetur nisi cupidatat amet nisi ut ex qui proident consectetur.",
//     stack: ["NextJS", "Typescript", "Tailwind CSS", "i18next"],
//     subtitle: "Company Landing Page",
//     projectUrl: "https://neucentrix.telkom.co.id/en/",
//     highlight: false,
//     imageUrl: "/projects/neucentrix.jpg",
//   },
//   {
//     title: "SuratBahagia",
//     description:
//       "Create a web-based platform providing online invitation services for weddings, events, and other special moments. Designed to offer a modern and elegant solution, Surat Bahagia helps users create and share personalized invitations easily.",
//     stack: ["NextJS", "Tailwind CSS", "Motion"],
//     projectUrl: "https://suratbahagia.asaa.dev/",
//     subtitle: "Online Invitation Platform",
//     highlight: false,
//     imageUrl: "/projects/suratbahagia.jpg",
//   },
//   {
//     title: "Eid Mubarak!",
//     description:
//       "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
//     stack: ["NextJS", "Tailwind CSS", "Motion"],
//     projectUrl: "https://eid-mubarak-project.vercel.app/",
//     githubUrl: "https://github.com/angkasa27/eid-mubarak-project",
//     subtitle: "Online Greeting Platform",

//     highlight: false,
//     imageUrl: "/projects/eid-mubarak.jpg",
//   },
//   {
//     title: "MyComplaint",
//     description:
//       "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
//     stack: ["React", "Tailwind CSS", "NodeJs", "Express"],
//     projectUrl: "https://angkasa27.github.io/react-tailwind-mycomplaint/",
//     githubUrl:
//       "https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard",
//     subtitle: "Dashboard Website",
//     highlight: false,
//     imageUrl: "/projects/mycomplaint.jpg",
//   },
//   {
//     title: "Socied",
//     description:
//       "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
//     stack: ["HTML", "CSS", "JavaScript"],
//     projectUrl: "https://socied.web.app/",
//     githubUrl: "https://github.com/angkasa27/PD_hiedescom_final",
//     subtitle: "Social Media Template",
//     highlight: false,
//     imageUrl: "/projects/socied.jpg",
//   },
//   {
//     title: "Traveline",
//     description:
//       "Create a web-based platform for sending personalized Eid greetings with a lot of templates and customization options available",
//     stack: ["HTML", "CSS", "JavaScript"],
//     projectUrl: "https://traveline.web.app/",
//     githubUrl: "https://github.com/angkasa27/PD-hiedescom2k20",
//     subtitle: "Landing Page Template",
//     highlight: false,
//     imageUrl: "/projects/traveline.jpg",
//   },
// ];
