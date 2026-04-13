import { useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  Shield,
  ChevronRight,
  PhoneCall,
  Star,
  Wrench,
  DoorOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "30", label: "Min Response", suffix: "m" },
  { value: "500", label: "Happy Customers", suffix: "+" },
  { value: "95", label: "Satisfaction Rate", suffix: "%" },
  { value: "24", label: "Availability", suffix: "/7" },
];

const faqs = [
  {
    q: "How fast can you reach me in an emergency?",
    a: "We guarantee a 30-minute average response time anywhere in London for all emergency callouts.",
  },
  {
    q: "Do you charge a call-out fee?",
    a: "No, we never charge a call-out fee. You only pay for the work we do and any parts required.",
  },
  {
    q: "Which areas of London do you cover?",
    a: "We cover all Greater London boroughs, operating 24/7 with locally stationed locksmiths for rapid response.",
  },
  {
    q: "Are you fully insured and qualified?",
    a: "Yes, all our locksmiths are fully qualified, DBS checked, and we carry comprehensive public liability insurance.",
  },
  {
    q: "Can you help if I'm locked out in the middle of the night?",
    a: "Absolutely. Our emergency lockout service operates 24 hours a day, 365 days a year, including all bank holidays.",
  },
  {
    q: "What types of locks do you replace or repair?",
    a: "We work with all types of locks including Yale, Chubb, multi-point UPVC door locks, and British Standard high-security locks.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Parallax video */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: videoY }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover scale-105"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Gradient overlay: heavier on left for text legibility, reveals video on right */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: overlayOpacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
          </motion.div>
        </motion.div>

        {/* Hero content — left aligned */}
        <motion.div
          className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10"
          style={{ y: contentY }}
        >
          <motion.div
            className="max-w-2xl xl:max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              24/7 Emergency Locksmiths — London
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.95] mb-6"
            >
              LOCKED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
                OUT?
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-400 mb-8 leading-tight"
            >
              We're on our way.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-lg font-light leading-relaxed"
            >
              Premium emergency locksmith services across London.
              On your doorstep in{" "}
              <span className="text-white font-semibold">30 minutes</span>.
              No call-out fee.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="tel:+447340041444" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full h-14 px-8 text-base font-bold bg-white text-zinc-950 hover:bg-zinc-100 hover:scale-105 transition-all duration-200 shadow-lg shadow-white/10"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call 07340 041444
                </Button>
              </a>
              <a
                href="https://wa.me/447340041444?text=Hi%2C+I+need+a+locksmith+urgently"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/8 hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  WhatsApp Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex flex-wrap gap-6 mt-12 text-sm text-zinc-500"
            >
              {["DBS Checked", "Fully Insured", "No Call-Out Fee", "5-Star Rated"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-zinc-500" />
                    {badge}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums">
                  {stat.value}
                  <span className="text-zinc-600 font-bold">{stat.suffix}</span>
                </div>
                <div className="text-xs text-zinc-500 font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="mb-20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1]"
            >
              UNCOMPROMISING
              <br />
              <span className="text-zinc-600">SECURITY.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href={`/services/${service.id}`}>
                  <div className="bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/70 rounded-2xl p-8 md:p-10 cursor-pointer h-full group transition-all duration-300">
                    <div className="flex items-start justify-between mb-8">
                      <service.icon
                        className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-full">
                        From {service.priceFrom}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zinc-500 mb-8 leading-relaxed">{service.shortDesc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors duration-200">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY US MARQUEE STRIP ─── */}
      <div className="py-5 bg-white overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-zinc-950 font-bold text-sm uppercase tracking-widest">
              <span>24/7 Service</span>
              <span className="text-zinc-400">—</span>
              <span>No Call-Out Fee</span>
              <span className="text-zinc-400">—</span>
              <span>30 Min Response</span>
              <span className="text-zinc-400">—</span>
              <span>DBS Checked</span>
              <span className="text-zinc-400">—</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4"
              >
                Customer Reviews
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1]"
              >
                TRUSTED BY
                <br />
                <span className="text-zinc-600">LONDON.</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2} className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-6 h-6 fill-white text-white" />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.01 }}
                className="bg-zinc-900/30 border border-white/5 hover:border-white/10 p-8 md:p-10 rounded-2xl transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xl text-zinc-200 mb-8 font-light leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 bg-zinc-900/20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            className="mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4"
            >
              Common Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            >
              FREQUENTLY
              <br />
              <span className="text-zinc-600">ASKED.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-zinc-300 py-6 group">
                    <span className="flex items-center gap-4">
                      <span className="text-xs text-zinc-700 font-mono w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed pl-9">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDAgMC0yIDB6IiBmaWxsPSIjMDAwMDAwMTAiLz48L2c+PC9zdmc+')] opacity-5" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6"
            >
              Need Help Now?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-black text-zinc-950 mb-6 tracking-tighter leading-[1]"
            >
              DON'T WAIT
              <br />
              OUTSIDE.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-light"
            >
              Local locksmiths ready to help. Fast, professional, and transparent pricing.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="tel:+447340041444">
                <Button
                  size="lg"
                  className="h-16 px-12 text-xl font-bold bg-zinc-950 text-white hover:bg-zinc-800 hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  <PhoneCall className="mr-3 h-6 w-6" />
                  Call Now: 07340 041444
                </Button>
              </a>
              <a
                href="https://wa.me/447340041444"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-12 text-xl font-bold border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:scale-105 transition-all duration-200"
                >
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
