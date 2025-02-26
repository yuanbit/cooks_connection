import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Added X for close icon
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // For form navigation

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu
  const navigate = useNavigate(); // Router navigation

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
      setMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav
      className={`fixed w-full backdrop-blur-xl z-50 transition-all duration-300 ${
        scrolled ? "bg-white/30" : "bg-background/10"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="font-heading">
          <img
            src="/images/app-icon.png"
            alt="Cooks Connection Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-black hover:text-black/80" : "text-white hover:text-white/80"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("locations")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-black hover:text-black/80" : "text-white hover:text-white/80"
            }`}
          >
            Venues
          </button>

          <Button
            size="sm"
            className="animate-fade-up bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
            style={{ animationDelay: "400ms" }}
            onClick={() => window.open("https://form.typeform.com/to/QSuwJRfE", "_blank")}
          >
            Plan Your Event
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className={`md:hidden absolute top-20 left-0 w-full backdrop-blur-3xl bg-black/30 text-white z-50 transition-all duration-300 shadow-lg`}>
          <div className="flex flex-col items-center py-6 space-y-4">
            <button onClick={() => scrollToSection("services")} className="text-white text-lg">
              Services
            </button>
            <button onClick={() => scrollToSection("locations")} className="text-white text-lg">
              Venues
            </button>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => window.open("https://form.typeform.com/to/QSuwJRfE", "_blank")}
            >
              Plan Your Event
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
