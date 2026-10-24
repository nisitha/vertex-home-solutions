"use client";

import React from "react";
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
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SolarPackages } from "@/components/SolarPackages";

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
  const serviceBreakdowns = [
    {
      title: "Residential Off-Grid Solar Installation",
      subtitle: "Turnkey Clean Electricity with Zero Power Cuts",
      desc: "Our certified solar engineers design custom rooftop solar arrays that complement your architecture while delivering complete energy independence. We manage complete roof mounting, Off-Grid safety switchover gear, and battery commissioning.",
      icon: Sun,
      image: IMAGES.residential,
      highlights: [
        "Tier-1 Monocrystalline Jinko solar panels (22.8% efficiency)",
        "Zero-leak flash mounting brackets with hurricane ratings",
        "Off-Grid and Hybrid inverters with sub-second switchover",
        "100% immunity from utility power cuts and blackouts",
      ],
    },
    {
      title: "Commercial & Industrial Microgrids",
      subtitle: "Enterprise Clean Power & ESG Optimization",
      desc: "We deploy heavy-duty commercial Off-Grid photovoltaic systems for office buildings, warehouses, schools, and industrial facilities. Slash daytime operating expenditures while locking in predictable energy costs for the next three decades.",
      icon: Building2,
      image: IMAGES.commercial,
      highlights: [
        "Dramatically reduces daytime and peak commercial utility expenditures",
        "Accelerated commercial depreciation benefits",
        "0% Commercial financing & structured bank installment models",
        "Dedicated SCADA telemetry monitoring dashboard",
      ],
    },
    {
      title: "Hybrid & Off-Grid Battery Systems",
      subtitle: "Blackout-Proof Lithium Iron Phosphate Storage",
      desc: "Never worry about utility grid failures, heatwaves, or power disruptions again. Vertex integrates high-density LiFePO4 battery banks (including Dyness high-performance storage) that instantly power your HVAC, kitchen appliances, and medical equipment.",
      icon: BatteryCharging,
      image: IMAGES.battery,
      highlights: [
        "10,000+ deep charge/discharge cycles (15+ year lifespan)",
        "Sub-second automatic transfer switch (ATS)",
        "Peak load shaving and uninterrupted whole-home power",
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
      subtitle: "Guaranteed Production for 10-25 Years",
      desc: "Our automated monitoring portal tracks power generation down to the string level. If a tree branch casts an unexpected shadow, or an inverter requires firmware adjustments, our operations center detects it immediately.",
      icon: Activity,
      image: IMAGES.maintenance,
      highlights: [
        "24/7 continuous cloud telemetry alerts",
        "Annual thermal UAV drone imaging inspections",
        "Rapid-dispatch certified service technicians",
        "Zero-hassle manufacturer warranty claim handling",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal font-sans selection:bg-lime selection:text-charcoal">
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
              100% Off-Grid Solar for{" "}
              <span className="relative inline-block px-3 py-1 bg-lime text-charcoal rounded-2xl shadow-sm rotate-[-1deg]">
                every home
              </span>{" "}
              and enterprise.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Explore our transparent turnkey packages and commercial microgrid
              capabilities. Designed with Tier-1 Jinko bifacial panels, intelligent
              hybrid storage, and 10-year comprehensive warranties.
            </p>
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* SOLAR PACKAGE CARDS                                                       */}
        {/* ========================================================================= */}
        <SolarPackages id="packages" showTitle={false} />

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
              From residential rooftop surveys to commercial Off-Grid microgrids,
              Vertex provides complete end-to-end management.
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
                Send us your monthly electricity bill and let our engineers
                design a tailored 100% Off-Grid solar quotation and free site inspection.
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
