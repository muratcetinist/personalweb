"use client";

import { SITE } from "@/lib/constants";

const fonts = [
  { name: "Instrument Serif", variable: "--font-display-1" },
  { name: "Playfair Display", variable: "--font-display-2" },
  { name: "Cormorant Garamond", variable: "--font-display-3" },
  { name: "DM Serif Display", variable: "--font-display-4" },
  { name: "Libre Caslon Display", variable: "--font-display-5" },
  { name: "Fraunces", variable: "--font-display-6" },
];

export function FontShowcase() {
  return (
    <div className="flex flex-col gap-14 w-full max-w-4xl">
      {fonts.map(({ name, variable }, i) => (
        <div key={name} className="flex flex-col gap-2 group">
          <span className="font-[family-name:var(--font-body)] text-muted/50 text-xs tracking-[0.15em] uppercase">
            {i + 1}. {name}
          </span>
          <h2
            className="text-primary text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em] transition-colors duration-300 hover:text-accent cursor-default"
            style={{ fontFamily: `var(${variable})` }}
          >
            {SITE.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
