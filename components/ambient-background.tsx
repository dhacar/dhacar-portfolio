"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(29,78,216,0.14),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(16,185,129,0.11),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7f8fb_48%,#eef2f7_100%)] dark:bg-[radial-gradient(circle_at_16%_12%,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(45,212,191,0.12),transparent_30%),linear-gradient(180deg,#07090f_0%,#0b1020_52%,#07090f_100%)]" />
      <motion.div
        className="hero-grid absolute inset-x-[-20%] top-[-16%] h-[70vh]"
        animate={reduceMotion ? undefined : { y: [0, 18, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 sm:h-96 sm:w-96">
        <motion.div
          className="h-full w-full rounded-full bg-blue-500/10 blur-3xl"
          animate={
            reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.2, 0.34, 0.2] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="grain" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(247,248,251,0.92)_88%)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(7,9,15,0.94)_88%)]" />
    </div>
  );
}
