import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import {Toaster} from 'sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durgesh | Software Architect & SaaS Developer",
  description:
    "Portfolio of Durgesh, a Full-Stack Engineer specializing in High-Performance Next.js Web Apps, SaaS Architecture, and Scalable Backend Systems.",
  keywords: [
    "Next.js Developer",
    "SaaS Architect",
    "React Developer India",
    "Web Performance",
    "Sanity CMS",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Durgesh | Building Scalable Digital Systems",
    description:
      "I architect high-performance SaaS platforms. View my case studies.",
  },
};

// ADD OPENGRAPH IMG
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Toaster theme="dark" position="top-center" richColors />
      </body>
    </html>
  );
}
