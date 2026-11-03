"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Check if visited in this session
    const visited = sessionStorage.getItem("mh_preloader_visited");
    if (visited) {
      setComplete(true);
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true);
            sessionStorage.setItem("mh_preloader_visited", "true");
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#0B0B0F] p-8 md:p-14 text-[#F4F1EA]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-[#FF9F1C] animate-pulse" />
              <span className="font-mono text-xs tracking-wider uppercase text-[#9A9AA5]">
                Musharraf Hussain · Portfolio
              </span>
            </div>
            <span className="font-mono text-xs text-[#2EC4B6]">System Initializing</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="font-mono text-3xl md:text-5xl font-light text-[#F4F1EA] tracking-tight">
              Building software for the towns big tech forgets.
            </h1>
          </div>

          <div className="flex items-end justify-between border-t border-[#26262F] pt-6">
            <div className="font-mono text-xs text-[#9A9AA5]">
              Amritsar / J&K ➔ Global Network
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-5xl md:text-7xl font-bold text-[#FF9F1C] tracking-tighter tabular-nums">
                {Math.min(count, 100)}
              </span>
              <span className="font-mono text-lg text-[#9A9AA5]">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
