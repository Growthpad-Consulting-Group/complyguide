const platforms = [
  {
    title: "Tax Calculator Tools",
    bullets: [
      "Corporate income tax calculators",
      "VAT and withholding tax estimators",
      "Scenario-based planning tools",
    ],
  },
  {
    title: "ETR & E-Invoicing Integration",
    bullets: [
      "Integration with electronic tax registers",
      "Automated invoice validation",
      "Real-time transaction visibility",
    ],
  },
  {
    title: "Real-Time Filing Dashboards",
    bullets: [
      "Centralised compliance dashboards",
      "Live status tracking for filings",
      "Audit-ready reporting",
    ],
  },
  {
    title: "Compliance Alerts & Risk Monitoring",
    bullets: [
      "Automated filing reminders",
      "Penalty and exposure alerts",
      "Compliance risk visibility",
    ],
  },
];

export default function DigitalPlatform() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-display tracking-[0.2em] text-brand uppercase mb-3">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-gray-900 uppercase leading-tight max-w-2xl">
            Digital Compliance<br/> Solutions
          </h2>
        </div>
        <p className="text-lg font-body text-gray-600 max-w-xs leading-relaxed">
          Designed to support finance teams, tax managers, and compliance
          officers with clarity and control.
        </p>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.title}
            className="group bg-gray-900 p-8 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-body! font-semibold text-brand">
              {platform.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {platform.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-base font-body text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-1.5" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
