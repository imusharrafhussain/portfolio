"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DotMap from "@/components/canvas/DotMap";

gsap.registerPlugin(ScrollTrigger);

const BEATS = [
  { title: "The gap", body: "Small cities and towns still run on paper, phone calls and guesswork." },
  { title: "What I'm building", body: "Bus tracking, school ERP, learning platforms: software that replaces costly hardware." },
  { title: "How", body: "Low cost, role-based, built to scale from 500 users to 5,000." },
  { title: "Where it goes", body: "Every town gets tools as good as the ones big cities take for granted." },
];

/**
 * Pinned scrollytelling. One ScrollTrigger pins the section; its progress
 *  (1) fades the text beats in and out, and
 *  (2) feeds DotMap through a ref so the map lights up in sync, with zero re-renders.
 */
export default function Mission() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progress.current = 1;
      return;
    }

    const ctx = gsap.context(() => {
      const beats = gsap.utils.toArray<HTMLElement>("[data-beat]");
      gsap.set(beats, { autoAlpha: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (BEATS.length + 0.5)}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => { progress.current = self.progress; },
        },
      });

      beats.forEach((el, i) => {
        tl.to(el, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, i)
          .to(el, { autoAlpha: i === beats.length - 1 ? 1 : 0, y: -30, duration: 0.5, ease: "power3.in" }, i + 0.9);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={root} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <DotMap progress={progress} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
        <div className="relative h-56 w-full max-w-xl">
          {BEATS.map((b) => (
            <div key={b.title} data-beat className="absolute inset-0 flex flex-col justify-center gap-3">
              <h3 className="text-4xl font-semibold md:text-6xl">{b.title}</h3>
              <p className="max-w-md text-lg text-[#9A9AA5]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
