"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    color: "rgba(196, 168, 130, 0.06)",
    size: "60vmax",
    x: "15%",
    y: "20%",
    duration: 25,
  },
  {
    color: "rgba(196, 168, 130, 0.04)",
    size: "50vmax",
    x: "70%",
    y: "60%",
    duration: 30,
  },
  {
    color: "rgba(140, 120, 90, 0.035)",
    size: "45vmax",
    x: "50%",
    y: "80%",
    duration: 35,
  },
];

export function MorphingBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            left: blob.x,
            top: blob.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 0.7, 1, 0.8],
            scale: [0.6, 1, 1.15, 0.95, 1.05],
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -30, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
