"use client";

import Image from "next/image";

const cards = [
  {
    icon: "/assets/icons/vision.png",
    label: "Vision",
    description:
      "To be Africa's most trusted partner for tax clarity, compliance confidence, and regulatory excellence.",
  },
  {
    icon: "/assets/icons/mission.png",
    label: "Mission",
    description:
      "To simplify tax and compliance obligations through expert advisory, disciplined execution, and technology-enabled systems that reduce risk.",
  },
];

export default function VisionMission() {
  return (
    <section className="pb-20 px-6 md:px-16 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Vision &amp; Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-md">
            Clear Purpose. Strong Standards.
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed">
          Simple, direct statements that reflect how ComplyGuide operates and
          the impact we aim to create.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="group bg-gray-900 p-10 flex flex-col gap-6 border border-gray-900 transition-all duration-500 hover:border-brand hover:-translate-y-2"
          >
            <Image
              src={card.icon}
              alt={card.label}
              width={52}
              height={52}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-body! font-semibold text-brand group-hover:text-brand transition-colors">
                {card.label}
              </h3>
              <p className="text-lg font-body text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
