"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Amogelang Moatswi
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-2xl mb-8"
      >
        Coming Soon
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mb-12 max-w-md"
      >
        Passionate Developer / Network Engineer / Graphic Designer. 
        My portfolio is under construction, but feel free to connect with me on social media.
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-16 h-16 bg-blue-500 rounded-full mb-12"
      />
    </div>
  )
}