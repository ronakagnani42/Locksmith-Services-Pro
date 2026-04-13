import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, Award } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8">
              SECURING <br />
              <span className="text-zinc-500">LONDON.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              We are iLocksmiths. A premium, 24/7 emergency locksmith service dedicated to keeping London's homes and businesses safe, secure, and accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">OUR APPROACH.</h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light">
                <p>
                  Built on a foundation of absolute reliability and trust, iLocksmiths was founded to disrupt the unpredictable nature of emergency trades. We believe when you're locked out or compromised, you shouldn't have to worry about hidden fees or slow responses.
                </p>
                <p>
                  Every technician in our network is strictly vetted, fully qualified, and shares our commitment to non-destructive entry and uncompromising quality. We don't just open doors; we restore peace of mind.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Speed", desc: "30-min average response." },
                { icon: ShieldCheck, title: "Trust", desc: "Fully vetted & insured." },
                { icon: MapPin, title: "Local", desc: "London-wide coverage." },
                { icon: Award, title: "Quality", desc: "BS3621 standards." }
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl"
                >
                  <val.icon className="w-10 h-10 text-white mb-4" strokeWidth={1} />
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-sm text-zinc-500">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 bg-zinc-900/30 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">LONDON WIDE.</h2>
            <p className="text-zinc-400 text-lg">Operating across all Greater London boroughs with locally stationed technicians for rapid dispatch.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Camden", "Islington", "Hackney", "Tower Hamlets", "Westminster", "Kensington", "Chelsea", "Hammersmith", "Wandsworth", "Lambeth", "Southwark", "Greenwich"].map(borough => (
              <span key={borough} className="px-6 py-3 rounded-full border border-white/10 bg-zinc-950 text-zinc-300 text-sm font-medium">
                {borough}
              </span>
            ))}
            <span className="px-6 py-3 rounded-full border border-white/5 bg-transparent text-zinc-500 text-sm font-medium italic">
              + All other London boroughs
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}