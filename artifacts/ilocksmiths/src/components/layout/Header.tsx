import { useState, useEffect } from "react";
import { Link } from "wouter";
import { KeyRound, Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <KeyRound className="h-6 w-6 text-white group-hover:text-zinc-300 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-white">iLocksmiths</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Services</Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+447340041444">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-white hidden lg:flex">
              <Phone className="mr-2 h-4 w-4" />
              07340 041444
            </Button>
          </a>
          <a href="https://wa.me/447340041444" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-zinc-950 hover:bg-zinc-200">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium text-zinc-300 p-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className="text-sm font-medium text-zinc-300 p-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-300 p-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-300 p-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-300 p-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <a href="tel:+447340041444" className="w-full">
              <Button variant="outline" className="w-full border-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </a>
            <a href="https://wa.me/447340041444" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-white text-zinc-950">
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}