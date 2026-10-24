"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Battery,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  Percent,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { OFFICIAL_SOLAR_PACKAGES, SolarPackage, PARTNER_BANKS } from "@/data/packages";
import { PillBadge } from "@/components/ui/PillBadge";
import { FadeIn } from "@/components/ui/FadeIn";

interface SolarPackagesProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function SolarPackages({
  id = "packages",
  className = "",
  showTitle = true,
}: SolarPackagesProps) {
  const [selectedId, setSelectedId] = useState<string>("10kw-offgrid");

  const buildWhatsAppUrl = (pkg: SolarPackage) => {
    const text = `Hello Vertex Home Solutions! ☀️
I am interested in your official solar package:

• Package: ${pkg.name} (${pkg.capacityKw} kW)
• Hardware:
  - Inverter: ${pkg.hardware.inverter}
  - Battery: ${pkg.hardware.battery}
  - Panels: ${pkg.hardware.panels}
• Price / Offer: ${pkg.priceDisplay}
• Power Security: 100% Off-Grid (Zero Power Cuts, Zero Bills)
• Warranty: 10 Years Warranty Included

Please arrange a free site inspection and send me the official proposal.`;

    return `https://wa.me/94702271271?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {showTitle && (
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                Official Solar Packages
              </PillBadge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              100% Energy Freedom. <br className="hidden sm:inline" />
              <span className="text-lime-dark">Zero Power Cuts.</span> Zero Electricity Bills.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Explore Vertex Home Solutions&apos; verified Off-Grid and Off-Grid Hybrid packages. 
              Engineered with Tier-1 Jinko solar panels, smart inverters, and high-cycle LiFePO4 battery storage.
            </p>
          </div>

          {/* Partner Bank financing pill */}
          <div className="bg-[#F8F9FA] border border-gray-200/90 p-4 sm:p-5 rounded-2xl shadow-xs max-w-md shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-lime text-charcoal flex items-center justify-center font-bold">
                <Percent className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider">
                0% Credit Card Installments
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-charcoal/80">
              {PARTNER_BANKS.map((bank) => (
                <span
                  key={bank}
                  className="bg-white border border-gray-200 px-2 py-0.5 rounded-md shadow-2xs"
                >
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Grid of 4 Official Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {OFFICIAL_SOLAR_PACKAGES.map((pkg, idx) => {
          const isSelected = selectedId === pkg.id;
          const whatsappUrl = buildWhatsAppUrl(pkg);

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              onClick={() => setSelectedId(pkg.id)}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative cursor-pointer border ${
                pkg.popular
                  ? "bg-white border-lime shadow-xl ring-2 ring-lime/50 hover:shadow-2xl"
                  : "bg-white border-gray-200/90 hover:border-gray-300 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Top Banner Tag */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-charcoal text-lime text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  {!pkg.popular && (
                    <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="ml-auto">
                    <span className="text-xs font-mono font-bold text-muted">
                      {pkg.capacityKw} kW
                    </span>
                  </div>
                </div>

                {/* Package Name */}
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-charcoal leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Pricing Box */}
                <div className="mt-4 p-4 rounded-2xl bg-[#F9FBE7] border border-lime/60">
                  <span className="text-[11px] font-bold text-charcoal/70 uppercase tracking-wider block">
                    Package Investment
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                    <span className="text-2xl font-black text-charcoal tracking-tight">
                      {pkg.priceDisplay}
                    </span>
                    {pkg.originalPriceDisplay && (
                      <span className="text-xs text-gray-400 line-through font-medium">
                        {pkg.originalPriceDisplay}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-lime-dark font-extrabold bg-charcoal px-2 py-0.5 rounded-full inline-block mt-2">
                    100% Off-Grid Battery Autonomy
                  </span>
                </div>

                {/* Included Hardware Specs */}
                <div className="mt-5 space-y-2.5 pt-2 text-xs border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                    <span className="font-semibold text-charcoal leading-snug">
                      {pkg.hardware.inverter}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Battery className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                    <span className="font-semibold text-charcoal leading-snug">
                      {pkg.hardware.battery}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Layers className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                    <span className="font-semibold text-charcoal leading-snug">
                      {pkg.hardware.panels}
                    </span>
                  </div>
                </div>

                {/* Ideal For Note */}
                <div className="mt-4 p-3 rounded-xl bg-surface text-[11px] text-muted leading-relaxed">
                  <span className="font-bold text-charcoal block mb-0.5">
                    Recommended Load:
                  </span>
                  {pkg.idealFor}
                </div>

                {/* Key Benefits List */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                      <span className="leading-tight text-charcoal/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm ${
                    pkg.popular
                      ? "bg-lime hover:bg-lime-hover text-charcoal shadow-md"
                      : "bg-charcoal hover:bg-black text-white"
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Book Free Inspection</span>
                </a>

                <Link
                  href={`/contact?package=${pkg.id}`}
                  className="w-full py-2.5 px-4 rounded-full font-semibold text-[11px] text-charcoal hover:text-black flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Configure with Calculator</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
