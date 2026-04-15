import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">
      {/* Sepia parallax background */}
      <div
        className="absolute inset-0 sepia"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-10">
        {/* Left — heading + body */}
        <div className="flex flex-col gap-10 md:gap-20 flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white uppercase leading-tight">
            Turn Compliance Tools <br/>Into Everyday Advantage.
          </h2>
          <p className="text-xl font-body text-gray-300 max-w-sm leading-relaxed mx-auto md:mx-0">
            We set up, integrate, and support the tools so your team stays
            compliant with less effort and clearer visibility.
          </p>
        </div>

        {/* Right — CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-end gap-4 shrink-0 w-full md:w-auto">
          <Link
            href="/contact"
            className="px-8 py-3 bg-brand text-white text-md tracking-wide font-body hover:bg-brand-dark transition-colors text-center"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border border-white text-white text-md tracking-wide font-body hover:bg-white/10 transition-colors text-center"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
