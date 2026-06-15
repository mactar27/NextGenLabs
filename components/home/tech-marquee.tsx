"use client"

import { motion } from "motion/react"

const technologies = [
  "Next.js", "React", "React Native", "Tailwind CSS", "Node.js", 
  "Python", "TensorFlow", "Figma", "Flutter", "Swift", "PostgreSQL", "Docker",
  "GraphQL", "TypeScript", "Vercel", "AWS"
]

export function TechMarquee() {
  return (
    <div className="relative flex overflow-hidden bg-background py-10 border-b border-border">
      {/* Gradients to hide the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* We duplicate the list to make the loop seamless */}
        {[...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="flex items-center justify-center px-8 sm:px-12">
            <span className="text-xl sm:text-2xl font-bold text-foreground/20 uppercase tracking-widest hover:text-cyan transition-colors duration-300">
              {tech}
            </span>
            <span className="ml-16 size-2 sm:ml-24 rounded-full bg-cyan/20" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
