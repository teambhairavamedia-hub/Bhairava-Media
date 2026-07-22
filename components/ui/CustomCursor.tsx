"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [dragHovered, setDragHovered] = useState(false);
  const hoveredRef = useRef(false);
  const dragHoveredRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Tighter spring for snappier tracking with less lag
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic-btn");
      const closestDraggable =
        target.closest(".video-carousel-drag") ||
        target.closest("[role='region']");

      const nextHovered = !!closestLink;
      const nextDragHovered = !!closestDraggable;

      // Use refs to avoid stale closure re-renders causing desync
      if (nextHovered !== hoveredRef.current) {
        hoveredRef.current = nextHovered;
        setHovered(nextHovered);
      }
      if (nextDragHovered !== dragHoveredRef.current) {
        dragHoveredRef.current = nextDragHovered;
        setDragHovered(nextDragHovered);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const targetScale = hovered ? 1.6 : dragHovered ? 2.2 : 1;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] h-8 w-8 rounded-full border border-white mix-blend-difference hidden md:flex items-center justify-center text-[8px] font-bold uppercase tracking-wider text-black bg-white opacity-90"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        // Animate backgroundColor inline with position via style — avoids desynced animate block
        backgroundColor: hovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        scale: targetScale,
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 30, mass: 0.5 },
        backgroundColor: { duration: 0.15 },
      }}
    >
      {dragHovered && !hovered && (
        <span className="text-black text-[6px] tracking-widest font-black select-none">
          Drag
        </span>
      )}
    </motion.div>
  );
}
