const tags = ["Advisory-led", "Audit-ready", "Tech-enabled"];

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-16 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/aboutus-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
        {/* Left — text (2/3) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="text-sm font-display tracking-[0.2em] text-white uppercase">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white uppercase leading-tight">
            Built for Clarity in <br/>Complex Environments.
          </h1>
          <p className="text-lg font-body text-gray-300 max-w-md leading-relaxed mt-2">
            We help organisations across Africa reduce compliance risk and make
            confident decisions through expert advisory and practical compliance
            systems.
          </p>
        </div>

        {/* Right — tags */}
        <div className="flex flex-wrap items-center md:justify-end gap-6">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-2 text-md font-body text-white">
              <span className="relative flex items-center justify-center shrink-0">
                <span className="absolute w-5 h-5 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white relative z-10" />
              </span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
