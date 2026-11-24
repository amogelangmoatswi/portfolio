"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, ExternalLink, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_STORAGE_KEY = "portfolio_cookie_consent";
const DATA_PROTECTION_ACT_URL =
  "https://www.bocra.org.bw/sites/default/files/documents/32%20Act%2010-08-2018-Data%20Protection.pdf";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!saved) {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "essential") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Ignore storage errors in restricted environments
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="dialog"
          aria-live="polite"
          aria-label="Cookie and data protection consent"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 glass-card rounded-xl p-4 sm:p-5 shadow-2xl border border-border/70 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Cookie className="h-4 w-4 text-primary shrink-0" />
              <span>Privacy &amp; Cookie Consent</span>
            </div>
            <button
              type="button"
              onClick={() => handleChoice("essential")}
              aria-label="Dismiss cookie banner"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-md p-0.5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            This portfolio uses essential storage and privacy-friendly analytics to improve your
            experience, in accordance with Botswana&apos;s{" "}
            <a
              href={DATA_PROTECTION_ACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Data Protection Act (Act 32 of 2018)
              <ExternalLink className="h-3 w-3" />
            </a>
            .
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleChoice("essential")}
              className="text-xs h-8"
            >
              Essential Only
            </Button>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => handleChoice("accepted")}
              className="text-xs h-8 gap-1.5"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Accept All
            </Button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
