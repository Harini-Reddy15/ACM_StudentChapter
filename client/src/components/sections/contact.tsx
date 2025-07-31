import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
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
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
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
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors text-2xl">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors text-2xl">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors text-2xl">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors text-2xl">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors text-2xl">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">First Name</label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">Last Name</label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-300"
                  placeholder="john.doe@student.stmartins.edu"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-blue-300">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="membership">Membership Inquiry</SelectItem>
                    <SelectItem value="events">Event Information</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}