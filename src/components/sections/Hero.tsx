"use client";
import { siteConfig } from "@/data/site";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import DotMap from "@/components/canvas/DotMap";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useRef } from "react";

export default function Hero() {
  const progressRef = useRef(0.2); // Start with top cities glowing subtly

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12">
      {/* Background Dot Map Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-45 md:opacity-65 flex items-center justify-end">
        <div className="w-full h-full max-w-4xl max-h-[850px] relative pointer-events-auto">
          <DotMap progress={progressRef} />
        </div>
      </div>

      {/* Hero Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FF9F1C]/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[450px] w-[450px] rounded-full bg-[#2EC4B6]/10 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status Chip */}
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#26262F] bg-[#14141B]/80 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#2EC4B6] animate-pulse" />
            <span className="font-mono text-xs text-[#9A9AA5]">
              Currently Engineering at <span className="text-[#F4F1EA] font-semibold">AstroBharatAI</span>
            </span>
          </div>
        </Reveal>

        {/* Headline with SplitText Masked Reveal */}
        <div className="mb-6 max-w-4xl">
          <SplitText
            text={siteConfig.oneLiner}
            as="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F4F1EA] leading-[1.08]"
          />
        </div>

        {/* Subtitle / Stack */}
        <Reveal delay={0.2}>
          <p className="font-mono text-sm sm:text-base md:text-lg text-[#9A9AA5] max-w-2xl leading-relaxed mb-10">
            Software Engineer <span className="text-[#FF9F1C]">·</span> MERN <span className="text-[#FF9F1C]">·</span> Django <span className="text-[#FF9F1C]">·</span> Flutter <span className="text-[#FF9F1C]">·</span> Cloudflare R2 & Workers <span className="text-[#FF9F1C]">·</span> HLS Video
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-14">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF9F1C] px-6 py-3.5 font-mono text-sm font-bold text-[#0B0B0F] shadow-[0_0_30px_rgba(255,159,28,0.3)] hover:bg-[#ffb042] transition-all"
            >
              View my work
              <ArrowDown className="h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#26262F] bg-[#14141B]/90 px-6 py-3.5 font-mono text-sm text-[#F4F1EA] hover:border-[#FF9F1C]/80 hover:text-[#FF9F1C] transition-all"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>

            {/* Quick Social Icons */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#26262F] bg-[#14141B]/80 text-[#9A9AA5] hover:text-[#FF9F1C] hover:border-[#FF9F1C]/50 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#26262F] bg-[#14141B]/80 text-[#9A9AA5] hover:text-[#FF9F1C] hover:border-[#FF9F1C]/50 transition-all"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#26262F] bg-[#14141B]/80 text-[#9A9AA5] hover:text-[#FF9F1C] hover:border-[#FF9F1C]/50 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Scroll down indicator */}
        <Reveal delay={0.4}>
          <div className="flex items-center gap-3 font-mono text-xs text-[#9A9AA5]">
            <span className="flex h-8 w-[1px] bg-gradient-to-b from-[#FF9F1C] to-transparent animate-pulse" />
            <span>SCROLL TO EXPLORE STORY</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
