"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { NoiseTexture } from "@/components/ui/noise-texture";

const projectGradients = [
  "from-indigo-600/30 via-purple-600/15 to-pink-600/10",
  "from-emerald-600/30 via-teal-600/15 to-cyan-600/10",
  "from-amber-600/30 via-orange-600/15 to-rose-600/10",
  "from-blue-600/30 via-violet-600/15 to-cyan-600/10",
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="Projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-xl overflow-hidden group transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 relative flex flex-col justify-between"
          >
            <NoiseTexture className="opacity-20 dark:opacity-30 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
            <div>
              {/* Project preview header with custom themed gradient */}
              <div className={cn("relative h-44 bg-gradient-to-br overflow-hidden border-b border-white/5", projectGradients[index % projectGradients.length])}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-extrabold font-display text-white/30 group-hover:text-white/60 tracking-wider transition-all duration-300 group-hover:scale-105">
                    {project.title.split(" ")[0]}
                  </span>
                  {project.liveUrl && (
                    <span className="text-xs text-white/40 mt-1 font-mono tracking-tight group-hover:text-primary transition-colors">
                      {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                    </span>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 pb-2">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons pinned to card bottom */}
            <div className="px-5 pb-5 pt-2 flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="mine" size="sm" className="gap-1.5 text-xs">
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="mine" size="sm" className="gap-1.5 text-xs">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
