"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Zap,
  Battery,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Home,
  Layers,
  Copy,
  Check,
  Percent,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { OFFICIAL_SOLAR_PACKAGES, SolarPackage, PARTNER_BANKS } from "@/data/packages";

export type RoofType = "Tile Roof" | "Asbestos" | "Zinc / Amano Sheet" | "Concrete Slab";

interface SolarCalculatorProps {
  id?: string;
  className?: string;
}

export function SolarCalculator({ id = "calculator", className = "" }: SolarCalculatorProps) {
  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const [bill, setBill] = useState<number>(35000);
  const [selectedPackageId, setSelectedPackageId] = useState<string>("5kw-offgrid");
  const [roofType, setRoofType] = useState<RoofType>("Tile Roof");
  const [copied, setCopied] = useState<boolean>(false);

  // Quick preset pills for convenience
  const billPresets = [15000, 35000, 65000, 95000, 150000];

  // Automatically determine the recommended package based on bill slider
  const autoPackageId = useMemo(() => {
    if (bill < 45000) {
      return "5kw-offgrid";
    } else if (bill <= 90000) {
      return "10kw-offgrid";
    } else {
      return "20kw-commercial";
    }
  }, [bill]);

  // Keep selectedPackage in sync when user adjusts slider, unless manually selected
  const activePackage = useMemo(() => {
    // If the currently selected package matches the tier, use it; otherwise fallback to auto
    const found = OFFICIAL_SOLAR_PACKAGES.find((p) => p.id === selectedPackageId);
    if (!found) return OFFICIAL_SOLAR_PACKAGES[0];

    // Check if current selectedPackage matches the bill range
    if (bill < 45000 && (selectedPackageId === "5kw-offgrid" || selectedPackageId === "5kw-hybrid")) {
      return found;
    }
    if (bill >= 45000 && bill <= 90000 && selectedPackageId === "10kw-offgrid") {
      return found;
    }
    if (bill > 90000 && selectedPackageId === "20kw-commercial") {
      return found;
    }

    // Default to the auto-matched package for this bill
    return OFFICIAL_SOLAR_PACKAGES.find((p) => p.id === autoPackageId) || OFFICIAL_SOLAR_PACKAGES[0];
  }, [bill, selectedPackageId, autoPackageId]);

  // ---------------------------------------------------------------------------
  // Calculations based on the Active Off-Grid Package
  // ---------------------------------------------------------------------------
  const calculation = useMemo(() => {
    const pkg = activePackage;
    const sizeKw = pkg.capacityKw;
    const panelsCount = pkg.hardware.panelsCount;
    const monthlyUnits = Math.round(sizeKw * 120);

    // Off-Grid battery systems provide 100% blackout immunity and drop bill to zero
    const reductionPct = 100;
    const monthlySavingsLkr = bill;
    const paybackYrs =
      pkg.id === "5kw-offgrid"
        ? 2.8
        : pkg.id === "5kw-hybrid"
        ? 3.2
        : pkg.id === "10kw-offgrid"
        ? 3.0
        : 2.6;

    return {
      pkg,
      sizeKw,
      panelsCount,
      monthlyUnits,
      reductionPct,
      monthlySavingsLkr,
      paybackYrs,
      minInvestment: pkg.priceNumber,
      maxInvestment: pkg.originalPriceNumber || (pkg.id === "5kw-offgrid" ? 1725000 : pkg.priceNumber * 1.15),
    };
  }, [bill, activePackage]);

  // ---------------------------------------------------------------------------
  // WhatsApp Message Generator (Strictly +94 70 227 1271)
  // ---------------------------------------------------------------------------
  const whatsappUrl = useMemo(() => {
    const message = `Hello Vertex Home Solutions! ☀️
I have just configured my Off-Grid solar quotation on your website:

• Monthly Electric Bill: LKR ${bill.toLocaleString()}
• Recommended System: ${calculation.pkg.name} (${calculation.sizeKw} kW)
• Hardware Configuration:
  - Inverter: ${calculation.pkg.hardware.inverter}
  - Battery: ${calculation.pkg.hardware.battery}
  - Solar Panels: ${calculation.pkg.hardware.panels}
• Roof Profile: ${roofType}
• Est. Monthly Generation: ~${calculation.monthlyUnits.toLocaleString()} kWh
• Starting / Offer Price: ${calculation.pkg.priceDisplay}
• Power Security: 100% Outage Protection (Zero Power Cuts, Zero Bills)
• Warranty: 10 Years Warranty Included
• Bank Installments: 0% Interest Credit Card Plans Available

I would like to request an official engineering proposal and schedule a free site inspection.`;

    return `https://wa.me/94702271271?text=${encodeURIComponent(message)}`;
  }, [bill, calculation, roofType]);

  const handleCopySummary = () => {
    const text = `Vertex Home Solutions Off-Grid Solar Quote:
Monthly Bill: LKR ${bill.toLocaleString()}
Recommended Package: ${calculation.pkg.name} (${calculation.sizeKw} kW)
Hardware: ${calculation.pkg.hardware.inverter} + ${calculation.pkg.hardware.battery} + ${calculation.pkg.hardware.panels}
Price: ${calculation.pkg.priceDisplay}
Roof Type: ${roofType}
Monthly Generation: ~${calculation.monthlyUnits} kWh
Features: Zero Power Cuts, 10 Years Warranty, Free Site Inspection
Hotline: +94 70 227 1271`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Slider progress percentage for custom fill track
  const sliderPercentage = ((bill - 10000) / (150000 - 10000)) * 100;

  return (
    <div id={id} className={`w-full max-w-7xl mx-auto ${className}`}>
      {/* Outer Bento Card */}
      <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden transition-all duration-300">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================================================================= */}
          {/* LEFT COLUMN: INTERACTIVE INPUTS (STEP 1)                          */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-lime/30 text-charcoal border border-lime/50 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-lime-dark" />
                <span>100% Off-Grid Solar Calculator</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal">
                Estimate Your System & Savings
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                Vertex Home Solutions specializes in 100% Off-Grid & Hybrid battery systems. 
                Move the slider to match your monthly CEB/LECO bill and explore our official systems.
              </p>
            </div>

            {/* Input 1: Monthly Electricity Bill Slider */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label
                  htmlFor="bill-range-input"
                  className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5"
                >
                  <Zap className="w-4 h-4 text-lime-dark" />
                  <span>1. Monthly Electricity Bill (LKR)</span>
                </label>
                <div className="inline-flex items-baseline gap-1 bg-[#F9FBE7] px-4 py-1.5 rounded-full border border-lime/60 shadow-xs">
                  <span className="text-xs font-bold text-charcoal/70">LKR</span>
                  <span className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">
                    {bill.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-muted">/mo</span>
                </div>
              </div>

              {/* Slider Track with Custom Fill */}
              <div className="relative pt-2 pb-1">
                <input
                  id="bill-range-input"
                  type="range"
                  min={10000}
                  max={150000}
                  step={2500}
                  value={bill}
                  onChange={(e) => {
                    const newBill = Number(e.target.value);
                    setBill(newBill);
                  }}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#111827] focus:outline-none focus:ring-2 focus:ring-lime"
                  style={{
                    background: `linear-gradient(to right, #C8F169 0%, #C8F169 ${sliderPercentage}%, #E5E7EB ${sliderPercentage}%, #E5E7EB 100%)`,
                  }}
                  aria-label="Monthly Electricity Bill Slider"
                />
                <div className="flex justify-between text-[11px] text-muted font-medium mt-2">
                  <span>LKR 10,000</span>
                  <span className="text-charcoal font-semibold">LKR 45,000 (5kW)</span>
                  <span className="text-charcoal font-semibold">LKR 90,000 (10kW)</span>
                  <span>LKR 150,000+ (20kW)</span>
                </div>
              </div>

              {/* Quick Preset Pills */}
              <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted font-medium mr-1">Quick Select:</span>
                {billPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setBill(preset)}
                    className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all duration-150 ${
                      bill === preset
                        ? "bg-charcoal text-white shadow-xs"
                        : "bg-surface hover:bg-gray-100 text-charcoal border border-gray-200"
                    }`}
                  >
                    LKR {preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Matched Off-Grid Package Selector */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                  <Battery className="w-4 h-4 text-lime-dark" />
                  <span>2. Official Off-Grid Packages</span>
                </label>
                <span className="text-[11px] text-lime-dark font-bold bg-[#F9FBE7] px-2.5 py-0.5 rounded-full border border-lime/40">
                  100% Battery Backup
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OFFICIAL_SOLAR_PACKAGES.map((pkg) => {
                  const isSelected = activePackage.id === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setSelectedPackageId(pkg.id);
                        if (pkg.id === "5kw-offgrid" && bill > 45000) setBill(35000);
                        if (pkg.id === "5kw-hybrid" && bill > 45000) setBill(40000);
                        if (pkg.id === "10kw-offgrid" && (bill < 45000 || bill > 90000)) setBill(65000);
                        if (pkg.id === "20kw-commercial" && bill <= 90000) setBill(110000);
                      }}
                      className={`p-3.5 rounded-2xl text-left transition-all border relative overflow-hidden hover:scale-[1.01] active:scale-[0.99] ${
                        isSelected
                          ? "bg-[#F9FBE7] border-lime ring-2 ring-lime/70 shadow-sm"
                          : "bg-surface hover:bg-gray-50 border-gray-200 text-charcoal"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-gray-200/80 text-charcoal">
                          {pkg.badge}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-charcoal fill-lime" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-charcoal block leading-snug">
                        {pkg.name}
                      </span>
                      <span className="text-xs text-lime-dark font-black block mt-1">
                        {pkg.priceDisplay}
                        {pkg.originalPriceDisplay && (
                          <span className="text-[10px] text-gray-400 line-through font-normal ml-1.5">
                            {pkg.originalPriceDisplay}
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] text-muted block mt-1 leading-snug line-clamp-1">
                        {pkg.hardware.inverter} + {pkg.hardware.battery}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 3: Roof Type Selector */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <Home className="w-4 h-4 text-lime-dark" />
                <span>3. Roof Surface Structure</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { name: "Tile Roof" as RoofType, detail: "Clay / Roman" },
                  { name: "Asbestos" as RoofType, detail: "Corrugated" },
                  { name: "Zinc / Amano Sheet" as RoofType, detail: "Standing Seam" },
                  { name: "Concrete Slab" as RoofType, detail: "Flat Deck" },
                ].map((roof) => {
                  const isSelected = roofType === roof.name;
                  return (
                    <button
                      key={roof.name}
                      type="button"
                      onClick={() => setRoofType(roof.name)}
                      className={`p-3 rounded-2xl text-left transition-all border hover:scale-105 active:scale-95 ${
                        isSelected
                          ? "bg-charcoal text-white border-charcoal shadow-sm ring-2 ring-charcoal/20"
                          : "bg-surface hover:bg-gray-100 text-charcoal border-gray-200"
                      }`}
                    >
                      <span className="text-xs font-bold block">{roof.name}</span>
                      <span
                        className={`text-[10px] block mt-0.5 ${
                          isSelected ? "text-lime" : "text-muted"
                        }`}
                      >
                        {roof.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: INSTANT DYNAMIC RESULTS (STEP 2)                   */}
          {/* ================================================================= */}
          <div className="lg:col-span-5">
            <div className="bg-charcoal text-white rounded-3xl p-6 sm:p-8 border border-charcoal shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Header status */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lime bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
                    <span>Zero Electricity Bills • Zero Power Cuts</span>
                  </span>
                  <span className="text-[10px] text-gray-300 font-mono bg-white/5 px-2.5 py-0.5 rounded-full">
                    100% Off-Grid
                  </span>
                </div>

                {/* Main Hero Result: Recommended System Capacity with Micro-Pulse */}
                <motion.div
                  key={`tier-${calculation.pkg.id}`}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                  className="pt-1 border-b border-white/10 pb-6"
                >
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold block">
                    Recommended System Package
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      <AnimatedCounter
                        value={calculation.sizeKw}
                        decimals={calculation.sizeKw % 1 === 0 ? 0 : 2}
                        suffix=" kW"
                        duration={0.6}
                      />
                    </h4>
                    <motion.span
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-lime text-xs font-bold px-2.5 py-0.5 rounded-md bg-lime/20 border border-lime/40"
                    >
                      {calculation.pkg.badge}
                    </motion.span>
                  </div>
                  <p className="text-sm font-bold text-white mt-2 leading-snug">
                    {calculation.pkg.name}
                  </p>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {calculation.pkg.hardware.inverter} + {calculation.pkg.hardware.battery} + {calculation.pkg.hardware.panels}
                  </p>
                </motion.div>

                {/* 4-Box Key Performance Metrics with Rolling Tickers */}
                <div className="grid grid-cols-2 gap-3.5 text-left">
                  {/* Metric 1: Panel Count */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/40 transition-colors">
                    <span className="text-[11px] text-gray-300 block">
                      Solar Array
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      <AnimatedCounter
                        value={calculation.panelsCount}
                        duration={0.6}
                      />
                      <span className="text-xs font-normal text-gray-300 ml-1">Panels</span>
                    </span>
                    <span className="text-[10px] text-lime block mt-0.5 font-medium">
                      Jinko {calculation.pkg.hardware.panelWattage} High-Yield
                    </span>
                  </div>

                  {/* Metric 2: Monthly Generation */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/40 transition-colors">
                    <span className="text-[11px] text-gray-300 block">
                      Monthly Generation
                    </span>
                    <span className="text-xl font-black text-lime block mt-0.5">
                      ~
                      <AnimatedCounter
                        value={calculation.monthlyUnits}
                        duration={0.6}
                      />
                    </span>
                    <span className="text-[10px] text-gray-300 block mt-0.5 font-medium">
                      Units (kWh) / Month
                    </span>
                  </div>

                  {/* Metric 3: Bill Reduction & Est. Monthly Savings */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/40 transition-colors">
                    <span className="text-[11px] text-gray-300 block">
                      Electricity Bill
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      100% Off-Grid
                    </span>
                    <span className="text-[11px] text-lime block mt-0.5 font-bold">
                      Save LKR <AnimatedCounter value={calculation.monthlySavingsLkr} duration={0.6} />
                      <span className="text-[9px] text-gray-400 font-normal"> /mo</span>
                    </span>
                  </div>

                  {/* Metric 4: Est. Payback */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/40 transition-colors">
                    <span className="text-[11px] text-gray-300 block">
                      Payback Period
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      <AnimatedCounter
                        value={calculation.paybackYrs}
                        decimals={1}
                        suffix=" Yrs"
                        duration={0.6}
                      />
                    </span>
                    <span className="text-[10px] text-lime block mt-0.5 font-medium">
                      10-Year Hardware Warranty
                    </span>
                  </div>
                </div>

                {/* Investment Estimate Box with Real Package Prices */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15">
                  <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">
                      Official System Package Price
                    </span>
                    <span className="text-[10px] text-lime font-mono">Verified Pricing</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex flex-wrap items-baseline gap-2">
                    <span className="text-lime">{calculation.pkg.priceDisplay}</span>
                    {calculation.pkg.originalPriceDisplay && (
                      <span className="text-sm text-gray-400 line-through font-normal">
                        {calculation.pkg.originalPriceDisplay}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-300 mt-2 leading-snug">
                    *Complete system includes inverters, battery storage, Tier-1 Jinko panels, mounting brackets for{" "}
                    <span className="text-lime">{roofType}</span>, safety switchover gear, and installation.
                  </p>
                </div>

                {/* 0% Bank Installments Banner */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Percent className="w-4 h-4 text-lime" />
                    <span className="text-xs font-bold text-white">0% Bank Credit Card Installments</span>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Available through our banking partners: {PARTNER_BANKS.join(", ")}.
                  </p>
                </div>

                {/* Call to Action: WhatsApp Quote Delivery */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full font-extrabold text-sm bg-lime hover:bg-lime-hover text-charcoal shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 group hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {/* Official WhatsApp SVG */}
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Request Free Site Inspection on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-charcoal group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Secondary Quick Action: Copy Quotation Details */}
                  <div className="flex items-center justify-between text-xs text-gray-400 px-1 pt-1">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-lime" />
                          <span className="text-lime font-bold">Summary Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Quote Summary</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-gray-400">
                      Hotline: <strong className="text-white">+94 70 227 1271</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
