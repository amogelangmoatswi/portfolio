"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { StarRating } from "@/components/ui/star-rating";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const active = testimonials[activeIndex];

  const handleRatingChange = (value: number) => {
    setUserRating(value);
    if (value > 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <motion.section
      id="Testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
        Testimonials
      </h2>

      {/* Minimal Testimonial Showcase */}
      <div className="glass-card rounded-xl p-6 sm:p-8 relative overflow-hidden">
        <NoiseTexture
          className="opacity-20 dark:opacity-30 pointer-events-none"
          frequency={0.5}
          octaves={5}
          slope={0.16}
        />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <Quote className="h-5 w-5 text-primary/60 shrink-0" aria-hidden="true" />
            <StarRating
              value={active.rating}
              readOnly
              size="sm"
              label={`${active.name} rating`}
            />
          </div>

          <div className="min-h-[84px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-base sm:text-lg text-foreground/90 leading-relaxed font-normal"
              >
                &ldquo;{active.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{active.name}</p>
              <p className="text-xs text-muted-foreground">
                {active.role} · {active.company}
              </p>
            </div>

            {/* Minimal author switcher */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`${item.name}, ${item.company}`}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "h-9 px-3 rounded-full text-xs font-medium transition-all flex items-center gap-2 border whitespace-nowrap shrink-0",
                      isActive
                        ? "bg-primary/15 text-primary border-primary/40 shadow-sm"
                        : "bg-secondary/50 text-muted-foreground border-border/40 hover:text-foreground hover:border-border"
                    )}
                  >
                    <span
                      className={cn(
                        "h-5 w-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-background/60 text-muted-foreground"
                      )}
                    >
                      {item.initials}
                    </span>
                    <span>{item.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Feedback Component */}
      <div className="mt-4 glass-card rounded-xl px-6 py-4 relative overflow-hidden">
        <NoiseTexture
          className="opacity-15 dark:opacity-25 pointer-events-none"
          frequency={0.5}
          octaves={4}
          slope={0.14}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">
              Rate my portfolio
            </p>
            <p className="text-xs text-muted-foreground">
              {submitted && userRating > 0 ? (
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Thanks for rating ({userRating}/5)!
                </span>
              ) : (
                "Hover to preview, click to commit — arrow keys work too"
              )}
            </p>
          </div>
          <StarRating
            value={userRating}
            onValueChange={handleRatingChange}
            showValue
            label="Rate my portfolio"
          />
        </div>
      </div>
    </motion.section>
  );
}
