import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
            OUR <br />
            <span className="text-zinc-500">SERVICES.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Professional locksmith services tailored to your needs. From emergency access to full security overhauls, we deliver unmatched expertise across London.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/services/${service.id}`}>
                <Card className="bg-zinc-900/50 border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="p-8 md:p-12 w-full md:w-auto shrink-0 flex justify-center border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-white/5 transition-colors">
                        <service.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                      </div>
                      <div className="p-8 md:p-12 flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-zinc-300 whitespace-nowrap">
                            From {service.priceFrom}
                          </div>
                        </div>
                        <p className="text-lg text-zinc-400 font-light mb-8 max-w-2xl">{service.shortDesc}</p>
                        <div className="flex items-center text-white font-medium group-hover:text-zinc-300 transition-colors">
                          Explore Service <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}