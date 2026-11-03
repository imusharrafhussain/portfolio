"use client";
import { motion, Variants } from "framer-motion";
import { ease, staggerWord, duration } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
};

/**
 * Word-by-word masked reveal. Each word is clipped by an overflow-hidden
 * wrapper and slides up from below. Screen readers get the full sentence
 * through aria-label; the animated spans are aria-hidden.
 */
export default function SplitText({ text, className, as = "h1", delay = 0 }: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : staggerWord, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: reduced ? duration.fast : 0.9, ease: ease.outExpo },
    },
  };

  return (
    <Tag
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em]">
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
