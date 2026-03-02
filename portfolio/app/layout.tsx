import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import LazyGA from "@/Mini_components/LazyGA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://durgeshdev.in"),
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
      "I build high-performance web applications and SaaS platforms. View my digital vault.",
    type: "website",
    locale: "en_IN",
    url: "https://durgeshdev.in/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Durgesh Sutariya | Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Durgesh Sutariya | Software Architect",
    description:
      "Engineering high-performance web applications and SaaS platforms.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
        <main>{children}</main>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <LazyGA gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Toaster theme="dark" position="top-center" richColors />
      </body>
    </html>
  );
}
