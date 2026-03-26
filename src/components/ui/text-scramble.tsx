"use client";

import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextScramble({
  text,
  className = "",
  delay = 1.2,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const [phase, setPhase] = useState<"idle" | "scrambling" | "done">("idle");

  // Client mount — reset for animation
  useEffect(() => {
    setDisplay("");
    const timer = setTimeout(() => setPhase("scrambling"), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  // Scramble animation
  useEffect(() => {
    if (phase !== "scrambling") return;

    let iteration = 0;
    const totalFrames = text.length * 3;

    const interval = setInterval(() => {
      const progress = iteration / totalFrames;
      const revealedCount = Math.floor(progress * text.length);

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedCount) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(result);
      iteration++;

      if (iteration > totalFrames) {
        clearInterval(interval);
        setDisplay(text);
        setPhase("done");
      }
    }, 30);

    // Fallback: if interval stalls, force complete after 3s
    const fallback = setTimeout(() => {
      clearInterval(interval);
      setDisplay(text);
      setPhase("done");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, [phase, text]);

  return (
    <p
      className={`${className} transition-opacity duration-300 ${phase === "idle" ? "opacity-0" : "opacity-100"}`}
    >
      {display}
    </p>
  );
}
