import {
  BadgeCheck,
  Bot,
  Braces,
  Code2,
  Film,
  Github,
  Globe2,
  Instagram,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  PenTool,
  Play,
  ServerCog,
  Sparkles,
  Wand2,
  Youtube
} from "lucide-react";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dhacar",
    icon: Github
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ibnu.dhacar/",
    icon: Instagram
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ibnu_dhacar",
    icon: Youtube
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/252615788093",
    icon: MessageCircle
  }
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: MonitorSmartphone,
    summary: "Interfaces that feel fast, elegant, responsive, and carefully structured.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend Systems",
    icon: ServerCog,
    summary: "Reliable application foundations, APIs, data flows, and secure product logic.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication Systems"]
  },
  {
    title: "Motion & Visual Production",
    icon: Film,
    summary: "Motion design and editing skills for cinematic stories, launches, and brand content.",
    skills: ["Motion Graphics", "Video Editing", "Documentary Editing", "Visual Content Production"]
  },
  {
    title: "Creative Direction",
    icon: Sparkles,
    summary: "A taste-led approach to narrative, branding, composition, and digital presence.",
    skills: [
      "Creative Direction",
      "Branding",
      "Digital Storytelling",
      "Content Creation"
    ]
  }
];

export const processSteps = [
  {
    title: "Frame the Story",
    description:
      "Clarify the audience, message, offer, and product goal before a single screen is designed."
  },
  {
    title: "Design the Experience",
    description:
      "Shape a visual system with strong hierarchy, polished motion, and responsive interaction patterns."
  },
  {
    title: "Build the Product",
    description:
      "Implement with clean components, performant architecture, accessible UI, and production discipline."
  },
  {
    title: "Refine the Moment",
    description:
      "Tune the details: copy, pacing, animation, spacing, and the feeling people remember."
  }
];

export const services = [
  {
    title: "Full Stack Web Development",
    description: "Modern, scalable web applications built with clean architecture and refined interfaces.",
    icon: Code2
  },
  {
    title: "SaaS Development",
    description: "Product-grade SaaS foundations with dashboards, auth, APIs, and polished workflows.",
    icon: Braces
  },
  {
    title: "Modern Business Websites",
    description: "Premium responsive websites that make brands feel clear, credible, and current.",
    icon: Globe2
  },
  {
    title: "Portfolio Websites",
    description: "Bespoke digital homes for creators, founders, studios, and independent professionals.",
    icon: BadgeCheck
  },
  {
    title: "Landing Pages",
    description: "Focused pages designed to communicate value fast and move visitors to action.",
    icon: PenTool
  },
  {
    title: "UI/UX Design",
    description: "Elegant product interfaces with strong hierarchy, useful motion, and mobile-first flow.",
    icon: MonitorSmartphone
  },
  {
    title: "API Integration",
    description: "Reliable integrations that connect products to payments, data, AI, and third-party tools.",
    icon: ServerCog
  },
  {
    title: "Website Redesign",
    description: "Thoughtful rebuilds that upgrade performance, clarity, aesthetics, and user trust.",
    icon: Wand2
  },
  {
    title: "AI-Powered Web Experiences",
    description: "Intelligent interfaces that bring automation and generative workflows into products.",
    icon: Bot
  },
  {
    title: "Creative Branding",
    description: "Visual systems, art direction, and brand moments that create lasting recognition.",
    icon: Palette
  },
  {
    title: "Motion Graphics",
    description: "Cinematic movement for launches, stories, social content, and interface moments.",
    icon: Play
  },
  {
    title: "Visual Content Production",
    description: "Video editing, story pacing, and visual content shaped for modern digital platforms.",
    icon: Film
  }
];

export const projects = [
  {
    name: "Hido Iyo Dhaqan",
    description:
      "A modern digital museum platform preserving culture and storytelling through immersive web experiences.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://dhaqan-tena.vercel.app/",
    tone: "heritage"
  },
  {
    name: "Personal Journal",
    description:
      "A modern journaling web application focused on simplicity, productivity, and clean user experience.",
    stack: ["Next.js", "Product Design", "Clean UX"],
    href: "https://personal-journal-blond-iota.vercel.app/",
    tone: "journal"
  }
];

export const experience = [
  {
    role: "Freelance Full Stack Developer",
    period: "Current",
    description:
      "Designing and building modern web products for businesses, creators, and digital-first brands."
  },
  {
    role: "Creative Digital Creator",
    period: "Ongoing",
    description:
      "Producing visual stories, motion pieces, documentary edits, and brand content across digital channels."
  },
  {
    role: "Modern Web Designer",
    period: "Selected work",
    description:
      "Creating responsive interfaces that combine business clarity, strong aesthetics, and practical engineering."
  }
];

export const testimonials = [
  {
    quote:
      "Dhacar turns a loose idea into something sharp, modern, and useful. The final result felt premium without losing clarity.",
    name: "Amina Hassan",
    title: "Founder, Local Studio"
  },
  {
    quote:
      "The work had rare balance: clean engineering, tasteful visuals, and a deep understanding of the story we wanted to tell.",
    name: "Mohamed Ali",
    title: "Creative Producer"
  },
  {
    quote:
      "Fast, thoughtful, and detail-oriented. Dhacar built a web presence that finally matched the quality of our service.",
    name: "Yasmin Noor",
    title: "Business Owner"
  }
];

export const stats = [
  { value: "Full Stack", label: "Engineering craft" },
  { value: "Motion", label: "Visual storytelling" },
  { value: "Product", label: "Modern digital UX" }
];
