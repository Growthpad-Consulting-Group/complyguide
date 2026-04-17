import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Timeline from "@/components/about/Timeline";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import Credentials from "@/components/about/Credentials";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Comply Guide Advisory",
  description:
    "Built for clarity in complex environments. Learn about ComplyGuide Advisory's mission, team, and approach to tax and compliance across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <Timeline />
      <VisionMission />
      <CoreValues />
      <Credentials />
      <CtaBanner />
      <Footer />
    </>
  );
}
