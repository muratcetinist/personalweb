import type { Variants, Transition } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export const transition: Transition = {
  duration: 0.6,
  ease,
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

export const fadeSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};
