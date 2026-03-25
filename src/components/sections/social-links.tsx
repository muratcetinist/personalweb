"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/muratcetin", icon: "GH" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muratcetin",
    icon: "LI",
  },
  { label: "X", href: "https://x.com/muratcetin", icon: "X" },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex items-center gap-6"
    >
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="group relative flex items-center gap-2 font-[family-name:var(--font-body)] text-muted/50 text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-500 hover:text-accent"
        >
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
              {link.label}
            </span>
            <span className="absolute left-0 top-full inline-block text-accent transition-transform duration-500 ease-out group-hover:-translate-y-full">
              {link.label}
            </span>
          </span>
          <span className="h-px w-0 bg-accent/40 transition-all duration-500 ease-out group-hover:w-4" />
        </motion.a>
      ))}
    </motion.div>
  );
}
