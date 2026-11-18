<div align="center">

# ⚡ Musharraf Hussain — Software Engineer

<p align="center">
  <strong>"I build reliable software for the places big tech forgets: small cities and towns."</strong>
</p>

[![Live Site](https://img.shields.io/badge/Live_Site-musharrafhussain.vercel.app-FF9F1C?style=for-the-badge&logo=vercel&logoColor=black)](https://musharrafhussain.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Musharraf_Hussain-2EC4B6?style=for-the-badge&logo=linkedin&logoColor=black)](https://www.linkedin.com/in/musharraf-hussain-260256280/)
[![GitHub](https://img.shields.io/badge/GitHub-imusharrafhussain-14141B?style=for-the-badge&logo=github&logoColor=white)](https://github.com/imusharrafhussain)

<br/>

</div>

---

## 🧭 About The Site

A high-performance, motion-driven engineering portfolio designed to showcase production-grade systems, cloud architectures, and full-stack software products built with scale and purpose.

Designed around a dark, high-contrast palette (`#0B0B0F`, `#14141B`) accented with **Indian Saffron (`#FF9F1C`)** and **Electric Teal (`#2EC4B6`)**, this portfolio reflects real-world engineering taste: low-latency loading, buttery 60fps animations, accessible typography, and deep architectural case studies.

---

## ✨ Engineering & Motion Highlights

- **🗺️ Interactive Halftone DotMap of India**: Drawn natively on an HTML5 `<canvas>` with geographic coordinates. Features real-time dot repulsion against cursor velocity and dynamic animated routes originating from Jammu & Kashmir and Punjab out to global tech hubs.
- **📜 Pinned Scrollytelling (`GSAP ScrollTrigger`)**: A full-screen pinned mission narrative synchronized to canvas progress refs with zero React re-render overhead.
- **⚡ Lenis Inertia Smooth Scroll**: Connected directly into the GSAP ticker loop to eliminate scroll jitter and ensure fluid section transitions.
- **🔤 Masked Split-Text & Reveal Animations**: Word-by-word sliding reveals built with `framer-motion`, fully accessible via `aria-label` tags for screen readers.
- **📱 Smart Mobile In-View Colorization**: Automatically transitions grayscale images to full vibrant color via `IntersectionObserver` when scrolled into view on mobile devices.
- **🎯 Spring Magnetic Buttons & Follower Cursor**: Physics-based cursor spring attractions for desktop interactions.
- **📬 Anti-Spam Contact Pipeline**: Automated routing to `musharraf.codes@gmail.com` powered by FormSubmit.co with silent honeypot bot defense.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack, TypeScript) |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/) + ScrollTrigger, [Lenis Scroll](https://lenis.darkroom.engineering/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens & glassmorphism |
| **Canvas & Graphics** | HTML5 Canvas 2D Halftone Point-in-Polygon Engine |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG brand marks |
| **Deployment** | [Vercel](https://vercel.com/) (Edge Network CDN) |

---

## 🚀 Featured Production Systems

### 1. [Parashari Learning Platform](https://musharrafhussain.vercel.app/projects/parashari)
* **Stack**: React, Node.js, Express, MongoDB, Cloudflare R2, Cloudflare Workers, FFmpeg
* **Impact**: Cut page load from 10s to 2s; designed a zero-egress secure video delivery architecture chunking MP4s into encrypted HLS (`.m3u8`/`.ts`) streams authenticated via Cloudflare Workers.

### 2. [AstroDrKunwarHarshit.com](https://musharrafhussain.vercel.app/projects/astro-consultation)
* **Stack**: React, Node.js, Express, MongoDB, Automated Invoicing, RBAC Dashboard
* **Impact**: Production consultation platform generating live revenue with automated slot scheduling, transactional email dispatch, and GST-compliant PDF invoice creation.

### 3. [Real-Time Bus Tracking System](https://musharrafhussain.vercel.app/projects/bus-tracking)
* **Stack**: Flutter, Firebase Realtime DB, OpenStreetMap (OSM), Leaflet
* **Impact**: Three-app telemetry ecosystem (Driver + Student + Admin) replacing expensive \$150 hardware GPS trackers with driver smartphone telemetry, designed for 100–500 buses.

### 4. [Modular College ERP Portal](https://musharrafhussain.vercel.app/projects/college-erp)
* **Stack**: Python, Django, SQLite / PostgreSQL, Bootstrap
* **Impact**: Supported 500+ active students and 50+ faculty members with granular Role-Based Access Control (RBAC), automated attendance shortage triggers, and digital fee ledgers.

---

## 📂 Project Structure

```bash
portfolio/
├── public/
│   ├── images/
│   │   ├── me/              # Portrait assets (myself.jpg)
│   │   └── projects/        # High-res project previews (learning.png, astroharshit.png, etc.)
│   └── resume/              # Embedded PDF resume
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, providers, cursor, metadata
│   │   ├── page.tsx         # Composed single-page scroll experience
│   │   ├── projects/        # Dedicated projects directory & dynamic case studies ([slug])
│   │   ├── resume/          # Embedded PDF viewer page with instant download
│   │   └── contact/         # Standalone contact portal
│   ├── components/
│   │   ├── canvas/          # DotMap.tsx (halftone canvas of India)
│   │   ├── layout/          # Navbar, Footer, MobileMenu
│   │   ├── motion/          # Reveal, SplitText, CustomCursor, Preloader
│   │   ├── sections/        # Hero, About, Mission, Experience, Projects, Skills, Certificates, Contact
│   │   └── ui/              # MagneticButton, SectionHeading, Icons
│   ├── data/                # Typed configuration: site, projects, experience, skills, certificates
│   ├── hooks/               # useReducedMotion, event listeners
│   ├── providers/           # SmoothScrollProvider (Lenis + GSAP ticker sync)
│   └── types/               # TypeScript interfaces & project schemas
```

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/imusharrafhussain/portfolio.git

# Navigate into the folder
cd portfolio

# Install packages
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact & Connect

- **Email**: [musharraf.codes@gmail.com](mailto:musharraf.codes@gmail.com)
- **LinkedIn**: [linkedin.com/in/musharraf-hussain-260256280](https://www.linkedin.com/in/musharraf-hussain-260256280/)
- **GitHub**: [github.com/imusharrafhussain](https://github.com/imusharrafhussain)
- **Portfolio**: [musharrafhussain.vercel.app](https://musharrafhussain.vercel.app)

---

<div align="center">
  <sub>Designed & engineered by Musharraf Hussain · Built with Next.js, Framer Motion, and GSAP</sub>
</div>
