"use client";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { MapPin, GraduationCap, Briefcase, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        number="01"
        title="About Me"
        subtitle="A software engineer who cares about building scalable, resilient products where technology is needed the most."
        badge="THE STORY"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Quick Facts */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal>
            <div className="group relative rounded-2xl overflow-hidden border border-[#26262F] bg-[#14141B]">
              <div className="aspect-[4/5] relative w-full overflow-hidden">
                <Image
                  src="/images/me/portrait.jpg"
                  alt="Musharraf Hussain"
                  fill
                  className="object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#F4F1EA] text-base">{siteConfig.name}</h3>
                    <p className="font-mono text-xs text-[#2EC4B6]">B.Tech CSE '26 · Amritsar</p>
                  </div>
                  <span className="flex h-3 w-3 rounded-full bg-[#FF9F1C] animate-ping" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Quick Facts Card */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 flex flex-col gap-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#FF9F1C] font-semibold">
                Quick Facts
              </h4>
              <div className="flex items-center gap-3 text-sm text-[#F4F1EA]">
                <MapPin className="h-4 w-4 text-[#2EC4B6] shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F4F1EA]">
                <GraduationCap className="h-4 w-4 text-[#2EC4B6] shrink-0" />
                <span>B.Tech CSE (8.5 CGPA, AGC Amritsar)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F4F1EA]">
                <Briefcase className="h-4 w-4 text-[#2EC4B6] shrink-0" />
                <span>Software Engineering Intern @ AstroBharatAI</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Bio Narrative & Concrete Proof Numbers */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-[#F4F1EA] text-lg leading-relaxed">
              <p>
                I was raised in the smaller towns of Northern India, where businesses, schools, and transport systems still operate on paper records and expensive ad-hoc hardware. Seeing that disconnect made me realize: <span className="text-[#FF9F1C] font-medium">the world doesn't just need another social network — it needs rock-solid software for the towns big tech overlooks</span>.
              </p>
              <p className="text-[#9A9AA5] text-base">
                As a software engineer, I don't stop at building interfaces. I dive deep into backend architecture, zero-egress cloud storage with <span className="text-[#F4F1EA]">Cloudflare R2 and Workers</span>, encrypted video streaming via <span className="text-[#F4F1EA]">FFmpeg HLS pipelines</span>, and telemetry architectures that replace \$150 hardware GPS trackers with smart mobile apps.
              </p>
              <p className="text-[#9A9AA5] text-base">
                Whether deploying revenue-generating consultation platforms, cutting page load times by 80%, or engineering an ERP that powers 500+ college students, I build systems engineered for longevity, low operational cost, and zero fuss.
              </p>
            </div>
          </Reveal>

          {/* Performance & Impact Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {siteConfig.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.05}>
                <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 hover:border-[#FF9F1C]/50 transition-all group">
                  <div className="font-mono text-3xl md:text-4xl font-extrabold text-[#FF9F1C] tracking-tight group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#F4F1EA]">
                    {stat.label}
                  </div>
                  <div className="mt-1 font-mono text-xs text-[#9A9AA5]">
                    {stat.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
