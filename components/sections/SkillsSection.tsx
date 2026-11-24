"use client";

import { motion } from "framer-motion";
import { Cpu, Database, ShieldCheck, Terminal } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { NoiseTexture } from "@/components/ui/noise-texture";

const SkillLogos = [
  {
    name: "Next.js",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 180 180" fill="none" aria-hidden="true">
          <mask
            id="nextjs-mask"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="180"
            height="180"
          >
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#nextjs-mask)">
            <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#nextjs-grad0)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-grad1)" />
          </g>
          <defs>
            <linearGradient id="nextjs-grad0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextjs-grad1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span>Next.js</span>
      </div>
    ),
  },
  {
    name: "React",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg
          className="h-6 w-6 shrink-0 text-sky-400"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <span>React</span>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 54 33" fill="none" aria-hidden="true">
          <path
            className="fill-cyan-400"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
          />
        </svg>
        <span>Tailwind CSS</span>
      </div>
    ),
  },
  {
    name: "React Native",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg
          className="h-6 w-6 shrink-0 text-cyan-400"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <span>React Native</span>
      </div>
    ),
  },
  {
    name: "Expo",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-5 w-5 shrink-0 fill-foreground/90" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.2c-.7 0-1.3.4-1.7 1.1L2.2 18.6c-.4.7-.1 1.6.6 2 .7.4 1.6.1 2-.6L12 7.5l7.2 12.5c.4.7 1.3 1 2 .6.7-.4 1-1.3.6-2L13.7 4.3c-.4-.7-1-1.1-1.7-1.1z" />
        </svg>
        <span>Expo</span>
      </div>
    ),
  },
  {
    name: "NativeWind",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#0F172A" />
          <path
            d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.33 8.42 11.82 8.92 12.37 9.47C13.25 10.36 14.27 11.4 16.5 11.4C18.9 11.4 20.4 10.2 21 7.8C20.1 9 19.05 9.45 17.85 9.15C17.17 8.98 16.68 8.48 16.13 7.93C15.25 7.04 14.23 6 12 6ZM7.5 12.6C5.1 12.6 3.6 13.8 3 16.2C3.9 15 4.95 14.55 6.15 14.85C6.83 15.02 7.32 15.52 7.87 16.07C8.75 16.96 9.77 18 12 18C14.4 18 15.9 16.8 16.5 14.4C15.6 15.6 14.55 16.05 13.35 15.75C12.67 15.58 12.18 15.08 11.63 14.53C10.75 13.64 9.73 12.6 7.5 12.6Z"
            fill="#38BDF8"
          />
        </svg>
        <span>NativeWind</span>
      </div>
    ),
  },
  {
    name: "JavaScript",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M10.4 16.9C10.4 18.4 9.5 19.1 8.2 19.1C7.2 19.1 6.5 18.6 6.1 17.8L7.4 17C7.6 17.4 7.9 17.7 8.3 17.7C8.8 17.7 9 17.4 9 16.8V11.3H10.4V16.9ZM14.9 19.1C13.3 19.1 12.3 18.3 11.8 17.4L13.1 16.6C13.5 17.2 14 17.7 14.9 17.7C15.6 17.7 16.1 17.3 16.1 16.8C16.1 16.2 15.6 16 14.7 15.6L14.2 15.4C12.9 14.8 12 14.1 12 12.6C12 11.2 13.1 10.2 14.7 10.2C15.9 10.2 16.7 10.6 17.3 11.6L16.1 12.4C15.7 11.8 15.3 11.6 14.7 11.6C14.1 11.6 13.7 12 13.7 12.5C13.7 13.1 14.1 13.3 15 13.7L15.5 13.9C17 14.5 17.8 15.2 17.8 16.7C17.8 18.3 16.6 19.1 14.9 19.1Z"
            fill="#111827"
          />
        </svg>
        <span>JavaScript</span>
      </div>
    ),
  },
  {
    name: "TypeScript",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M13.5 11.2H10.5V19H8.7V11.2H5.7V9.7H13.5V11.2ZM14.6 17.5C15.1 18.1 15.9 18.5 16.9 18.5C17.8 18.5 18.4 18.1 18.4 17.5C18.4 16.9 17.9 16.6 16.7 16.3C15.2 15.9 14.3 15.2 14.3 13.9C14.3 12.5 15.5 11.5 17.2 11.5C18.3 11.5 19.2 11.8 19.9 12.4L19 13.7C18.5 13.2 17.9 13 17.2 13C16.4 13 16 13.4 16 13.8C16 14.4 16.5 14.6 17.7 15C19.3 15.4 20.1 16.1 20.1 17.4C20.1 19 18.8 20 16.8 20C15.4 20 14.3 19.5 13.6 18.7L14.6 17.5Z"
            fill="white"
          />
        </svg>
        <span>TypeScript</span>
      </div>
    ),
  },
  {
    name: "Python",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4V5.9H12V6.7H7.2C7.2 6.7 4 6.3 4 10.6C4 14.9 6.8 14.7 6.8 14.7H8.4V12.5C8.4 12.5 8.3 9.7 11.1 9.7H14.5C14.5 9.7 17.1 9.7 17.1 7.2V3.8C17.1 3.8 17.5 2 11.9 2ZM10.1 3.6C10.5 3.6 10.9 3.9 10.9 4.4C10.9 4.8 10.5 5.2 10.1 5.2C9.6 5.2 9.3 4.8 9.3 4.4C9.3 3.9 9.6 3.6 10.1 3.6Z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6V18.1H12V17.3H16.8C16.8 17.3 20 17.7 20 13.4C20 9.1 17.2 9.3 17.2 9.3H15.6V11.5C15.6 11.5 15.7 14.3 12.9 14.3H9.5C9.5 14.3 6.9 14.3 6.9 16.8V20.2C6.9 20.2 6.5 22 12.1 22ZM13.9 20.4C13.5 20.4 13.1 20.1 13.1 19.6C13.1 19.2 13.5 18.8 13.9 18.8C14.4 18.8 14.7 19.2 14.7 19.6C14.7 20.1 14.4 20.4 13.9 20.4Z"
            fill="#FFD43B"
          />
        </svg>
        <span>Python</span>
      </div>
    ),
  },
  {
    name: "PHP",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-8 shrink-0" viewBox="0 0 32 20" fill="none" aria-hidden="true">
          <ellipse cx="16" cy="10" rx="15" ry="9" fill="#777BB4" />
          <text
            x="16"
            y="13.5"
            textAnchor="middle"
            fill="white"
            fontSize="9.5"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            PHP
          </text>
        </svg>
        <span>PHP</span>
      </div>
    ),
  },
  {
    name: "Java",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 17.5C6.5 18 8.8 19.2 12.3 19.1C15.8 19 17.2 18.1 15.8 17.5"
            stroke="#5382A1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 14.5H15.5C16.6 14.5 17.5 13.6 17.5 12.5C17.5 11.4 16.6 10.5 15.5 10.5H15V13.5C15 14.6 14.1 15.5 13 15.5H9C7.9 15.5 7 14.6 7 13.5V10.5H15"
            stroke="#5382A1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 8C10.5 6.8 12.2 6.2 11.8 4.8M13.2 8.2C13.2 7.2 14.5 6.5 14.1 5.2"
            stroke="#F89820"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span>Java</span>
      </div>
    ),
  },
  {
    name: "Figma",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-5 shrink-0" viewBox="0 0 38 57" fill="none" aria-hidden="true">
          <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE" />
          <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5a9.5 9.5 0 0 1-9.5 0Z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
        </svg>
        <span>Figma</span>
      </div>
    ),
  },
  {
    name: "Adobe Photoshop",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4.5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.2" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#31A8FF"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            Ps
          </text>
        </svg>
        <span>Adobe Photoshop</span>
      </div>
    ),
  },
  {
    name: "Adobe Illustrator",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4.5" fill="#330000" stroke="#FF9A00" strokeWidth="1.2" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#FF9A00"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            Ai
          </text>
        </svg>
        <span>Adobe Illustrator</span>
      </div>
    ),
  },
  {
    name: "Network Security & Forensics",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-400" />
        <span>Network Security &amp; Forensics</span>
      </div>
    ),
  },
  {
    name: "IT Support & Hardware",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <Cpu className="h-6 w-6 shrink-0 text-primary" />
        <span>IT Support &amp; Hardware</span>
      </div>
    ),
  },
  {
    name: "Database Management",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <Database className="h-6 w-6 shrink-0 text-sky-400" />
        <span>Database Management</span>
      </div>
    ),
  },
  {
    name: "System Administration",
    render: () => (
      <div className="flex items-center gap-2.5 whitespace-nowrap font-semibold text-base text-foreground/90">
        <Terminal className="h-6 w-6 shrink-0 text-amber-400" />
        <span>System Administration</span>
      </div>
    ),
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="Skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Skills
      </h2>

      <div className="glass-card rounded-xl px-4 py-3 sm:px-6 sm:py-4 relative overflow-hidden">
        <NoiseTexture className="opacity-25 dark:opacity-35" frequency={0.5} octaves={5} slope={0.16} />

        <div className="relative z-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <Marquee pauseOnHover speed={45} className="mt-0 sm:mt-0">
            {SkillLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative w-fit mx-6 sm:mx-8 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
              >
                {logo.render()}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
}
