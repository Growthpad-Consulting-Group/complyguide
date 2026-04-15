import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DigitalTools from "@/components/DigitalTools";
import CtaBanner from "@/components/CtaBanner";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatYouGet />
      <AboutSection />
      <ServicesSection />
      <DigitalTools />
      <CtaBanner />
      <Industries />
      <Footer />
    </>
  );
}
