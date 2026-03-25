"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticTextProps {
  text: string;
  className?: string;
}

function MagneticLetter({
  char,
  index,
  mousePos,
}: {
  char: string;
  index: number;
  mousePos: { x: number; y: number };
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 150, mass: 0.5 });
  const springY = useSpring(y, { damping: 20, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    if (!ref.current || mousePos.x === -1) {
      x.set(0);
      y.set(0);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = mousePos.x - centerX;
    const distY = mousePos.y - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    const maxDistance = 200;
    const strength = 25;

    if (distance < maxDistance) {
      const force = (1 - distance / maxDistance) * strength;
      x.set((distX / distance) * force);
      y.set((distY / distance) * force);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [mousePos, x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className="transition-colors duration-300"
      initial={{ opacity: 0, y: 60, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3 + index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export function MagneticText({ text, className = "" }: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1, y: -1 });
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: 600 }}>
      {text.split("").map((char, i) => (
        <MagneticLetter key={`${i}-${char}`} char={char} index={i} mousePos={mousePos} />
      ))}
    </div>
  );
}
