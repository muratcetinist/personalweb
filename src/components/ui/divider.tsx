"use client";

import { motion } from "framer-motion";

export function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-px w-full max-w-[120px] origin-left bg-accent/30"
    />
  );
}
