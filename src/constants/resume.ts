export interface ExperienceItem {
  company: string;
  /** filename in src/assets/companies/; defaults to the slugified company name */
  logo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  /** filename in src/assets/schools/; defaults to the slugified school name */
  logo?: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface PublicationItem {
  title: string;
  publisher: string;
  url?: string;
  date: string;
  description: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  date?: string;
}

export const SUMMARY =
  "Software Engineer with 5+ years of experience specializing in frontend development for enterprise web applications. Skilled in building responsive, high-quality interfaces with modern frameworks, improving performance, and creating maintainable component-based systems. Comfortable working beyond the frontend when needed, including API integration, system design, and deployment, to deliver reliable end-to-end products.";

// Dates render only when startDate is set — the two Telkom roles are still missing theirs.
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "GovTech Procurement",
    position: "Frontend Developer",
    location: "Jakarta, Indonesia",
    startDate: "Jul 2026",
    endDate: "Present",
    bullets: [],
    logo: "govtech.png",
  },
  {
    company: "PT. Dwipantara Media Telematika",
    position: "Developer",
    location: "Jakarta, Indonesia",
    startDate: "Apr 2025",
    endDate: "Jun 2026",
    logo: "dwipa.jpg",
    bullets: [
      "Led corporate website rebuild, establishing credible digital presence; generated 4.8K impressions and 149 clicks in 3 months, and achieved Lighthouse scores of 91/93/100/100.",
      "Solely architected and developed internal operations platform for fiber-optic project delivery, owning full lifecycle from discovery to iteration.",
      "Developed multi-repository platform (user management, project operations, infrastructure, Next.js dashboard), supporting 13 roles and 211 feature flags.",
      "Engineered application infrastructure across 2 servers and 5 repositories, leveraging Proxmox, Docker, and GitHub webhooks to reduce deployment time from 10 to under 4 minutes.",
      "Automated vendor registration workflow, standardizing 17 documents and routing notifications to Legal, Sales, and Procurement, slashing submission time from days to 15–30 minutes.",
    ],
  },
  {
    company: "Telkom Indonesia",
    position: "Frontend Developer",
    location: "Jakarta, Indonesia",
    startDate: "",
    logo: "telkom.png",
    endDate: "",
    bullets: [
      "Developed internal web platforms for Telkom product sales, empowering account managers and stakeholders with centralized dashboard workflows.",
      "Led development and maintenance of a centralized approval management application, streamlining internal processes and owning its frontend repository.",
      "Revamped MyTEnS V2, migrating frontend from React.js to Next.js/TypeScript, cutting local build time from 15 to under 3 minutes.",
      "Developed reusable UI components and design system patterns for MyTEnS V2, enhancing consistency and establishing a scalable foundation.",
      "Engineered a dynamic executive dashboard for sales, account managers, and management, enabling flexible, role-based content via backend configuration.",
      "Implemented MyTEnS V2 customer management (listing, multi-tab views) with structured UI, separating backend logic from frontend data rendering.",
      "Maintained MyTEnS V2 and legacy V1 frontend during transition, ensuring business continuity while new modules were rebuilt.",
    ],
  },
  {
    company: "Telkom Indonesia",
    position: "Frontend Developer (Internship)",
    location: "Jakarta, Indonesia",
    logo: "telkom.png",
    startDate: "",
    endDate: "",
    bullets: [
      "Developed an internal admin dashboard to centralize Telkom product sales workflows for UMKM-focused operations.",
      "Gained hands-on experience working in a real-world software delivery environment using SDLC and Scrum while building production frontend features with React.js.",
      "Collaborated with the team to translate business requirements into internal dashboard interfaces and learned modern frontend development practices in an enterprise setting.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Binus University Online Learning",
    degree: "Bachelor of Information Systems",
    startDate: "Aug 2021",
    endDate: "Aug 2025",
    gpa: "3.83",
    logo: "binus.png",
  },
  {
    school: "SMK Telkom Malang",
    degree: "Software Engineering (RPL)",
    startDate: "Jul 2018",
    endDate: "Jun 2021",
    logo: "moklet.png",
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title:
      "User Experience Analysis of AI-Based Interview Platform for Job Seekers Using System Usability Scale and Concurrent Think Aloud",
    publisher:
      "2025 International Conference on Information Management and Technology (ICIMTech)",
    url: "https://ieeexplore.ieee.org/document/11265385",
    date: "Sep 2025",
    description:
      "Co-authored a usability study evaluating an AI-based interview platform using SUS and Concurrent Think Aloud with 100 survey respondents and 30 task-based participants.",
  },
];

export const AWARDS: AwardItem[] = [
  {
    title: "1st Non-Academic Best Graduate",
    issuer: "SMK Telkom Malang",
    date: "2021",
  },
  {
    title: "1st Place National Web Design Competition HIEDESCOM 2K20",
    issuer:
      "Himpunan Mahasiswa Diploma Sistem Informasi Universitas Airlangga",
    date: "2020",
  },
  {
    title: "1st Place Regional Web Design Competition",
    issuer: "Institut Asia Malang",
    date: "2020",
  },
  {
    title: "1st Place National Web Design Competition UNIPRO V",
    issuer: "Universitas Kanjuruhan Malang",
    date: "2019",
  },
  {
    title: "1st Place National Web Design Competition HIEDESCOM 2K19",
    issuer:
      "Himpunan Mahasiswa Diploma Sistem Informasi Universitas Airlangga",
    date: "2019",
  },
];
