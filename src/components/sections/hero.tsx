"use client";

import { SITE } from "@/lib/constants";
import { MagneticText } from "@/components/ui/magnetic-text";
import { TextScramble } from "@/components/ui/text-scramble";

export function Hero() {
  return (
    <div className="flex flex-col gap-5">
      <MagneticText
        text={SITE.name}
        className="font-[family-name:var(--font-display)] text-primary text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]"
      />
      <TextScramble
        text={SITE.tagline}
        delay={1.2}
        className="font-[family-name:var(--font-body)] text-muted text-[clamp(0.9rem,1.8vw,1.35rem)] tracking-[0.08em] uppercase"
      />
    </div>
  );
}
