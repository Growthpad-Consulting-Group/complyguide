"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const tags = [
  "KRA filings & compliance",
  "Audit & dispute support",
  "TaxTech automation",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-end pb-10 text-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d0d2b]/25" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <p className="text-xs md:text-sm tracking-[0.25em] text-white uppercase mb-6 font-display">
          Tax &bull; Compliance &bull; Strategy
        </p>

        {/* Heading */}
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-medium text-white uppercase leading-tight tracking-wide font-display">
          Your Trusted Partner for <br/> Tax Compliance &amp; Strategic Business
          Advisory
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-body">
          ComplyGuide Advisory helps individuals, SMEs, and multinationals
          navigate tax and compliance—reducing risk and driving profitability.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-brand text-white text-xs tracking-wide rounded-sm hover:bg-brand-dark transition-colors font-display"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border border-white text-white text-xs tracking-wide rounded-sm hover:bg-white/10 transition-colors font-display"
          >
            Explore Services
          </Link>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() =>
            document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-14 hidden sm:flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <Icon icon="solar:arrow-down-linear" width={28} height={28} />
          <span className="text-xs tracking-widest uppercase font-display">Explore More</span>
        </button>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-2 text-sm text-gray-300 font-body">
              <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
