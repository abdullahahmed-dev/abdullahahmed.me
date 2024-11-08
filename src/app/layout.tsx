import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/metadata";

// Dynamically import analytics components
const SpeedInsights = dynamic(() => 
  import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights)
);
const Analytics = dynamic(() => 
  import('@vercel/analytics/react').then(mod => mod.Analytics)
);

// Optimize font loading
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap', // Add display swap for better performance
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preload"
          href="/me.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link 
          rel="preload"
          href="/banner13.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://abdullahahmed.vercel.app" />
        <link rel="preconnect" href="https://vercel.com" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-4 sm:py-8 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            {process.env.NODE_ENV === 'production' && (
              <>
                <SpeedInsights />
                <Analytics />
              </>
            )}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
