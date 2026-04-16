"use client";

import Image from "next/image";

const cards = [
  {
    title: "Regulatory clarity",
    description:
      "Practical guidance tailored to your sector, structure, and obligations.",
    highlight: true,
  },
  {
    title: "Reduced tax risk",
    description:
      "Audit-ready compliance with dispute and defense support when needed.",
    highlight: false,
  },
  {
    title: "Smarter systems",
    description:
      "Automation, dashboards, and reminders that prevent penalties.",
    highlight: false,
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-20 px-6 md:px-28 bg-white" id="what-you-get">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-2xl">
            Minimal Effort. Maximum Compliance Confidence.
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed">
          Clear guidance, reliable execution, and systems that keep you ahead
          of deadlines and risk.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group p-8 py-12 border border-gray-800 rounded-sm flex flex-col gap-10 transition-all duration-500 hover:border-brand hover:-translate-y-2"
          >
            <Image
              src="/assets/icons/court.svg"
              alt={card.title}
              width={52}
              height={52}
            />
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-body! font-bold text-gray-900 group-hover:text-brand transition-colors">
                {card.title}
              </h3>
              <p className="text-xl font-body text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
