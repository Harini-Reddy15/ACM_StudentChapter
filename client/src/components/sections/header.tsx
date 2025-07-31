import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import acmLogoPath from "@assets/acm logo_1753950471424.jpg";
import smecLogoPath from "@assets/logo_1753951068269.jpg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Our Team", href: "#team" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';
    
    sections.forEach(section => {
      const htmlElement = section as HTMLElement;
      const sectionTop = htmlElement.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        current = section.getAttribute('id') || 'home';
      }
    });

    setActiveSection(current);
  }, [scrollPosition]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo - ACM */}
          <div className="flex items-center">
            <img 
              src={acmLogoPath}
              alt="ACM Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="ml-3 text-xl font-bold text-white">St. Martin's ACM</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link text-white/80 hover:text-blue-300 transition-colors duration-200 font-medium ${
                  activeSection === item.href.slice(1) ? 'active' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Logo - SMEC */}
          <div className="flex items-center">
            <img 
              src={smecLogoPath}
              alt="SMEC Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-white/80 hover:text-blue-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
