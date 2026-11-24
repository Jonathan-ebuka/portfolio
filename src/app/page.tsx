import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PillNav from "@/components/PillNav";
import Hero3D from "@/components/Hero3D";
import Intro from "@/components/Intro";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <PillNav />
      <main>
        <Hero3D />
        <Intro />
        <ScrollReveal />
        <Services />
      </main>
      <Footer />
    </>
  );
}
