import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/typing-animation";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Welcome to <span className="text-white">St. Martin's</span><br />
            <TypingAnimation text="ACM Student Chapter" speed={150} />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Advancing computing as a science and profession. Join our community of innovators, 
            learners, and future leaders in technology.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://forms.gle/wpSqWMN8u1ugFJfk9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur border border-white/30 hover:border-white/50 rounded-md transition-all duration-200"
            >
              Apply to Join
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}