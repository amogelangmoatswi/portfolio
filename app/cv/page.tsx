"use client";

import { motion } from "framer-motion";
import { FileDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CV_URL = "/Amogelang-Moatswi-CV.pdf";

export default function CVPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <FileDown className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold font-display mb-3">My CV</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Download my CV to learn more about my experience, skills, and
          qualifications.
        </p>
        <div className="flex gap-3 justify-center">
          <a href={CV_URL} download="Amogelang Moatswi CV.pdf">
            <Button variant="mine" className="gap-2">
              <FileDown className="h-4 w-4" />
              Download CV
            </Button>
          </a>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
