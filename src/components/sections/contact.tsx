"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a
        href={`mailto:${SITE.email}`}
        className="group relative inline-block font-[family-name:var(--font-body)] text-muted text-[clamp(0.7rem,1.2vw,0.85rem)] tracking-[0.06em] transition-colors duration-500 hover:text-accent"
      >
        {SITE.email}
        <span className="absolute left-0 -bottom-1.5 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>
    </motion.div>
  );
}
