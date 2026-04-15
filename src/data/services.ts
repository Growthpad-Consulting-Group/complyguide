export type Service = {
  tag: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
};

export const services: Service[] = [
  {
    tag: "Advisory",
    title: "Tax Advisory",
    description:
      "Strategic tax planning and guidance aligned to your business model and jurisdiction.",
    cta: "Speak to an Advisor",
    href: "/services/tax-advisory",
    image: "/assets/images/hero-bg.png",
  },
  {
    tag: "Compliance",
    title: "Regulatory Compliance",
    description:
      "End-to-end filings, reviews, and dispute support to keep you audit-ready.",
    cta: "Get Compliance Support",
    href: "/services/regulatory-compliance",
    image: "/assets/images/hero-bg.png",
  },
  {
    tag: "Structuring",
    title: "Corporate Structuring",
    description:
      "Entity setup, restructuring, and transaction support designed for growth and protection.",
    cta: "Discuss Your Structure",
    href: "/services/corporate-structuring",
    image: "/assets/images/hero-bg.png",
  },
];
