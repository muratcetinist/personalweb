"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 02.08.2021 20:10 UTC+3 → 17:10 UTC
const ORIGIN = new Date("2021-08-02T17:10:00Z").getTime();

function getElapsed() {
  const now = new Date();
  const origin = new Date("2021-08-02T17:10:00Z");

  // Calculate years
  let years = now.getUTCFullYear() - origin.getUTCFullYear();
  let cursor = new Date(origin);
  cursor.setUTCFullYear(cursor.getUTCFullYear() + years);
  if (cursor.getTime() > now.getTime()) {
    years--;
    cursor = new Date(origin);
    cursor.setUTCFullYear(cursor.getUTCFullYear() + years);
  }

  // Calculate months
  let months = 0;
  while (true) {
    const next = new Date(cursor);
    next.setUTCMonth(next.getUTCMonth() + 1);
    if (next.getTime() > now.getTime()) break;
    months++;
    cursor = next;
  }

  // Remaining as ms
  const remainMs = now.getTime() - cursor.getTime();
  const totalSec = Math.floor(remainMs / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return { years, months, days, hours, minutes, seconds };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function LocalTime() {
  const [elapsed, setElapsed] = useState<ReturnType<typeof getElapsed> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setElapsed(getElapsed());
    const interval = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !elapsed) return null;

  const segments = [
    { value: elapsed.years, label: "y" },
    { value: elapsed.months, label: "m" },
    { value: elapsed.days, label: "d" },
    { value: elapsed.hours, label: "h" },
    { value: elapsed.minutes, label: "m" },
    { value: elapsed.seconds, label: "s" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-8 z-20 flex items-center gap-3"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent/80" />
      </span>
      <span className="font-[family-name:var(--font-body)] text-muted/60 text-[0.6rem] tracking-[0.12em] tabular-nums flex items-baseline gap-[2px]">
        {segments.map((seg, i) => (
          <span key={i} className="flex items-baseline">
            <span className="text-muted/70">{pad(seg.value)}</span>
            <span className="text-accent/40 text-[0.45rem] ml-[1px]">{seg.label}</span>
            {i < segments.length - 1 && (
              <span className="text-muted/20 mx-[3px]">:</span>
            )}
          </span>
        ))}
      </span>
    </motion.div>
  );
}
