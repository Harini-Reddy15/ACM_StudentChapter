import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import acmLogoPath from "@assets/acm logo_1753950471424.jpg";
import smecLogoPath from "@assets/logo_1753951068269.jpg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo - ACM */}
          <div className="flex items-center">
            <img 
              src={acmLogoPath}
              alt="ACM Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="ml-3 text-xl font-bold text-blue-900">St. Martin's ACM</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link text-blue-800 hover:text-blue-600 transition-colors duration-200 font-medium ${
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
              className="h-14 w-14 object-contain"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-800" />
            ) : (
              <Menu className="h-6 w-6 text-blue-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-blue-800 hover:text-blue-600"
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
