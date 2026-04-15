import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#111111] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase">
            About ComplyGuide
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-normal text-white uppercase leading-tight">
            Clarity and Confidence in Tax &amp; Compliance.
          </h2>

          <div className="flex flex-col gap-4 text-xl font-body text-gray-200 leading-relaxed">
            <p>
              ComplyGuide Advisory is a Kenya-based tax and compliance firm
              supporting organisations operating across Africa&apos;s complex
              regulatory environments.
            </p>
            <p>
              We help businesses, institutions, and investors make confident
              decisions by simplifying tax, legal, and compliance obligations —
              combining expert advisory with practical, technology-enabled
              solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/services"
              className="px-6 py-3 bg-white text-gray-900 text-md tracking-wide font-body hover:bg-gray-200 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-white text-md tracking-wide font-body hover:bg-white/10 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Right — image stack */}
        <div className="flex flex-col gap-4">
          {/* Top image — smaller, offset right */}
          <div className="self-end w-4/5 aspect-video bg-gray-300 rounded-sm" />
          {/* Bottom image — larger, offset left */}
          <div className="self-start w-full aspect-video bg-gray-300 rounded-sm" />
        </div>

      </div>
    </section>
  );
}
