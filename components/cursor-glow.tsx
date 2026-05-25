"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 120, damping: 26, mass: 0.7 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 26, mass: 0.7 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-20 h-[360px] w-[360px] rounded-full bg-blue-500/[0.08] blur-3xl"
      style={{ x, y }}
    />
  );
}
