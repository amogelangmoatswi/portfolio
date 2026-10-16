"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { NoiseTexture } from "@/components/ui/noise-texture";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <motion.section
      id="Skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-6 relative overflow-hidden"
          >
            <NoiseTexture className="opacity-25 dark:opacity-35" frequency={0.5} octaves={5} slope={0.16} />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/40 transition-colors hover:border-primary/40 hover:text-primary cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
