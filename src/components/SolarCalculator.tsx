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
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export type SystemType = "On-Grid (Net Metering)" | "Hybrid (With Battery Backup)";
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
  const [systemType, setSystemType] = useState<SystemType>("On-Grid (Net Metering)");
  const [roofType, setRoofType] = useState<RoofType>("Tile Roof");
  const [copied, setCopied] = useState<boolean>(false);

  // Quick preset pills for convenience
  const billPresets = [15000, 35000, 60000, 95000, 150000];

  // ---------------------------------------------------------------------------
  // Calculations based on Sri Lanka Solar Standards
  // ---------------------------------------------------------------------------
  const calculation = useMemo(() => {
    let sizeKw = 3;
    let baseMinLkr = 850000;
    let baseMaxLkr = 980000;
    let reductionPct = 90;
    let paybackYrs = 3.6;

    if (bill < 20000) {
      sizeKw = 3;
      baseMinLkr = 850000;
      baseMaxLkr = 980000;
      reductionPct = 88;
      paybackYrs = 3.8;
    } else if (bill <= 45000) {
      sizeKw = 5;
      baseMinLkr = 1350000;
      baseMaxLkr = 1550000;
      reductionPct = 92;
      paybackYrs = 3.4;
    } else if (bill <= 80000) {
      sizeKw = 10;
      baseMinLkr = 2450000;
      baseMaxLkr = 2750000;
      reductionPct = 94;
      paybackYrs = 3.2;
    } else if (bill <= 120000) {
      sizeKw = 15;
      baseMinLkr = 3500000;
      baseMaxLkr = 3950000;
      reductionPct = 95;
      paybackYrs = 3.0;
    } else {
      sizeKw = 20;
      baseMinLkr = 4600000;
      baseMaxLkr = 5200000;
      reductionPct = 96;
      paybackYrs = 2.9;
    }

    // Number of 580W Tier-1 Bifacial panels
    // (sizeKw * 1000) / 580 rounded up
    const panelsCount = Math.ceil((sizeKw * 1000) / 580);

    // Units (kWh) generated per month in Sri Lanka: ~120 kWh per kW
    const monthlyUnits = sizeKw * 120;

    // Hybrid with battery storage adds premium for high-cycle LiFePO4 batteries
    const isHybrid = systemType === "Hybrid (With Battery Backup)";
    const minInvestment = isHybrid ? Math.round(baseMinLkr * 1.55) : baseMinLkr;
    const maxInvestment = isHybrid ? Math.round(baseMaxLkr * 1.58) : baseMaxLkr;
    const actualReduction = isHybrid ? Math.min(reductionPct + 4, 99) : reductionPct;

    return {
      sizeKw,
      panelsCount,
      monthlyUnits,
      reductionPct: actualReduction,
      paybackYrs,
      minInvestment,
      maxInvestment,
      isHybrid,
    };
  }, [bill, systemType]);

  // ---------------------------------------------------------------------------
  // WhatsApp Message Generator
  // ---------------------------------------------------------------------------
  const whatsappUrl = useMemo(() => {
    const message = `Hello Vertex Home Solutions! ☀️
I have just configured my solar quotation on your website:

• Monthly Electric Bill: LKR ${bill.toLocaleString()}
• Recommended System: ${calculation.sizeKw} kW (${calculation.panelsCount}x 580W Tier-1 Panels)
• System Topology: ${systemType}
• Roof Profile: ${roofType}
• Est. Monthly Generation: ~${calculation.monthlyUnits.toLocaleString()} Units (kWh)
• Est. Bill Reduction: Up to ${calculation.reductionPct}% savings
• Est. Investment Range: LKR ${calculation.minInvestment.toLocaleString()} – LKR ${calculation.maxInvestment.toLocaleString()}

I would like to request an official engineering proposal and schedule a free roof inspection.`;

    return `https://wa.me/94702271271?text=${encodeURIComponent(message)}`;
  }, [bill, calculation, systemType, roofType]);

  const handleCopySummary = () => {
    const text = `Vertex Home Solutions Solar Quote:
Monthly Bill: LKR ${bill.toLocaleString()}
Recommended: ${calculation.sizeKw} kW (${calculation.panelsCount}x 580W Panels)
System: ${systemType}
Roof Type: ${roofType}
Monthly Generation: ~${calculation.monthlyUnits} kWh
Investment Range: LKR ${calculation.minInvestment.toLocaleString()} - LKR ${calculation.maxInvestment.toLocaleString()}
Contact: +94 70 227 1271`;

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
                <Sparkles className="w-3.5 h-3.5 fill-lime-dark text-lime-dark" />
                <span>Smart Quotation Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
                Calculate Your Solar Savings
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-2 max-w-xl leading-relaxed">
                Adjust your monthly electricity expense to see instant system sizing,
                panel count, generation metrics, and estimated Sri Lankan market investment.
              </p>
            </div>

            {/* Input 1: Monthly Electricity Bill Slider */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label
                  htmlFor="bill-slider"
                  className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5"
                >
                  <Zap className="w-4 h-4 text-lime-dark" />
                  <span>1. Monthly Electricity Bill (LKR)</span>
                </label>

                {/* Big Dynamic Value Badge */}
                <div className="px-4 py-1.5 rounded-full bg-charcoal text-white font-extrabold text-sm sm:text-base tracking-tight shadow-sm flex items-center gap-1.5">
                  <span className="text-lime font-mono">LKR</span>
                  <span>{bill.toLocaleString()}</span>
                  <span className="text-[11px] text-gray-300 font-normal">/ mo</span>
                </div>
              </div>

              {/* Slider Track */}
              <div className="pt-2 pb-1">
                <input
                  id="bill-slider"
                  type="range"
                  min={10000}
                  max={150000}
                  step={2500}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime"
                  style={{
                    background: `linear-gradient(to right, #C8F169 0%, #C8F169 ${sliderPercentage}%, #E5E7EB ${sliderPercentage}%, #E5E7EB 100%)`,
                  }}
                  aria-label="Monthly Electricity Bill Slider"
                />

                <div className="flex justify-between items-center text-[11px] text-muted font-medium mt-2">
                  <span>LKR 10,000</span>
                  <span className="hidden sm:inline">LKR 75,000</span>
                  <span>LKR 150,000+</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="pt-1">
                <span className="text-[11px] font-semibold text-muted block mb-2">
                  Quick Select Presets:
                </span>
                <div className="flex flex-wrap gap-2">
                  {billPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBill(preset)}
                      className={`text-xs font-bold py-1.5 px-3 rounded-full transition-all border ${
                        bill === preset
                          ? "bg-lime text-charcoal border-lime-dark shadow-xs"
                          : "bg-surface hover:bg-gray-100 text-charcoal border-gray-200"
                      }`}
                    >
                      LKR {preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input 2: System Type Selector */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <Battery className="w-4 h-4 text-lime-dark" />
                <span>2. System Storage & Interconnection Topology</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    type: "On-Grid (Net Metering)" as SystemType,
                    tag: "Standard & Cost-Effective",
                    desc: "Maximizes utility credits with lowest upfront investment. Powered by direct CEB/LECO sync.",
                  },
                  {
                    type: "Hybrid (With Battery Backup)" as SystemType,
                    tag: "Blackout Protected",
                    desc: "Includes high-cycle LiFePO4 battery storage for zero-flicker blackout immunity and night power.",
                  },
                ].map((item) => {
                  const isSelected = systemType === item.type;
                  return (
                    <button
                      key={item.type}
                      type="button"
                      onClick={() => setSystemType(item.type)}
                      className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden hover:scale-[1.01] active:scale-[0.99] ${
                        isSelected
                          ? "bg-[#F9FBE7] border-lime ring-2 ring-lime/70 shadow-sm"
                          : "bg-surface hover:bg-gray-50 border-gray-200 text-charcoal"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-gray-200/80 text-charcoal">
                          {item.tag}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-charcoal fill-lime" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-charcoal block">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted block mt-1 leading-snug">
                        {item.desc}
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
                    <span>Instant Live Calculation</span>
                  </span>
                  <span className="text-[10px] text-gray-300 font-mono bg-white/5 px-2.5 py-0.5 rounded-full">
                    CEB/LECO Grid Ready
                  </span>
                </div>

                {/* Main Hero Result: Recommended System Capacity */}
                <div className="pt-1 border-b border-white/10 pb-6">
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold block">
                    Recommended System Capacity
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      <AnimatedCounter
                        key={`size-${calculation.sizeKw}`}
                        value={calculation.sizeKw}
                        suffix=" kW"
                      />
                    </h4>
                    <span className="text-lime text-xs font-bold px-2 py-0.5 rounded-md bg-lime/20 border border-lime/40">
                      Tier-1 580W Panels
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Engineered to offset 100% of your average monthly power consumption.
                  </p>
                </div>

                {/* 4-Box Key Performance Metrics */}
                <div className="grid grid-cols-2 gap-3.5 text-left">
                  {/* Metric 1: Panel Count */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-gray-300 block">
                      Estimated Panels
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      <AnimatedCounter
                        key={`panels-${calculation.panelsCount}`}
                        value={calculation.panelsCount}
                      />
                      <span className="text-xs font-normal text-gray-300 ml-1">Modules</span>
                    </span>
                    <span className="text-[10px] text-lime block mt-0.5 font-medium">
                      580W Bifacial High-Yield
                    </span>
                  </div>

                  {/* Metric 2: Monthly Generation */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-gray-300 block">
                      Monthly Generation
                    </span>
                    <span className="text-xl font-black text-lime block mt-0.5">
                      ~
                      <AnimatedCounter
                        key={`units-${calculation.monthlyUnits}`}
                        value={calculation.monthlyUnits}
                      />
                    </span>
                    <span className="text-[10px] text-gray-300 block mt-0.5 font-medium">
                      Units (kWh) / Month
                    </span>
                  </div>

                  {/* Metric 3: Bill Reduction */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-gray-300 block">
                      Bill Reduction
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      Up to{" "}
                      <AnimatedCounter
                        key={`reduction-${calculation.reductionPct}`}
                        value={calculation.reductionPct}
                        suffix="%"
                      />
                    </span>
                    <span className="text-[10px] text-lime block mt-0.5 font-medium">
                      Substantial Savings
                    </span>
                  </div>

                  {/* Metric 4: Est. Payback */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-gray-300 block">
                      Payback Period
                    </span>
                    <span className="text-xl font-black text-white block mt-0.5">
                      <AnimatedCounter
                        key={`payback-${calculation.paybackYrs}`}
                        value={calculation.paybackYrs}
                        decimals={1}
                        suffix=" Yrs"
                      />
                    </span>
                    <span className="text-[10px] text-gray-300 block mt-0.5 font-medium">
                      25-Yr System Lifetime
                    </span>
                  </div>
                </div>

                {/* Investment Estimate Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15">
                  <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">
                      Estimated Investment Range (LKR)
                    </span>
                    <span className="text-[10px] text-lime font-mono">Sri Lanka Market Rate</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    LKR {calculation.minInvestment.toLocaleString()} – LKR{" "}
                    {calculation.maxInvestment.toLocaleString()}
                  </div>
                  <p className="text-[10px] text-gray-300 mt-1 leading-snug">
                    *Includes Tier-1 580W solar panels, certified inverter, mounting structure for{" "}
                    <span className="text-lime">{roofType}</span>, CEB/LECO grid liaison, and installation.
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
                    <span>Send My Quotation to WhatsApp</span>
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
