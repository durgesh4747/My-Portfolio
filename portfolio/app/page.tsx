import Hero from "@/components/custom/02_Hero_Section/Hero";
import Vault from "@/components/custom/03_Vault-Stack_Section/Vault";
import TechStack from "@/components/custom/03_Vault-Stack_Section/TechStack";
import Services from "@/components/custom/04_Services_Section/Services";
import About from "@/components/custom/05_About_Section/AboutSection";
import ContactSection from "@/components/custom/06_Contact_Section/ContactSection";
import { client } from "@/sanity/lib/client";
import { PortableTextBlock } from "next-sanity";

export interface Project {
  _id: string;
  order: number;
  isFeatured: boolean;
  title: string;
  thumbnail: string;
  clip: string;
  videoUrl: string;
  caseStudy?: PortableTextBlock[];
  projectLink?: string;
}

const query = `*[_type == "work"] | order(order asc)[0...3]{
  _id,
  order,
  isFeatured,
  title,
  "thumbnail":thumbnail.asset->url,
  "clip":clip.asset->url,
  "videoUrl": videoUrl,
  caseStudy,
  "projectLink": projectLink,
}`;

export const revalidate = 60;
export default async function Home() {
  const projects: Project[] = await client.fetch(query);
  return (
    <div>
      <Hero />
      <Vault projects={projects} />
      <TechStack />
      <Services />
      <About />
      <ContactSection />
    </div>
  );
}
