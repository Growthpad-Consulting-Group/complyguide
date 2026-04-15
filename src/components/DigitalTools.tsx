"use client";

import { Icon } from "@iconify/react";

const tools = [
  {
    title: "Tax Calculator",
    description: "Quickly estimate liabilities to support planning and decision-making.",
    icon: "solar:calculator-broken",
  },
  {
    title: "Compliance Tracker",
    description: "Automated reminders and visibility across filings and deadlines.",
    icon: "solar:checklist-broken",
  },
  {
    title: "Audit Support Tools",
    description: "Tools and workflows that help teams stay audit-ready year-round.",
    icon: "solar:shield-check-broken",
  },
  {
    title: "SME Tax Clinic",
    description: "Affordable, structured digital support for growing businesses.",
    icon: "solar:buildings-2-broken",
  },
];

export default function DigitalTools() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 text-center md:text-left">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Digital Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-2xl">
            Compliance, Simplified<br/> Through Smart Tools.
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed mx-auto md:mx-0">
          Designed to reduce manual work, prevent errors, and give teams
          real-time visibility.
        </p>
      </div>

      {/* Body — 2/5 image col + 3/5 cards col */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left — image placeholders (2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="w-full flex-1 min-h-[200px] bg-gray-200 rounded-sm" />
          <div className="w-full flex-1 min-h-[200px] bg-gray-200 rounded-sm" />
        </div>

        {/* Right — tool cards (3 cols) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group flex items-start gap-5 bg-[#111111] px-6 py-10 hover:bg-zinc-900 transition-colors duration-300"
            >
              <Icon
                icon={tool.icon}
                width={50}
                height={50}
                className="text-gray-200 shrink-0 mt-1 p-2"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-body! font-medium text-brand">
                  {tool.title}
                </h3>
                <p className="text-md font-body text-gray-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
