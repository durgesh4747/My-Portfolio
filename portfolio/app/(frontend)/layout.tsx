import NavBar from "@/components/custom/01_Navbar/NavBar";
import Footer from "@/components/custom/07_Footer_Section/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
