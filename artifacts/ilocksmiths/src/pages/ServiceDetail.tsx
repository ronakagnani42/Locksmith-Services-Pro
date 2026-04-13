import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-950 text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services">
          <Button variant="outline" className="border-white/20 text-zinc-950">Return to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <service.icon className="w-20 h-20 text-white mb-8" strokeWidth={1} />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                {service.title.toUpperCase()}.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12">
                We provide industry-leading {service.title.toLowerCase()} across London, ensuring you're secure, safe, and back on track without delay.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
              <ul className="space-y-4 mb-12">
                {[
                  "Rapid 30-minute average response time",
                  "No call-out fee or hidden charges",
                  "Fully qualified and DBS-checked locksmiths",
                  "High-quality parts with 12-month guarantee",
                  "Non-destructive entry methods where possible"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-white shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/80 border border-white/10 rounded-2xl p-8 sticky top-32"
            >
              <h3 className="text-xl font-bold text-white mb-2">Book This Service</h3>
              <div className="text-3xl font-bold text-white mb-8 flex items-baseline gap-2">
                {service.priceFrom} <span className="text-sm text-zinc-500 font-normal tracking-wide uppercase">Starting Price</span>
              </div>
              
              <div className="space-y-4">
                <a href="tel:+447340041444" className="block w-full">
                  <Button size="lg" className="w-full h-14 bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-lg">
                    <PhoneCall className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </a>
                <Link href="/contact" className="block w-full">
                  <Button size="lg" variant="outline" className="w-full h-14 border-white/20 text-white hover:bg-white/5 font-semibold text-lg">
                    Request a Quote
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-center text-zinc-500 mt-6">
                Prices may vary based on exact lock type and requirements. Final quote provided before any work begins.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}