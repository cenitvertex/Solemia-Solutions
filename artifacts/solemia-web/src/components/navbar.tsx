import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Por qué Solemia", href: "#por-que-solemia" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src={`${import.meta.env.BASE_URL}solemia-logo.jpg`}
                alt="Solemia"
                className="h-8 md:h-9 object-contain rounded-sm"
              />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "rgba(37,37,37,0.6)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C32D4B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(37,37,37,0.6)")}
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #C32D4B, #4B0F3C)",
                boxShadow: "0 4px 20px rgba(195,45,75,0.3)",
              }}
            >
              Diagnóstico gratis
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" style={{ color: "#252525" }}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-nav border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold rounded-lg"
                  style={{ color: "#252525" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-base font-bold text-white"
                style={{ background: "linear-gradient(135deg, #C32D4B, #4B0F3C)" }}
              >
                Diagnóstico gratis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
