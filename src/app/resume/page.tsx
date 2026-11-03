"use client";
import Link from "next/link";
import { Download, ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9A9AA5] hover:text-[#FF9F1C] mb-4 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-[#F4F1EA]">
            Curriculum Vitae
          </h1>
          <p className="font-mono text-xs md:text-sm text-[#FF9F1C] mt-2">
            Musharraf Hussain · Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/resume/Musharraf_Hussain_Resume.pdf"
            download="Musharraf_Hussain_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF9F1C] px-5 py-3 font-mono text-xs font-bold text-[#0B0B0F] hover:bg-[#ffb042] transition-all shadow-[0_0_20px_rgba(255,159,28,0.25)]"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
          <a
            href="/resume/Musharraf_Hussain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#26262F] bg-[#14141B] px-4 py-3 font-mono text-xs text-[#F4F1EA] hover:border-[#FF9F1C] transition-all"
          >
            Full Window
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded Resume Preview */}
      <Reveal>
        <div className="rounded-2xl border border-[#26262F] bg-[#14141B] overflow-hidden shadow-2xl p-2 md:p-4">
          <iframe
            src="/resume/Musharraf_Hussain_Resume.pdf#toolbar=0"
            className="w-full h-[850px] rounded-xl border border-[#26262F] bg-white"
            title="Musharraf Hussain Resume PDF"
          />
        </div>
      </Reveal>

      {/* Highlights summary */}
      <div className="mt-12 rounded-2xl border border-[#26262F] bg-[#14141B] p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-[#2EC4B6] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-[#F4F1EA] text-sm">Production Verified</h4>
            <p className="text-xs text-[#9A9AA5] mt-1">Shipped live apps handling paying users and active students.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-[#2EC4B6] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-[#F4F1EA] text-sm">Cloud Infrastructure</h4>
            <p className="text-xs text-[#9A9AA5] mt-1">Cloudflare Workers, R2 object store, FFmpeg HLS streaming.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-[#2EC4B6] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-[#F4F1EA] text-sm">Academic Distinction</h4>
            <p className="text-xs text-[#9A9AA5] mt-1">8.5 CGPA in B.Tech CSE, IIT certified via SWAYAM NPTEL.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
