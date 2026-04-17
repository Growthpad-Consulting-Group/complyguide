"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type TeamMember = {
  name: string;
  role: string;
  image: string | null;
  bio: string[];
};

const team: TeamMember[] = [
  {
    name: "Matagaro Sironga",
    role: "Founder & Head of Tax Strategy",
    image: null,
    bio: [
      "Matagaro is a distinguished legal expert in Financial Technology Law (FinTech), Regulatory Technology (RegTech), Supervisory Technology (SupTech), and international tax dispute resolution. As an Advocate of the High Court of Kenya, he brings together deep legal acumen, strategic regulatory insight, and hands-on experience advising high-growth enterprises, financial institutions, and technology-driven companies.",
      "He holds a Bachelor of Laws (LLB) from the University of Nairobi and a Master of Laws (LLM) in International Business and Financial Law from the University of East London (UK). With this strong global academic and professional background, Matagaro leads ComplyGuide's compliance and governance strategy with a forward-looking approach—ensuring regulatory excellence, risk mitigation, and long-term sustainability in a rapidly evolving energy and technology landscape.",
    ],
  },
  {
    name: "Matagaro Sironga",
    role: "Founder & Head of Tax Strategy",
    image: null,
    bio: [
      "Matagaro is a distinguished legal expert in Financial Technology Law (FinTech), Regulatory Technology (RegTech), Supervisory Technology (SupTech), and international tax dispute resolution.",
    ],
  },
  {
    name: "Matagaro Sironga",
    role: "Founder & Head of Tax Strategy",
    image: null,
    bio: [
      "Matagaro is a distinguished legal expert in Financial Technology Law (FinTech), Regulatory Technology (RegTech), Supervisory Technology (SupTech), and international tax dispute resolution.",
    ],
  },
];

export default function Leadership() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
          Leadership
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight">
          Regulatory Leadership.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 cursor-pointer"
            onClick={() => setSelected(member)}
          >
            {/* Photo */}
            <div className="relative w-full aspect-square bg-gray-200 rounded-sm overflow-hidden">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : null}
              {/* Plus button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                  <Icon icon="solar:add-circle-linear" width={24} height={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl font-body! font-semibold text-brand">
                {member.name}
              </h3>
              <p className="text-lg font-body text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-2xl w-full p-10 relative rounded-sm shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <Icon icon="solar:close-circle-linear" width={28} height={28} />
            </button>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-body! font-bold text-brand">
                  {selected.name}
                </h3>
                <p className="text-md font-body text-gray-500 mt-1">
                  {selected.role}
                </p>
              </div>
              <div className="w-12 h-px bg-brand" />
              <div className="flex flex-col gap-4">
                {selected.bio.map((para, i) => (
                  <p key={i} className="text-base font-body text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
