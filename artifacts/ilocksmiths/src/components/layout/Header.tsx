import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="iLocksmiths"
            className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-200"
          />
          <span className="text-xl font-bold tracking-tight text-white">iLocksmiths</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Pricing", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+447340041444">
            <Button
              variant="ghost"
              className="text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10 hidden lg:flex"
            >
              <Phone className="mr-2 h-4 w-4" />
              07340 041444
            </Button>
          </a>
          <a href="https://wa.me/447340041444" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-zinc-950 hover:bg-zinc-100 font-semibold">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="p-4 flex flex-col gap-1">
              {["Home", "Services", "Pricing", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm font-medium text-zinc-300 p-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <a href="tel:+447340041444" className="w-full">
                  <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </a>
                <a href="https://wa.me/447340041444" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-white text-zinc-950 font-semibold">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
