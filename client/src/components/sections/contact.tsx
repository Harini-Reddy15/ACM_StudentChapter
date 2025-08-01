import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">Contact Us</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Have questions or want to get involved? We'd love to hear from you! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="text-blue-300 text-xl mr-4 mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-white/80">acm@stmartins.edu</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="text-blue-300 text-xl mr-4 mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contact</h4>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="text-blue-300 text-xl mr-4 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-white/80">
                      St. Martin's Engineering College<br />
                      Computer Science Department<br />
                      Room CS-201, Main Building
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start">
                  <div className="text-blue-300 text-xl mr-4 mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office Hours</h4>
                    <p className="text-white/80">
                      Monday - Friday: 2:00 PM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center">
                    <Mail className="h-8 w-8 mb-2" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center">
                    <Linkedin className="h-8 w-8 mb-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center">
                    <Instagram className="h-8 w-8 mb-2" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors duration-200 flex flex-col items-center">
                    <Phone className="h-8 w-8 mb-2" />
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}