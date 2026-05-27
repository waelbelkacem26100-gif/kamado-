"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.documentElement.style.cursor = "none";

    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;
    let rafId: number;
    let scale = 1;
    let targetScale = 1;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.transform =
          `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
    };

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      targetScale = el.dataset.cursorGrow ? 3 : 2.0;
    };
    const onLeave = () => { targetScale = 1; };

    window.addEventListener("mousemove", onMove);

    const interactive = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor-grow]"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.style.cursor = "none";
    });

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
      document.documentElement.style.cursor = "";
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.style.cursor = "";
      });
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
            borderColor: "#00D1FF",
            boxShadow: "0 0 12px rgba(0,209,255,0.4)",
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
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#00D1FF" }}
        />
      </div>
    </>
  );
}
