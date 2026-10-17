"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import TiltedCard from "@/components/ui/TiltedCard";
import LetterGlitch from "@/components/ui/LetterGlitch";
import Noise from "@/components/ui/Noise";
import { TypingAnimation } from "@/components/ui/typing-animation";
import SpecularButton from "@/components/ui/SpecularButton";

const roles = [
  "Full-Stack Developer",
  "Graphic Designer",
  "IT & Security Specialist",
  "Mobile App Developer",
];

export default function HeroSection() {
  return (
    <section id="Home" className="relative mb-16">
      {/* Banner + Avatar container */}
      <div className="relative mb-14 sm:mb-16">
        {/* TiltedCard Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <TiltedCard
            imageSrc={personalInfo.bannerUrl}
            altText="Scenic background showcasing Amogelang's creative work"
            captionText="Click to flip"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.02}
            glare={0.35}
            shadow={0.4}
            radius={12}
            perspective={1200}
            smoothness={0.5}
            floating={false}
            intro={true}
            className="w-full !h-44 sm:!h-56 md:!h-64"
            style={{ width: '100%' }}
            backContent={
              <div className="absolute inset-0 bg-[#09090b] rounded-xl overflow-hidden">
                <LetterGlitch
                  key="hero-letter-glitch"
                  glitchColors={["#ffffff", "#61dca3", "#38bdf8", "#a855f7"]}
                  baseColor="#cbd5e1"
                  baseOpacity={0.4}
                  glitchAmount={0.55}
                  speed={1}
                  flow={0.5}
                  clickEffect="tear"
                  backgroundColor="#09090b"
                  className="w-full h-full"
                  intro={false}
                />
              </div>
            }
          >
            {/* Front-side overlay content */}
            <div className="absolute inset-0 z-[1]">
              {/* Noise texture overlay */}
              <Noise
                opacity={0.25}
                size={1}
                fps={24}
                blendMode="overlay"
                contrast={0.65}
                colored={false}
              />
              {/* Vignette gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/30 to-transparent" />

              {/* Available Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs text-white/90 font-medium shadow-sm select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>
                    Available<span className="hidden sm:inline"> for Work</span>
                  </span>
                </div>
              </motion.div>

            </div>
          </TiltedCard>
        </motion.div>

        {/* Avatar - positioned on top of the banner */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -bottom-10 sm:-bottom-12 left-4 sm:left-8 z-10"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-background overflow-hidden">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Info below avatar */}
      <div className="mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display mb-2">
              {personalInfo.name}
            </h1>
            <div className="text-lg text-muted-foreground mb-1 min-h-[28px] flex items-center">
              <TypingAnimation
                words={roles}
                loop
                typeSpeed={70}
                deleteSpeed={40}
                pauseDelay={1600}
                cursorStyle="line"
                className="text-primary font-medium text-lg leading-normal"
              />
            </div>
            <p className="text-sm text-muted-foreground/60">{personalInfo.location}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-5 md:mt-0 w-full md:w-auto"
          >
            {/* Download CV with SpecularButton */}
            <a
              href="/Amogelang-Moatswi-CV.pdf"
              download="Amogelang-Moatswi-CV.pdf"
              className="inline-flex"
            >
              <SpecularButton
                size="sm"
                radius={9999}
                tint="#ffffff"
                tintOpacity={0.06}
                textColor="#ffffff"
                lineColor="#61dca3"
                baseColor="#27272a"
                intensity={1.2}
                idleIntensity={0.4}
                glow={1}
                followMouse
                className="border border-white/10 h-10 px-4"
              >
                <FileDown className="h-4 w-4 mr-1 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">Download CV</span>
              </SpecularButton>
            </a>

            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="mine" size="icon" aria-label="LinkedIn" className="h-10 w-10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="mine" size="icon" aria-label="GitHub" className="h-10 w-10">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="ml-auto sm:ml-0">
              <Button variant="default" size="icontext" className="font-medium shadow-sm shadow-primary/20 h-10 px-4 text-xs sm:text-sm">
                <Mail className="h-4 w-4" />
                <span className="ml-1.5">Hire Me</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
