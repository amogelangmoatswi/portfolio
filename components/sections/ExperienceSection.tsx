"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { experiences, education, certifications } from "@/data/portfolio";
import { NoiseTexture } from "@/components/ui/noise-texture";

export default function ExperienceSection() {
  return (
    <motion.section
      id="Experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Experience & Education
      </h2>

      {/* Professional Experience */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Professional Experience
        </h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-5 hover:border-primary/40 transition-colors relative overflow-hidden"
            >
              <NoiseTexture className="opacity-20 dark:opacity-30 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-base text-foreground">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-primary/90 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 sm:mt-0 bg-secondary/50 px-2.5 py-1 rounded-full w-fit">
                  <Calendar className="h-3 w-3" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-3">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-5 hover:border-primary/40 transition-colors relative overflow-hidden"
              >
                <NoiseTexture className="opacity-20 dark:opacity-30 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
                <div className="relative z-10">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-primary/90 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full w-fit">
                    <Calendar className="h-3 w-3" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Training & Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-5 hover:border-primary/40 transition-colors relative overflow-hidden"
              >
                <NoiseTexture className="opacity-20 dark:opacity-30 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
                <div className="relative z-10">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary/90 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.year}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
