import Hero from "@/components/custom/02_Hero_Section/Hero";
import { client } from "@/sanity/lib/client";
import dynamic from "next/dynamic";

export interface Project {
  _id: string;
  order: number;
  title: string;
  slug: { current: string };
  thumbnail: string;
  description: string;
}

const query = `*[_type == "work"] | order(order asc)[0...5] {
  _id,
  order,
  title,
  slug,
  "thumbnail":thumbnail.asset->url,
  description,
}`;

// Lazy-loading everything below the fold to maintain the performance.
const Vault = dynamic(
  () => import("@/components/custom/03_Vault-Stack_Section/Vault"),
);
const TechStack = dynamic(
  () => import("@/components/custom/03_Vault-Stack_Section/TechStack"),
);
const Testimonials = dynamic(
  () => import("@/components/custom/04_Testimonial_Section/Testiominials"),
);
const Services = dynamic(
  () => import("@/components/custom/05_Services_Section/Services"),
);
const Pricing = dynamic(
  () => import("@/components/custom/06_Pricing_Section/Pricing"),
);
const About = dynamic(
  () => import("@/components/custom/07_About_Section/AboutSection"),
);
const ContactSection = dynamic(
  () => import("@/components/custom/08_Contact_Section/ContactSection"),
);
const FreqAskQues = dynamic(
  () => import("@/components/custom/09_FAQ_Section/FAQ"),
);

export const revalidate = 60;
export default async function Home() {
  const projects: Project[] = await client.fetch(query);
  return (
    <div>
      <Hero />
      <Vault projects={projects} />
      <Testimonials />
      <TechStack />
      <Services />
      <Pricing />
      <About />
      <ContactSection />
      <FreqAskQues />
    </div>
  );
}
