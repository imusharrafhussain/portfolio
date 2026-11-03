"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ease, revealDistance, duration } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : revealDistance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduced ? duration.fast : duration.base, ease: ease.outExpo, delay }}
    >
      {children}
    </motion.div>
  );
}
