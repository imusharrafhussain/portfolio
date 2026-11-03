"use client";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import Reveal from "@/components/motion/Reveal";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function CaseStudyContent({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <article className="min-h-screen pt-32 pb-28 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-[#9A9AA5] hover:text-[#FF9F1C] transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to all projects
      </Link>

      {/* Case Study Header */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-md border border-[#FF9F1C]/30 bg-[#FF9F1C]/10 px-3 py-1 font-mono text-xs text-[#FF9F1C]">
            {project.category}
          </span>
          <span className="rounded-md border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 px-3 py-1 font-mono text-xs text-[#2EC4B6]">
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F4F1EA] tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-[#9A9AA5] leading-relaxed max-w-3xl mb-8">
          {project.oneLiner}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 border-b border-[#26262F] pb-10 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF9F1C] px-5 py-3 font-mono text-xs font-bold text-[#0B0B0F] hover:bg-[#ffb042] transition-all"
            >
              Visit Live Platform
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#26262F] bg-[#14141B] px-5 py-3 font-mono text-xs text-[#F4F1EA] hover:border-[#FF9F1C] transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              Source Repository
            </a>
          )}
        </div>
      </Reveal>

      {/* Featured Banner Image */}
      <Reveal delay={0.1}>
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#26262F] bg-[#14141B] mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      {/* Quantitative Results Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {project.results.map((res, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 text-center">
              <div className="font-mono text-3xl md:text-4xl font-extrabold text-[#FF9F1C]">
                {res.value}
              </div>
              <div className="font-mono text-xs text-[#9A9AA5] mt-2 uppercase tracking-wider">
                {res.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Core Case Study Sections */}
      <div className="space-y-16 text-[#F4F1EA]">
        {/* The Problem */}
        <Reveal>
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#FF9F1C] font-mono text-xs uppercase tracking-wider font-semibold">
              <AlertTriangle className="h-4 w-4" />
              <span>01. The Problem</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">The Challenge & Gap</h2>
            <p className="text-base md:text-lg text-[#9A9AA5] leading-relaxed">
              {project.problem}
            </p>
          </section>
        </Reveal>

        {/* Constraints */}
        <Reveal>
          <section className="space-y-4 rounded-2xl border border-[#26262F] bg-[#14141B] p-8">
            <div className="flex items-center gap-3 text-[#2EC4B6] font-mono text-xs uppercase tracking-wider font-semibold">
              <Layers className="h-4 w-4" />
              <span>02. Constraints & Realities</span>
            </div>
            <h2 className="text-2xl font-bold">Real-world Technical Hurdles</h2>
            <ul className="space-y-3 mt-4">
              {project.constraints.map((c, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#9A9AA5]">
                  <span className="text-[#FF9F1C] font-bold mt-0.5">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Solution & Architecture */}
        <Reveal>
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#FF9F1C] font-mono text-xs uppercase tracking-wider font-semibold">
              <Lightbulb className="h-4 w-4" />
              <span>03. The Architecture</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Engineering Implementation</h2>
            <p className="text-base md:text-lg text-[#9A9AA5] leading-relaxed">
              {project.solution}
            </p>

            {/* Architecture Flow Card */}
            <div className="rounded-2xl border border-[#26262F] bg-[#0B0B0F] p-6 md:p-8 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#2EC4B6]">
                Pipeline Diagram & Data Flow
              </h3>
              <p className="text-sm text-[#F4F1EA] font-mono bg-[#14141B] p-4 rounded-xl border border-[#26262F]">
                {project.architecture.description}
              </p>

              <div className="space-y-3 pt-2">
                {project.architecture.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#9A9AA5]">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9F1C]/10 text-[#FF9F1C] font-mono text-xs shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Tradeoffs */}
        <Reveal>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Key Architectural Trade-offs</h2>
            <div className="space-y-3">
              {project.tradeoffs.map((t, idx) => (
                <div key={idx} className="rounded-xl border border-[#26262F] bg-[#14141B] p-5 text-sm md:text-base text-[#9A9AA5]">
                  {t}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Future Improvements */}
        <Reveal>
          <section className="space-y-4 border-t border-[#26262F] pt-12">
            <h2 className="text-2xl font-bold">What I'd Improve Next</h2>
            <ul className="space-y-3">
              {project.improvements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#9A9AA5]">
                  <CheckCircle2 className="h-5 w-5 text-[#2EC4B6] shrink-0 mt-0.5" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      {/* Next Project Footer Bar */}
      <div className="mt-24 border-t border-[#26262F] pt-12 flex items-center justify-between">
        <span className="font-mono text-xs text-[#9A9AA5] uppercase tracking-wider">
          Next Project
        </span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[#FF9F1C] hover:underline"
        >
          {nextProject.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
