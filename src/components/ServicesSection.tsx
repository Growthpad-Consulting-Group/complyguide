import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
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
        {services.map((service) => (
          <div
            key={service.tag}
            className="relative flex flex-col justify-between min-h-[420px] overflow-hidden group transition-all duration-500 hover:-translate-y-2"
            style={{
              backgroundImage: `url('${service.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 backdrop-grayscale-100" />

            {/* Tag */}
            <div className="relative z-10 p-6">
              <span className="inline-block bg-brand text-white text-xs font-display tracking-widest uppercase px-4 py-2">
                {service.tag}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col gap-4 pb-10">
              <h3 className="text-2xl font-body! font-medium text-brand">
                {service.title}
              </h3>
              <p className="text-lg font-body text-gray-100 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-md font-body text-white hover:text-brand transition-colors mt-2"
              >
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
