"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { hasIntroPlayed } from "@/lib/intro";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial client hydration, mounted is false, so isHomeFirstVisit is false.
  // This matches the HTML rendered by the server exactly, preventing hydration errors.
  const isHomeFirstVisit = mounted && pathname === "/" && !hasIntroPlayed();

  return (
    <motion.div
      initial={isHomeFirstVisit ? false : { opacity: 0, y: 12 }}
      animate={isHomeFirstVisit ? false : { opacity: 1, y: 0 }}
      exit={isHomeFirstVisit ? false : { opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
