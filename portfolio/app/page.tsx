import HeroSection from "@/components/custom/HeroSection";
import NavigationBar from "@/components/custom/NavigationBar";
import TechStackSection from "@/components/custom/TechStackSection";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <HeroSection/>
      <TechStackSection/>
    </div>
  );
}
