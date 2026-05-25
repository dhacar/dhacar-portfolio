"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  Sparkles
} from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  experience,
  processSteps,
  projects,
  services,
  skillGroups,
  socials,
  stats,
  testimonials
} from "@/components/data";

const sectionPad = "py-20 sm:py-24 lg:py-32";

function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
      : "premium-border bg-white/72 text-slate-950 hover:bg-white dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:pt-36"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-y-24 right-[-8rem] hidden w-[56vw] max-w-[760px] overflow-hidden rounded-l-[3rem] border border-slate-950/10 bg-white/55 shadow-[0_40px_120px_rgba(15,23,42,0.16)] lg:block">
        <Image
          src="/dhacar-portrait.png"
          alt="Portrait of Dhacar"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,251,0.92)_0%,rgba(247,248,251,0.28)_34%,transparent_66%)]" />
      </div>

      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_0.72fr] lg:items-center">
          <div className="relative z-10 max-w-4xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-md border border-blue-700/15 bg-blue-50/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800">
                  <Sparkles size={14} />
                  Creative developer / visual storyteller
                </div>
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-950/10 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.12)] lg:hidden">
                  <Image
                    src="/dhacar-portrait.png"
                    alt="Portrait of Dhacar"
                    fill
                    priority
                    sizes="64px"
                    className="object-cover object-[center_24%]"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="max-w-[820px] text-balance text-[2.62rem] font-semibold leading-[0.96] text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.3rem]">
                Building Digital Experiences Through Code & Creativity
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg md:text-xl">
                Full Stack Developer, Creative Technologist, and Digital Creator
                crafting modern web experiences, digital products, motion, and
                visual stories with a premium product mindset.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#projects">
                  View Projects <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Contact Me <MessageCircle size={16} />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="premium-border rounded-lg bg-white/72 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
                  >
                    <div className="text-lg font-semibold text-slate-950">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid h-11 w-11 place-items-center rounded-md border border-slate-950/10 bg-white/70 text-slate-700 transition hover:border-blue-700/30 hover:bg-blue-700 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className={sectionPad}>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="About Dhacar"
            title="A multidisciplinary creative developer with an engineer's discipline and a storyteller's eye."
            description="Dhacar works across product engineering, UI/UX, motion, editing, branding visuals, and documentary-style storytelling."
          />

          <Reveal className="premium-border rounded-lg bg-white/76 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-pretty text-lg leading-8 text-slate-700">
              Dhacar builds polished digital experiences with a clear sense of
              structure, story, and taste. His work combines full stack
              development, interface design, creative direction, motion, video
              editing, and brand storytelling.
            </p>
            <p className="mt-6 text-pretty leading-7 text-slate-500">
              The goal is always the same: software that feels intentional,
              visuals that carry emotion, and modern digital products that help
              people trust, understand, and remember the work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className={sectionPad}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills & Tech Stack"
          title="A curated capability map for engineering, design, motion, and digital storytelling."
          description="The tools list is gone; this now focuses on what Dhacar can actually create and deliver."
        />

        <Stagger className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <StaggerItem
                key={group.title}
                className="premium-border card-hover rounded-lg bg-white/78 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                    <Icon size={21} />
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700/70">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {group.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-slate-500">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-md border border-slate-950/10 bg-slate-50/80 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 size={15} className="text-blue-700" />
                      {skill}
                    </div>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className={sectionPad}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Premium digital execution for products, brands, and creators."
          description="From web products to visual content, each service is shaped to feel useful, elegant, and commercially clear."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="premium-border card-hover rounded-lg bg-white/76 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-7 grid h-11 w-11 place-items-center rounded-md bg-blue-700 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className={sectionPad}>
      <div className="section-shell">
        <div className="premium-border relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-8 lg:p-10">
          <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[-8rem] h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Creative Process
                </p>
                <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  From clear idea to polished digital experience.
                </h2>
                <p className="mt-5 text-pretty leading-7 text-white/62">
                  A simple process for work that needs to look premium, feel
                  modern, and still solve the practical business problem.
                </p>
              </div>
            </Reveal>

            <Stagger className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <StaggerItem
                  key={step.title}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
                >
                  <div className="mb-5 text-sm font-semibold text-blue-200">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ tone }: { tone: string }) {
  const isHeritage = tone === "heritage";

  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-md border border-slate-950/10 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.28),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.22),transparent_30%)]" />
      <div className="absolute inset-x-5 top-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/36" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="absolute inset-x-5 top-14 h-px bg-white/12" />
      <div className="absolute left-5 top-24 h-8 w-44 rounded bg-white/82" />
      <div className="absolute left-5 top-40 h-3 w-64 rounded bg-white/24" />
      <div className="absolute left-5 top-60 h-3 w-48 rounded bg-white/16" />
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
        <div className="h-16 rounded border border-white/10 bg-white/[0.08]" />
        <div className="h-16 rounded border border-white/10 bg-white/[0.06]" />
        <div className="h-16 rounded border border-white/10 bg-white/[0.04]" />
      </div>
      <motion.div
        aria-hidden="true"
        className={`absolute right-8 top-24 h-28 w-28 rounded-md border border-white/14 ${
          isHeritage ? "bg-emerald-300/16" : "bg-blue-300/14"
        }`}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-16 top-36 h-28 w-28 rounded-md border border-white/14 bg-white/10 backdrop-blur"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className={sectionPad}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Selected builds with story, structure, and product polish."
          description="A concise showcase of live work and future directions for Dhacar's digital practice."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Reveal
              key={project.name}
              className="premium-border card-hover rounded-lg bg-white/78 p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
            >
              <ProjectVisual tone={project.tone} />
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-pretty leading-7 text-slate-500">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-slate-950/10 bg-white text-slate-700 transition hover:bg-blue-700 hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-950/10 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="premium-border mt-5 rounded-lg bg-white/72 p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.07)]">
          <p className="text-lg font-semibold text-slate-950">
            More work is being shaped.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Future projects can expand this system with SaaS products, creative
            tools, AI-powered interfaces, and cinematic storytelling
            experiments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className={sectionPad}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="A practice built around solving business problems with modern digital craft."
          description="Dhacar combines product strategy, web engineering, visual communication, and creative production."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-950/12 sm:left-1/2" />
          <Stagger className="space-y-5">
            {experience.map((item, index) => (
              <StaggerItem
                key={item.role}
                className={`relative grid gap-5 sm:grid-cols-2 ${
                  index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="premium-border card-hover ml-10 rounded-lg bg-white/78 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:ml-0">
                  <div className="mb-4 flex items-center gap-3 text-sm font-medium text-blue-700/70">
                    <Calendar size={16} />
                    {item.period}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-500">{item.description}</p>
                </div>
                <span className="absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-blue-700 sm:left-1/2" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className={sectionPad}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Thoughtful words from collaborators and clients."
          align="center"
        />

        <Stagger className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem
              key={testimonial.name}
              className="premium-border card-hover rounded-lg bg-white/78 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <p className="text-pretty leading-7 text-slate-600">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-8 border-t border-slate-950/10 pt-5">
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.title}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
          message: formData.get("message")
        })
      });

      const data = (await response.json()) as { error?: string; mailto?: string };

      if (!response.ok) {
        if (data.mailto) {
          window.location.href = data.mailto;
          setStatus("error");
          setNotice(
            "Email delivery needs a Resend API key in production. I opened an email draft with your message as a fallback."
          );
          return;
        }

        throw new Error(data.error || "Could not send message.");
      }

      form.reset();
      setStatus("sent");
      setNotice("Message sent. Thanks, I will reply to you soon.");
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "Could not send message.");
    }
  };

  return (
    <section id="contact" className={`${sectionPad} pb-16`}>
      <div className="section-shell">
        <div className="premium-border relative overflow-hidden rounded-2xl bg-white/78 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/70">
                Contact
              </p>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Let&apos;s Build Something Exceptional
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-7 text-slate-500">
                Bring the idea, product, brand, or story. Dhacar can help shape
                it into a premium digital experience with clean engineering and
                strong visual taste.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  href="https://wa.me/252615788093"
                  target="_blank"
                  rel="noreferrer"
                  className="premium-border card-hover inline-flex items-center gap-3 rounded-lg bg-white/72 p-4"
                >
                  <MessageCircle size={20} className="text-blue-700" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-950">
                      WhatsApp
                    </span>
                    <span className="text-sm text-slate-500">+252 61 578 8093</span>
                  </span>
                </a>
                <a
                  href="mailto:ibnudhacar1@gmail.com"
                  className="premium-border card-hover inline-flex items-center gap-3 rounded-lg bg-white/72 p-4"
                >
                  <Mail size={20} className="text-blue-700" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-950">
                      Email
                    </span>
                    <span className="text-sm text-slate-500">
                      ibnudhacar1@gmail.com
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-600">
                  Name
                  <input
                    className="form-field"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-600">
                  Email
                  <input
                    className="form-field"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                Project Type
                <input
                  className="form-field"
                  name="project"
                  placeholder="Website, SaaS, video, branding..."
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                Message
                <textarea
                  className="form-field min-h-36 resize-y"
                  name="message"
                  placeholder="Tell me what you want to create."
                  required
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="shine inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
              >
                {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
              {notice ? (
                <p
                  className={`rounded-md border px-4 py-3 text-sm ${
                    status === "sent"
                      ? "border-emerald-500/20 bg-emerald-50 text-emerald-800"
                      : "border-blue-700/15 bg-blue-50 text-slate-600"
                  }`}
                >
                  {notice}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-950/10 py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white">
              D
            </span>
            <span className="font-semibold text-slate-950">Dhacar</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Full Stack Developer, Creative Technologist, and Digital Creator
            building modern digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-md border border-slate-950/10 bg-white/70 text-slate-600 transition hover:bg-blue-700 hover:text-white"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Dhacar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
