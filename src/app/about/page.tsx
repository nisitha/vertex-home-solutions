"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  ShieldCheck,
  Zap,
  Award,
  Users,
  Cpu,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const TEAM = [
  {
    name: "Dr. Ethan Wright",
    role: "Chief Technology Officer & Lead Solar Engineer",
    credentials: "PhD Electrical Engineering • NABCEP Master Certified",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Former Department of Energy solar researcher specializing in microgrid optimization and bifacial photon absorption models.",
  },
  {
    name: "Elena Rostova",
    role: "VP of Engineering & Structural Architecture",
    credentials: "PE Licensed Structural Engineer • LEED AP BD+C",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Over 14 years overseeing structural load-bearing calculations, hurricane-resistant mounting, and zero-penetration commercial designs.",
  },
  {
    name: "Marcus Vance",
    role: "Director of Battery Storage & Grid Modernization",
    credentials: "MSc Power Electronics • IEEE Senior Member",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Pioneered sub-second microgrid islanding switchgear and high-capacity LiFePO4 battery arbitrage algorithms across Texas.",
  },
  {
    name: "Sarah Linfield",
    role: "Head of Concierge Operations & Client Telemetry",
    credentials: "Certified Energy Manager (CEM) • NABCEP Associate",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Manages our 24/7 Austin telemetry center, tracking real-time generation metrics for over 850 residential and commercial solar arrays.",
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
    desc: "Ultra-low degradation rates (-0.40% annual) engineered to withstand extreme ambient temperatures.",
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
    name: "Tesla Energy",
    category: "Powerwall & Gateway Architecture",
    desc: "Industry-standard AC-coupled domestic energy storage with seamless app control and Storm Watch automation.",
    tag: "Ecosystem Partner",
  },
];

const MILESTONES = [
  {
    year: "2018",
    title: "Vertex Founded in Austin, TX",
    desc: "Established by two former solar researchers with a pledge to ban low-grade Tier-2 equipment and provide 100% transparent solar pricing.",
  },
  {
    year: "2020",
    title: "250+ Installations & Battery Launch",
    desc: "Expanded into whole-home battery backup systems and integrated real-time micro-inverter telemetry into every installation.",
  },
  {
    year: "2022",
    title: "Global Tier-1 Hardware Alliances",
    desc: "Secured direct master distribution partnerships with Longi, Huawei, Growatt, and Deye to guarantee factory-direct warranties.",
  },
  {
    year: "2024",
    title: "Autonomous AI Telemetry Center",
    desc: "Launched our dedicated Network Operations Center monitoring cell strings for 10+ megawatts of clean solar capacity every second.",
  },
  {
    year: "2026",
    title: "850+ Homes & 14.2 MW Installed",
    desc: "Proudly recognized as Texas's highest-rated solar & battery installer with a 99.8% customer satisfaction rating and 25-year warranty trust.",
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
                  battery storage, and 25-year guaranteed return on investment.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200/70 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-lime-dark" />
                <span>100% Transparent Net-Metering Calculations</span>
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
                <span>25-Year Full System & Labor Warranty</span>
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
                  Extreme weather and utility rate hikes are becoming the new
                  norm. Our hybrid systems insulate your family from grid
                  blackouts and electricity tariff inflation forever.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-charcoal">
                <Globe2 className="w-4 h-4 text-charcoal" />
                <span><AnimatedCounter value={14.2} decimals={1} suffix="+ Megawatts" /> Deployed Across the US</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFIED ENGINEERING TEAM SHOWCASE                                       */}
        {/* ========================================================================= */}
        <section className="py-20 bg-surface/50 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <PillBadge variant="lime" className="mb-3">
                  Certified Leadership
                </PillBadge>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal">
                  Meet Our Engineering Team
                </h2>
              </div>
              <p className="text-muted text-sm sm:text-base max-w-md mt-4 md:mt-0">
                Every Vertex project is engineered, inspected, and commissioned
                by licensed professional engineers and NABCEP-certified masters.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-lime hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Portrait Photo */}
                    <div className="relative h-72 w-full bg-charcoal overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-lime block">
                          Verified Specialist
                        </span>
                        <h3 className="text-xl font-bold leading-tight">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-bold text-lime-dark uppercase tracking-wider bg-charcoal px-3 py-1 rounded-full inline-block">
                        {member.role}
                      </p>
                      <p className="text-xs font-semibold text-muted mt-3">
                        {member.credentials}
                      </p>
                      <p className="text-xs text-charcoal/80 mt-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              energy banks with 25-year manufacturer-backed warranties.
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
                Building a clean energy legacy one rooftop and microgrid at a time.
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
