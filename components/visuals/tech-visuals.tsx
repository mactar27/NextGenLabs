"use client"

import { motion } from "motion/react"
import { useMemo, useState, useEffect } from "react"

/* Subtle digital grid background */
export function GridBackground({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 grid-bg opacity-60 ${className}`} />
}

/* Animated neural network of connected nodes */
export function NeuralNetwork({ className = "" }: { className?: string }) {
  const nodes = useMemo(
    () => [
      { x: 60, y: 80 },
      { x: 200, y: 40 },
      { x: 320, y: 140 },
      { x: 140, y: 200 },
      { x: 300, y: 260 },
      { x: 60, y: 300 },
      { x: 380, y: 60 },
      { x: 240, y: 330 },
    ],
    [],
  )
  const links = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [3, 5],
    [1, 6],
    [2, 6],
    [4, 7],
    [5, 7],
  ]

  return (
    <svg
      aria-hidden
      viewBox="0 0 440 380"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
    >
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--cyan)"
          strokeWidth="1"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: i * 0.12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 1.5 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="4"
          fill={i % 2 === 0 ? "var(--cyan)" : "var(--navy)"}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </svg>
  )
}

/* Circuit board pattern inspired by the logo microchip */
export function CircuitLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 200"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
    >
      <g stroke="var(--cyan)" strokeWidth="1" strokeOpacity="0.4">
        <path d="M10 100 H80 V40 H140" />
        <path d="M10 140 H60 V180 H160" />
        <path d="M290 60 H220 V120 H150" />
        <path d="M290 150 H240 V90 H190" />
      </g>
      {[
        [140, 40],
        [160, 180],
        [150, 120],
        [190, 90],
        [80, 100],
        [220, 60],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="var(--navy)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </svg>
  )
}

/* Floating cyan/navy particles */
export function Particles({ count = 18, className = "" }: { count?: number; className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
        cyan: Math.random() > 0.5,
      })),
    [count],
  )

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {mounted &&
        dots.map((d) => (
          <motion.span
            key={d.id}
            className="absolute rounded-full"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background: d.cyan ? "var(--cyan)" : "var(--navy)",
              opacity: 0.4,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: d.duration, delay: d.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        ))}
    </div>
  )
}

/* Low-opacity floating code snippet */
export function CodeAccent({ className = "" }: { className?: string }) {
  return (
    <pre
      aria-hidden
      className={`pointer-events-none absolute select-none font-mono text-xs leading-relaxed text-navy/[0.06] dark:text-cyan/[0.08] ${className}`}
    >
      {`const innovation = true;
const future = "NextGen Labs";
function build(idea) {
  return deploy(transform(idea));
}`}
    </pre>
  )
}

/* Premium Dashboard/Window Mockup for Agency Hero */
export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur-md shadow-2xl ${className}`}>
      {/* Window Header */}
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-5 py-4">
        <div className="size-3 rounded-full bg-red-400/80" />
        <div className="size-3 rounded-full bg-amber-400/80" />
        <div className="size-3 rounded-full bg-emerald-400/80" />
      </div>
      
      {/* Window Body */}
      <div className="flex-1 p-6 flex flex-col gap-5">
        {/* Skeleton Top */}
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-cyan/20 animate-pulse" />
          <div className="flex flex-col gap-2.5">
            <div className="h-3.5 w-32 rounded-full bg-muted-foreground/20" />
            <div className="h-2.5 w-20 rounded-full bg-muted-foreground/10" />
          </div>
        </div>
        
        {/* Code / Chart Area */}
        <div className="flex-1 rounded-xl bg-background/50 border border-border p-4 space-y-3 flex flex-col">
          <div className="h-2.5 w-full bg-gradient-to-r from-cyan/20 to-navy/10 rounded-full" />
          <div className="h-2.5 w-4/5 bg-gradient-to-r from-cyan/20 to-navy/10 rounded-full" />
          <div className="h-2.5 w-5/6 bg-gradient-to-r from-cyan/20 to-navy/10 rounded-full" />
          
          <div className="mt-auto flex items-end gap-3 h-24 pt-4">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <motion.div
                key={i}
                className="w-full bg-gradient-to-t from-cyan/40 to-cyan/10 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

