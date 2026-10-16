"use client";

import { motion } from "framer-motion";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { Highlighter } from "@/components/ui/highlighter";

export default function AboutSection() {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        About Me
      </h2>
      <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-xl shadow-black/20">
        <NoiseTexture className="opacity-20 dark:opacity-30 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
        <div className="relative z-10 text-muted-foreground/90 leading-relaxed text-base sm:text-lg space-y-4">
          <p>
            I am a{" "}
            <Highlighter action="underline" color="#61dca3" strokeWidth={2.5} padding={2}>
              Full-stack developer, graphic designer, and IT specialist
            </Highlighter>{" "}
            with a strong background in Network Security and Computer Forensics. Experienced in building modern web and mobile applications, as well as creating high-quality visual designs and print production materials.
          </p>
          <p>
            Proficient across React, Next.js, React Native, and Adobe creative suites, backed by hands-on industry expertise in enterprise IT systems, hardware support, and system administration.
          </p>
          <p>
            Dedicated to crafting{" "}
            <Highlighter action="highlight" color="rgba(97, 220, 163, 0.22)" padding={3}>
              user-centered digital products
            </Highlighter>{" "}
            and building scalable, efficient technical solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
