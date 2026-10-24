"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  Sun,
  BatteryCharging,
  Zap,
  Building2,
  Car,
  Activity,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowUpRight,
  Layers,
  Ruler,
  TrendingDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const IMAGES = {
  heroBanner:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2400&q=85",
  residential:
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  commercial:
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
  battery:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  ev:
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
  maintenance:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
};

export default function ServicesPage() {
  const [selectedTier, setSelectedTier] = useState<string>("5kW");

  const packages = [
    {
      id: "3kW",
      name: "3 kW Starter Pack",
      badge: "Essential Autonomy",
      popular: false,
      panels: "7x 430W Tier-1 Panels",
      generation: "360 – 420 kWh / mo",
      roofSpace: "180 sq. ft.",
      savings: "$80 – $120 / month",
      annualSavings: "$1,200+ / yr",
      idealFor: "1-2 Bedroom residences, lighting, refrigeration & modern laptops",
      features: [
        "Tier-1 Monocrystalline Bifacial Cells",
        "Enphase Microinverter System",
        "Complimentary Roof Azimuth Survey",
        "25-Year Production Guarantee",
        "Real-Time Mobile Energy App",
      ],
    },
    {
      id: "5kW",
      name: "5 kW Standard Home",
      badge: "Most Popular",
      popular: true,
      panels: "12x 430W Tier-1 Panels",
      generation: "620 – 740 kWh / mo",
      roofSpace: "310 sq. ft.",
      savings: "$150 – $220 / month",
      annualSavings: "$2,200+ / yr",
      idealFor: "2-3 Bedroom medium households, inverter ACs, dishwashers & home offices",
      features: [
        "Everything in 3 kW Starter Pack",
        "High-Heat Performance Coefficient",
        "Zero-Down Fixed-Rate Solar Financing",
        "Full Utility Net-Metering Permitting",
        "Lifetime Vertex Concierge Support",
      ],
    },
    {
      id: "10kW",
      name: "10 kW Executive Array",
      badge: "Maximum Value",
      popular: false,
      panels: "24x 430W Tier-1 Panels",
      generation: "1,280 – 1,520 kWh / mo",
      roofSpace: "620 sq. ft.",
      savings: "$290 – $410 / month",
      annualSavings: "$4,200+ / yr",
      idealFor: "4-5 Bedroom large homes, multiple HVAC zones, heavy EV charging loads",
      features: [
        "Everything in 5 kW Standard",
        "Dual EV Charger Interconnect Ready",
        "Tesla Powerwall / LiFePO4 Battery Sync",
        "Annual UAV Thermographic Health Check",
        "Priority 2-Hour Emergency Response",
      ],
    },
    {
      id: "15kW",
      name: "15 kW Estate & Microgrid",
      badge: "Zero-Grid Autonomy",
      popular: false,
      panels: "35x 430W Tier-1 Panels",
      generation: "1,920 – 2,280 kWh / mo",
      roofSpace: "920 sq. ft.",
      savings: "$440 – $610 / month",
      annualSavings: "$6,200+ / yr",
      idealFor: "Luxury estates, heated swimming pools, commercial studios & large families",
      features: [
        "Bespoke Architectural Racking",
        "Triple-Phase Industrial Hybrid Inverters",
        "Sub-Second Blackout Automation",
        "Executive VIP Engineering Concierge",
        "Lifetime Zero-Deductible Warranty",
      ],
    },
  ];

  const serviceBreakdowns = [
    {
      title: "Residential Solar Installation",
      subtitle: "Turnkey Clean Electricity for Your Roof",
      desc: "Our master electricians design custom solar configurations that complement your architectural rooflines while squeezing every kilowatt of energy from daylight. We manage all municipal HOA guidelines, utility net-metering interconnection, and engineering permits.",
      icon: Sun,
      image: IMAGES.residential,
      highlights: [
        "Tier-1 Monocrystalline bifacial panels (22.8% efficiency)",
        "Zero-leak flash mounting brackets with hurricane ratings",
        "Independent microinverter architecture avoiding shadow loss",
        "Instant net-metering synchronization with local utilities",
      ],
    },
    {
      title: "Commercial & Industrial Microgrids",
      subtitle: "Enterprise Clean Power & ESG Optimization",
      desc: "We deploy utility-grade rooftop, carport, and ground-mounted photovoltaic systems for office buildings, warehouses, schools, and industrial facilities. Slash daytime operating expenditures while locking in predictable energy costs for the next three decades.",
      icon: Building2,
      image: IMAGES.commercial,
      highlights: [
        "30% Federal Investment Tax Credit (ITC) eligibility",
        "Accelerated MACRS depreciation benefits",
        "Power Purchase Agreement (PPA) & $0 capital outlay models",
        "Dedicated SCADA utility monitoring dashboard",
      ],
    },
    {
      title: "Hybrid & Off-Grid Battery Systems",
      subtitle: "Blackout-Proof Lithium Iron Phosphate Storage",
      desc: "Never worry about utility grid failures, heatwaves, or winter storms again. Vertex integrates high-density LiFePO4 battery banks that instantly power your HVAC, kitchen appliances, and medical equipment during unexpected outages.",
      icon: BatteryCharging,
      image: IMAGES.battery,
      highlights: [
        "10,000+ deep charge/discharge cycles (15+ year lifespan)",
        "Sub-second automatic transfer switch (ATS)",
        "Time-of-Use (TOU) peak rate shaving arbitrage",
        "Non-toxic, chemically stable fireproof battery cells",
      ],
    },
    {
      title: "Smart EV Charger Integration",
      subtitle: "Power Your Commute with 100% Free Sunshine",
      desc: "Level-2 high-speed EV chargers linked directly to your rooftop solar array. Our intelligent software schedules charging cycles when solar production is at its midday peak, effectively allowing you to drive on 100% free sunshine.",
      icon: Car,
      image: IMAGES.ev,
      highlights: [
        "Up to 48A / 11.5 kW high-speed charging speeds",
        "Universal J1772 & NACS (Tesla) connector compatibility",
        "Solar-only charging algorithms preventing grid draw",
        "Automated smartphone tracking of fuel cost savings",
      ],
    },
    {
      title: "Preventative Maintenance & Telemetry",
      subtitle: "Proactive 24/7 Diagnostics & Lifetime Care",
      desc: "Vertex installs continuous telemetry sensors on all inverters and battery strings. Our Austin network operations center spots minuscule voltage drops or micro-cracks before they impact your annual power production.",
      icon: Activity,
      image: IMAGES.maintenance,
      highlights: [
        "24/7 automated telemetry monitoring & fault detection",
        "Annual drone-assisted thermal infrared panel diagnostics",
        "Hydrophobic panel washing and debris clearing",
        "Rapid 24-hour on-site technician dispatch guarantee",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-charcoal flex flex-col relative selection:bg-lime selection:text-charcoal">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <FadeIn className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                Solar Services & Packages
              </PillBadge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tightest text-charcoal leading-tight">
              Engineered solar systems for{" "}
              <span className="relative inline-block px-3 py-1 bg-lime text-charcoal rounded-2xl shadow-sm rotate-[-1deg]">
                every home
              </span>{" "}
              and enterprise.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Explore our transparent turnkey packages and commercial microgrid
              capabilities. Designed with Tier-1 bifacial panels, intelligent
              hybrid storage, and 25-year production guarantees.
            </p>
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* SOLAR PACKAGE CARDS (3kW, 5kW, 10kW, 15kW)                               */}
        {/* ========================================================================= */}
        <section id="packages" className="py-20 bg-surface/60 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <PillBadge variant="neutral" className="mb-3">
                  Turnkey Solar Packages
                </PillBadge>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal">
                  Find the ideal capacity for your roof
                </h2>
              </div>
              <p className="text-muted text-sm sm:text-base max-w-md mt-4 md:mt-0">
                All packages include Tier-1 monocrystalline panels, certified
                installation, HOA permitting, and 25-year warranty.
              </p>
            </FadeIn>

            {/* Grid of 4 Solar Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {packages.map((pkg, idx) => {
                const isSelected = selectedTier === pkg.id;
                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => setSelectedTier(pkg.id)}
                    className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative cursor-pointer border hover:scale-[1.02] active:scale-[0.99] ${
                      pkg.popular
                        ? "bg-white border-lime-dark shadow-xl ring-2 ring-lime hover:shadow-2xl"
                        : "bg-white border-gray-200/90 hover:border-gray-300 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {/* Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-charcoal text-lime text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                          {pkg.badge}
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            isSelected ? "bg-lime-dark animate-pulse" : "bg-gray-300"
                          }`}
                        />
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-charcoal">
                        {pkg.name}
                      </h3>

                      {/* Financial Payoff highlight */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#F9FBE7] border border-lime/50">
                        <span className="text-xs font-semibold text-charcoal/80 block">
                          Estimated Monthly Savings
                        </span>
                        <span className="text-2xl font-extrabold text-charcoal block mt-0.5">
                          {pkg.savings}
                        </span>
                        <span className="text-[11px] text-lime-dark font-bold bg-charcoal px-2 py-0.5 rounded-full inline-block mt-2">
                          {pkg.annualSavings}
                        </span>
                      </div>

                      {/* Specs List */}
                      <div className="mt-6 space-y-3 pt-2 text-xs text-charcoal border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-muted flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-lime-dark" /> Panels
                          </span>
                          <span className="font-bold">{pkg.panels}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-lime-dark" /> Monthly Output
                          </span>
                          <span className="font-bold">{pkg.generation}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted flex items-center gap-1.5">
                            <Ruler className="w-3.5 h-3.5 text-lime-dark" /> Roof Space
                          </span>
                          <span className="font-bold">{pkg.roofSpace}</span>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="mt-5 p-3 rounded-xl bg-surface text-xs text-muted leading-relaxed">
                        <span className="font-bold text-charcoal block mb-0.5">
                          Ideal Load:
                        </span>
                        {pkg.idealFor}
                      </div>

                      {/* Features Checkmarks */}
                      <ul className="mt-5 space-y-2 text-xs text-charcoal">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        href={`/contact?package=${pkg.id}`}
                        className={`w-full py-3.5 px-4 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all ${
                          pkg.popular
                            ? "bg-lime hover:bg-lime-hover text-charcoal shadow-md"
                            : "bg-surface hover:bg-charcoal hover:text-white text-charcoal border border-gray-200"
                        }`}
                      >
                        <span>Select {pkg.id} Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DETAILED SERVICE BREAKDOWNS (5 CORE OFFERINGS)                            */}
        {/* ========================================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeIn className="max-w-3xl mb-16">
            <PillBadge variant="lime" className="mb-3">
              Full-Spectrum Engineering
            </PillBadge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
              Detailed Breakdown of All Solar Services
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg">
              From residential rooftop surveys to commercial microgrid
              interconnections, Vertex provides complete end-to-end management.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {serviceBreakdowns.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`bg-[#F8F9FA] rounded-4xl p-8 sm:p-12 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 flex items-center justify-center text-charcoal mb-6 shadow-sm">
                      <Icon className="w-6 h-6 text-lime-dark" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-charcoal leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal font-medium">
                          <Check className="w-4 h-4 text-lime-dark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-xs hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md group"
                      >
                        <span>Schedule Technical Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5 text-lime group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[400px] w-full shadow-md border border-gray-200/80 bg-charcoal group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-5 left-5 z-10 text-white">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-lime block">
                          Certified Deployment
                        </span>
                        <span className="text-base font-bold">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAST QUOTE CTA BANNER                                                     */}
        {/* ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeIn className="bg-lime text-charcoal rounded-4xl p-8 sm:p-14 border border-lime-dark relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <PillBadge variant="dark" dot={true} className="mb-3">
                Zero-Obligation Assessment
              </PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Not sure which package fits your roof?
              </h2>
              <p className="text-charcoal/80 text-sm sm:text-base mt-3">
                Send us your utility bill and let our satellite modeling software
                generate a 25-year production and payback report for your exact address.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-bold text-sm bg-charcoal text-white hover:bg-black shadow-lg transition-all shrink-0 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Get Free Solar Assessment</span>
              <ArrowRight className="w-4 h-4 text-lime" />
            </Link>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
