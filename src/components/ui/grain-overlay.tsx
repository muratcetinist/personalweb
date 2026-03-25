"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function GrainOverlay() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    >
      <svg className="h-full w-full opacity-[0.035]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </motion.div>
  );
}
