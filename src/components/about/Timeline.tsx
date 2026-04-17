"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";

const milestones = [
  {
    year: "2019",
    title: "Founding & Vision",
    description:
      "Established to simplify tax and regulatory compliance for businesses in Kenya.",
  },
  {
    year: "2020",
    title: "Digital Compliance Era",
    description:
      "Virtual tax clinics and remote advisory to support businesses during COVID-19.",
  },
  {
    year: "2021",
    title: "FinTech & Digital Economy",
    description:
      "Specialised advisory for fintechs, e-commerce, and tech multinationals.",
  },
  {
    year: "2022",
    title: "Regulatory & Policy Engagement",
    description:
      "Engaged with policymakers and launched research-based tax insights.",
  },
  {
    year: "2023",
    title: "Technology Integration & Automation",
    description:
      "Introduced tax automation support, digital filing assistance, and compliance technology advisory.",
  },
  {
    year: "2024",
    title: "Regional & International Focus",
    description:
      "Expanded to cross-border tax structuring, transfer pricing, and BEPS compliance.",
  },
  {
    year: "2025",
    title: "The Year of Smart Compliance",
    description:
      "Launched AI-driven tax intelligence and industry-specific compliance frameworks.",
  },
  {
    year: "Today",
    title: "Shaping the Future of Tax & Compliance",
    description:
      "Trusted partner for governments, corporates, SMEs, financial institutions, and NGOs.",
  },
];

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="flex items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-3xl">
            Our Growth, Innovation, and Leadership in Tax &amp; Compliance.
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button onClick={() => scroll("left")} aria-label="Scroll left" className="hover:text-brand transition-colors">
            <Icon icon="solar:alt-arrow-left-linear" width={28} height={28} />
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll right" className="hover:text-brand transition-colors">
            <Icon icon="solar:alt-arrow-right-linear" width={28} height={28} />
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pl-[%]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative flex gap-0 min-w-max">
          {/* Single continuous line across all cards */}
          <div className="absolute left-0 right-0 h-px bg-gray-600" style={{ top: "50px" }} />

          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="flex flex-col items-center text-center w-[400px] shrink-0 px-6"
            >
              {/* Year above line */}
              <p className="text-2xl font-body font-semibold text-brand mb-2">
                {milestone.year}
              </p>

              {/* Dot on the line */}
              <div className="w-5 h-5 rounded-full bg-brand z-10 shrink-0 mb-6" />

              {/* Title */}
              <h4 className="text-2xl font-body! font-semibold text-brand mb-2 leading-snug">
                {milestone.title}
              </h4>

              {/* Description */}
              <p className="text-xl font-body text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
