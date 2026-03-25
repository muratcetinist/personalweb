"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { staggerContainer, fadeSlideUp } from "@/lib/animations";

export function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5"
    >
      <motion.h1
        variants={fadeSlideUp}
        className="font-[family-name:var(--font-display)] text-primary text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]"
      >
        {SITE.name}
      </motion.h1>
      <motion.p
        variants={fadeSlideUp}
        className="font-[family-name:var(--font-body)] text-muted text-[clamp(0.9rem,1.8vw,1.35rem)] tracking-[0.08em] uppercase"
      >
        {SITE.tagline}
      </motion.p>
    </motion.div>
  );
}
