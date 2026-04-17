"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    service: "Tax advisory",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", organisation: "", service: "Tax advisory", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Left — form (2/3) */}
        <div className="md:col-span-2 border border-gray-400 p-8 md:p-10" id="contact-form">
          <p className="text-lg font-display tracking-[0.2em] text-brand uppercase mb-2">
            Send Us a Message
          </p>
          <p className="text-lg font-body text-gray-600 mb-8">
            Tell us a little about your needs and we&apos;ll respond promptly.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-start gap-4 py-10">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                <Icon icon="solar:check-circle-linear" width={28} className="text-brand" />
              </div>
              <h3 className="text-xl font-body font-semibold text-gray-900">Message sent!</h3>
              <p className="text-base font-body text-gray-600">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-body text-brand hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-md font-body text-gray-900">Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border border-gray-300 px-4 py-3 text-sm font-body text-gray-900 placeholder-gray-400 outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-md font-body text-gray-900">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="border border-gray-300 px-4 py-3 text-sm font-body text-gray-900 placeholder-gray-400 outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              {/* Organisation */}
              <div className="flex flex-col gap-2">
                <label className="text-md font-body text-gray-900">Organisation</label>
                <input
                  type="text"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleChange}
                  placeholder="Company / Institution"
                  className="border border-gray-300 px-4 py-3 text-sm font-body text-gray-900 placeholder-gray-400 outline-none focus:border-brand transition-colors"
                />
              </div>

              {/* How can we help */}
              <div className="flex flex-col gap-2">
                <label className="text-md font-body text-gray-900">How can we help?</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-3 text-sm font-body text-gray-900 outline-none focus:border-brand transition-colors appearance-none bg-white"
                >
                  <option>Tax advisory</option>
                  <option>Regulatory compliance</option>
                  <option>Corporate structuring</option>
                  <option>Digital tools</option>
                  <option>Training & capacity building</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-md font-body text-gray-900">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Briefly describe your request"
                  required
                  className="border border-gray-300 px-4 py-3 text-sm font-body text-gray-900 placeholder-gray-400 outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-sm font-body text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start px-8 py-3 bg-brand text-white text-md font-body! tracking-wide hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Submit request"}
              </button>
            </form>
          )}
        </div>

        {/* Right — info cards (1/3) */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-900 px-6 py-6 flex flex-col gap-2 transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-body! font-semibold text-brand">Email</h3>
            <a
              href="mailto:info@complyguide.co.ke"
              className="text-lg font-body text-gray-300 hover:text-white transition-colors"
            >
              info@complyguide.co.ke
            </a>
          </div>

          <div className="bg-gray-900 px-6 py-6 flex flex-col gap-2 transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-body! font-semibold text-brand">Office</h3>
            <p className="text-lg font-body text-gray-300 leading-relaxed">
              6th Floor, The Westwood<br />
              Ring Road Westlands, Nairobi
            </p>
          </div>

          <div className="bg-gray-900 px-6 py-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-body! font-semibold text-brand">Follow us</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-brand transition-colors">
                <Icon icon="mdi:facebook" width={36} height={36} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-brand transition-colors">
                <Icon icon="mdi:instagram" width={36} height={36} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-brand transition-colors">
                <Icon icon="mdi:linkedin" width={36} height={36} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
