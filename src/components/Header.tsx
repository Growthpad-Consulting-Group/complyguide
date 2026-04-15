"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { navLinks } from "@/data/nav";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/assets/images/logo.svg"
          alt="ComplyGuide Advisory"
          width={300}
          height={0}
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center bg-white p-2 rounded-sm shadow-md overflow-hidden">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-3 text-md tracking-wide transition-colors font-body ${
                active
                  ? "bg-brand text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/contact"
          className="ml-8 px-6 py-3 bg-brand text-white text-md font-semibold tracking-wide hover:bg-brand-dark transition-colors font-body"
        >
          Book a Consultation
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Icon
          icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
          width={28}
          height={28}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 text-sm tracking-wide border-b border-gray-100 font-body transition-colors ${
                  active
                    ? "bg-brand text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mx-6 my-4 px-6 py-3 bg-brand text-white text-sm text-center tracking-wide hover:bg-brand-dark transition-colors font-body"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
