
import { BackgroundGradient } from "./ui/aceternity/background-gradient";
import { SparklesCore } from "./ui/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 33, 69, 0.7), rgba(0, 33, 69, 0.7)), url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#FFD200"
          particleCount={30}
          speed={0.8}
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/UBC_logo.svg/1200px-UBC_logo.svg.png" 
          alt="UBC Logo" 
          className="h-24 mx-auto mb-8"
        />
        
        <div className="mb-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white">
            Your Voice In The Senate
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Advocating for affordable education, mental health services, and academic excellence
          </p>
        </div>

        <BackgroundGradient className="max-w-xl mx-auto">
          <div className="p-4 md:p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-ubc-blue">
              Mankanwar Singh
            </h2>
            <p className="text-lg mb-6">Candidate for Faculty of Science Student Senator</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-ubc-blue hover:bg-ubc-lightblue text-white"
                onClick={() => scrollToSection("initiatives")}
              >
                My Platform
              </Button>
              <Button 
                variant="outline" 
                className="border-ubc-gold text-ubc-gold hover:bg-ubc-gold/10"
                onClick={() => scrollToSection("contact")}
              >
                Get Involved
              </Button>
            </div>
          </div>
        </BackgroundGradient>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-white hover:bg-white/10"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
