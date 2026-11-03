"use client";
import { experienceData } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export default function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-4 w-4 text-[#FF9F1C]" />;
      case "education":
        return <GraduationCap className="h-4 w-4 text-[#2EC4B6]" />;
      default:
        return <Users className="h-4 w-4 text-[#FF9F1C]" />;
    }
  };

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        number="03"
        title="Experience & Education"
        subtitle="Shipped production code, academic rigor, and community leadership."
        badge="TIMELINE"
      />

      <div className="relative border-l border-[#26262F] ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
        {experienceData.map((item, index) => (
          <div key={item.role + item.company} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#26262F] bg-[#0B0B0F] group-hover:border-[#FF9F1C] group-hover:scale-110 transition-all duration-300">
              {getIcon(item.type)}
            </div>

            <Reveal delay={index * 0.1}>
              <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 md:p-8 hover:border-[#FF9F1C]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#F4F1EA]">
                      {item.role}
                    </h3>
                    <div className="font-mono text-sm text-[#FF9F1C] font-medium">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end font-mono text-xs text-[#9A9AA5]">
                    <span className="text-[#2EC4B6] font-semibold">{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-6 border-t border-[#26262F]/60 pt-4">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#9A9AA5] leading-relaxed">
                      <span className="text-[#FF9F1C] font-bold mt-1 text-xs">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
