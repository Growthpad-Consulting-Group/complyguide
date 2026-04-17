export default function ContactHero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-16 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl flex flex-col gap-4">
        <p className="text-sm font-display tracking-[0.2em] text-white uppercase">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-white uppercase leading-tight">
          Let&apos;s Talk Compliance, Strategy, and Next Steps.
        </h1>
        <p className="text-base font-body text-gray-300 max-w-md leading-relaxed mt-2">
          Share what you need help with — we&apos;ll respond with clear next
          steps and the right expert for your request.
        </p>
      </div>
    </section>
  );
}
