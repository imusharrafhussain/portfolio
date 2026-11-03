"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "Web", "Mobile"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          number="04"
          title="Selected Projects"
          subtitle="Real systems built for scale, cost-efficiency, and mission impact."
          badge="FEATURED WORK"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all duration-200 ${
                filter === cat
                  ? "bg-[#FF9F1C] text-[#0B0B0F] font-bold shadow-[0_0_15px_rgba(255,159,28,0.3)]"
                  : "border border-[#26262F] bg-[#14141B] text-[#9A9AA5] hover:text-[#F4F1EA] hover:border-[#FF9F1C]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {filteredProjects.map((project, i) => {
          if (project.confidential) {
            return (
              <Reveal key={project.slug} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-dashed border-[#26262F] bg-[#14141B]/40 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF9F1C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF9F1C]/30 bg-[#FF9F1C]/10 px-3 py-1 font-mono text-xs text-[#FF9F1C]">
                        <Lock className="h-3 w-3" />
                        In Development
                      </span>
                      <span className="font-mono text-xs text-[#9A9AA5]">Confidential</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F4F1EA] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#9A9AA5] leading-relaxed mb-6">
                      {project.oneLiner}
                    </p>
                  </div>

                  <div className="border-t border-[#26262F] pt-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#2EC4B6]">
                      Architecture & Stack Details on Request
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#FF9F1C] hover:underline"
                    >
                      Inquire
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          }

          return (
            <Reveal key={project.slug} delay={i * 0.1}>
              <div className="group rounded-2xl border border-[#26262F] bg-[#14141B] overflow-hidden hover:border-[#FF9F1C]/60 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Project Image Preview Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0B0F]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14141B] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-[#0B0B0F]/80 backdrop-blur-md px-3 py-1 font-mono text-xs text-[#2EC4B6]">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8">
                    <div className="font-mono text-xs text-[#FF9F1C] font-semibold mb-2 uppercase tracking-wider">
                      {project.hook}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F4F1EA] mb-3 group-hover:text-[#FF9F1C] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#9A9AA5] leading-relaxed mb-6">
                      {project.oneLiner}
                    </p>

                    {/* Proof badge */}
                    <div className="rounded-xl border border-[#2EC4B6]/20 bg-[#2EC4B6]/5 p-3.5 mb-6">
                      <span className="font-mono text-xs text-[#2EC4B6] block">
                        ★ PROOF: {project.proof}
                      </span>
                    </div>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#26262F] bg-[#0B0B0F] px-2.5 py-1 font-mono text-xs text-[#9A9AA5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link / Case Study CTA */}
                <div className="border-t border-[#26262F] p-6 md:px-8 flex items-center justify-between bg-[#14141B]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#F4F1EA] group-hover:text-[#FF9F1C] transition-colors"
                  >
                    Read full case study & architecture
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#9A9AA5] hover:text-[#2EC4B6] flex items-center gap-1"
                    >
                      Live Site <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
