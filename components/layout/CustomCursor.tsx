"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 400, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 400, mass: 0.5 });

  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnterLink = () => scale.set(2.2);
    const onLeaveLink = () => scale.set(1);

    window.addEventListener("mousemove", onMove);

    const interactive = document.querySelectorAll("a, button, [data-cursor-grow]");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        scale: springScale,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-white" />
    </motion.div>
  );
}
