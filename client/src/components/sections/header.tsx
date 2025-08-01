import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import acmLogoPath from "@assets/acm_logo_1754027979833.png";
import smecLogoPath from "@assets/logo__1754028002215.png";

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
    const sections = document.querySelectorAll("section[id]");
    let current = "home";

    sections.forEach((section) => {
      const element = section as HTMLElement;
      const sectionTop = element.offsetTop - 120;
      if (scrollPosition >= sectionTop) {
        current = section.getAttribute("id") || "home";
      }
    });

    setActiveSection(current);
  }, [scrollPosition]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    // --- EDITED LINE ---
    // The header is now centered, has horizontal padding, a top margin, and rounded corners.
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      
        <img src={acmLogoPath} alt="ACM Logo" className="h-12 w-auto" />

        {/* Center: Nav */}
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-white font-medium transition-colors hover:text-white/80`}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                 <span className="absolute bottom-[-10px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-white"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right: SMEC Logo and Menu */}
        <div className="flex items-center gap-2">
          <img src={smecLogoPath} alt="SMEC Logo" className="h-12 w-auto" />
        
          <button
            className="md:hidden ml-2"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="space-y-2 rounded-xl bg-white/20 p-4 shadow-lg backdrop-blur-md">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full rounded-md py-2 text-left font-medium text-white transition-colors hover:bg-white/10 px-3 ${
                  activeSection === item.href.slice(1) ? "bg-white/20" : ""
                }`}
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
