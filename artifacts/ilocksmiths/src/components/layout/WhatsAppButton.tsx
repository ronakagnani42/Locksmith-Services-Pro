import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltipOpen(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setTooltipOpen(false);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            <a 
              href="https://wa.me/447340041444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative group"
            >
              <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
              <MessageSquare className="h-7 w-7" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="mr-2 bg-zinc-900 border-zinc-800 text-white">
            <p>Need help? WhatsApp us 24/7</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}