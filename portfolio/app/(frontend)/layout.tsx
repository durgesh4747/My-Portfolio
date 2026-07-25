import dynamic from "next/dynamic";
import NavBar from "@/components/custom/01_Navbar/NavBar";

const Footer = dynamic(
  () => import("@/components/custom/10_Footer_Section/Footer"),
);

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
