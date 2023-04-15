import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { absoluteUrl, cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Troubleshoot",
    "Troubleshooting",
    "Troubleshoot PC",
    "PC repair",
    "Computer repair",
    "Laptop repair",
    "Virus removal",
    "Operating system updates",
    "Software installation",
    "Tech support",
    "Computer maintenance",
    "Hardware upgrades",
    "Personal computers",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Computer diagnostics",
    "Data recovery",
    "Network setup",
    "Remote support",
    "IT services",
    "Computer upgrades",
    "Computer optimization",
    "PC tune-up",
    "Computer security",
    "Firewall setup",
    "Antivirus software",
    "Malware removal",
    "Spyware removal",
    "Adware removal",
    "Data backup",
    "Cloud computing",
    "Computer peripherals",
    "Computer accessories",
    "Computer parts",
    "Computer peripherals repair","Computer maintenance and repair",
    "Computer service",
    "Computer support",
    "Computer help",
    "Computer troubleshooting services",
    "IT support services",
    "Technology services",
    "Computer consulting",
    "Computer training",
    "Computer education",
    "Computer hardware",
    "Computer software",
    "Computer peripherals",
    "Computer networking",
    "Computer server",
    "Server maintenance",
    "Server setup",
    "Virtual server",
    "Managed IT services",
    "On-site computer service",
    "Remote computer service",
    "Online computer service",
    "Desktop computer repair",
    "Mobile computer repair",
    "Computer screen repair",
    "Computer virus protection",
    "Cybersecurity services",
    "Network security",
    "Wireless networking",
    "Wired networking",
    "Computer cables",
    "Computer power supply",
    "Computer memory",
    "Computer storage",
    "Computer graphics card",
    "Computer CPU",
    "Computer motherboard",
    "Computer fans and cooling",
    "Computer repair shop"
  ],
  authors: [
    {
      name: "maxchernov.a",
      url: "https://troubleshoots.vercel.app/",
    },
  ],
  creator: "maxchernov.a",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@maxchernov.a",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <head />
      <body className="min-h-screen">
        {children}

        <TailwindIndicator />
      </body>
    </html>
  );
}
