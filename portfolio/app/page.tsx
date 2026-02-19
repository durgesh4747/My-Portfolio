import NavBar from "@/components/custom/01_Navbar/NavBar";
import Hero from "@/components/custom/02_Hero_Section/Hero";
import Vault from "@/components/custom/03_Vault-Stack_Section/Vault";
import TechStack from "@/components/custom/03_Vault-Stack_Section/TechStack";
import Services from "@/components/custom/04_Services_Section/Services";
import About from "@/components/custom/05_About_Section/AboutSection";
import Footer from "@/components/custom/07_Footer_Section/Footer";
import ContactSection from "@/components/custom/06_Contact-Footer_Section/ContactSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Vault />
      <TechStack />
      <Services />
      <About />
      <ContactSection />
      <Footer/>
    </div>
  );
}
