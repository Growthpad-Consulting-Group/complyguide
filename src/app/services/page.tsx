import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export const metadata: Metadata = {
  title: "Services | Comply Guide Advisory",
  description:
    "Focused expertise and practical outcomes. Tax advisory, regulatory compliance, and technology-enabled solutions for organisations across Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </>
  );
}
