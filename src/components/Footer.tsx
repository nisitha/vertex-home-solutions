"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Sun,
  Award,
  Globe,
  Copy,
  Check,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const solutions = [
    { name: "Residential Solar Systems", href: "/services" },
    { name: "Tesla & Enphase Battery Storage", href: "/services" },
    { name: "EV Smart Charging Integration", href: "/services" },
    { name: "Smart Home Energy Monitoring", href: "/services" },
    { name: "Solar Roof Tile Solutions", href: "/services" },
    { name: "Zero-Down Solar Financing", href: "/services" },
  ];

  const quickLinks = [
    { name: "About Vertex", href: "/about" },
    { name: "Our Installation Process", href: "/services" },
    { name: "Recent Projects & Case Studies", href: "/projects" },
    { name: "Solar Savings Calculator", href: "/contact#calculator" },
    { name: "Engineering Certifications", href: "/about" },
    { name: "Customer Testimonials", href: "/#testimonials" },
    { name: "Contact & Inquiries", href: "/contact" },
  ];

  const contactDetails = [
    {
      id: "phone",
      icon: Phone,
      label: "Hotline & Direct Phone",
      value: "+94 70 227 1271",
      href: "tel:+94702271271",
      copyText: "+94 70 227 1271",
      extraAction: {
        label: "WhatsApp",
        href: "https://wa.me/94702271271",
      },
    },
    {
      id: "email",
      icon: Mail,
      label: "Official Email Inquiries",
      value: "operations@vertexhomeslk.com",
      href: "mailto:operations@vertexhomeslk.com",
      copyText: "operations@vertexhomeslk.com",
    },
    {
      id: "address",
      icon: MapPin,
      label: "Operating Office",
      value: "Vertex Home Solutions, Sri Lanka",
      href: "/contact",
    },
    {
      id: "hours",
      icon: Clock,
      label: "Support Hours",
      value: "Mon – Sat: 8:00 AM – 6:30 PM (24/7 WhatsApp Hotline)",
      href: "https://wa.me/94702271271",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://web.facebook.com/vertexenergylk",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9.197 22H13v-7.66h2.57l.385-2.98H13V9.45c0-.86.24-1.45 1.47-1.45h1.57V5.33c-.27-.03-1.21-.12-2.31-.12-2.29 0-3.86 1.4-3.86 3.97v2.18H7.4v2.98h2.47v7.66z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/94702271271",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.57a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-surface border-t border-gray-200/80 pt-16 lg:pt-24 pb-8 overflow-hidden">
      {/* Subtle background glow accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lime/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top conversion strip: Newsletter / Instant Consultation CTA */}
        <div className="mb-16 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-lime/25 text-charcoal border border-lime/40 mb-3">
              <Sun className="w-3.5 h-3.5 fill-lime-dark text-lime-dark" />
              <span>Clean Energy Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal">
              Ready to eliminate your electric bill?
            </h3>
            <p className="text-sm sm:text-base text-muted mt-2">
              Receive a customized solar system design and 25-year projected ROI
              analysis directly to your inbox within minutes.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px] sm:min-w-[420px]"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-5 py-3.5 rounded-full bg-surface text-charcoal text-sm border border-gray-300/80 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all placeholder:text-muted/70"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-charcoal text-white hover:bg-black font-semibold text-sm transition-all duration-200 shrink-0 group shadow-md"
            >
              <span>Analyze Savings</span>
              <ArrowRight className="w-4 h-4 text-lime group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-gray-200/80">
          {/* Column 1: Company Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-lime shadow-sm">
                <Zap className="w-5 h-5 fill-lime stroke-charcoal stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-charcoal leading-none">
                  Vertex<span className="text-lime-dark">.</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-muted mt-0.5">
                  Home Solutions
                </span>
              </div>
            </Link>

            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Vertex Home Solutions is pioneering the next generation of
              residential energy autonomy. We design, install, and optimize
              tier-1 solar panels, micro-inverters, and smart home battery
              ecosystems with lifetime concierge monitoring.
            </p>

            {/* Badges / Guarantees */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200/80 text-xs font-medium text-charcoal">
                <Shield className="w-3.5 h-3.5 text-lime-dark" />
                <span>25-Yr Full Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200/80 text-xs font-medium text-charcoal">
                <Award className="w-3.5 h-3.5 text-lime-dark" />
                <span>NABCEP Certified</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-3 pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-charcoal-muted hover:text-charcoal hover:border-charcoal hover:bg-lime/20 flex items-center justify-center transition-all duration-200"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solar Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-dark" />
              Solar Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-charcoal transition-colors duration-150 inline-block hover:translate-x-1 transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-dark" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-charcoal transition-colors duration-150 inline-block hover:translate-x-1 transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-dark" />
              Contact & Support
            </h4>
            <ul className="space-y-4">
              {contactDetails.map((contact) => {
                const Icon = contact.icon;
                const isCopied = copiedKey === contact.id;

                return (
                  <li key={contact.id} className="flex items-start gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200/80 flex items-center justify-center shrink-0 text-charcoal mt-0.5 shadow-xs">
                      <Icon className="w-4 h-4 text-lime-dark" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-muted">
                          {contact.label}
                        </p>
                        {contact.copyText && (
                          <button
                            type="button"
                            onClick={() => handleCopy(contact.id, contact.copyText)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted hover:text-charcoal px-2 py-0.5 rounded-full bg-white border border-gray-200/70 hover:border-gray-300 transition-colors"
                            title="Copy to clipboard"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-700">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <a
                          href={contact.href}
                          className="text-charcoal font-bold hover:text-black hover:underline leading-snug break-all text-xs sm:text-sm"
                        >
                          {contact.value}
                        </a>

                        {contact.extraAction && (
                          <a
                            href={contact.extraAction.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-[11px] border border-[#25D366]/30 transition-colors"
                          >
                            <span>WhatsApp ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar: Copyright, Legal & Credentials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {currentYear} Vertex Home Solutions. All rights reserved.</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <Link href="/about" className="hover:text-charcoal transition-colors">
              About Vertex
            </Link>
            <Link href="/services" className="hover:text-charcoal transition-colors">
              Solar Packages
            </Link>
            <Link href="/contact" className="hover:text-charcoal transition-colors">
              Customer Support
            </Link>
          </div>

          <div className="flex items-center gap-2 text-charcoal font-medium">
            <Globe className="w-3.5 h-3.5 text-lime-dark" />
            <span>Vertex Clean Energy Network • Sri Lanka</span>
          </div>
        </div>

        {/* Infinite Looping 'VERTEX HOME SOLUTIONS' Watermark Marquee */}
        <div
          aria-hidden="true"
          className="relative mt-8 pt-6 pb-2 w-full overflow-hidden select-none pointer-events-none"
        >
          <motion.div
            className="flex whitespace-nowrap w-fit will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
          >
            <div className="flex items-center shrink-0">
              <span className="text-[12vw] sm:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-charcoal/[0.04] leading-none uppercase font-sans pr-12">
                VERTEX HOME SOLUTIONS
              </span>
              <span className="text-[6vw] text-lime/40 pr-12 select-none">•</span>
              <span className="text-[12vw] sm:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-charcoal/[0.04] leading-none uppercase font-sans pr-12">
                VERTEX HOME SOLUTIONS
              </span>
              <span className="text-[6vw] text-lime/40 pr-12 select-none">•</span>
            </div>
            <div className="flex items-center shrink-0">
              <span className="text-[12vw] sm:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-charcoal/[0.04] leading-none uppercase font-sans pr-12">
                VERTEX HOME SOLUTIONS
              </span>
              <span className="text-[6vw] text-lime/40 pr-12 select-none">•</span>
              <span className="text-[12vw] sm:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-charcoal/[0.04] leading-none uppercase font-sans pr-12">
                VERTEX HOME SOLUTIONS
              </span>
              <span className="text-[6vw] text-lime/40 pr-12 select-none">•</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
