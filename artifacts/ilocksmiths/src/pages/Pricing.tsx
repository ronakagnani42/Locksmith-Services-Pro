import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";

const pricingTiers = [
  {
    name: "Standard Access",
    price: "£59",
    description: "For standard emergency lockouts during regular hours.",
    features: [
      "Standard Yale cylinder entry",
      "Non-destructive methods prioritised",
      "30-minute response time",
      "No call-out fee"
    ]
  },
  {
    name: "Advanced Repair",
    price: "£89",
    description: "For complex mechanisms, UPVC doors, or night emergencies.",
    highlighted: true,
    features: [
      "UPVC & composite door mechanisms",
      "British Standard (BS3621) lock fitting",
      "Out of hours priority response",
      "12-month parts guarantee",
      "Free security check"
    ]
  },
  {
    name: "Full Security Upgrade",
    price: "£149",
    description: "Complete lock replacement and security reinforcement.",
    features: [
      "Anti-snap cylinder upgrades",
      "Multi-point lock overhaul",
      "Insurance compliant assessment",
      "Multiple door discount available",
      "Dedicated account manager"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
              CLEAR <span className="text-zinc-500">PRICING.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              No hidden fees. No call-out charges. Just honest, transparent pricing for premium locksmith services in London.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col relative ${
                tier.highlighted 
                  ? "bg-white text-zinc-950 border-white shadow-[0_0_40px_rgba(255,255,255,0.1)]" 
                  : "bg-zinc-900/50 border-white/10 text-white"
              }`}>
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full border border-white/20">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="p-8 pb-0 text-center">
                  <h3 className={`text-xl font-bold mb-4 ${tier.highlighted ? "text-zinc-900" : "text-white"}`}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-sm font-medium opacity-70 uppercase tracking-widest">From</span>
                    <div className={`text-5xl font-extrabold my-2 ${tier.highlighted ? "text-zinc-950" : "text-white"}`}>
                      {tier.price}
                    </div>
                  </div>
                  <p className={`text-sm ${tier.highlighted ? "text-zinc-600" : "text-zinc-400"}`}>
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-6 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.highlighted ? "text-zinc-950" : "text-white"}`} />
                        <span className={`text-sm ${tier.highlighted ? "text-zinc-700" : "text-zinc-300"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="w-full mt-auto">
                    <Button 
                      className={`w-full h-14 font-bold text-lg ${
                        tier.highlighted 
                          ? "bg-zinc-950 text-white hover:bg-zinc-800" 
                          : "bg-white text-zinc-950 hover:bg-zinc-200"
                      }`}
                    >
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto text-zinc-500 text-sm">
          <p>Prices shown are starting prices and vary based on time of day and specific lock requirements. A full, precise quote is always provided and agreed upon before any work commences.</p>
        </div>
      </div>
    </div>
  );
}