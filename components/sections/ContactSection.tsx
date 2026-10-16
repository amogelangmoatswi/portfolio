"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { NoiseTexture } from "@/components/ui/noise-texture";

export default function ContactSection() {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Get in Touch
      </h2>

      <div className="glass-card rounded-xl p-6 sm:p-8 relative overflow-hidden">
        <NoiseTexture className="opacity-25 dark:opacity-35 pointer-events-none" frequency={0.5} octaves={5} slope={0.16} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Left: Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always open to new opportunities and interesting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60">Location</p>
                  <p className="text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Simple form */}
          <form
            action={`mailto:${personalInfo.email}`}
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="text-sm text-muted-foreground mb-1.5 block">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm text-muted-foreground mb-1.5 block">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-sm text-muted-foreground mb-1.5 block"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Hi Amogelang, I'd love to work with you on..."
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
              />
            </div>
            <Button type="submit" variant="default" className="w-full gap-2 h-10 font-medium shadow-md shadow-primary/20">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
