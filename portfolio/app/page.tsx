import NavBar from "@/components/custom/01_Navbar/NavBar";
import Hero from "@/components/custom/02_Hero_Section/Hero";
import Vault from "@/components/custom/03_Vault-Stack_Section/Vault";
import TechStack from "@/components/custom/03_Vault-Stack_Section/TechStack";
import Services from "@/components/custom/04_Service-TrustTerminal_Section/Services";
import Trust_Terminal from "@/components/custom/04_Service-TrustTerminal_Section/Trust_Terminal";
import About from "@/components/custom/05_About_Section/AboutSection";
import ContactForm from "@/components/custom/06_Contact-Footer_Section/ContactForm";
import Footer from "@/components/custom/06_Contact-Footer_Section/Footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Vault/>
      <TechStack/>
      <Services/>
      <Trust_Terminal/>
      <About/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
