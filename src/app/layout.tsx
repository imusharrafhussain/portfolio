import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/motion/Preloader";
import CustomCursor from "@/components/motion/CustomCursor";

export const metadata: Metadata = {
  title: "Musharraf Hussain | Software Engineer",
  description: "I build reliable software for the places big tech forgets: small cities and towns. Full-stack software engineer specializing in MERN, Django, Flutter, Cloudflare R2 & Workers, and HLS streaming.",
  keywords: ["Musharraf Hussain", "Software Engineer", "MERN Stack", "Django", "Flutter", "Cloudflare R2", "HLS Streaming", "Amritsar", "Jammu"],
  authors: [{ name: "Musharraf Hussain" }],
  openGraph: {
    title: "Musharraf Hussain | Software Engineer",
    description: "Building reliable software for small cities, towns, and the next billion users.",
    url: "https://musharrafhussain.dev",
    siteName: "Musharraf Hussain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musharraf Hussain | Software Engineer",
    description: "Building reliable software for small cities, towns, and the next billion users.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0B0F] text-[#F4F1EA] antialiased min-h-screen flex flex-col selection:bg-[#FF9F1C] selection:text-[#0B0B0F]">
        <Preloader />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
