"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY > lastY && currentY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "glass-panel py-3.5 shadow-lg" : "py-6 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo mark */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-tight font-bold text-[#F4F1EA]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF9F1C] text-[#0B0B0F] font-black group-hover:scale-105 transition-transform duration-200">
              MH
            </span>
            <span className="hidden sm:inline text-xs tracking-widest text-[#9A9AA5] group-hover:text-[#F4F1EA] transition-colors">
              MUSHARRAF.DEV
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#9A9AA5]">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FF9F1C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#26262F] bg-[#14141B] px-3.5 py-2 font-mono text-xs text-[#F4F1EA] hover:border-[#FF9F1C]/60 hover:text-[#FF9F1C] transition-all duration-200"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF9F1C] px-4 py-2 font-mono text-xs font-semibold text-[#0B0B0F] hover:bg-[#ffb042] transition-colors duration-200 shadow-[0_0_20px_rgba(255,159,28,0.25)]"
            >
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262F] bg-[#14141B] text-[#F4F1EA]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#0B0B0F]/95 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs tracking-widest uppercase text-[#9A9AA5]">
                Navigation
              </span>
              <nav className="flex flex-col gap-5 text-2xl font-bold text-[#F4F1EA]">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[#FF9F1C] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#26262F]">
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#26262F] bg-[#14141B] py-3 font-mono text-sm text-[#F4F1EA]"
              >
                <Download className="h-4 w-4" />
                View & Download Resume
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#FF9F1C] py-3 font-mono text-sm font-semibold text-[#0B0B0F]"
              >
                Let's talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
