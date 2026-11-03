"use client";
import { certificatesData } from "@/data/certificates";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        number="06"
        title="Certifications & Academic Honors"
        subtitle="Advanced coursework certified by the Indian Institutes of Technology (IITs) via SWAYAM NPTEL."
        badge="NPTEL IIT CERTIFIED"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.08}>
            <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-6 h-full flex flex-col justify-between hover:border-[#FF9F1C]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF9F1C]/10 text-[#FF9F1C] border border-[#FF9F1C]/20 group-hover:scale-105 transition-transform">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#2EC4B6] border border-[#2EC4B6]/20 bg-[#2EC4B6]/5 px-2 py-0.5 rounded">
                    Verified NPTEL
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F4F1EA] mb-2 group-hover:text-[#FF9F1C] transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-[#FF9F1C] mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-[#9A9AA5] mb-4">
                  {cert.platform}
                </p>
                <div className="rounded-lg bg-[#0B0B0F] p-3 border border-[#26262F] mb-4">
                  <span className="font-mono text-[11px] text-[#9A9AA5] block">
                    Domain Focus:
                  </span>
                  <p className="text-xs text-[#F4F1EA] mt-1 font-mono">
                    {cert.skills}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#26262F] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#9A9AA5]">
                  Govt. of India Certified
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#FF9F1C] hover:underline"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
