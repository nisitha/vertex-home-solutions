"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  ShieldCheck,
  Zap,
  Award,
  Cpu,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Globe2,
  Sun,
  BatteryCharging,
  Activity,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const TECHNICAL_DIVISIONS = [
  {
    code: "DIV-01",
    title: "Solar PV Engineering Division",
    subtitle: "Design, Shading Analysis & Structural Calculations",
    icon: Sun,
    accentIcon: Layers,
    metric: "99.8% Shading Accuracy",
    description:
      "Performs high-resolution 3D rooftop modeling, satellite solar irradiance profiling, and certified wind-load structural engineering. Ensures peak kilowatt yields on tile, Amano, and concrete roofs.",
    capabilities: [
      "3D LiDAR & satellite roof profile modeling",
      "Monsoonal wind-load & structural mounting calculations",
      "Micro-string simulation for peak photon capture",
      "Zero-penetration clamp engineering on all roof types",
    ],
  },
  {
    code: "DIV-02",
    title: "Battery & Hybrid Energy Systems Unit",
    subtitle: "High-Voltage LiFePO4 & Dyness/Deye Integration",
    icon: BatteryCharging,
    accentIcon: Zap,
    metric: "10,000+ Cycle Longevity",
    description:
      "Specializes in advanced lithium iron phosphate chemistry, official Dyness battery banks, and Deye hybrid inverters with sub-second automatic transfer switch (ATS) protection.",
    capabilities: [
      "High-voltage LiFePO4 & Dyness modular integration",
      "Sub-second microgrid islanding switchover",
      "Active thermal monitoring & fireproof cell architecture",
      "Direct BMS protocol pairing with hybrid inverters",
    ],
  },
  {
    code: "DIV-03",
    title: "Certified Installation & QC Crew",
    subtitle: "CEB Compliance, Surge Protection & Safety",
    icon: ShieldCheck,
    accentIcon: CheckCircle2,
    metric: "100% CEB Standards",
    description:
      "Our field crew executes strict Ceylon Electricity Board (CEB) and LECO interconnection standards, high-energy surge arrestors, and comprehensive dual-stage pre-commissioning testing.",
    capabilities: [
      "Strict CEB & LECO compliance certification",
      "Class-I & Class-II lightning and surge protection",
      "Low-resistance copper earth-rod grounding",
      "Dual-stage thermographic commissioning audit",
    ],
  },
  {
    code: "DIV-04",
    title: "24/7 Operations & Maintenance Support",
    subtitle: "Remote Inverter Diagnostics & Rapid Dispatch",
    icon: Activity,
    accentIcon: Cpu,
    metric: "< 4-Hour Rapid Dispatch",
    description:
      "Round-the-clock telemetry monitoring tracks solar array generation string-by-string. Automated health flags trigger rapid-dispatch technical support across Sri Lanka.",
    capabilities: [
      "24/7 real-time cloud telemetry & health alerts",
      "Remote inverter firmware diagnostics & tuning",
      "Rapid-dispatch island-wide field technicians",
      "Direct manufacturer warranty claim execution",
    ],
  },
];

const PARTNERS = [
  {
    name: "Huawei",
    category: "Smart String Inverters & Optimizers",
    desc: "AI-boosted arc fault circuit interrupter (AFCI) safety and 98.6% European weighted efficiency rating.",
    tag: "Tier-1 Global Leader",
  },
  {
    name: "Longi Solar",
    category: "High-Efficiency Monocrystalline Modules",
    desc: "World record holder for silicon cell conversion efficiency utilizing HPBC high-density cell architecture.",
    tag: "BloombergNEF Tier-1",
  },
  {
    name: "Jinko Solar",
    category: "Tiger Neo N-Type Bifacial Panels",
    desc: "Ultra-low degradation rates (-0.40% annual) engineered to withstand extreme tropical temperatures.",
    tag: "Global Volume Leader",
  },
  {
    name: "Growatt",
    category: "Hybrid Storage Inverters",
    desc: "Compact, high-frequency residential inverters with multi-MPPT trackers and seamless generator auto-start.",
    tag: "Microgrid Champion",
  },
  {
    name: "Deye",
    category: "Low-Voltage & High-Voltage Battery Inverters",
    desc: "Unmatched inductive load surge capacity with integrated diesel generator microgrid synchronization.",
    tag: "Hybrid Specialist",
  },
  {
    name: "Dyness",
    category: "High-Performance LiFePO4 Energy Storage",
    desc: "Modular lithium iron phosphate battery banks with 10,000+ cycle life, certified BMS integration, and thermal runaway protection.",
    tag: "Official Battery Partner",
  },
];

