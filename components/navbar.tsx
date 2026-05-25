"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-6">
      <nav
        className="glass premium-border mx-auto flex h-14 max-w-5xl items-center justify-between rounded-lg px-3"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-md px-2 py-2"
          aria-label="Dhacar home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-95 dark:bg-white dark:text-slate-950">
            D
          </span>
          <span className="text-sm font-semibold text-slate-950 dark:text-white">
            Dhacar
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-950/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100 sm:inline-flex"
          >
            Contact Me
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white/70 text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass premium-border mx-auto mt-2 max-w-5xl rounded-lg p-2 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-950/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-slate-950 px-3 py-3 text-center text-sm font-medium text-white dark:bg-white dark:text-slate-950"
            >
              Contact Me
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
