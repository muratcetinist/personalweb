"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let iteration = 0;
    let completed = false;
    const totalFrames = text.length * 3;

    const complete = () => {
      if (completed) return;
      completed = true;
      setDisplay(text);
    };

    const scramble = () => {
      if (completed) return;

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

      if (iteration < totalFrames) {
        iteration++;
        frameRef.current = requestAnimationFrame(scramble);
      } else {
        complete();
      }
    };

    // Fallback: if animation stalls (e.g. iOS background), force complete
    const fallbackTimer = setTimeout(complete, 3000);

    // Complete immediately if page becomes hidden mid-animation
    const onVisibilityChange = () => {
      if (document.hidden) complete();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    frameRef.current = requestAnimationFrame(scramble);
    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [started, text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {display}
    </motion.p>
  );
}
