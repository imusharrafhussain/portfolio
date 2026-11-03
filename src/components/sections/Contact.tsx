"use client";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Silent discard for spam bot
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
    } catch {
      // Graceful fallback: allows visitor to launch mail client
      setError("Direct API dispatch paused. You can also mail me directly at musharraf.codes@gmail.com");
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        number="07"
        title="Let's build something for the next billion."
        subtitle="Open for Software Engineering opportunities, high-impact collaborations, and startup initiatives."
        badge="GET IN TOUCH"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Contact Info Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#F4F1EA]">
                Have an ambitious product idea or hiring need?
              </h3>
              <p className="text-[#9A9AA5] text-base leading-relaxed">
                Whether you're looking for a disciplined engineer who can ship scalable systems from scratch, need architecture consulting on HLS video/Cloudflare, or want to collaborate on bringing tech to smaller cities — my inbox is always open.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-xl border border-[#26262F] bg-[#14141B] p-4 text-[#F4F1EA] hover:border-[#FF9F1C] transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF9F1C]/10 text-[#FF9F1C] group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#9A9AA5]">Direct Email</div>
                    <div className="font-medium text-sm sm:text-base">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-[#26262F] bg-[#14141B] p-4 text-[#F4F1EA]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2EC4B6]/10 text-[#2EC4B6]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#9A9AA5]">Phone / WhatsApp</div>
                    <div className="font-medium text-sm sm:text-base">{siteConfig.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-[#26262F] bg-[#14141B] p-4 text-[#F4F1EA]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF9F1C]/10 text-[#FF9F1C]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#9A9AA5]">Location</div>
                    <div className="font-medium text-sm sm:text-base">{siteConfig.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social Presence Links */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#26262F] bg-[#14141B] px-4 py-3 font-mono text-xs text-[#F4F1EA] hover:border-[#FF9F1C] transition-all"
              >
                <GithubIcon className="h-4 w-4 text-[#FF9F1C]" />
                GitHub Profile
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#26262F] bg-[#14141B] px-4 py-3 font-mono text-xs text-[#F4F1EA] hover:border-[#FF9F1C] transition-all"
              >
                <LinkedinIcon className="h-4 w-4 text-[#2EC4B6]" />
                LinkedIn Profile
              </a>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[#26262F] bg-[#14141B] p-8 md:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2EC4B6]/20 text-[#2EC4B6]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F1EA]">
                    Message Dispatched
                  </h3>
                  <p className="text-[#9A9AA5] max-w-md text-sm md:text-base leading-relaxed">
                    Thank you for reaching out! I typically respond within 12 hours. You can also reach me directly at <span className="text-[#FF9F1C]">{siteConfig.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "", honeypot: "" });
                    }}
                    className="mt-4 font-mono text-xs text-[#FF9F1C] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field to fool spam crawlers */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formState.honeypot}
                      onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#9A9AA5] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-[#26262F] bg-[#0B0B0F] px-4 py-3.5 text-[#F4F1EA] placeholder-[#9A9AA5]/50 focus:border-[#FF9F1C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#9A9AA5] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl border border-[#26262F] bg-[#0B0B0F] px-4 py-3.5 text-[#F4F1EA] placeholder-[#9A9AA5]/50 focus:border-[#FF9F1C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#9A9AA5] mb-2">
                      Project or Message Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your product, hiring opportunity, or system requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-[#26262F] bg-[#0B0B0F] px-4 py-3.5 text-[#F4F1EA] placeholder-[#9A9AA5]/50 focus:border-[#FF9F1C] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-400">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF9F1C] py-4 font-mono text-sm font-bold text-[#0B0B0F] hover:bg-[#ffb042] transition-all shadow-[0_0_25px_rgba(255,159,28,0.25)] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
