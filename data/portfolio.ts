export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export const personalInfo = {
  name: "Amogelang Moatswi",
  tagline: "Full-Stack Developer / Graphic Designer / IT Specialist",
  location: "Botswana, Africa",
  email: "moatswi12@gmail.com",
  website: "https://moatswi.vercel.app/",
  linkedinUrl: "https://www.linkedin.com/in/amogelang-moatswi",
  githubUrl: "https://github.com/amogelangmoatswi",
  avatarUrl: "/avatar.jpg",
  bannerUrl: "/banner3.jpg",
  about:
    "Full-stack developer, graphic designer, and IT specialist with a background in Network Security and Computer Forensics. Experienced in building modern web and mobile applications, as well as creating high-quality visual designs and print materials. Skilled in React, Next.js, React Native, and Adobe design tools, with hands-on experience in IT systems, technical support, and digital production. Focused on delivering user-centered digital products and efficient technical solutions.",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "NativeWind" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "PHP" },
      { name: "Java" },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Figma" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
    ],
  },
  {
    title: "IT & Systems",
    skills: [
      { name: "Network Security & Forensics" },
      { name: "IT Support & Hardware" },
      { name: "Database Management" },
      { name: "System Administration" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Graphic Designer",
    company: "Gold Spectrum",
    period: "Feb 2026 – Sep 2026",
    description: [
      "Created high-quality visual content for digital and print media",
      "Developed brand identities and promotional materials",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Abba Ads",
    period: "Sep 2024 – Jan 2026",
    description: [
      "Designed flyers, business cards, T-shirts, gazebos, and promotional materials",
      "Translated client ideas into high-quality visual designs aligned with brand identity",
      "Operated DTF (Direct-to-Film) printing machines for custom apparel production",
      "Operated large-format sublimation machines for high-quality prints",
    ],
  },
  {
    role: "Information Technology Officer Intern",
    company: "Nyangabgwe Referral Hospital",
    period: "Jan 2022 – Jan 2024",
    description: [
      "Managed and maintained printers, computers, and network switches across the organization",
      "Provided technical support to staff, resolving hardware and software issues",
      "Installed, configured, and maintained IT systems for smooth operations",
      "Trained staff on IT systems and tools, improving efficiency",
    ],
  },
  {
    role: "Temporary Voter Registration Clerk",
    company: "Independent Electoral Commission",
    period: "Jan 2024 – Feb 2024",
    description: [
      "Managed sensitive voter data with high accuracy and confidentiality",
      "Verified and processed registration data efficiently in high-pressure environments",
    ],
  },
  {
    role: "IT System Analyst (Attachment)",
    company: "Ministry of Basic Education (Palapye)",
    period: "Jul 2019 – Dec 2019",
    description: [
      "Provided technical support and troubleshooting for users",
      "Assisted in implementing system security protocols",
      "Supported maintenance of IT infrastructure",
    ],
  },
  {
    role: "Temporary Labourer",
    company: "Botswana Power Corporation",
    period: "Mar 2021 – Sep 2021",
    description: [
      "Assisted in field operations and infrastructure setup",
      "Maintained worksite efficiency and safety standards",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science (Hons) in Network Security and Computer Forensics",
    institution: "Botho University",
    period: "2016 – 2020",
  },
  {
    degree: "Botswana General Certificate of Secondary Education (BGCSE)",
    institution: "Lotsane Senior Secondary School",
    period: "2014 – 2015",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Orange Summer Challenge 2024",
    issuer: "Orange Digital Center Botswana",
    year: "2024",
  },
  {
    title: "Web Development Training (Beginner)",
    issuer: "Orange Digital Center Botswana",
    year: "2024",
  },
  {
    title: "Python Training (Beginner)",
    issuer: "Orange Digital Center Botswana",
    year: "2023",
  },
];

export const projects: Project[] = [
  {
    title: "Moscorp Media Inc.",
    description:
      "A modern digital agency platform delivering bespoke solutions in web & mobile development, custom software engineering, UI/UX design, and brand strategy.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://moscorp-media-inc.vercel.app/",
    githubUrl: "https://github.com/amogelangmoatswi",
  },
  {
    title: "ReVend Recycling Platform",
    description:
      "An innovative IoT and reverse vending machine platform incentivizing eco-action with automated deposit sorting, analytics, and Orange Money rewards.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "IoT / Hardware"],
    liveUrl: "https://revend.vercel.app/",
    githubUrl: "https://github.com/amogelangmoatswi",
  },
  {
    title: "First Portfolio Website",
    description:
      "My inaugural personal portfolio featuring custom CSS keyframe animations, smooth interactive navigation, responsive layout, and project showcases.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://amogelangmoatswi.github.io/porfolio/",
    githubUrl: "https://github.com/amogelangmoatswi/porfolio",
  },
  {
    title: "Interactive Portfolio v2.0",
    description:
      "High-performance developer portfolio featuring custom WebGL letter glitch shaders, 3D animated shader gradients, and a sleek dark glassmorphic UI.",
    techStack: ["Next.js 16", "React 19", "Three.js", "WebGL", "Tailwind CSS"],
    liveUrl: "https://moatswi.vercel.app/",
    githubUrl: "https://github.com/amogelangmoatswi",
  },
];
