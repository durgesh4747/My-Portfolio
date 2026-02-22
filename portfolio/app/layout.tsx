import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durgesh Sutariya | Software Architect & SaaS Developer",

  description:
    "Portfolio of Durgesh Sutariya, a Full-Stack Engineer based in Vadodara, specializing in High-Performance Next.js Web Apps, SaaS Architecture, and Scalable Backend Systems.",

  keywords: [
    "Durgesh Sutariya",
    "Durgesh Dev",
    "Durgesh",
    "Next.js Developer India",
    "Software Architect Vadodara",
    "SaaS Architect",
    "Freelance Web Developer",
  ],

  openGraph: {
    title: "Durgesh Sutariya | Building Scalable Digital Systems",
    description:
      "I engineer high-performance web applications and SaaS platforms. View my digital vault.",
    type: "website",
    locale: "en_IN",
    // url: "https://yourdomain.com", // After my domain!
  },

  robots: {
    index: true,
    follow: true,
  },
};

// OPENGRAPH IMG
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
