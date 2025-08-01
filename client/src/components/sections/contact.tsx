import { Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">Contact Us</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Connect with us on social media to stay updated with our latest activities and events.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://www.linkedin.com/in/acm-smec-student-chapter-106929377?trk=contact-info" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center group"
                >
                  <Linkedin className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/acm__smec/?igsh=OTdmbDlzeXMyYWdi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center group"
                >
                  <Instagram className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}