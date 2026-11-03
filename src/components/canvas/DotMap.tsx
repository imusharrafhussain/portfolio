"use client";
import { MutableRefObject, useEffect, useRef } from "react";

/**
 * DotMap: a halftone map of India drawn on <canvas>.
 *
 *  - Dots come from point-in-polygon against a simplified outline.
 *    (Swap INDIA for real GeoJSON coordinates later for a sharper coastline.)
 *  - Cities light up in order as `progress` (0..1) advances; arcs connect them.
 *  - Dots are pushed away from the cursor and spring back.
 *  - `progress` is a ref, not state, so scroll updates never re-render React.
 *  - Pauses when off-screen. Static frame if reduced motion is on.
 */

type LonLat = [number, number];

const INDIA: LonLat[] = [
  [74.5, 34.8], [76.5, 35.8], [78.5, 35.5], [79.2, 33], [78.9, 31], [80.2, 30.2], [81, 30.1],
  [80.1, 28.8], [82, 27.9], [84, 27.3], [88.1, 26.5], [88.2, 27.8], [88.9, 27.3], [89.8, 26.8],
  [92, 26.9], [94.5, 29], [96.2, 28.3], [97.3, 27.9], [95.3, 26], [94.6, 24], [93.3, 22],
  [92.4, 22.5], [92.3, 24], [91.5, 24.1], [89.9, 25.3], [89, 26], [88.9, 24.3], [88.1, 22.2],
  [86.9, 21.4], [85, 19.6], [82.3, 16.6], [80.2, 15.4], [80.3, 13.3], [79.9, 10.3], [79, 9.2],
  [77.5, 8], [76.3, 9.5], [75, 12.5], [74, 15], [72.8, 19], [72.8, 21], [70.3, 20.9],
  [69.2, 22.3], [68.2, 23.7], [70, 24.2], [71, 24.5], [70.5, 26.5], [71.8, 27.9], [74, 29.5],
  [74.6, 31], [74.3, 32.5], [73.4, 34],
];

// Lit in this order as the visitor scrolls. The first two are home base.
export const CITIES: { name: string; pos: LonLat }[] = [
  { name: "Nowshera", pos: [74.2, 33.15] },
  { name: "Amritsar", pos: [74.87, 31.63] },
  { name: "Delhi", pos: [77.2, 28.6] },
  { name: "Jaipur", pos: [75.8, 26.9] },
  { name: "Lucknow", pos: [80.95, 26.85] },
  { name: "Bhopal", pos: [77.4, 23.25] },
  { name: "Pune", pos: [73.85, 18.5] },
  { name: "Hyderabad", pos: [78.5, 17.4] },
  { name: "Bengaluru", pos: [77.6, 12.97] },
];

const LON: [number, number] = [68, 98];
const LAT: [number, number] = [6, 37.5];

function inside(pt: LonLat, poly: LonLat[]) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

type Dot = { hx: number; hy: number; x: number; y: number; vx: number; vy: number };

export default function DotMap({
  progress,
  accent = "#FF9F1C",
  base = "#9A9AA5",
  className,
}: {
  progress: MutableRefObject<number>;
  accent?: string;
  base?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dots: Dot[] = [];
    let cityPx: { x: number; y: number }[] = [];
    let w = 0, h = 0, s = 1, ox = 0, oy = 0;
    let raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999 };

    const project = (lon: number, lat: number) => ({
      x: ox + (lon - LON[0]) * s,
      y: oy + (LAT[1] - lat) * s,
    });

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      s = Math.min(w / (LON[1] - LON[0]), h / (LAT[1] - LAT[0]));
      ox = (w - (LON[1] - LON[0]) * s) / 2;
      oy = (h - (LAT[1] - LAT[0]) * s) / 2;

      const gap = Math.max(7, Math.round(w / 90));
      dots = [];
      for (let px = 0; px < w; px += gap) {
        for (let py = 0; py < h; py += gap) {
          const lon = LON[0] + (px - ox) / s;
          const lat = LAT[1] - (py - oy) / s;
          if (inside([lon, lat], INDIA)) dots.push({ hx: px, hy: py, x: px, y: py, vx: 0, vy: 0 });
        }
      }
      cityPx = CITIES.map((c) => project(c.pos[0], c.pos[1]));
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);

      const litFloat = reduced ? CITIES.length : progress.current * (CITIES.length + 0.5);
      const lit = Math.min(CITIES.length, Math.floor(litFloat));
      const partial = litFloat - Math.floor(litFloat);
      const glowR = Math.max(60, w * 0.09);

      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 6400 && !reduced) {
          const m = Math.sqrt(dist2) || 1;
          const f = (1 - m / 80) * 2.2;
          d.vx += (dx / m) * f; d.vy += (dy / m) * f;
        }
        d.vx += (d.hx - d.x) * 0.06; d.vy += (d.hy - d.y) * 0.06;
        d.vx *= 0.82; d.vy *= 0.82;
        d.x += d.vx; d.y += d.vy;

        let heat = 0;
        for (let i = 0; i < lit; i++) {
          const cx = cityPx[i].x - d.hx, cy = cityPx[i].y - d.hy;
          const k = 1 - Math.sqrt(cx * cx + cy * cy) / glowR;
          if (k > heat) heat = k;
        }
        const hot = Math.max(0, heat);
        ctx.globalAlpha = 0.22 + hot * 0.78;
        ctx.fillStyle = hot > 0.05 ? accent : base;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.3 + hot * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // arcs between consecutive cities; the newest draws partially
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.2;
      for (let i = 1; i <= Math.min(lit, CITIES.length - 1); i++) {
        const a = cityPx[i - 1], b = cityPx[i];
        const t = i === lit ? partial : 1;
        const mx = (a.x + b.x) / 2;
        const my = Math.min(a.y, b.y) - Math.abs(b.x - a.x) * 0.25 - 14;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        for (let k = 1; k <= 24; k++) {
          const u = (k / 24) * t;
          ctx.lineTo(
            (1 - u) ** 2 * a.x + 2 * (1 - u) * u * mx + u * u * b.x,
            (1 - u) ** 2 * a.y + 2 * (1 - u) * u * my + u * u * b.y
          );
        }
        ctx.stroke();
      }

      // city markers with a soft pulse
      const now = performance.now() / 1000;
      for (let i = 0; i < lit; i++) {
        const c = cityPx[i];
        ctx.globalAlpha = 1;
        ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(c.x, c.y, 3.2, 0, Math.PI * 2); ctx.fill();
        if (!reduced) {
          const pulse = (now * 0.8 + i * 0.37) % 1;
          ctx.globalAlpha = 1 - pulse;
          ctx.strokeStyle = accent;
          ctx.beginPath(); ctx.arc(c.x, c.y, 3 + pulse * 16, 0, Math.PI * 2); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };

    build();
    frame();
    const ro = new ResizeObserver(build); ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting)); io.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [progress, accent, base]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "h-full w-full"}
      role="img"
      aria-label="Dot map of India lighting up cities from Nowshera and Amritsar outward"
    />
  );
}
