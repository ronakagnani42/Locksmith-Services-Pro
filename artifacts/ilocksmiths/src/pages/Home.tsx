import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, Shield, Award, MapPin, ChevronRight, PhoneCall, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "30", label: "Min Response", suffix: "m" },
  { value: "500", label: "Happy Customers", suffix: "+" },
  { value: "95", label: "Satisfaction Rate", suffix: "%" },
  { value: "24", label: "Availability", suffix: "/7" }
];

const faqs = [
  {
    q: "How fast can you reach me in an emergency?",
    a: "We guarantee a 30-minute average response time anywhere in London for all emergency callouts."
  },
  {
    q: "Do you charge a call-out fee?",
    a: "No, we never charge a call-out fee. You only pay for the work we do and any parts required."
  },
  {
    q: "Which areas of London do you cover?",
    a: "We cover all Greater London boroughs, operating 24/7 with locally stationed locksmiths for rapid response."
  },
  {
    q: "Are you fully insured and qualified?",
    a: "Yes, all our locksmiths are fully qualified, DBS checked, and we carry comprehensive public liability insurance."
  },
  {
    q: "Can you help if I'm locked out in the middle of the night?",
    a: "Absolutely. Our emergency lockout service operates 24 hours a day, 365 days a year, including all bank holidays."
  },
  {
    q: "What types of locks do you replace or repair?",
    a: "We work with all types of locks including Yale, Chubb, multi-point UPVC door locks, and British Standard high-security locks."
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[150px] mix-blend-screen" style={{ animation: "pulse 4s infinite reverse" }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              24/7 Emergency Locksmiths London
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
              LOCKED OUT? <br />
              <span className="text-zinc-500">WE'RE ON OUR WAY.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Premium emergency locksmith services across London. 
              On your doorstep in 30 minutes. No call-out fee.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+447340041444" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 text-lg font-semibold bg-white text-zinc-950 hover:bg-zinc-200">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call 07340 041444
                </Button>
              </a>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-14 px-8 text-lg font-semibold border-white/20 text-white hover:bg-white/5 hover:text-white">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                  {stat.value}<span className="text-zinc-500">{stat.suffix}</span>
                </div>
                <div className="text-sm text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">UNCOMPROMISING <br/>SECURITY.</h2>
            <p className="text-zinc-400 max-w-xl text-lg font-light">Whether you're locked out at 3am or upgrading your entire property's security, we deliver precision and peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="bg-zinc-900/50 border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      <service.icon className="w-12 h-12 text-white mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-zinc-400 mb-8 flex-grow">{service.shortDesc}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-zinc-500">From {service.priceFrom}</span>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">TRUSTED BY LONDON.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-2xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xl text-zinc-300 mb-8 font-serif leading-relaxed italic">"{t.content}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">FREQUENTLY ASKED.</h2>
            <p className="text-zinc-400 text-lg">Everything you need to know before you call.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-zinc-300 py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-8 tracking-tighter">DON'T WAIT OUTSIDE.</h2>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">Our local locksmiths are ready to help. Fast, professional, and transparent pricing.</p>
          
          <a href="tel:+447340041444">
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-zinc-950 text-white hover:bg-zinc-800 hover:scale-105 transition-all">
              <PhoneCall className="mr-3 h-6 w-6" />
              Call Now: 07340 041444
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}