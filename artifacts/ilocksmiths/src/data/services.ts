import { Clock, Wrench, DoorOpen, Shield } from "lucide-react";

export const services = [
  {
    id: "emergency-lockout",
    title: "24/7 Emergency Lockouts",
    icon: Clock,
    shortDesc: "Locked out? We're there in 30 minutes.",
    priceFrom: "£59"
  },
  {
    id: "lock-repair",
    title: "Lock Repairs & Replacements",
    icon: Wrench,
    shortDesc: "All lock types repaired or upgraded.",
    priceFrom: "£69"
  },
  {
    id: "upvc-door",
    title: "UPVC & Composite Door Specialists",
    icon: DoorOpen,
    shortDesc: "Expert UPVC & composite door repairs.",
    priceFrom: "£79"
  },
  {
    id: "security-upgrade",
    title: "Security Upgrades",
    icon: Shield,
    shortDesc: "Upgrade to British Standard locks.",
    priceFrom: "£89"
  }
];
