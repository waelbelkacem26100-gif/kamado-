import type { Variants } from "framer-motion";

export const easeApple = [0.25, 0.46, 0.45, 0.94] as const;
export const easeOut  = [0, 0, 0.2, 1] as const;

/* ─── Viewport par défaut ─── */
export const defaultViewport = { once: true, margin: "-80px" };

/* ─── Fade + slide up ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeApple },
  },
};

/* ─── Fade seul ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/* ─── Scale in subtil ─── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeApple },
  },
};

/* ─── Slide depuis la gauche ─── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeApple },
  },
};

/* ─── Container stagger enfants ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/* ─── Container stagger serré (titres mot par mot) ─── */
export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

/* ─── Mot individuel ─── */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeApple },
  },
};

/* ─── Ligne de titre (fallback reduced motion) ─── */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeApple },
  },
};
