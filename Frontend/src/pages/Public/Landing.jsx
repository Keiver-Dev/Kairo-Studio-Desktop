import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Features from "@/components/LandingPage/Features";
{/* import Stats from "@/components/LandingPage/Stats"; */ } {/* Stats */ }
import Testimonials from "@/components/LandingPage/Testimonials";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <main className="flex flex-col w-screen bg-[#0A0A0A] min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Features />
      {/* <Stats /> */}
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
