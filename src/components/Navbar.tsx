"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Zap, ShieldCheck } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  return (
    <>
      {/* Top Progress Indicator: Slim 2px Lime Green Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-lime origin-left z-[100] shadow-[0_0_8px_rgba(200,241,105,0.8)]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "pt-2 sm:pt-3 px-4 sm:px-6 lg:px-8"
            : "pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.nav
            animate={{
              backgroundColor: scrolled
                ? "rgba(255, 255, 255, 0.75)"
                : "rgba(255, 255, 255, 0)",
              backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
              borderColor: scrolled ? "rgba(0, 0, 0, 0.05)" : "transparent",
              boxShadow: scrolled
                ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
                : "0 0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
              scrolled ? "py-1.5 px-3 sm:px-4" : "py-2 px-0"
            }`}
            aria-label="Main Navigation"
          >
          {/* Left: Bold Vertex Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-full py-1.5 px-3 backdrop-blur-md bg-white/60 hover:bg-white/80 border border-white/60 shadow-glass-sm transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-lime shadow-sm group-hover:scale-105 group-hover:bg-black transition-transform duration-200">
              <Zap className="w-4 h-4 fill-lime stroke-charcoal stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-charcoal group-hover:text-black transition-colors leading-none">
                Vertex<span className="text-lime-dark">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-muted mt-0.5">
                Home Solutions
              </span>
            </div>
          </Link>

          {/* Center: Frosted Glass Pill Container (Desktop) */}
          <div className="hidden md:flex items-center">
            <div className="backdrop-blur-md bg-white/50 hover:bg-white/70 border border-white/60 shadow-glass rounded-full py-2 px-6 transition-all duration-300">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);
                  return (
                    <li key={item.name} className="relative">
                      <Link
                        href={item.href}
                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 block ${
                          isActive
                            ? "text-charcoal font-semibold"
                            : "text-muted hover:text-charcoal"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white/90 rounded-full shadow-sm -z-10 border border-black/5"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right: WhatsApp direct icon + Crisp White/Lime Pill Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick WhatsApp Direct Call Icon */}
            <motion.a
              href="https://wa.me/94702271271"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              title="Direct WhatsApp: +94 70 227 1271"
              aria-label="Direct WhatsApp Contact (+94 70 227 1271)"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="hidden sm:inline-block"
            >
              <Link
                href="/contact#calculator"
                onClick={(e) => {
                  if (pathname === "/contact") {
                    e.preventDefault();
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold text-sm text-charcoal bg-lime hover:bg-lime-hover shadow-[0_4px_16px_rgba(200,241,105,0.4)] hover:shadow-[0_6px_22px_rgba(200,241,105,0.55)] border border-lime-dark/30 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lime"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md bg-white/80 border border-white/60 text-charcoal shadow-sm hover:bg-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-charcoal" />
              ) : (
                <Menu className="w-5 h-5 text-charcoal" />
              )}
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Dropdown (Glassmorphism Modal/Panel) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden mt-3 max-w-lg mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/90 border border-white/70 shadow-2xl rounded-3xl p-5 overflow-hidden">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-lime/20 text-charcoal font-semibold"
                          : "text-muted hover:text-charcoal hover:bg-surface"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  href="/contact#calculator"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (pathname === "/contact") {
                      document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-charcoal bg-lime hover:bg-lime-hover shadow-md transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Get a Quote (Solar Calculator)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/94702271271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp: +94 70 227 1271</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-muted pt-1">
                  <ShieldCheck className="w-4 h-4 text-lime-dark" />
                  <span>25-Year Production & System Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
