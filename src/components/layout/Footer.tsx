"use client";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#26262F] bg-[#0B0B0F] py-14 px-6 md:px-12 text-[#9A9AA5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left col */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 text-[#F4F1EA] font-mono text-sm font-bold">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9F1C] text-[#0B0B0F] text-xs font-black">
              MH
            </span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="text-xs text-[#9A9AA5] max-w-sm">
            Building reliable software for small cities, towns, and the next billion users.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262F] bg-[#14141B] text-[#F4F1EA] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262F] bg-[#14141B] text-[#F4F1EA] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262F] bg-[#14141B] text-[#F4F1EA] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-all"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Right col & Back to top */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-[#9A9AA5]">
            © 2026 · Next.js + Lenis + GSAP
          </span>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262F] bg-[#14141B] text-[#F4F1EA] hover:border-[#FF9F1C] hover:text-[#FF9F1C] transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
