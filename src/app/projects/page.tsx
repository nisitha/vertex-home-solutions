"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  MapPin,
  Zap,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Filter,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const PROJECTS = [
  {
    id: 1,
    title: "Colombo 07 Executive Residence",
    category: "Residential",
    location: "Colombo 07, Western Province",
    capacity: "5kW Off-Grid Hybrid System",
    battery: "5kW Dyness LiFePO4 Storage",
    carbonOffset: "6.8 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Turnkey 5kW Hybrid Inverter setup paired with 8x 640W Jinko solar panels and 5kW Dyness battery storage. Delivers 100% blackout immunity and zero electricity bills for luxury residential living.",
    stats: {
      investment: "LKR 1.72M",
      annualGeneration: "7,440 kWh",
      monthlySavings: "~LKR 48,000",
      paybackPeriod: "3.0 Years",
    },
  },
  {
    id: 2,
    title: "Biyagama Logistics Distribution Hub",
    category: "Commercial",
    location: "Biyagama Export Zone, Western Province",
    capacity: "40kW Off-Grid Commercial Microgrid",
    battery: "60 kWh Industrial Battery Bank",
    carbonOffset: "48.5 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dual commercial inverters coupled with industrial high-capacity storage banks, completely eliminating daytime peak CEB commercial tariffs for a 35,000 sq ft temperature-controlled export warehouse.",
    stats: {
      investment: "LKR 5.91M",
      annualGeneration: "58,000 kWh",
      monthlySavings: "~LKR 370,000",
      paybackPeriod: "2.8 Years",
    },
  },
  {
    id: 3,
    title: "Kandy Hill Country Eco-Estate",
    category: "Battery Storage",
    location: "Kandy, Central Province",
    capacity: "10kW Off-Grid Solar Package",
    battery: "16kW LiFePO4 High-Cycle Battery",
    carbonOffset: "12.4 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description:
      "14x 640W Jinko panels paired with a 10kW hybrid inverter and 16kW LiFePO4 storage bank, ensuring continuous autonomous power across frequent mountainous weather and grid blackouts.",
    stats: {
      investment: "LKR 2.35M",
      annualGeneration: "15,000 kWh",
      monthlySavings: "~LKR 85,000",
      paybackPeriod: "2.3 Years",
    },
  },
  {
    id: 4,
    title: "Battaramulla Modern Family Villa",
    category: "Residential",
    location: "Battaramulla, Western Province",
    capacity: "5kW Off-Grid Solar Package",
    battery: "5kW Lithium Storage Battery",
    carbonOffset: "6.4 Tons CO₂ / year",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "8x 740W Jinko panels with 5kW inverter and 5kW battery. Powers inverter air conditioners, water pumps, refrigerators, and remote work setup with zero monthly electricity bills.",
    stats: {
      investment: "LKR 1.35M",
      annualGeneration: "7,200 kWh",
      monthlySavings: "~LKR 42,000",
      paybackPeriod: "2.7 Years",
    },
  },
  {
    id: 5,
    title: "Negombo Coastal Boutique Hotel",
    category: "Commercial",
    location: "Negombo, Western Province",
    capacity: "20kW Off-Grid Commercial Package",
    battery: "30 kWh Modular Battery Storage",
    carbonOffset: "26.8 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Commercial-grade rooftop array eliminating daytime commercial air conditioning expenses for 16 luxury guest suites, commercial kitchen refrigeration, and pool circulation pumps.",
    stats: {
      investment: "LKR 2.95M",
      annualGeneration: "29,200 kWh",
      monthlySavings: "~LKR 190,000",
      paybackPeriod: "2.6 Years",
    },
  },
  {
    id: 6,
    title: "Kurunegala Commercial Supermarket",
    category: "Battery Storage",
    location: "Kurunegala, North Western Province",
    capacity: "20kW Commercial Hybrid System",
    battery: "32 kWh High-Cycle LiFePO4 Bank",
    carbonOffset: "25.2 Tons CO₂ / year",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "Heavy-duty commercial hybrid installation preventing chiller compressor failure and protecting perishable food inventory against unpredictable provincial power outages.",
    stats: {
      investment: "LKR 2.95M",
      annualGeneration: "28,800 kWh",
      monthlySavings: "~LKR 185,000",
      paybackPeriod: "2.6 Years",
    },
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Battery Storage"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-charcoal flex flex-col relative selection:bg-lime selection:text-charcoal">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-14">
          <FadeIn className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                Commissioned Portfolio
              </PillBadge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tightest text-charcoal leading-tight">
              Proven solar excellence,{" "}
              <span className="relative inline-block px-3 py-1 bg-lime text-charcoal rounded-2xl shadow-sm rotate-[-1deg]">
                installed
              </span>{" "}
              across Sri Lanka.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Explore our verified residential, commercial, and off-grid battery
              installations delivering guaranteed kilowatt output, zero power cuts, and lifelong
              savings.
            </p>
          </FadeIn>

          {/* Stats Bar */}
          <FadeIn delay={0.2} className="mt-14 bg-[#F8F9FA] border border-gray-200/80 rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-sm">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Off-Grid Installations
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={120} prefix="LKR " suffix="M+" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Saved in Electricity Bills
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={18400} suffix=" T" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Annual CO₂ Tons Offset
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block text-lime-dark bg-charcoal rounded-2xl py-1 inline-block px-3">
                <AnimatedCounter value={99.8} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Guaranteed Uptime Rating
              </span>
            </div>
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* FILTERABLE PROJECT GALLERY                                                */}
        {/* ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-charcoal text-white shadow-md scale-105"
                      : "bg-[#F8F9FA] text-muted hover:text-charcoal hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid with Animated Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-lime transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header with Tags */}
                    <div className="relative h-64 w-full bg-charcoal overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="backdrop-blur-md bg-white/85 text-charcoal border border-white/60 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom Info on Image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-lime" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1 text-white/80">
                          <Calendar className="w-3.5 h-3.5 text-lime" />
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-bold tracking-tight text-charcoal group-hover:text-black transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Specs Pills */}
                      <div className="mt-5 space-y-2 pt-2 border-t border-gray-100 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface">
                          <span className="text-muted flex items-center gap-1.5 font-medium">
                            <Zap className="w-4 h-4 text-lime-dark" /> System Capacity
                          </span>
                          <span className="font-bold text-charcoal">{project.capacity}</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface">
                          <span className="text-muted flex items-center gap-1.5 font-medium">
                            <Leaf className="w-4 h-4 text-emerald-600" /> Carbon Offset
                          </span>
                          <span className="font-bold text-charcoal">{project.carbonOffset}</span>
                        </div>
                      </div>

                      {/* Real LKR Investment & Savings Metrics */}
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-[#F9FBE7] p-2 rounded-xl border border-lime/50 flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-charcoal/70 uppercase tracking-wider block">Investment</span>
                          <span className="font-extrabold text-charcoal text-[11px] sm:text-xs mt-0.5">{project.stats.investment}</span>
                        </div>
                        <div className="bg-[#F9FBE7] p-2 rounded-xl border border-lime/50 flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-charcoal/70 uppercase tracking-wider block">Savings</span>
                          <span className="font-extrabold text-charcoal text-[11px] sm:text-xs mt-0.5">{project.stats.monthlySavings}/mo</span>
                        </div>
                        <div className="bg-[#F9FBE7] p-2 rounded-xl border border-lime/50 flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-charcoal/70 uppercase tracking-wider block">Payback</span>
                          <span className="font-extrabold text-charcoal text-[11px] sm:text-xs mt-0.5">{project.stats.paybackPeriod}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="w-full py-3 px-4 rounded-full bg-surface hover:bg-charcoal hover:text-white text-charcoal border border-gray-200/90 font-semibold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      <span>Request Similar Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* FAST ESTIMATE CALLOUT                                                     */}
        {/* ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeIn className="bg-charcoal text-white rounded-4xl p-8 sm:p-14 border border-charcoal relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <PillBadge variant="dark" dot={true} className="mb-3">
                Satellite Feasibility
              </PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Want to see what solar looks like on your roof?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                Our 3D solar modeling team renders an exact photorealistic panel layout
                using satellite roof measurements for your property.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-sm bg-lime text-charcoal hover:bg-lime-hover shadow-lg transition-all shrink-0 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Get 3D Roof Model Free</span>
              <ArrowRight className="w-4 h-4 text-charcoal" />
            </Link>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
