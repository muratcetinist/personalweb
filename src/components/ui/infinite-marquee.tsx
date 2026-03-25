"use client";

import { motion } from "framer-motion";

const words = [
  "Strategy",
  "Design",
  "Code",
  "Growth",
  "AI",
  "Product",
  "Systems",
  "Vision",
  "Build",
  "Scale",
];

export function InfiniteMarquee() {
  const content = words.map((w) => `${w} ✦`).join("  ");
  const doubled = `${content}  ${content}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full overflow-hidden py-16"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="marquee-track">
        <span className="font-[family-name:var(--font-display)] text-primary/[0.04] text-[clamp(3rem,8vw,8rem)] tracking-[0.05em] whitespace-nowrap">
          {doubled}
        </span>
      </div>
    </motion.div>
  );
}
