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
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 shadow-lg">
          <div className="flex justify-between items-center">
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex space-x-8 flex-1 justify-center">
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

            {/* Logo - Top Right */}
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
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3 shadow-lg">
            <div className="space-y-2">
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
        </div>
      )}
    </header>
  );
}
