"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  Sun,
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Building2,
  Car,
  Activity,
  Layers,
  Quote,
  Star,
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SolarCalculator } from "@/components/SolarCalculator";
import { SolarPackages } from "@/components/SolarPackages";

// High-resolution verified solar imagery from Unsplash
const IMAGES = {
  heroRooftop:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2400&q=85",
  technician:
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  solarGreenery:
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1400&q=80",
  solarFarm:
    "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
  // Section 3: Why It Works images
  accordionEfficiency:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  accordionOptimization:
    "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
  accordionIntegration:
    "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80",
  accordionBattery:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  accordionMaintenance:
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  // Section 4: Our Services images
  serviceResidential:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  serviceCommercial:
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
  serviceBattery:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  serviceEV:
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
  serviceMaintenance:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  // Section 5: Testimonials customer homes in Sri Lanka
  homeRohan:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  homeNilmini:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  homePradeep:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  homeChaminda:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  homeKavinda:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
};

export default function HomePage() {
  // Scroll parallax for Hero
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 500], [0, 80]);

  // Accordion state: Index 1 ('Intelligent Energy Optimization') open by default
  const [activeAccordion, setActiveAccordion] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [carouselX, setCarouselX] = useState(0);

  // FAQ Accordion State (First question open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const fullWidth = carouselRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        setDragWidth(Math.max(0, fullWidth - visibleWidth));
      }
    };
    updateWidth();
    const timer = setTimeout(updateWidth, 500);
    window.addEventListener("resize", updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleScrollCarousel = (direction: "left" | "right") => {
    const cardStep = 404;
    if (direction === "left") {
      setCarouselX((prev) => Math.min(prev + cardStep, 0));
    } else {
      setCarouselX((prev) => Math.max(prev - cardStep, -dragWidth));
    }
  };

  const headlineWords = "Brighter Future Begins with Clean Power".split(" ");
  const headlineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const bentoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const bentoCardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const accordionItems = [
    {
      id: 0,
      number: "01",
      title: "Proven High Efficiency",
      content:
        "High-conversion Tier-1 monocrystalline cells engineered with multi-busbar technology achieve over 22.8% module efficiency, capturing maximum photons even during overcast skies and extreme temperatures.",
      image: IMAGES.accordionEfficiency,
      metricBadge: "22.8% Conversion Efficiency",
      icon: Sun,
    },
    {
      id: 1,
      number: "02",
      title: "Intelligent Energy Optimization",
      content:
        "Our adaptive AI engine analyzes sunlight patterns, weather conditions, and peak demands to deliver the most efficient energy performance automatically.",
      image: IMAGES.accordionOptimization,
      metricBadge: "Adaptive AI Optimization",
      icon: Cpu,
    },
    {
      id: 2,
      number: "03",
      title: "Seamless Battery Storage & Power Switching",
      content:
        "Bi-directional smart switching dynamically directs solar power between household circuits and high-density battery storage without a millisecond of voltage flicker, ensuring 100% whole-home blackout immunity.",
      image: IMAGES.accordionIntegration,
      metricBadge: "Zero-Flicker Switchover",
      icon: Layers,
    },
    {
      id: 3,
      number: "04",
      title: "Peak Battery Storage Performance",
      content:
        "Advanced lithium iron phosphate (LiFePO4) storage architecture provides 10,000+ deep cycles, 98% round-trip efficiency, and military-grade thermal stability for whole-home blackout autonomy.",
      image: IMAGES.accordionBattery,
      metricBadge: "10,000+ Cycle Lifespan",
      icon: BatteryCharging,
    },
    {
      id: 4,
      number: "05",
      title: "Dedicated After-Sales & Maintenance",
      content:
        "Continuous 24/7 cloud telemetry monitors performance down to individual cell strings, backed by rapid local technician deployment and guaranteed 25-year all-inclusive warranty coverage.",
      image: IMAGES.accordionMaintenance,
      metricBadge: "24/7 Concierge Telemetry",
      icon: ShieldCheck,
    },
  ];

  const services = [
    {
      id: 1,
      title: "Residential Solar Installation",
      tag: "Turnkey Rooftop",
      description:
        "Custom-tailored rooftop arrays designed for maximum aesthetic integration, hurricane-grade mounting, and guaranteed 25-year energy production.",
      image: IMAGES.serviceResidential,
      features: ["Tier-1 Monocrystalline", "Zero Penetration Risk", "Off-Grid Battery Setup"],
      icon: Sun,
    },
    {
      id: 2,
      title: "Commercial & Industrial Solar",
      tag: "Enterprise Microgrid",
      description:
        "High-yield commercial photovoltaic arrays engineered to drastically reduce operating expenditures, hedge utility hikes, and boost ESG ratings.",
      image: IMAGES.serviceCommercial,
      features: ["30% Federal ITC", "Accelerated Depreciation", "Zero Capital Outlay"],
      icon: Building2,
    },
    {
      id: 3,
      title: "Hybrid & Off-Grid Battery Systems",
      tag: "Uninterrupted Power",
      description:
        "Modular lithium iron phosphate (LiFePO4) storage banks providing sub-second blackout switchover and intelligent peak-rate utility arbitrage.",
      image: IMAGES.serviceBattery,
      features: ["10-20 kWh Scalable", "10,000+ Deep Cycles", "Blackout Proofing"],
      icon: BatteryCharging,
    },
    {
      id: 4,
      title: "EV Home Charger Setup",
      tag: "Level-2 High-Speed",
      description:
        "Smart EV charging units synchronized directly with your solar inverters to power your electric vehicle with 100% clean, self-generated sunshine.",
      image: IMAGES.serviceEV,
      features: ["48A Rapid Output", "Solar-Only Mode", "Smart App Scheduling"],
      icon: Car,
    },
    {
      id: 5,
      title: "System Maintenance & Battery Health Telemetry",
      tag: "Lifetime Protection",
      description:
        "Proactive cloud telemetry monitoring, annual thermal panel diagnostics, inverter firmware upgrades, and complete battery cycle health management.",
      image: IMAGES.serviceMaintenance,
      features: ["24/7 Telemetry Alerting", "Rapid Field Dispatch", "Annual Diagnostics"],
      icon: Activity,
    },
  ];

  const TESTIMONIAL_THEMES = [
    // Card 0: Pearl Frost White & Subtle Lime Tint (Colombo 07 - Cinnamon Gardens)
    {
      cardWrapper:
        "bg-gradient-to-br from-white via-[#FCFDF8] to-[#F3F9E6] border-lime/60 shadow-[0_-16px_45px_rgba(0,0,0,0.08),0_25px_50px_rgba(200,241,105,0.18)] hover:border-lime",
      topAccentBar: "bg-gradient-to-r from-lime-dark via-lime to-transparent",
      ambientGlow: "bg-lime/25",
      quoteBox: "bg-lime/30 border-lime/50 text-charcoal shadow-sm",
      quoteIcon: "text-charcoal fill-lime",
      storyBadge: "bg-white border-gray-200/90 text-charcoal shadow-xs",
      ratingBadge: "bg-white border-gray-200/80 text-charcoal shadow-xs",
      feedbackText: "text-charcoal",
      metricBadge: "bg-white text-charcoal border-gray-200/90 shadow-sm",
      metricDot: "bg-lime-dark",
      clientName: "text-charcoal",
      clientCheck: "text-lime-dark",
      clientDesignation: "text-muted",
      clientLocation: "text-charcoal",
      systemTagLabel: "text-muted",
      systemTagValue: "text-charcoal",
      divider: "border-gray-200/80",
      imageBorder: "border-gray-200/90",
    },
    // Card 1: Obsidian Charcoal & Neon Lime High-Contrast Dark Mode (Kandy - Central Hills)
    {
      cardWrapper:
        "bg-gradient-to-br from-[#131518] via-[#181B1F] to-[#0F1012] border-white/15 shadow-[0_-16px_45px_rgba(0,0,0,0.4),0_25px_50px_rgba(0,0,0,0.35)] hover:border-lime/60",
      topAccentBar: "bg-gradient-to-r from-lime via-lime-dark to-transparent",
      ambientGlow: "bg-lime/20",
      quoteBox: "bg-lime text-charcoal border-lime shadow-[0_0_25px_rgba(200,241,105,0.35)]",
      quoteIcon: "text-charcoal fill-charcoal",
      storyBadge: "bg-white/10 border-white/20 text-lime shadow-xs font-semibold",
      ratingBadge: "bg-white/10 border-white/20 text-white shadow-xs",
      feedbackText: "text-white font-medium",
      metricBadge: "bg-lime/15 text-lime border-lime/40 shadow-sm font-bold",
      metricDot: "bg-lime animate-pulse",
      clientName: "text-white",
      clientCheck: "text-lime",
      clientDesignation: "text-gray-400",
      clientLocation: "text-lime font-bold",
      systemTagLabel: "text-gray-400",
      systemTagValue: "text-white font-semibold",
      divider: "border-white/10",
      imageBorder: "border-white/15",
    },
    // Card 2: Signature Solar Electric Lime (Battaramulla - EV & Rooftop Solar)
    {
      cardWrapper:
        "bg-gradient-to-br from-[#C8F169] via-[#D2F67D] to-[#BAED52] border-[#9ED428] shadow-[0_-16px_45px_rgba(0,0,0,0.12),0_25px_50px_rgba(200,241,105,0.35)] hover:border-charcoal/40",
      topAccentBar: "bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent",
      ambientGlow: "bg-white/40",
      quoteBox: "bg-charcoal text-lime border-charcoal shadow-md",
      quoteIcon: "text-lime fill-lime",
      storyBadge: "bg-charcoal text-lime border-charcoal shadow-xs font-bold",
      ratingBadge: "bg-white/90 border-black/10 text-charcoal shadow-xs backdrop-blur-sm",
      feedbackText: "text-charcoal font-bold tracking-tight",
      metricBadge: "bg-charcoal text-white border-black/20 shadow-sm font-bold",
      metricDot: "bg-lime",
      clientName: "text-charcoal font-black",
      clientCheck: "text-charcoal",
      clientDesignation: "text-charcoal/80 font-medium",
      clientLocation: "text-charcoal font-black",
      systemTagLabel: "text-charcoal/70 font-semibold",
      systemTagValue: "text-charcoal font-black",
      divider: "border-black/15",
      imageBorder: "border-black/15",
    },
    // Card 3: Coastal Ocean Mint & Emerald Eco-Luxury (Galle Fort - Marine Boutique Villa)
    {
      cardWrapper:
        "bg-gradient-to-br from-[#F0FDF8] via-[#E4F8F0] to-[#D5F4E7] border-emerald-300 shadow-[0_-16px_45px_rgba(0,0,0,0.08),0_25px_50px_rgba(16,185,129,0.18)] hover:border-emerald-400",
      topAccentBar: "bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent",
      ambientGlow: "bg-emerald-300/30",
      quoteBox: "bg-emerald-600 text-white border-emerald-700 shadow-md",
      quoteIcon: "text-white fill-white",
      storyBadge: "bg-emerald-100 text-emerald-900 border-emerald-300 shadow-xs font-bold",
      ratingBadge: "bg-white/90 border-emerald-200 text-charcoal shadow-xs",
      feedbackText: "text-[#0D281E] font-semibold",
      metricBadge: "bg-emerald-100/90 text-emerald-950 border-emerald-400/80 shadow-sm font-bold",
      metricDot: "bg-emerald-600",
      clientName: "text-[#0D281E] font-extrabold",
      clientCheck: "text-emerald-600",
      clientDesignation: "text-emerald-900/70 font-medium",
      clientLocation: "text-[#0D281E] font-black",
      systemTagLabel: "text-emerald-900/70 font-semibold",
      systemTagValue: "text-[#0D281E] font-bold",
      divider: "border-emerald-200/80",
      imageBorder: "border-emerald-200",
    },
    // Card 4: Midnight Cyber Slate & Glowing Lime Accent (Negombo - Remote Tech Lead)
    {
      cardWrapper:
        "bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#090C14] border-lime/50 shadow-[0_-20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(200,241,105,0.2)] hover:border-lime",
      topAccentBar: "bg-gradient-to-r from-lime via-lime-dark to-transparent",
      ambientGlow: "bg-lime/30",
      quoteBox: "bg-lime text-charcoal border-lime shadow-[0_0_25px_rgba(200,241,105,0.45)]",
      quoteIcon: "text-charcoal fill-charcoal",
      storyBadge: "bg-white/10 border-lime/30 text-lime shadow-xs font-bold",
      ratingBadge: "bg-white/10 border-white/20 text-white shadow-xs",
      feedbackText: "text-gray-100 font-medium",
      metricBadge: "bg-lime/20 text-lime border-lime/50 shadow-sm font-bold",
      metricDot: "bg-lime animate-pulse",
      clientName: "text-white font-bold",
      clientCheck: "text-lime",
      clientDesignation: "text-gray-400",
      clientLocation: "text-lime font-bold",
      systemTagLabel: "text-gray-400",
      systemTagValue: "text-white font-semibold",
      divider: "border-white/10",
      imageBorder: "border-white/15",
    },
  ];

  const testimonials = [
    {
      id: 0,
      feedback:
        "With recent electricity tariff revisions and unpredictable load shedding, our monthly utility expense was unbearable. Vertex designed and commissioned a 10 kW Off-Grid Hybrid system with 16kW battery storage in just 2 days. Our bills dropped to zero, and we have 24/7 uninterrupted power!",
      clientName: "Eng. Rohan Dissanayake",
      designation: "Chartered Civil Engineer & Homeowner",
      location: "Colombo 07, Cinnamon Gardens",
      locationShort: "Colombo 07",
      savingsAmount: 65000,
      savingsPrefix: "Saved LKR ",
      savingsSuffix: "/month • 10 kW Off-Grid 24/7 Autonomy",
      image: IMAGES.homeRohan,
      systemType: "10 kW Hybrid Inverter + 16 kW LiFePO4 Storage + 14x Jinko Panels",
    },
    {
      id: 1,
      feedback:
        "Living in the central hills, frequent monsoon power disruptions used to be a major obstacle for our home and private clinic. Vertex installed a 5 kW Hybrid system with LiFePO4 batteries. Even during heavy grid blackouts, our entire house runs seamlessly with zero flicker.",
      clientName: "Dr. Nilmini Wickramasinghe",
      designation: "Consultant Physician & Homeowner",
      location: "Peradeniya, Kandy",
      locationShort: "Kandy",
      savingsAmount: 100,
      savingsPrefix: "",
      savingsSuffix: "% Outage Immunity • 5 kW Hybrid Storage",
      image: IMAGES.homeNilmini,
      systemType: "5 kW Hybrid System + 10 kWh High-Cycle LiFePO4 Storage",
    },
    {
      id: 2,
      feedback:
        "Charging our electric vehicle at home previously drove our monthly utility expense to over LKR 95,000. Vertex Home Solutions precision-mapped our concrete roof and installed a 15 kW system. My daily commute across Colombo is now 100% powered by pure Sri Lankan sunlight!",
      clientName: "Pradeep Samarawickrama",
      designation: "Managing Director & EV Commuter",
      location: "Battaramulla, Western Province",
      locationShort: "Battaramulla",
      savingsAmount: 92000,
      savingsPrefix: "Saved LKR ",
      savingsSuffix: "/month • 15 kW Solar + EV Charging",
      image: IMAGES.homePradeep,
      systemType: "15 kW Commercial-Grade Residential + Deye Inverter",
    },
    {
      id: 3,
      feedback:
        "Vertex took complete ownership of our solar engineering, safety switchover compliance, and battery commissioning. We didn't have to worry about power disruptions once during our peak guest season. The marine-grade anodized aluminum mounts and Off-Grid batteries are performing flawlessly.",
      clientName: "Chaminda & Thilini Jayasuriya",
      designation: "Boutique Villa Owners",
      location: "Galle Fort, Southern Province",
      locationShort: "Galle",
      savingsAmount: 560000,
      savingsPrefix: "LKR ",
      savingsSuffix: " Annual Utility Savings",
      image: IMAGES.homeChaminda,
      systemType: "8.2 kW Off-Grid Marine Array + Hybrid Storage",
    },
    {
      id: 4,
      feedback:
        "As a remote software engineer working with UK and US teams, uninterrupted electricity and fast internet are non-negotiable. Vertex engineered a 6 kW hybrid setup that automatically handles grid drops without my workstation or home servers resetting. Outstanding after-sales support!",
      clientName: "Kavinda Bandara",
      designation: "Senior Tech Lead & Remote Work Specialist",
      location: "Negombo, Western Province",
      locationShort: "Negombo",
      savingsAmount: 48000,
      savingsPrefix: "Saved LKR ",
      savingsSuffix: "/month • Zero Work Downtime",
      image: IMAGES.homeKavinda,
      systemType: "6 kW Hybrid System + 580W Tier-1 Bifacial Panels",
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "How long does a Vertex Home Solutions solar installation take?",
      answer:
        "Most residential rooftop installations are physically completed within 1 to 2 business days. The entire turnkey process—including preliminary roof engineering, hardware delivery, off-grid battery setup, and safety compliance testing—is completed swiftly by our certified engineers.",
    },
    {
      id: 1,
      question: "Will an Off-Grid solar system eliminate my electricity bills and power cuts?",
      answer:
        "Yes, completely. Our 100% Off-Grid and Off-Grid Hybrid packages are designed to disconnect your essential or whole-home circuits from grid dependence. Paired with high-capacity LiFePO4 battery storage, you enjoy zero electricity bills and zero power outages 24/7.",
    },
    {
      id: 2,
      question: "Does Vertex offer financing, bank loans, or installment plans?",
      answer:
        "Absolutely. We offer 0% interest credit card installment plans through leading partner banks (HNB, Commercial Bank, NDB, Union Bank, DFCC Bank, and Seylan Bank), as well as customized solar loans. In most situations, your monthly installment is noticeably lower than your previous electric bill, ensuring immediate savings without upfront capital.",
    },
    {
      id: 3,
      question: "What maintenance do residential solar panels require?",
      answer:
        "Very little. Vertex tier-1 monocrystalline panels feature hydrophobic, anti-reflective coatings that naturally shed debris and self-clean during ordinary rainfall. Furthermore, Vertex's automated 24/7 cloud telemetry monitors performance down to individual cell strings and proactively dispatches technicians if cleaning or maintenance is ever required.",
    },
    {
      id: 4,
      question: "Do I need a roof inspection before installing solar panels?",
      answer:
        "Yes, and Vertex provides this complimentary. During our comprehensive pre-installation assessment, licensed structural engineers evaluate your roof's age, decking integrity, and solar irradiance azimuth using high-resolution drone mapping to guarantee 100% leak-proof, hurricane-certified mounting.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-charcoal flex flex-col relative selection:bg-lime selection:text-charcoal">
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      <main className="flex-grow pt-4">
        {/* ========================================================================= */}
        {/* SECTION 1: FULL-WIDTH HERO SECTION                                         */}
        {/* ========================================================================= */}
        <section className="relative px-2 sm:px-4">
          <div className="m-4 rounded-3xl overflow-hidden relative min-h-[85vh] bg-[#071322] flex flex-col justify-between p-8 md:p-16 pt-28 md:pt-36 shadow-2xl">
            {/* Background Image with Scale-In Animation & Parallax */}
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ y: heroParallaxY }}
              className="absolute -top-12 -bottom-12 inset-x-0 w-full"
            >
              <Image
                src={IMAGES.heroRooftop}
                alt="Modern rooftop solar panels under clear blue sky"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1920px"
              />
            </motion.div>

            {/* Subtle dark-to-blue gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/95 via-[#08182b]/65 to-[#0c243f]/40 pointer-events-none" />

            {/* Hero Main Content */}
            <div className="max-w-4xl relative z-10 my-auto">
              {/* Continuous Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [-5, 5, -5],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.1 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-white/20 text-white border border-white/30 uppercase tracking-wider mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse shadow-[0_0_8px_#C8F169]" />
                <span>Clean Energy Revolution</span>
              </motion.div>

              {/* Staggered Headline Reveal */}
              <motion.h1
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.08] flex flex-wrap gap-x-[0.28em] gap-y-1"
              >
                {headlineWords.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl font-normal leading-relaxed"
              >
                Empower your home or business with reliable, renewable solar
                solutions from Vertex Home Solutions designed to cut electricity
                costs.
              </motion.p>

              {/* Magnetic Hover CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                {/* 1) Lime green pill button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="#packages"
                    className="rounded-full px-8 py-4 font-semibold text-charcoal bg-lime hover:bg-lime-hover shadow-[0_8px_30px_rgba(200,241,105,0.45)] hover:shadow-[0_12px_36px_rgba(200,241,105,0.65)] border border-lime-dark/30 transition-all duration-200 flex items-center justify-center gap-2 group text-base"
                  >
                    <span>Explore Packages</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* 2) Frosted glass pill button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="#quote"
                    className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium rounded-full px-8 py-4 transition-all duration-200 shadow-sm flex items-center justify-center text-base"
                  >
                    Book Free Inspection
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Giant Bottom Watermark */}
            <div className="relative z-10 mt-12 w-full flex justify-center items-end select-none pointer-events-none overflow-hidden opacity-20 -mb-6 md:-mb-12">
              <span className="text-[18vw] leading-none font-bold text-white/95 select-none tracking-tighter uppercase font-sans">
                Vertex
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* SECTION 2: 'ABOUT US' BENTO GRID SECTION                                  */}
        {/* ========================================================================= */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn className="max-w-4xl mb-16">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                About Us
              </PillBadge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-charcoal">
                From precision rooftop solar installation to smart energy
                monitoring —{" "}
              </span>
              <span className="text-muted">
                fulfilling the promise of tomorrow’s clean technology.
              </span>
            </h2>
          </FadeIn>

          {/* Bento Grid (2 Columns on Desktop) with Staggered In-View Reveal & Hover Elevation */}
          <motion.div
            variants={bentoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Tall Card: Solar technician working on panels */}
            <motion.div
              variants={bentoCardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="lg:col-span-6 rounded-3xl overflow-hidden relative min-h-[520px] lg:min-h-full bg-charcoal shadow-sm border border-gray-200/80 hover:border-lime/60 hover:shadow-2xl transition-[border-color,box-shadow] duration-300 group"
            >
              {/* Background Image */}
              <Image
                src={IMAGES.technician}
                alt="Solar technician installing Tier-1 solar panels on residential roof"
                fill
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Dark bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
                {/* Top Glass Icon Badge with subtle float */}
                <div className="self-start">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full py-2 px-4 inline-flex items-center gap-2 text-xs font-semibold shadow-sm"
                  >
                    <Wrench className="w-3.5 h-3.5 text-lime" />
                    <span>Certified Installation Engineering</span>
                  </motion.div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="mt-auto pt-24">
                  <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    Empower your home with Tier-1 solar panels designed to slash
                    utility bills.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-lime" />
                    <span>Precision roof mounts with zero penetration risk</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Top Card + Bottom Split (2 Cards) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Right Top Card: Solar panels & greenery background */}
              <motion.div
                variants={bentoCardVariants}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="rounded-3xl overflow-hidden relative min-h-[280px] bg-charcoal shadow-sm border border-gray-200/80 hover:border-lime/60 hover:shadow-2xl transition-[border-color,box-shadow] duration-300 group"
              >
                <Image
                  src={IMAGES.solarGreenery}
                  alt="Solar panels surrounded by eco-friendly green nature"
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Subtle dark tint for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1727]/90 via-[#0b1727]/60 to-[#0b1727]/35 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
                  <div className="self-start">
                    <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full py-1.5 px-3.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm">
                      <Sun className="w-3.5 h-3.5 text-lime" />
                      <span>Eco Architecture</span>
                    </span>
                  </div>

                  <div className="my-auto py-6 text-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Smart Solar Energy - Empower your home
                    </h3>
                    <p className="text-white/80 text-sm mt-2 max-w-md mx-auto">
                      Harnessing sustainable solar irradiance with intelligent
                      home power management.
                    </p>
                  </div>

                  <div className="self-end text-xs text-white/70">
                    <span>Carbon-neutral footprint guaranteed</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Bottom Split (2 Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1: Lime Green (#C8F169) background */}
                <motion.div
                  variants={bentoCardVariants}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="bg-lime rounded-3xl p-8 flex flex-col justify-between min-h-[250px] shadow-sm border border-lime-dark/40 hover:border-lime-dark hover:shadow-2xl transition-[border-color,box-shadow] duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-charcoal text-lime flex items-center justify-center shadow-md">
                      <TrendingUp className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal/70 bg-black/10 px-3 py-1 rounded-full">
                      Proven ROI
                    </span>
                  </div>

                  <div className="mt-6">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-charcoal leading-none block">
                      <AnimatedCounter value={70} suffix="%" />
                    </span>
                    <p className="text-sm font-semibold text-charcoal/85 mt-3 leading-snug">
                      Lower electricity bills with smart solar optimization.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Image Card with Solar farm array & 25+ Years Warranty */}
                <motion.div
                  variants={bentoCardVariants}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="rounded-3xl overflow-hidden relative min-h-[250px] bg-charcoal text-white shadow-sm border border-gray-200/80 hover:border-lime/60 hover:shadow-2xl transition-[border-color,box-shadow] duration-300 group"
                >
                  <Image
                    src={IMAGES.solarFarm}
                    alt="Solar farm array with 25 year warranty"
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-8">
                    <div className="self-start">
                      <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-lime shadow-sm"
                      >
                        <ShieldCheck className="w-5 h-5 text-lime" />
                      </motion.div>
                    </div>

                    <div className="mt-auto">
                      <span className="text-xs font-semibold uppercase tracking-wider text-lime block mb-1">
                        Comprehensive Protection
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        <AnimatedCounter value={25} suffix="+" /> Years Warranty Coverage
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* OFFICIAL OFF-GRID SOLAR PACKAGES SECTION                                  */}
        {/* ========================================================================= */}
        <SolarPackages id="packages" />

        {/* ========================================================================= */}
        {/* SECTION 3: 'WHY IT WORKS' (INTERACTIVE ACCORDION + DYNAMIC IMAGE)         */}
        {/* ========================================================================= */}
        <section id="why-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/70">
          {/* Header */}
          <FadeIn className="max-w-3xl mb-16">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                Why It Works
              </PillBadge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Smarter solar energy, with clear and proven impact
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Our smart renewable systems are designed to maximize efficiency, cut
              costs, and create a sustainable power source for your home.
            </p>
          </FadeIn>

          {/* 2-Column Accordion & Dynamic Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Interactive Accordion (5 items) */}
            <div className="lg:col-span-7 flex flex-col space-y-3.5">
              {accordionItems.map((item) => {
                const isActive = activeAccordion === item.id;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: item.id * 0.08 }}
                    onClick={() => setActiveAccordion(item.id)}
                    className="relative rounded-2xl cursor-pointer overflow-hidden border border-gray-200/80 transition-all duration-300"
                  >
                    {/* Active Tab Indicator with smooth layoutId motion */}
                    {isActive && (
                      <motion.div
                        layoutId="activeAccordionHighlight"
                        className="absolute inset-0 bg-[#F9FBE7] border border-lime shadow-[0_4px_20px_rgba(200,241,105,0.25)] ring-1 ring-lime/50 rounded-2xl pointer-events-none z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className={`relative z-10 transition-colors ${!isActive ? "bg-surface/70 hover:bg-surface" : ""}`}>
                      <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                              isActive
                                ? "bg-charcoal text-lime font-mono"
                                : "bg-gray-200 text-muted font-mono"
                            }`}
                          >
                            {item.number}
                          </span>
                          <div className="flex items-center gap-2.5">
                            <Icon
                              className={`w-5 h-5 transition-colors ${
                                isActive ? "text-lime-dark" : "text-muted"
                              }`}
                            />
                            <h3
                              className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                                isActive ? "text-charcoal" : "text-charcoal/80"
                              }`}
                            >
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isActive
                              ? "bg-lime text-charcoal rotate-180 shadow-sm"
                              : "bg-white text-muted border border-gray-200"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Smooth AnimatePresence Expand/Collapse with Linear/Apple ease */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-lime/30 text-sm sm:text-base text-charcoal/85 leading-relaxed pl-14">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Large Rounded Image with Smooth Cross-fade */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 rounded-3xl h-[450px] lg:h-[540px] w-full overflow-hidden shadow-xl border border-gray-200/80 bg-charcoal">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAccordion}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={accordionItems[activeAccordion].image}
                      alt={accordionItems[activeAccordion].title}
                      fill
                      unoptimized
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Ambient dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                    {/* Top Floating Glass Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full py-2 px-4 text-xs font-semibold inline-flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-lime animate-pulse shadow-[0_0_8px_#C8F169]" />
                        <span>{accordionItems[activeAccordion].metricBadge}</span>
                      </span>
                    </div>

                    {/* Bottom Title & Telemetry info */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-lime block mb-1">
                        Active System Metric
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {accordionItems[activeAccordion].title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm mt-1.5 line-clamp-2">
                        {accordionItems[activeAccordion].content}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: 'OUR SERVICES' HORIZONTAL CAROUSEL                            */}
        {/* ========================================================================= */}
        <section id="services" className="py-24 bg-surface/50 border-t border-gray-200/70 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Navigation Circle Buttons */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <FadeIn>
                <div className="mb-4">
                  <PillBadge variant="lime" dot={true}>
                    Our Services
                  </PillBadge>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
                  Powering a cleaner, smarter home
                </h2>
              </FadeIn>

              {/* Navigation circle buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleScrollCarousel("left")}
                  aria-label="Previous service"
                  className="w-12 h-12 rounded-full bg-white hover:bg-surface text-charcoal border border-gray-300/80 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <ChevronLeft className="w-5 h-5 text-charcoal" />
                </button>
                <button
                  onClick={() => handleScrollCarousel("right")}
                  aria-label="Next service"
                  className="w-12 h-12 rounded-full bg-lime hover:bg-lime-hover text-charcoal border border-lime-dark/30 flex items-center justify-center transition-all duration-200 shadow-[0_4px_16px_rgba(200,241,105,0.4)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-lime"
                >
                  <ChevronRight className="w-5 h-5 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable / Draggable Carousel */}
            <div
              ref={carouselRef}
              className="overflow-hidden pb-8 pt-2 cursor-grab active:cursor-grabbing select-none"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -dragWidth }}
                dragElastic={0.08}
                animate={{ x: carouselX }}
                onDragEnd={(_, info) => {
                  setCarouselX((prev) => {
                    const newX = prev + info.offset.x;
                    return Math.max(Math.min(newX, 0), -dragWidth);
                  });
                }}
                className="flex gap-6 will-change-transform"
              >
                {services.map((svc, idx) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="w-[310px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-lime transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Rounded-2xl image container */}
                        <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-charcoal">
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            unoptimized
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 310px, 380px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                          {/* Category Tag Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="backdrop-blur-md bg-white/80 border border-white/60 text-charcoal rounded-full py-1.5 px-3 text-xs font-bold inline-flex items-center gap-1.5 shadow-sm">
                              <Icon className="w-3.5 h-3.5 text-lime-dark" />
                              <span>{svc.tag}</span>
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold text-charcoal tracking-tight group-hover:text-black transition-colors">
                          {svc.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-muted leading-relaxed">
                          {svc.description}
                        </p>

                        {/* Feature Pills */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {svc.features.map((feat, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center text-[11px] font-medium text-charcoal bg-surface px-2.5 py-1 rounded-full border border-gray-200/70"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom CTA Link */}
                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-charcoal group-hover:text-black transition-colors uppercase tracking-wider">
                          Explore Solution
                        </span>
                        <div className="w-8 h-8 rounded-full bg-surface group-hover:bg-lime text-charcoal flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4 text-charcoal" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: 'TESTIMONIALS' - 5 SRI LANKAN STORIES (SCROLL REVEAL)          */}
        {/* ========================================================================= */}
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/70">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <FadeIn>
              <div className="mb-4">
                <PillBadge variant="lime" dot={true}>
                  Testimonials
                </PillBadge>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
                What Our Customers Say
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
                Real stories from Sri Lankan homeowners, doctors, and engineers saving up to 95% on CEB & LECO electricity bills with Vertex solar.
              </p>
            </FadeIn>

            {/* Trust Metric Badge */}
            <FadeIn delay={0.15}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#F8F9FA] border border-gray-200/80 px-5 py-3.5 rounded-2xl shadow-xs">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-charcoal font-bold border-l-0 sm:border-l border-gray-300 sm:pl-3">
                  <span>500+ Sri Lankan Homes Installed</span>
                  <span className="block text-[11px] text-muted font-normal">Colombo • Kandy • Battaramulla • Galle • Negombo</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 5 Testimonial Cards: Sticky Stacking in the Exact Same Spot */}
          <div className="relative">
            {testimonials.map((item, index) => {
              const theme = TESTIMONIAL_THEMES[index % TESTIMONIAL_THEMES.length];

              return (
                <div
                  key={item.id}
                  className="sticky top-24 sm:top-28 will-change-transform"
                  style={{
                    zIndex: 10 + index,
                    marginBottom: index === testimonials.length - 1 ? "2rem" : "50vh",
                  }}
                >
                  <div className={`rounded-3xl p-6 sm:p-10 lg:p-12 border grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center group relative overflow-hidden transition-all duration-300 ${theme.cardWrapper}`}>
                    {/* Top Subtle Neon Edge Highlight Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.topAccentBar}`} />

                    {/* Ambient glow on card hover */}
                    <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme.ambientGlow}`} />

                    {/* Left Side: Quote, Stars, Feedback, Client Details */}
                    <div className="flex flex-col justify-between h-full relative z-10">
                      <div>
                        {/* Quotation Icon, Story Pill, and Rating */}
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 border ${theme.quoteBox}`}>
                              <Quote className={`w-6 h-6 ${theme.quoteIcon}`} />
                            </div>
                            <span className={`text-xs uppercase tracking-wider px-3.5 py-1 rounded-full border ${theme.storyBadge}`}>
                              Story {String(index + 1).padStart(2, "0")} / 05 • {item.locationShort}
                            </span>
                          </div>

                          {/* 5-Star Row */}
                          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full border ${theme.ratingBadge}`}>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-amber-400 text-amber-400"
                              />
                            ))}
                            <span className="text-xs font-bold ml-1.5">
                              5.0 Verified
                            </span>
                          </div>
                        </div>

                        {/* Client Feedback Text */}
                        <p className={`text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight ${theme.feedbackText}`}>
                          &ldquo;{item.feedback}&rdquo;
                        </p>

                        {/* Key Metric Pill with Animated Counter */}
                        <div className="mt-6">
                          <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border ${theme.metricBadge}`}>
                            <span className={`w-2 h-2 rounded-full ${theme.metricDot}`} />
                            <span>
                              {item.savingsPrefix}
                              <AnimatedCounter
                                key={item.id}
                                value={item.savingsAmount}
                                duration={1.2}
                              />
                              {item.savingsSuffix}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Client Info & System Spec */}
                      <div className={`pt-8 mt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${theme.divider}`}>
                        <div>
                          <h4 className={`text-lg font-bold leading-none flex items-center gap-2 ${theme.clientName}`}>
                            <span>{item.clientName}</span>
                            <Check className={`w-4 h-4 stroke-[3] ${theme.clientCheck}`} />
                          </h4>
                          <p className={`text-xs sm:text-sm mt-1.5 ${theme.clientDesignation}`}>
                            {item.designation} •{" "}
                            <span className={`font-semibold ${theme.clientLocation}`}>
                              {item.location}
                            </span>
                          </p>
                        </div>

                        <div className="text-left sm:text-right">
                          <span className={`text-[11px] uppercase tracking-wider font-semibold block ${theme.systemTagLabel}`}>
                            Installed Architecture
                          </span>
                          <span className={`text-xs font-bold block mt-0.5 ${theme.systemTagValue}`}>
                            {item.systemType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: High-res Rounded Image of actual solar-powered Sri Lankan home */}
                    <div className={`relative rounded-3xl overflow-hidden h-[340px] sm:h-[420px] w-full shadow-md border bg-charcoal group/img ${theme.imageBorder}`}>
                      <Image
                        src={item.image}
                        alt={`Solar-powered residential home of ${item.clientName} in ${item.location}`}
                        fill
                        unoptimized
                        priority={index < 2}
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Verified Badge on Image */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="backdrop-blur-md bg-white/90 border border-white/70 text-charcoal rounded-full py-1.5 px-3.5 text-xs font-bold inline-flex items-center gap-1.5 shadow-sm">
                          <ShieldCheck className="w-4 h-4 text-lime-dark" />
                          <span>Verified Vertex System</span>
                        </span>
                      </div>

                      {/* Sri Lankan Location Tag */}
                      <div className="absolute bottom-5 left-5 z-10 text-white">
                        <span className="text-xs uppercase tracking-wider font-semibold text-lime block">
                          Commissioned Site • Sri Lanka
                        </span>
                        <span className="text-base sm:text-lg font-bold">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: 'FAQ' SECTION (2 COLUMNS)                                     */}
        {/* ========================================================================= */}
        <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Pill badge, Title, Subtitle, Still have a question card */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="mb-4">
                  <PillBadge variant="lime" dot={true}>
                    FAQ
                  </PillBadge>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
                  Frequently Asked Questions
                </h2>

                <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                  Everything you need to know about switching to Vertex residential
                  solar, battery storage systems, and guaranteed utility savings.
                </p>
              </FadeIn>

              {/* Bottom Box: 'Still have a question?' */}
              <FadeIn
                delay={0.15}
                className="mt-10 bg-[#F8F9FA] rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-charcoal text-lime flex items-center justify-center mb-5 shadow-sm">
                  <HelpCircle className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-charcoal">
                  Still have a question?
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  Can&apos;t find the answer you&apos;re looking for? Speak directly with
                  our certified solar engineering team for a personalized roof
                  analysis.
                </p>

                <div className="mt-6">
                  <Link
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-charcoal text-white hover:bg-black font-semibold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-md group"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 text-lime group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Accordion with + and - icons */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: faq.id * 0.07 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-lime/80 shadow-sm ring-1 ring-lime/40"
                        : "bg-white hover:bg-surface/60 border-gray-200/90"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <h4
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isOpen ? "text-charcoal" : "text-charcoal/90"
                        }`}
                      >
                        {faq.question}
                      </h4>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen
                            ? "bg-lime text-charcoal font-bold shadow-sm"
                            : "bg-surface text-charcoal border border-gray-200"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {/* Smooth height toggle */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.04, 0.62, 0.23, 0.98] as const,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 sm:px-7 pt-1 text-sm sm:text-base text-muted leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL SECTION: INSTANT QUOTE & SOLAR CALCULATOR                           */}
        {/* ========================================================================= */}
        <section id="quote" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/70">
          <FadeIn>
            <SolarCalculator id="calculator" />
          </FadeIn>
        </section>
      </main>

      {/* Multi-Column Footer with Large Watermark */}
      <Footer />
    </div>
  );
}
