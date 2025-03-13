
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SenatorProfile from "@/components/SenatorProfile";
import InitiativesSection from "@/components/InitiativesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  useEffect(() => {
    // Set the title to match the domain
    document.title = "Mankanwar Singh | UBC Faculty of Science Senator";
    
    // Add a favicon link if it doesn't exist
    if (!document.querySelector("link[rel='icon']")) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = "/favicon.ico"; // Using the existing favicon
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SenatorProfile />
        <InitiativesSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
