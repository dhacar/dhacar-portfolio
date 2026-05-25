"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/252615788093"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Dhacar on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_44px_rgba(37,211,102,0.34)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,211,102,0.42)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25"
    >
      <MessageCircle size={25} />
    </a>
  );
}
