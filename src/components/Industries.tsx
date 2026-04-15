import Image from "next/image";

const industries = [
  {
    icon: "/assets/icons/financial_services.svg",
    title: "Financial Services",
    description: "Banking, fintech, insurance, investments.",
  },
  {
    icon: "/assets/icons/manufacturing.svg",
    title: "Manufacturing & Trade",
    description: "Manufacturing, import/export, logistics.",
  },
  {
    icon: "/assets/icons/real_estate.svg",
    title: "Real Estate & Construction",
    description: "Developers, property managers, contractors.",
  },
  {
    icon: "/assets/icons/hospitality.svg",
    title: "Hospitality & Tourism",
    description: "Hotels, restaurants, tourism operators.",
  },
];

export default function Industries() {
  return (
    <section className="py-20 px-6 md:px-28 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-2xl">
            Experience Across Key <br/>African Industries.
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed">
          We support organisations operating in regulated, fast-moving, and
          growth-driven sectors.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((item) => (
          <div
            key={item.title}
            className="group p-8 py-12 border border-gray-800 rounded-sm flex flex-col gap-10 transition-all duration-500 hover:border-brand hover:-translate-y-2"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={52}
              height={52}
            />
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-body! font-bold text-gray-900 group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-xl font-body text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
