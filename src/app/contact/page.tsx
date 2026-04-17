import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Comply Guide Advisory",
  description:
    "Get in touch with ComplyGuide Advisory. Share what you need help with and we'll respond with clear next steps.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
