import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DigitalToolsHero from "@/components/digital-tools/DigitalToolsHero";
import DigitalPlatform from "@/components/digital-tools/DigitalPlatform";

export const metadata: Metadata = {
  title: "Digital Tools | Comply Guide Advisory",
  description:
    "Smart tools for modern tax and compliance. Automate filings, track obligations in real time, and reduce compliance risk.",
};

export default function DigitalToolsPage() {
  return (
    <>
      <Header />
      <DigitalToolsHero />
      <DigitalPlatform />
      <Footer />
    </>
  );
}
