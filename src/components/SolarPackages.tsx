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
    <section
      id={id}
      className={`py-24 sm:py-32 bg-[#0E1013] text-white relative overflow-hidden border-y border-white/[0.08] selection:bg-lime selection:text-charcoal ${className}`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle radial dot matrix background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C8F169 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="mb-4">
                <PillBadge variant="lime" dot={true}>
                  Official Solar Packages
                </PillBadge>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                100% Energy Freedom. <br className="hidden sm:inline" />
                <span className="text-lime">Zero Power Cuts.</span> Zero Electricity Bills.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Explore Vertex Home Solutions&apos; verified Off-Grid and Off-Grid Hybrid packages. 
                Engineered with Tier-1 Jinko solar panels, smart inverters, and high-cycle LiFePO4 battery storage.
              </p>
            </div>

            {/* Partner Bank financing pill */}
            <div className="bg-white/[0.04] border border-white/10 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-xl max-w-md shrink-0">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-lime text-charcoal flex items-center justify-center font-bold shadow-md shadow-lime/20 shrink-0">
                  <Percent className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    0% Credit Card Installments
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    Flexible monthly plans with leading partner banks
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-gray-200">
                {PARTNER_BANKS.map((bank) => (
                  <span
                    key={bank}
                    className="bg-white/[0.08] hover:bg-lime/20 hover:text-white border border-white/10 px-2.5 py-1 rounded-lg transition-colors shadow-2xs"
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
                    ? "bg-[#181B20] border-lime shadow-[0_0_40px_rgba(200,241,105,0.18)] ring-1 ring-lime/50 hover:shadow-[0_0_50px_rgba(200,241,105,0.28)]"
                    : "bg-[#131518] border-white/10 hover:border-white/25 shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Top Banner Tag for Popular/Offer Packages */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-lime text-charcoal text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg shadow-lime/30 whitespace-nowrap border border-white/40">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    {!pkg.popular && (
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {pkg.badge}
                      </span>
                    )}
                    <div className="ml-auto">
                      <span className="text-xs font-mono font-bold text-lime bg-lime/10 border border-lime/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {pkg.capacityKw} kW
                      </span>
                    </div>
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-lime/40 transition-colors">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Package Investment
                    </span>
                    <div className="flex items-baseline gap-2 mt-1 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {pkg.priceDisplay}
                      </span>
                      {pkg.originalPriceDisplay && (
                        <span className="text-xs text-gray-500 line-through font-medium">
                          {pkg.originalPriceDisplay}
                        </span>
                      )}
                    </div>
                    <div className="mt-2.5">
                      <span className="text-[10px] text-charcoal font-black bg-lime px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-charcoal" />
                        100% Off-Grid Autonomy
                      </span>
                    </div>
                  </div>

                  {/* Included Hardware Specs */}
                  <div className="mt-5 space-y-2.5 pt-2 text-xs border-t border-white/10">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-lime" />
                      </div>
                      <span className="font-semibold text-gray-200 leading-snug">
                        {pkg.hardware.inverter}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Battery className="w-3 h-3 text-lime" />
                      </div>
                      <span className="font-semibold text-gray-200 leading-snug">
                        {pkg.hardware.battery}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-3 h-3 text-lime" />
                      </div>
                      <span className="font-semibold text-gray-200 leading-snug">
                        {pkg.hardware.panels}
                      </span>
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-gray-300 leading-relaxed">
                    <span className="font-bold text-white block mb-0.5">
                      Recommended Load:
                    </span>
                    {pkg.idealFor}
                  </div>

                  {/* Key Benefits List */}
                  <ul className="mt-4 space-y-2 text-xs text-gray-300">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                        <span className="leading-tight text-gray-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full font-black text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md ${
                      pkg.popular
                        ? "bg-lime hover:bg-lime-hover text-charcoal shadow-lime/20"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-lime/50"
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Book Free Inspection</span>
                  </a>

                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className="w-full py-2.5 px-4 rounded-full font-semibold text-[11px] text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Configure with Calculator</span>
                    <ArrowRight className="w-3 h-3 text-lime" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
