import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-20">
      {/* CTA block */}
      <div className="mx-6 md:mx-16">
        <div className="bg-brand px-10 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-[#111] uppercase leading-tight max-w-lg">
              Ready to Reduce Risk and Move With Confidence?
            </h2>
            <p className="text-xl font-body text-[#111] max-w-sm leading-relaxed mx-auto md:mx-0">
              Speak to a compliance expert and get clear next steps for your
              business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white text-md font-body tracking-wide hover:bg-gray-800 transition-colors text-center"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-[#111] text-[#111] text-md font-body tracking-wide hover:bg-white/10 transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="px-6 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 — logo + tagline */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="Comply Guide Advisory"
                width={300}
                height={0}
              />
            </Link>
            <p className="text-lg font-body text-gray-100 leading-relaxed max-w-xs">
              Tax intelligence, compliance strategy &amp; regulatory innovation
              built for Africa.
            </p>
          </div>

          {/* Col 2 — nav links */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-display tracking-widest text-brand uppercase mb-2">
              Company
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-body text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — contact */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-display tracking-widest text-brand uppercase mb-2">
              Contact
            </p>
            <a
              href="mailto:info@complyguideadvisory.com"
              className="text-md font-body text-gray-300 hover:text-white transition-colors"
            >
              info@complyguideadvisory.com
            </a>
            <p className="text-md font-body text-gray-100 leading-relaxed">
              6th Floor, The Westwood,<br />
              Ring Road Westlands, Nairobi
            </p>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-md font-body text-gray-100">
            &copy; {new Date().getFullYear()} ComplyGuide Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
