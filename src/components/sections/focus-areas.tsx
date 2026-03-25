"use client";

import { motion } from "framer-motion";

const areas = [
  { label: "Product Strategy", delay: 0 },
  { label: "Full-Stack Development", delay: 0.1 },
  { label: "AI & Automation", delay: 0.2 },
  { label: "Growth Systems", delay: 0.3 },
  { label: "User Experience", delay: 0.4 },
];

export function FocusAreas() {
  return (
    <section className="relative w-full py-32 px-8 md:px-16">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-[family-name:var(--font-body)] text-muted/50 text-[0.65rem] tracking-[0.25em] uppercase mb-12"
        >
          Areas of Focus
        </motion.p>

        <div className="flex flex-col gap-4">
          {areas.map((area) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: area.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative"
            >
              <div className="flex items-center gap-6">
                <span className="h-px w-0 bg-accent/40 transition-all duration-700 ease-out group-hover:w-12" />
                <h3 className="font-[family-name:var(--font-display)] text-primary/80 text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em] transition-colors duration-500 group-hover:text-accent">
                  {area.label}
                </h3>
              </div>
              <div className="mt-2 ml-0 h-px w-full bg-surface transition-colors duration-500 group-hover:bg-accent/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
