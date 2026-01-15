import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { ConsultationModal } from "@/components/modals/ConsultationModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whereready.com"),
  title: "WhereReady - Where Growth Gets Ready",
  description: "IT services for startups and small businesses. Websites, Custom Software, and Business Automation.",
  icons: {
    icon: "/favicon-v2.png",
  },
};

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground tracking-tight`}
      >
        <ConsultationProvider>
          <ConsultationModal />
          {children}
        </ConsultationProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
