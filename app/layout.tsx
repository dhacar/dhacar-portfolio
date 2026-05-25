import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AmbientBackground } from "@/components/ambient-background";
import { CursorGlow } from "@/components/cursor-glow";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Dhacar | Full Stack Developer & Creative Technologist",
  description:
    "Dhacar is a modern multidisciplinary creative developer crafting cinematic web experiences, digital products, and visual storytelling.",
  keywords: [
    "Dhacar",
    "Full Stack Developer",
    "Creative Technologist",
    "Next.js Developer",
    "Digital Creator",
    "UI UX Designer",
    "Somali Developer"
  ],
  authors: [{ name: "Dhacar" }],
  creator: "Dhacar",
  metadataBase: new URL("https://dhacar.dev"),
  openGraph: {
    title: "Dhacar | Code & Creativity",
    description:
      "Premium portfolio of Dhacar, a full stack developer, creative technologist, and digital creator.",
    type: "website",
    locale: "en_US",
    siteName: "Dhacar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhacar | Code & Creativity",
    description:
      "Full Stack Developer, Creative Technologist, and Digital Creator."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8fb"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}"
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <AmbientBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
