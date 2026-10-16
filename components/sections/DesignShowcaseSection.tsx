"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Palette,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NoiseTexture } from "@/components/ui/noise-texture";
import {
  designs,
  designCategories,
  type DesignCategory,
  type DesignItem,
} from "@/data/designs";
import { cn } from "@/lib/utils";

const INITIAL_DISPLAY_COUNT = 6;

export default function DesignShowcaseSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<DesignCategory>("All");
  const [activeItem, setActiveItem] = useState<DesignItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  // Memoize filtered list so callbacks & effects stay stable
  const filteredDesigns = useMemo(
    () =>
      designs.filter((item) =>
        selectedCategory === "All" ? true : item.category === selectedCategory
      ),
    [selectedCategory]
  );

  const displayedDesigns = showAll
    ? filteredDesigns
    : filteredDesigns.slice(0, INITIAL_DISPLAY_COUNT);

  // Reset lightbox loading state when active item changes
  useEffect(() => {
    setLightboxLoaded(false);
  }, [activeItem]);

  // Lightbox navigation
  const handlePrev = useCallback(() => {
    if (!activeItem) return;
    const idx = filteredDesigns.findIndex((d) => d.id === activeItem.id);
    setActiveItem(
      filteredDesigns[(idx - 1 + filteredDesigns.length) % filteredDesigns.length]
    );
  }, [activeItem, filteredDesigns]);

  const handleNext = useCallback(() => {
    if (!activeItem) return;
    const idx = filteredDesigns.findIndex((d) => d.id === activeItem.id);
    setActiveItem(filteredDesigns[(idx + 1) % filteredDesigns.length]);
  }, [activeItem, filteredDesigns]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItem, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  // Current lightbox position (for counter display)
  const lightboxIndex = activeItem
    ? filteredDesigns.findIndex((d) => d.id === activeItem.id)
    : -1;

  return (
    <motion.section
      id="Designs"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-bold font-display flex items-center gap-3">
            <span className="h-px flex-1 max-w-[40px] bg-primary/50" />
            <Palette className="w-6 h-6 text-primary" />
            Graphic Design & Print Showcase
          </h2>
          <p className="text-sm text-muted-foreground mt-1.5 ml-12">
            Event flyers, brand identities, digital commercial ads, and
            DTF/sublimation print work.
          </p>
        </div>
        <span className="text-xs font-mono text-muted-foreground/70 ml-12 sm:ml-0">
          {filteredDesigns.length} Works
        </span>
      </div>

      {/* Category Filter Pills - horizontal scrollable on mobile, wrap on sm+ */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap mb-6 sm:mb-8" role="tablist" aria-label="Design categories">
        {designCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              aria-controls="design-gallery"
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={cn(
                "relative text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer border shrink-0",
                isActive
                  ? "bg-white/15 text-white border-white/30 shadow-md shadow-primary/10 backdrop-blur-md"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ─── Masonry Gallery Grid ─── */}
      <div
        id="design-gallery"
        role="tabpanel"
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5"
      >
        <AnimatePresence mode="popLayout">
          {displayedDesigns.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setActiveItem(item)}
              className="glass-card group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 break-inside-avoid"
            >
              <NoiseTexture
                className="opacity-20 dark:opacity-30 pointer-events-none"
                frequency={0.5}
                octaves={5}
                slope={0.16}
              />

              {/* Image Container — natural aspect ratio via width/height */}
              <div className="relative w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={item.blurDataURL}
                  className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Ambient dark gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill Tag in Top-Right */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                  <span className="text-[10px] font-medium tracking-wide uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Title and details: visible on mobile, hover reveal on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 z-10 flex flex-col justify-end transition-transform duration-300">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-white text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="p-1 sm:p-1.5 rounded-full bg-white/10 border border-white/15 text-white opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shrink-0">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/70 line-clamp-2 mt-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Toggle */}
      {filteredDesigns.length > INITIAL_DISPLAY_COUNT && (
        <div className="flex justify-center mt-8">
          <Button
            variant="mine"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-xs sm:text-sm px-6 py-2 gap-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            {showAll
              ? "Show Less"
              : `View All (${filteredDesigns.length}) Designs`}
          </Button>
        </div>
      )}

      {/* ─── Lightbox / Fullscreen Modal ─── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Design preview: ${activeItem.title}`}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-neutral-950/95 border border-white/15 shadow-2xl overflow-hidden"
            >
              <NoiseTexture
                className="opacity-20 pointer-events-none"
                frequency={0.5}
                octaves={5}
                slope={0.16}
              />

              {/* Top Bar: category, title, counter, close */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40 z-20">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 shrink-0">
                    {activeItem.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white truncate">
                    {activeItem.title}
                  </h4>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Image counter */}
                  <span className="text-xs font-mono text-white/50">
                    {lightboxIndex + 1} / {filteredDesigns.length}
                  </span>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="relative flex-1 min-h-[300px] max-h-[68vh] overflow-hidden flex items-center justify-center bg-black/60 p-2 sm:p-4">
                {/* Loading spinner */}
                {!lightboxLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary/60" />
                  </div>
                )}

                {/* Blur placeholder background while loading */}
                {!lightboxLoaded && activeItem.blurDataURL && (
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-40"
                    style={{ backgroundImage: `url(${activeItem.blurDataURL})` }}
                  />
                )}

                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  onLoad={() => setLightboxLoaded(true)}
                  className={cn(
                    "max-w-full max-h-full object-contain rounded-lg shadow-lg transition-opacity duration-300",
                    lightboxLoaded ? "opacity-100" : "opacity-0"
                  )}
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition cursor-pointer"
                  aria-label="Previous Design"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition cursor-pointer"
                  aria-label="Next Design"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="px-5 py-3.5 border-t border-white/10 bg-black/50 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {activeItem.description}
                </p>
                <a
                  href={activeItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline font-mono shrink-0 self-end sm:self-auto"
                >
                  View Original File ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
