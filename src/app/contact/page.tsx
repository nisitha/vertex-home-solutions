"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillBadge } from "@/components/ui/PillBadge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Zap,
  Sun,
  Home,
  Layers,
  Send,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SolarCalculator } from "@/components/SolarCalculator";

export default function ContactPage() {
  // Form Submission State
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    preferredChannel: "WhatsApp",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-charcoal flex flex-col relative selection:bg-lime selection:text-charcoal">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-10">
          <FadeIn className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <PillBadge variant="lime" dot={true}>
                Instant Solar Estimation & Consultation
              </PillBadge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tightest text-charcoal leading-tight">
              Calculate your savings and get a{" "}
              <span className="relative inline-block px-3 py-1 bg-lime text-charcoal rounded-2xl shadow-sm rotate-[-1deg]">
                custom quote
              </span>{" "}
              in seconds.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Configure your roof profile below to receive an instant estimate, or
              speak directly with our solar engineering and operations team.
            </p>
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE SOLAR BILL CALCULATOR                                         */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
          <FadeIn>
            <SolarCalculator id="calculator" />
          </FadeIn>
        </section>

        {/* ========================================================================= */}
        {/* OFFICIAL PROPOSAL INQUIRY & CONTACT CHANNELS                              */}
        {/* ========================================================================= */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Cols: Official Proposal Request Form */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-4xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                Request Official Engineering Proposal & Site Visit
              </h2>
              <p className="text-sm text-muted mt-1.5 mb-8">
                Enter your property details to receive a complimentary 3D satellite roof layout,
                CEB/LECO grid interconnection feasibility, and official quotation.
              </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-3xl bg-lime/25 border border-lime text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-charcoal text-lime flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-black text-charcoal">
                      Proposal Request Received!
                    </h4>
                    <p className="text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed">
                      Our certified solar engineering team is generating your customized
                      solar savings model. We will contact you via{" "}
                      <strong>{formData.preferredChannel || "WhatsApp"}</strong> (
                      {formData.phone || "+94 70 227 1271"}) within 15 minutes.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://wa.me/94702271271?text=Hello%20Vertex%20Home%20Solutions,%20I%20just%20submitted%20a%20solar%20quote%20request%20on%20your%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Chat Directly on WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-3 rounded-full bg-white border border-gray-300 text-charcoal font-bold text-xs hover:bg-gray-50 transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-charcoal block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Sunil Perera"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-charcoal block mb-1">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+94 70 227 1271"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-charcoal block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="operations@vertexhomeslk.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-charcoal block mb-1">
                          Property Location / District *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          placeholder="Colombo / Kandy / Galle / Gampaha"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
                        />
                      </div>
                    </div>

                    {/* Preferred Response Channel */}
                    <div>
                      <label className="text-xs font-semibold text-charcoal block mb-2">
                        Preferred Response Method
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {["WhatsApp", "Phone Call", "Email"].map((method) => {
                          const isSelected = formData.preferredChannel === method;
                          return (
                            <button
                              key={method}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, preferredChannel: method })
                              }
                              className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border ${
                                isSelected
                                  ? "bg-charcoal text-white border-charcoal shadow-sm"
                                  : "bg-white text-charcoal border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {method === "WhatsApp" ? "💬 WhatsApp" : method === "Phone Call" ? "📞 Phone Call" : "✉️ Email"}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-charcoal block mb-1">
                        Additional Notes (e.g., CEB/LECO consumer account, battery backup needed)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="Looking for a 5kW Off-Grid Hybrid system with battery backup; 3-phase connection."
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-bold text-sm bg-charcoal text-white hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg group hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Submit For Free Solar Engineering Assessment</span>
                      <Send className="w-4 h-4 text-lime group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
            </div>

            {/* Right 5 Cols: Support Channels & Headquarters Map */}
            <div className="lg:col-span-5 space-y-6">

              {/* Office Details & Hotline Box */}
              <FadeIn delay={0.25}>
                <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-charcoal">
                      Official Contact Channels
                    </h4>
                    <span className="text-[11px] font-bold text-[#128C7E] bg-[#25D366]/15 border border-[#25D366]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Online Now
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    {/* Hotline & WhatsApp */}
                    <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start justify-between gap-3 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-muted font-bold block">
                            WhatsApp / Hotline
                          </span>
                          <a
                            href="https://wa.me/94702271271"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-extrabold text-charcoal text-base hover:text-[#128C7E] hover:underline block leading-tight mt-0.5"
                          >
                            +94 70 227 1271
                          </a>
                          <span className="text-[11px] text-muted block mt-0.5">
                            Direct technical consultation & instant quotes
                          </span>
                        </div>
                      </div>
                      <a
                        href="tel:+94702271271"
                        className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors shrink-0"
                        title="Call Hotline: +94 70 227 1271"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Email */}
                    <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start justify-between gap-3 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-lime/30 text-charcoal flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-lime-dark" />
                        </div>
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-muted font-bold block">
                            Official Email Inquiries
                          </span>
                          <a
                            href="mailto:operations@vertexhomeslk.com"
                            className="font-bold text-charcoal hover:underline block break-all leading-tight mt-0.5 text-xs sm:text-sm"
                          >
                            operations@vertexhomeslk.com
                          </a>
                          <span className="text-[11px] text-muted block mt-0.5">
                            Commercial proposals & formal correspondence
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Facebook */}
                    <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start justify-between gap-3 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M9.197 22H13v-7.66h2.57l.385-2.98H13V9.45c0-.86.24-1.45 1.47-1.45h1.57V5.33c-.27-.03-1.21-.12-2.31-.12-2.29 0-3.86 1.4-3.86 3.97v2.18H7.4v2.98h2.47v7.66z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-muted font-bold block">
                            Official Facebook Page
                          </span>
                          <a
                            href="https://web.facebook.com/vertexenergylk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-charcoal hover:text-[#1877F2] hover:underline block leading-tight mt-0.5"
                          >
                            facebook.com/vertexenergylk ↗
                          </a>
                          <span className="text-[11px] text-muted block mt-0.5">
                            Customer reviews, project photos & video tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dual Direct Buttons: WhatsApp + Facebook */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <a
                      href="https://wa.me/94702271271?text=Hello%20Vertex%20Home%20Solutions,%20I%20would%20like%20to%20request%20a%20solar%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>WhatsApp Chat</span>
                    </a>

                    <a
                      href="https://web.facebook.com/vertexenergylk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M9.197 22H13v-7.66h2.57l.385-2.98H13V9.45c0-.86.24-1.45 1.47-1.45h1.57V5.33c-.27-.03-1.21-.12-2.31-.12-2.29 0-3.86 1.4-3.86 3.97v2.18H7.4v2.98h2.47v7.66z" />
                      </svg>
                      <span>Facebook Page ↗</span>
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Google Map Stylized Placeholder */}
              <FadeIn delay={0.35}>
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm p-3 transition-all duration-300 hover:shadow-md">
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-[#e5e3df] flex flex-col justify-between p-4 border border-gray-200">
                    {/* Map Styling Grid Background */}
                    <div
                      className="absolute inset-0 opacity-40 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(#9ca3af 1px, transparent 1px)`,
                        backgroundSize: "16px 16px",
                      }}
                    />

                    {/* Top GPS Tag */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-charcoal border border-gray-200 shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>Vertex Operations • Sri Lanka</span>
                      </span>
                      <span className="text-[10px] text-muted font-mono bg-white/80 px-2 py-0.5 rounded-full">
                        6.9271° N, 79.8612° E
                      </span>
                    </div>

                    {/* Center Pin */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <div className="w-10 h-10 rounded-full bg-charcoal text-lime flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                        <MapPin className="w-5 h-5 fill-lime stroke-charcoal stroke-2" />
                      </div>
                      <span className="text-xs font-bold text-charcoal bg-white/95 px-3 py-1 rounded-full shadow-md mt-2 border border-gray-200">
                        Vertex Home Solutions Center
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[11px] text-muted">
                      <span>Google Maps Verified Location</span>
                      <a
                        href="https://maps.google.com/?q=Sri+Lanka+Solar+Energy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-charcoal hover:underline"
                      >
                        Open in Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
