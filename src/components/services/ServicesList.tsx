import Image from "next/image";
import Link from "next/link";
import { servicesList } from "@/data/servicesList";

export default function ServicesList() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col gap-20">
        {servicesList.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                isEven ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div className="w-full aspect-4/3 rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={0}
                  className="w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-body! font-bold text-brand leading-snug">
                  {service.title}
                </h2>
                <p className="text-lg font-body text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-lg font-body text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-1.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.ctaHref}
                  className="mt-2 inline-block px-6 py-3 bg-brand text-white text-md font-body tracking-wide hover:bg-brand-dark transition-colors self-start"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
