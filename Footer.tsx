
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ubc-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Mankanwar Singh</h3>
            <p className="text-sm text-white/80">
              Representing student voices in the academic governance of the University of British Columbia.
            </p>
            <p className="text-sm text-ubc-gold mt-2">
              <a href="https://mankanwar.ca" className="hover:underline">mankanwar.ca</a>
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-sm text-white/80 hover:text-ubc-gold">Home</a>
              <a href="#about" className="block text-sm text-white/80 hover:text-ubc-gold">About the Senate</a>
              <a href="#senator" className="block text-sm text-white/80 hover:text-ubc-gold">Your Senator</a>
              <a href="#initiatives" className="block text-sm text-white/80 hover:text-ubc-gold">Initiatives</a>
              <a href="#contact" className="block text-sm text-white/80 hover:text-ubc-gold">Contact</a>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">UBC Resources</h3>
            <nav className="space-y-2">
              <a href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/80 hover:text-ubc-gold">UBC Main Website</a>
              <a href="https://senate.ubc.ca" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/80 hover:text-ubc-gold">Senate Website</a>
              <a href="https://students.ubc.ca" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/80 hover:text-ubc-gold">Student Services</a>
              <a href="https://ams.ubc.ca" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/80 hover:text-ubc-gold">AMS Student Society</a>
            </nav>
          </div>
        </div>
        
        <Separator className="bg-white/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © {currentYear} Mankanwar Singh, UBC Faculty of Science Senator
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="https://www.instagram.com/mankanwar4senate" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ubc-gold">
              Instagram
            </a>
            <a href="mailto:contact@mankanwar.ca" className="text-white/60 hover:text-ubc-gold">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
