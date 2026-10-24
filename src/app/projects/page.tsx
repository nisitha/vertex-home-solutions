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
    title: "The Travis Hills Residence",
    category: "Residential",
    location: "Austin, Texas",
    capacity: "12.4 kW Solar Array",
    battery: "27 kWh Tesla Powerwall Storage",
    carbonOffset: "9.2 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Full rooftop integration featuring 28 all-black monocrystalline bifacial panels with dual home battery backup for 100% off-grid reliability.",
    stats: {
      annualGeneration: "16,800 kWh",
      monthlySavings: "$310",
      paybackPeriod: "4.8 Years",
    },
  },
  {
    id: 2,
    title: "Apex Logistics Distribution Hub",
    category: "Commercial",
    location: "Dallas, Texas",
    capacity: "450 kW Commercial Rooftop",
    battery: "120 kWh Industrial Peak Shaving",
    carbonOffset: "320 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Industrial microgrid lowering peak demand charges by 62% for a 120,000 sq ft temperature-controlled logistics center.",
    stats: {
      annualGeneration: "620,000 kWh",
      monthlySavings: "$8,400",
      paybackPeriod: "3.9 Years",
    },
  },
  {
    id: 3,
    title: "Hill Country Ranch & Microgrid",
    category: "Battery Storage",
    location: "Fredericksburg, Texas",
    capacity: "24.8 kW Ground Array",
    battery: "60 kWh LiFePO4 Energy Bank",
    carbonOffset: "18.4 Tons CO₂ / year",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Complete autonomous ranch energy system capable of operating 7+ consecutive days completely disconnected from the ERCOT utility grid.",
    stats: {
      annualGeneration: "36,400 kWh",
      monthlySavings: "$580",
      paybackPeriod: "5.1 Years",
    },
  },
  {
    id: 4,
    title: "Modern Solara Estate Villa",
    category: "Residential",
    location: "Scottsdale, Arizona",
    capacity: "18.2 kW Architectural Solar",
    battery: "30 kWh Enphase IQ Storage",
    carbonOffset: "14.1 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Zero-penetration standing seam metal roof mounts powering dual EV chargers, geothermal heat pumps, and a swimming pool.",
    stats: {
      annualGeneration: "28,200 kWh",
      monthlySavings: "$440",
      paybackPeriod: "4.5 Years",
    },
  },
  {
    id: 5,
    title: "Westlake Tech Campus Microgrid",
    category: "Commercial",
    location: "Austin, Texas",
    capacity: "280 kW Carport & Rooftop PV",
    battery: "90 kWh Smart Dispatch Buffer",
    carbonOffset: "195 Tons CO₂ / year",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Solar canopy structure providing shade for 80 corporate parking bays with 20 integrated Level-2 electric vehicle charge points.",
    stats: {
      annualGeneration: "390,000 kWh",
      monthlySavings: "$5,100",
      paybackPeriod: "4.1 Years",
    },
  },
  {
    id: 6,
    title: "Canyon Lake Off-Grid Retreat",
    category: "Battery Storage",
    location: "New Braunfels, Texas",
    capacity: "15.6 kW Bifacial Rooftop",
    battery: "45 kWh Modular LiFePO4",
    carbonOffset: "11.8 Tons CO₂ / year",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "Off-grid lakefront sanctuary powered by high-efficiency bifacial solar and intelligent battery storage with generator auto-start backup.",
    stats: {
      annualGeneration: "22,500 kWh",
      monthlySavings: "$360",
      paybackPeriod: "5.0 Years",
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
              across North America.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Explore our verified residential, commercial, and off-grid battery
              installations delivering guaranteed kilowatt output and lifelong
              savings.
            </p>
          </FadeIn>

          {/* Stats Bar */}
          <FadeIn delay={0.2} className="mt-14 bg-[#F8F9FA] border border-gray-200/80 rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-sm">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={850} suffix="+" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Turnkey Homes Installed
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={14.2} decimals={1} suffix=" MW" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Total Capacity Commissioned
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

                      {/* Mini ROI row */}
                      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="bg-[#F9FBE7] p-2 rounded-xl border border-lime/40">
                          <span className="text-[10px] text-muted block uppercase">Savings</span>
                          <span className="font-bold text-charcoal">{project.stats.monthlySavings}/mo</span>
                        </div>
                        <div className="bg-[#F9FBE7] p-2 rounded-xl border border-lime/40">
                          <span className="text-[10px] text-muted block uppercase">Payback</span>
                          <span className="font-bold text-charcoal">{project.stats.paybackPeriod}</span>
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
