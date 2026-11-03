"use client";
import Projects from "@/components/sections/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9A9AA5] hover:text-[#FF9F1C] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </div>
      <Projects />
    </div>
  );
}
