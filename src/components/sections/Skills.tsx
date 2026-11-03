"use client";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        number="05"
        title="Technical Arsenal"
        subtitle="Tools, systems, and engineering fundamentals I use to ship production software."
        badge="SKILLS MATRIX"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <Reveal key={category.title} delay={idx * 0.08}>
            <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 h-full flex flex-col justify-between hover:border-[#FF9F1C]/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5 border-b border-[#26262F] pb-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-[#FF9F1C] font-bold">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#9A9AA5]">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                        skill.active
                          ? "border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 text-[#2EC4B6] font-medium"
                          : "border border-[#26262F] bg-[#0B0B0F] text-[#9A9AA5] hover:text-[#F4F1EA]"
                      }`}
                    >
                      {skill.active && <span className="h-1.5 w-1.5 rounded-full bg-[#2EC4B6]" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#26262F]/50 flex items-center justify-between text-[11px] font-mono text-[#9A9AA5]">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2EC4B6]" />
                  Active in production
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
