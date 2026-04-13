import { Link } from "wouter";
import { KeyRound, Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <KeyRound className="h-6 w-6 text-white" />
              <span className="text-xl font-bold tracking-tight text-white">iLocksmiths</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Premium 24/7 emergency locksmith services across London. Fast, reliable, and professional security solutions when you need them most.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/services/emergency-lockout" className="hover:text-white transition-colors">Emergency Lockout</Link></li>
              <li><Link href="/services/lock-repair" className="hover:text-white transition-colors">Lock Repairs</Link></li>
              <li><Link href="/services/upvc-door" className="hover:text-white transition-colors">UPVC Doors</Link></li>
              <li><Link href="/services/security-upgrade" className="hover:text-white transition-colors">Security Upgrades</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-zinc-300 shrink-0" />
                <a href="tel:+447340041444" className="hover:text-white transition-colors">07340 041444</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-zinc-300 shrink-0" />
                <a href="https://wa.me/447340041444" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-zinc-300 shrink-0" />
                <a href="mailto:sales@ilocksmiths.uk" className="hover:text-white transition-colors">sales@ilocksmiths.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-zinc-300 shrink-0" />
                <span>Greater London, UK<br/>24/7 Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} iLocksmiths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}