const MILESTONES = [
  {
    year: "2020",
    title: "Vertex Home Solutions Founded",
    desc: "Established with a bold pledge: engineer resilient Off-Grid solar systems and eliminate soaring electricity tariffs for Sri Lankan homes.",
  },
  {
    year: "2022",
    title: "LiFePO4 Battery & Hybrid Unit",
    desc: "Expanded into high-capacity lithium iron phosphate battery storage to deliver 100% blackout immunity during national grid shedding.",
  },
  {
    year: "2023",
    title: "Tier-1 Hardware Alliances",
    desc: "Formed direct integration partnerships with Jinko Solar and Dyness Energy Storage, guaranteeing factory-backed 10-year hardware warranties.",
  },
  {
    year: "2024",
    title: "Over LKR 120M+ Saved in Bills",
    desc: "Milestone achievement: our active residential and commercial arrays surpassed LKR 120,000,000 in cumulative electricity bill savings.",
  },
  {
    year: "2026",
    title: "500+ Off-Grid Installations",
    desc: "Surpassed 500+ completed Off-Grid projects across Sri Lanka with 0% installment plans supported by major commercial partner banks.",
  },
];

export default function AboutPage() {
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
                About Vertex Home Solutions
              </PillBadge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tightest text-charcoal leading-tight">
              An engineering-first approach to{" "}
              <span className="relative inline-block px-3 py-1 bg-lime text-charcoal rounded-2xl shadow-sm rotate-[-1deg]">
                clean energy
              </span>{" "}
              autonomy.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              We founded Vertex on a radical idea: solar installations should be
              engineered by certified structural and electrical specialists—not
              high-pressure commission salespeople.
            </p>
          </FadeIn>

          {/* Milestone Stats Bar */}
          <FadeIn delay={0.2} className="mt-14 bg-[#F8F9FA] border border-gray-200/80 rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-sm">
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
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Off-Grid Installations
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Outage & Blackout Protection
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-charcoal block text-lime-dark bg-charcoal rounded-2xl py-1 inline-block px-3">
                10-25 Yrs
              </span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1 block">
                Hardware Warranty
              </span>
            </div>
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* STORY & MISSION BENTO GRID                                                */}
        {/* ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Our Mission */}
            <FadeIn delay={0.1} className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 hover:shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-charcoal mb-6 shadow-sm">
                  <Target className="w-6 h-6 text-lime-dark" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                  To eliminate electricity bill anxiety by empowering homeowners
                  and businesses with Tier-1 solar hardware, blackout-proof
                  battery storage, and long-term guaranteed return on investment.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200/70 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-lime-dark" />
                <span>100% Transparent Off-Grid & Battery Quotations</span>
              </div>
            </FadeIn>

            {/* Card 2: The Vertex Standard (Dark Card) */}
            <FadeIn delay={0.2} className="bg-charcoal text-white rounded-3xl p-8 sm:p-10 border border-charcoal shadow-xl flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lime mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  The Vertex Standard
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                  We exclusively install BloombergNEF Tier-1 panels and smart
                  hybrid inverters. No cheap subcontractor shortcuts, zero roof
                  penetration risks, and fully guaranteed production metrics.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-lime">
                <Sparkles className="w-4 h-4" />
                <span>10-25 Year Hardware & Installation Warranty</span>
              </div>
            </FadeIn>

            {/* Card 3: Energy Independence */}
            <FadeIn delay={0.3} className="bg-lime rounded-3xl p-8 sm:p-10 border border-lime-dark shadow-sm flex flex-col justify-between text-charcoal hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 hover:shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-charcoal text-lime flex items-center justify-center mb-6 shadow-md">
                  <Zap className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-charcoal">
                  Grid Autonomy
                </h3>
                <p className="mt-3 text-sm sm:text-base text-charcoal/85 leading-relaxed font-medium">
                  Utility rate hikes and power cuts are disruptive to family life and business.
                  Our hybrid systems insulate your property from grid blackouts and electricity
                  tariff inflation forever.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-charcoal">
                <Globe2 className="w-4 h-4 text-charcoal" />
                <span>Over LKR 120M+ Saved Across Sri Lanka</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR TECHNICAL DIVISIONS & ENGINEERING EXCELLENCE (NO HUMAN PHOTOS/NAMES)   */}
        {/* ========================================================================= */}
        <section className="py-20 bg-surface/50 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <PillBadge variant="lime" className="mb-3">
                  Engineering Excellence
                </PillBadge>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
                  Our Technical Divisions & Engineering Excellence
                </h2>
              </div>
              <p className="text-muted text-sm sm:text-base max-w-md mt-4 md:mt-0">
                Every Vertex system is designed, audited, and commissioned by specialized
                technical units operating under strict Ceylon Electricity Board (CEB) and IEC standards.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {TECHNICAL_DIVISIONS.map((division, idx) => {
                const Icon = division.icon;
                const AccentIcon = division.accentIcon;

                return (
                  <motion.div
                    key={division.code}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-lime transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* 3D-Styled Glassmorphic Isometric Visual Canvas */}
                      <div className="relative h-60 w-full bg-[#141619] overflow-hidden flex items-center justify-center p-6 border-b border-gray-100">
                        {/* Layered background radial and lime gradient glow */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-lime/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime/10 rounded-full blur-2xl pointer-events-none" />

                        {/* Subtle isometric background grid pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.08] pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #C8F169 1px, transparent 0)`,
                            backgroundSize: "20px 20px",
                          }}
                        />

                        {/* Top Division Code & Status */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="backdrop-blur-md bg-white/10 text-lime border border-lime/30 font-mono text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                            {division.code}
                          </span>
                        </div>

                        <div className="absolute top-4 right-4 z-10">
                          <span className="flex items-center gap-1.5 backdrop-blur-md bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                            Specialized Unit
                          </span>
                        </div>

                        {/* 3D Isometric Floating Stage with layered glass pedestals */}
                        <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          {/* Base Pedestal (tilted glass plate) */}
                          <div className="w-28 h-28 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md transform rotate-[-12deg] skew-y-3 shadow-2xl transition-transform duration-500 group-hover:rotate-0" />

                          {/* Middle Glowing Lime Glass Tile */}
                          <div className="absolute w-22 h-22 rounded-2xl bg-gradient-to-br from-lime/30 via-lime/10 to-transparent border border-lime/50 backdrop-blur-xl shadow-[0_12px_32px_rgba(200,241,105,0.3)] transform rotate-[6deg] transition-transform duration-500 group-hover:rotate-0 flex items-center justify-center" />

                          {/* Primary 3D Icon Container */}
                          <div className="absolute w-16 h-16 rounded-2xl bg-charcoal/90 border border-lime/70 shadow-xl flex items-center justify-center text-lime group-hover:scale-110 group-hover:border-lime transition-all duration-300">
                            <Icon className="w-8 h-8 stroke-[2.2] text-lime drop-shadow-[0_2px_8px_rgba(200,241,105,0.6)]" />
                          </div>

                          {/* Secondary micro badge floating on bottom-right */}
                          <div className="absolute -bottom-2 -right-3 w-8 h-8 rounded-xl bg-lime text-charcoal border border-charcoal/20 flex items-center justify-center shadow-lg">
                            <AccentIcon className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>

                        {/* Bottom Metric Bar */}
                        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs">
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Benchmark
                          </span>
                          <span className="font-mono text-[11px] font-extrabold text-lime bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-lime/30">
                            {division.metric}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6">
                        <span className="text-[10px] font-bold text-lime-dark uppercase tracking-wider bg-charcoal px-3 py-1 rounded-full inline-block">
                          {division.subtitle}
                        </span>

                        <h3 className="text-xl font-bold text-charcoal mt-3 leading-snug tracking-tight">
                          {division.title}
                        </h3>

                        <p className="text-xs text-muted mt-2.5 leading-relaxed">
                          {division.description}
                        </p>

                        {/* Technical Capabilities List */}
                        <ul className="mt-4 space-y-2 border-t border-gray-100 pt-3 text-xs text-charcoal/90">
                          {division.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div className="py-2 px-3 rounded-xl bg-surface border border-gray-100 text-[11px] font-semibold text-charcoal/80 flex items-center justify-between">
                        <span>CEB Compliance</span>
                        <span className="text-lime-dark font-bold font-mono">Verified</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TIER-1 HARDWARE PARTNERS                                                  */}
        {/* ========================================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/70">
          <FadeIn className="max-w-3xl mb-14">
            <PillBadge variant="neutral" className="mb-3">
              Hardware Integrity
            </PillBadge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
              Tier-1 Hardware Partners
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg">
              We exclusively install industry-standard solar panels, inverters, and
              energy banks with 10-25 year manufacturer-backed warranties.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#F8F9FA] rounded-3xl p-7 border border-gray-200/80 hover:border-lime hover:bg-white hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-charcoal tracking-tight">
                      {partner.name}
                    </span>
                    <span className="text-[11px] font-bold text-charcoal bg-lime/30 border border-lime/50 px-2.5 py-0.5 rounded-full">
                      {partner.tag}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-charcoal">
                    {partner.category}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center gap-1.5 text-xs font-semibold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-lime-dark" />
                  <span>Factory Authorized Installation Partner</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPANY MILESTONES TIMELINE                                               */}
        {/* ========================================================================= */}
        <section className="py-20 bg-surface/50 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-14">
              <PillBadge variant="lime" className="mb-3">
                Our Journey
              </PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal">
                Company Milestones
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base">
                Building Sri Lanka&apos;s clean energy legacy one rooftop and off-grid system at a time.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {MILESTONES.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-lime hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  <div>
                    <span className="text-3xl font-black text-charcoal tracking-tight block">
                      {m.year}
                    </span>
                    <span className="w-8 h-1 bg-lime rounded-full block mt-2 mb-4" />
                    <h3 className="text-base font-bold text-charcoal leading-snug">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
