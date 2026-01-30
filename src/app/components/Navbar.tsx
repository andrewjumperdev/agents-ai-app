"use client";
import React, { useState, useEffect } from "react";
import { Lang } from "../types/types";
import Image from "next/image";
import Link from "next/link";
import { translations } from "../libs/translations";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  links?: { label: string; href: string }[];
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const flagMap: Record<Lang, string> = {
  es: "/flags/es.png",
  en: "/flags/en.png",
  fr: "/flags/fr.png",
};

const navLinks = {
  es: [
    { label: "Agentes", href: "#agents" },
    { label: "Proceso", href: "#process" },
    { label: "Precios", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  en: [
    { label: "Agents", href: "#agents" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  fr: [
    { label: "Agents", href: "#agents" },
    { label: "Processus", href: "#process" },
    { label: "Tarifs", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
};

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang] || translations["en"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src="/logo.svg"
                  alt="Jumper AI"
                  width={44}
                  height={44}
                  className="relative w-10 h-10 md:w-11 md:h-11"
                />
              </div>
              <span className="hidden sm:block text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Jumper<span className="text-amber-500">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks[lang].map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-gray-300 hover:text-amber-400 font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-3/4 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200"
                >
                  <Image
                    src={flagMap[lang]}
                    alt={lang}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="hidden sm:block text-sm text-gray-300">
                    {lang.toUpperCase()}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-32 bg-[#1a1a2e]/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl overflow-hidden"
                    >
                      {(["es", "en", "fr"] as Lang[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            setLang(l);
                            setDropdownOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                            lang === l
                              ? "bg-amber-500/20 text-amber-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <Image
                            src={flagMap[l]}
                            alt={l}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span className="font-medium">{l.toUpperCase()}</span>
                          {lang === l && (
                            <svg className="w-4 h-4 ml-auto text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog Button */}
              <Link href={`/blog/${lang}`}>
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  Blog
                </button>
              </Link>

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick("#pricing")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
              >
                {t.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks[lang].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Link
                  href={`/blog/${lang}`}
                  className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <button
                  onClick={() => handleNavClick("#pricing")}
                  className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-full"
                >
                  {t.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Click outside to close dropdown */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
