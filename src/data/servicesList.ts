export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  ctaHref: string;
  image: string;
};

export const servicesList: ServiceItem[] = [
  {
    title: "Tax Advisory & Consulting",
    description:
      "Comprehensive tax advisory services focused on optimisation, risk management, and compliance across local and international tax regimes.",
    bullets: [
      "Tax planning & optimisation",
      "Corporate tax advisory",
      "VAT advisory & VAT refund applications",
      "Capital gains tax advisory",
      "International tax & transfer pricing",
      "Dual taxation relief & treaty advisory",
    ],
    cta: "Consult Our Tax Team",
    ctaHref: "/contact#contact-form",
    image: "/assets/images/tax_advisory.png",
  },
  {
    title: "Compliance & Regulatory Services",
    description:
      "End-to-end compliance and regulatory support to ensure accuracy, continuity, and audit readiness.",
    bullets: [
      "KRA registrations & filings (PAYE, VAT, Income Tax)",
      "Annual returns & ongoing compliance management",
      "Tax audit defence & investigations",
      "KRA dispute resolution and appeals",
      "Compliance audits and risk assessments",
    ],
    cta: "Get Compliance Support",
    ctaHref: "/contact#contact-form",
    image: "/assets/images/compliance.png",
  },
  {
    title: "Business & Corporate Structuring",
    description:
      "Strategic structuring services designed to support growth, investment, and long-term wealth preservation.",
    bullets: [
      "Company formation (local & foreign)",
      "Holding company & investment structures",
      "Tax-efficient restructuring & M&A advisory",
      "Trusts & wealth preservation strategies",
    ],
    cta: "Discuss Structuring Options",
    ctaHref: "/contact#contact-form",
    image: "/assets/images/business_structuring.png",
  },
  {
    title: "Digital Tax Tools & Automation",
    description:
      "Technology-driven tools that enhance visibility, accuracy, and control across tax and compliance functions.",
    bullets: [
      "Tax calculator tools",
      "ETR & e-invoicing integration",
      "Real-time tax filing dashboards",
      "Compliance alerts & penalty avoidance tools",
    ],
    cta: "Explore Digital Tools",
    ctaHref: "/digital-tools",
    image: "/assets/images/digital_tax.png",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Practical training programmes designed to strengthen internal tax, compliance, and governance capability.",
    bullets: [
      "Corporate tax compliance training",
      "Executive tax strategy workshops",
      "Regulation & governance masterclasses",
    ],
    cta: "Enquire About Training",
    ctaHref: "/contact#contact-form",
    image: "/assets/images/training.png",
  },
];
