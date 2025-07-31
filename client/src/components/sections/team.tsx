import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const executiveTeam = [
  {
    name: "Alex Johnson",
    position: "Chapter President", 
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Sarah Chen",
    position: "Vice President",
    department: "Software Engineering", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Michael Rodriguez", 
    position: "Technical Lead",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Emily Davis",
    position: "Events Coordinator",
    department: "Information Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">Our Team</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Meet the dedicated team members who make our chapter's success possible through 
            their leadership and commitment to excellence.
          </p>
        </div>

        {/* Executive Committee */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 text-shadow">Executive Committee</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <img 
                  src={member.image}
                  alt={member.position}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-blue-300 text-sm mb-2">{member.position}</p>
                <p className="text-white/80 text-sm">{member.department}</p>
                <div className="flex justify-center space-x-3 mt-4">
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students to join our team and help make a difference 
            in the computing community at St. Martin's.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Apply to Join
          </Button>
        </div>
      </div>
    </section>
  );
}
