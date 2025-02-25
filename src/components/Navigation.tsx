import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Navigation = () => { // ✅ Define the component before exporting
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize router navigation

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-xl z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/30' : 'bg-background/10'
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="font-heading">
          <img
            src="/app-icon.png"
            alt="Cooks Connection Logo"
            className="h-12 w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#locations"
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'
            }`}
          >
            Venues
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'
            }`}
          >
            Services
          </a>
          {/* Updated Button to Navigate to the Form Page */}
          <Button
            size="sm"
            className="font-medium bg-black text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => navigate("/form")} // Navigate to FormPage
          >
            Plan Your Event
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation; // ✅ Now it's a default export
