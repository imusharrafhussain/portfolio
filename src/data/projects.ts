import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "parashari",
    title: "Parashari Learning Platform",
    category: "Full Stack",
    hook: "Secure video learning platform with HLS + Cloudflare R2",
    oneLiner: "Reduced page load from 10s to 2s; designed secure HLS video delivery pipeline adopted across company apps.",
    proof: "Page load 10s → 2s; protected real-time HLS video delivery architecture",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudflare R2", "Cloudflare Workers", "FFmpeg"],
    image: "/images/projects/learning.png",
    status: "Production",
    featured: true,
    liveUrl: "https://parashariindia.com",
    githubUrl: "https://github.com/musharrafhussain",
    problem: "The institute's legacy platform suffered from slow 10-second initial load times, high video bandwidth costs, and unencrypted course videos vulnerable to screen ripping and direct downloads.",
    constraints: [
      "Ultra-low latency streaming for learners in tier-2/3 cities on variable 4G connections",
      "Near-zero egress bandwidth billing using Cloudflare R2 instead of costly AWS S3",
      "Enforce strict token-based authentication before serving any video segment"
    ],
    solution: "Built a fully modern responsive platform with five comprehensive course categories (Crash Course, Diploma, Bachelor, Master, Grand Master). Engineered an automated FFmpeg ingest pipeline that splits raw MP4 lectures into encrypted HLS chunks (.m3u8/ts) stored on Cloudflare R2, served dynamically through Cloudflare Workers edge functions.",
    architecture: {
      steps: [
        "Video Upload & Encoding: Ingest raw high-res video and chunk with FFmpeg into multi-bitrate HLS (.m3u8 index + .ts encrypted segments).",
        "Zero-Egress Object Storage: Segments uploaded to Cloudflare R2 object storage with zero egress fees.",
        "Edge Worker Gatekeeper: Cloudflare Worker verifies user JWT and active course enrollment before issuing signed time-limited stream tokens.",
        "Sub-2s Client Playback: Adaptive bitrate video player on client loads first chunk within 800ms and switches quality smoothly."
      ],
      description: "HLS multi-bitrate chunking + Cloudflare Workers signed URL verification + Cloudflare R2 object storage."
    },
    tradeoffs: [
      "Decided against off-the-shelf Vimeo/Wistia due to high recurring per-seat fees; built a tailored pipeline on R2 saving over 80% of ongoing cloud costs.",
      "Chose adaptive HLS chunking over single MP4 streaming to prevent buffering on low-bandwidth networks in rural areas."
    ],
    results: [
      { metric: "5x", value: "10s → 2s", label: "Page Load Reduction" },
      { metric: "100%", value: "Zero Egress", label: "Bandwidth Fees via Cloudflare R2" },
      { metric: "5", value: "5 Tiers", label: "Full Course Curriculum Categories Deployed" }
    ],
    improvements: [
      "Offline video download support inside a progressive web app wrapper with local DRM cache.",
      "Automated chapter timestamp extraction using lightweight audio transcription workers."
    ]
  },
  {
    slug: "astro-consultation",
    title: "AstroDrKunwarHarshit.com",
    category: "Web",
    hook: "Live revenue-generating astrology consultation platform",
    oneLiner: "Complete booking workflows, automated invoicing, transactional email triggers, and RBAC admin portal.",
    proof: "Live in production generating business revenue with automated order-to-invoice workflows",
    stack: ["React", "Node.js", "Express", "MongoDB", "Email Automation", "RBAC Admin", "Payment Gateway"],
    image: "/images/projects/astroharshit.png",
    status: "Live Revenue",
    featured: true,
    liveUrl: "https://astrodrkunwarharshit.com",
    githubUrl: "https://github.com/musharrafhussain",
    problem: "Consultation businesses lose up to 30% of potential bookings due to manual WhatsApp scheduling, delayed manual invoicing, missed customer follow-ups, and lack of unified consultation records.",
    constraints: [
      "Frictionless booking experience for non-tech-savvy users on mobile devices",
      "Instant PDF invoice creation and automated email dispatch upon successful transaction",
      "Granular role-based access for astrologers, support staff, and administrative management"
    ],
    solution: "Designed and engineered an end-to-end booking platform with automated calendar slot booking, instant transactional confirmation, automated PDF invoice generation, and a powerful multi-role administrative back-office.",
    architecture: {
      steps: [
        "Client Booking Intent: User selects consultation category, duration, and preferred time slot.",
        "Payment & Webhook Verification: Gateway triggers secured webhook to verify signature and lock the consultation calendar slot.",
        "Worker Automation: Microservice generates an encrypted GST-compliant PDF invoice and schedules automated reminder emails.",
        "RBAC Dashboard: Astrologer receives real-time customer history, birth chart details, and session notes in their secured portal."
      ],
      description: "End-to-end transactional workflow with automated PDF billing engine, calendar slot sync, and role-based staff operations."
    },
    tradeoffs: [
      "Used optimistic slot reservation with a 10-minute hold lock to prevent double-booking during peak checkout traffic.",
      "Decoupled PDF invoice generation from the primary checkout request into a background job to maintain snappy sub-second checkout UI."
    ],
    results: [
      { metric: "100%", value: "Live Revenue", label: "Active Production Commercial Platform" },
      { metric: "0", value: "Manual Invoicing", label: "Fully Automated PDF & Email Delivery" },
      { metric: "3", value: "Role Tiers", label: "Admin, Astrologer, and Support Staff Portals" }
    ],
    improvements: [
      "In-browser WebRTC secure audio/video consultation rooms directly on the domain.",
      "WhatsApp Cloud API integration for instant slot notifications and calendar links."
    ]
  },
  {
    slug: "bus-tracking",
    title: "Real-Time Bus Tracking System",
    category: "Mobile",
    hook: "Software-driven telemetry replacing expensive hardware GPS",
    oneLiner: "3-app ecosystem (Driver + Student + Admin) using Firebase Realtime DB and OpenStreetMap, scaling to 500 buses.",
    proof: "Designed for 100–500 buses and 1,000–5,000 concurrent users without expensive hardware tracker boxes",
    stack: ["Flutter", "Dart", "Firebase Realtime DB", "OpenStreetMap (OSM)", "Leaflet", "Geo-fencing"],
    image: "/images/projects/bus-tracking.png",
    status: "Concept / Scalable",
    featured: true,
    githubUrl: "https://github.com/musharrafhussain",
    problem: "Colleges and municipal transport in smaller towns cannot afford \$150+ dedicated GPS hardware units per bus plus expensive monthly vendor subscriptions.",
    constraints: [
      "Operate reliably on low-cost Android smartphones used by drivers",
      "Keep battery drain minimal while transmitting coordinates every 2–3 seconds",
      "Optimize Firebase Realtime DB read/write quotas to keep monthly operational costs near zero"
    ],
    solution: "Developed an integrated three-app Flutter system (Driver Telemetry App, Student Live Tracker, Admin Fleet Hub). Drivers simply tap 'Start Route' on their mobile device, and software telemetry streams throttled GPS coordinates to Firebase, rendering live moving buses with smooth bearing rotation on OpenStreetMap.",
    architecture: {
      steps: [
        "Driver Telemetry App: Filters GPS jitter with a Kalman speed/heading algorithm and broadcasts coordinate packets every 3s.",
        "Firebase Realtime DB: Scaled geospatial data structure updates bus lat/lng with Delta compression.",
        "Student Live Map: Students view animated bus pins on OpenStreetMap with dynamic estimated arrival times (ETA).",
        "Admin Fleet Command: Tracks delay alerts, speed warnings, active route deviations, and fleet status."
      ],
      description: "Software-first vehicle telemetry with Kalman jitter smoothing, Firebase Realtime sync, and OpenStreetMap rendering."
    },
    tradeoffs: [
      "Used OpenStreetMap over Google Maps API to eliminate high per-tile billing and support unlimited queries for students.",
      "Implemented client-side bearing calculations rather than server-side queries to save roundtrips and keep phone battery usage low."
    ],
    results: [
      { metric: "500", value: "100–500", label: "Target Fleet Capacity" },
      { metric: "5,000", value: "1K–5K", label: "Concurrent Student User Design Target" },
      { metric: "$0", value: "Hardware Cost", label: "Replaces Dedicated GPS Boxes with Driver Smartphone" }
    ],
    improvements: [
      "Machine-learning based historical traffic ETA prediction trained on past route completion times.",
      "Offline SMS fallback alert for parents when mobile data is unavailable in rural transit zones."
    ]
  },
  {
    slug: "college-erp",
    title: "Modular College ERP Portal",
    category: "Full Stack",
    hook: "Comprehensive academic management portal for 500+ students and 50+ staff",
    oneLiner: "Role-based Django system managing attendance, fee records, examination marks, and departmental workflows.",
    proof: "Supported 500+ students and 50+ faculty members across active academic departments",
    stack: ["Python", "Django", "SQLite / PostgreSQL", "Bootstrap", "HTML5", "RBAC"],
    image: "/images/projects/erp.png",
    status: "Production",
    featured: true,
    githubUrl: "https://github.com/musharrafhussain",
    problem: "Colleges in smaller cities frequently rely on manual spreadsheets or outdated local legacy desktop software, resulting in missing attendance records, chaotic fee audits, and manual grade calculations.",
    constraints: [
      "Strict role separation between Administrative Officers, Department Faculty, and Students",
      "Simple, fast web interface functional even on slow campus Wi-Fi and older mobile browsers",
      "Exportable grade sheets, fee reconciliation ledgers, and automated attendance percent alerts"
    ],
    solution: "Engineered a modular, performant Django ERP platform with tailored portals for Admin, Staff, and Students. Features include daily attendance logging, dynamic assignment uploads, fee status tracking, and automated semester mark sheets.",
    architecture: {
      steps: [
        "Authentication & Authorization: Session-based Django authentication with granular group permissions (Admin, Faculty, Student).",
        "Attendance Engine: Faculty mark daily period records in under 30 seconds with automatic shortage warning triggers for <75% attendance.",
        "Academic & Fee Ledger: Tracks fee installments, payment receipts, and semester examination scorecards.",
        "Document & Assignment Exchange: Secured assignment submissions with faculty review and marking."
      ],
      description: "Modular Django MVT architecture with granular RBAC, attendance shortage triggers, and automated academic ledger generation."
    },
    tradeoffs: [
      "Chose Django's battle-tested built-in security and ORM to enforce strict role-based data isolation with minimal external dependencies.",
      "Used server-side rendered HTML with lightweight Bootstrap to guarantee instant loading on campus computers."
    ],
    results: [
      { metric: "500+", value: "500+", label: "Active Student Profiles Handled" },
      { metric: "50+", value: "50+", label: "Faculty and Staff Members Supported" },
      { metric: "100%", value: "Paperless", label: "Digital Attendance and Fee Auditing" }
    ],
    improvements: [
      "Automatic PDF report card compilation with digital cryptographic signature validation.",
      "Push notification integration for real-time exam schedule updates."
    ]
  },
  {
    slug: "confidential-productivity",
    title: "Confidential Productivity Platform",
    category: "Full Stack",
    hook: "AI-native workflow system for students, graduates, and organizations",
    oneLiner: "In active development: modern cloud-native architecture, intelligent workflow automation, and AI integration.",
    proof: "In development — solving productivity and workflow hurdles for small-town professionals and students",
    stack: ["Next.js", "TypeScript", "Node.js", "Python", "AI Integration", "Cloud-native"],
    image: "/images/projects/parashari.png",
    status: "In Development",
    featured: false,
    confidential: true,
    problem: "Workflow tools today are built for Silicon Valley power users, carrying steep learning curves, expensive team licenses, and zero adaptation for emerging regional users.",
    constraints: [
      "Proprietary feature set currently under confidential development",
      "Targeted for high-concurrency low-latency operational environments"
    ],
    solution: "Developing a full-stack platform focused on solving workflow bottlenecks for students, professionals, and organizations. The system incorporates intelligent assistance, unified document pipelines, and scalable cloud deployment.",
    architecture: {
      steps: [
        "Confidential Architecture Layer",
        "Details and system blueprints will be shared during technical interviews"
      ],
      description: "Confidential architecture under active build. Inquire during interview discussions."
    },
    tradeoffs: [
      "Under active development. Details available upon request."
    ],
    results: [
      { metric: "Status", value: "In Build", label: "Beta Deployment Coming Soon" }
    ],
    improvements: [
      "Full rollout and technical case study release post public launch."
    ]
  }
];
