import Image from "next/image";

const values = [
  {
    title: "Integrity",
    description: "We operate with honesty, discretion, and professional responsibility.",
  },
  {
    title: "Precision",
    description: "Clear details, correct execution, and disciplined compliance standards.",
  },
  {
    title: "Clarity",
    description: "We simplify complex topics into practical decisions and actions.",
  },
  {
    title: "Accountability",
    description: "We take ownership, follow through, and measure results.",
  },
  {
    title: "Partnership",
    description: "We work alongside teams to build long-term compliance confidence.",
  },
  {
    title: "Innovation",
    description: "We use tools and smart systems to reduce manual work and risk.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-xl">
            How We Work, Even When No One Is Watching.
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed">
          A small set of principles that guide our advisory work, client
          relationships, and delivery standards.
        </p>
      </div>

      {/* Body — image left, values right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left — image */}
        <div className="w-full aspect-4/5 rounded-sm overflow-hidden">
          <Image
            src="/assets/images/clock.png"
            alt="Core values"
            width={600}
            height={0}
            className=" object-cover"
          />
        </div>

        {/* Right — values list */}
        <div className="flex flex-col divide-y divide-gray-100">
          {values.map((value) => (
            <div key={value.title} className="py-6 flex flex-col gap-2">
              <h3 className="text-lg font-body! font-semibold text-brand">
                {value.title}
              </h3>
              <p className="text-base font-body text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
