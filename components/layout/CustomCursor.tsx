"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Désactiver sur touch devices */
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    /* Cacher le curseur natif via une classe CSS au lieu d'un style inline global */
    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;
    let scale = 1, targetScale = 1;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
    };

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      targetScale = el.dataset.cursorGrow ? 3 : 1.8;
    };
    const onLeave = () => { targetScale = 1; };

    window.addEventListener("mousemove", onMove);

    /* Délégation d'événements au lieu de querySelectorAll au mount */
    const onDocEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-grow]")) {
        targetScale = 1.8;
      }
    };
    const onDocLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-grow]")) {
        targetScale = 1;
      }
    };
    document.addEventListener("mouseover",  onDocEnter);
    document.addEventListener("mouseout",   onDocLeave);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      scale     += (targetScale - scale) * 0.1;

      if (outerRef.current) {
        const size = 36 * scale;
        outerRef.current.style.transform =
          `translate(${followerX - size / 2}px, ${followerY - size / 2}px) scale(${scale})`;
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onDocEnter);
      document.removeEventListener("mouseout",   onDocLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Outer follower */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <div
          className="w-9 h-9 rounded-full border mix-blend-difference"
          style={{
            borderColor: "var(--accent)",
            boxShadow:   "0 0 12px var(--accent-glow)",
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
      </div>
    </>
  );
}
