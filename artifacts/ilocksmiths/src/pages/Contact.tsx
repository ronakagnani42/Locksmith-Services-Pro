import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  service: z.enum(["emergency-lockout", "lock-repair", "upvc-door", "security-upgrade", "other"]),
  message: z.string().optional(),
  contactPreference: z.enum(["phone", "whatsapp", "email"]),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const submitContact = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "emergency-lockout",
      message: "",
      contactPreference: "phone",
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast.success("Request received! We'll be in touch shortly.");
          form.reset();
        },
        onError: () => {
          toast.error("Failed to send request. Please call us directly.");
        },
      }
    );
  }

  return (
    <div className="w-full bg-zinc-950 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
            GET IN <span className="text-zinc-500">TOUCH.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl">
            Need emergency assistance or a security upgrade quote? Contact us now. We're available 24/7 across London.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us (24/7)</h3>
                  <a href="tel:+447340041444" className="text-2xl text-zinc-300 hover:text-white font-medium transition-colors">
                    07340 041444
                  </a>
                  <p className="text-zinc-500 text-sm mt-1">Average response time: 30 mins</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a href="mailto:sales@ilocksmiths.uk" className="text-xl text-zinc-300 hover:text-white transition-colors">
                    sales@ilocksmiths.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Coverage</h3>
                  <p className="text-lg text-zinc-300">All Greater London Boroughs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <p className="text-lg text-zinc-300">24 Hours / 7 Days a Week</p>
                  <p className="text-zinc-500 text-sm mt-1">Including all Bank Holidays</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Request a Quote / Service</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-400">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-400">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="07123 456789" type="tel" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Email (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-zinc-950 border-white/10 text-white h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          <SelectItem value="emergency-lockout">Emergency Lockout</SelectItem>
                          <SelectItem value="lock-repair">Lock Repair & Replacement</SelectItem>
                          <SelectItem value="upvc-door">UPVC Door Repair</SelectItem>
                          <SelectItem value="security-upgrade">Security Upgrade</SelectItem>
                          <SelectItem value="other">Other / Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Message / Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any relevant details..." 
                          className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 min-h-[100px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPreference"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-zinc-400">Preferred Contact Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="phone" className="border-white/50 text-white" />
                            </FormControl>
                            <FormLabel className="font-normal text-zinc-300 cursor-pointer">
                              Phone Call
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="whatsapp" className="border-white/50 text-white" />
                            </FormControl>
                            <FormLabel className="font-normal text-zinc-300 cursor-pointer">
                              WhatsApp
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="email" className="border-white/50 text-white" />
                            </FormControl>
                            <FormLabel className="font-normal text-zinc-300 cursor-pointer">
                              Email
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 text-lg font-bold bg-white text-zinc-950 hover:bg-zinc-200 mt-8"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}