"use client";
import Reveal from "@/components/motion/Reveal";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeading({ number, title, subtitle, badge }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-widest text-[#FF9F1C] font-semibold">
            [{number}]
          </span>
          <div className="h-[1px] w-8 bg-[#FF9F1C]/40" />
          {badge && (
            <span className="inline-flex items-center rounded-full border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 px-2.5 py-0.5 font-mono text-[11px] text-[#2EC4B6]">
              {badge}
            </span>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1EA]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#9A9AA5] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
