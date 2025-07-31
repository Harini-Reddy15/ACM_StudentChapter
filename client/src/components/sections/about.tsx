import { Target, Eye, Heart } from "lucide-react";

const stats = [
  { number: "150+", label: "Active Members" },
  { number: "25+", label: "Events Organized" },
  { number: "10+", label: "Industry Partners" },
  { number: "5", label: "Years Active" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To advance computing as a science and profession through educational excellence, research innovation, and professional development opportunities."
  },
  {
    icon: Eye,
    title: "Our Vision", 
    description: "To be the leading student organization that bridges the gap between academic learning and industry requirements in computer science and engineering."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Excellence in education, innovation in research, collaboration in learning, and integrity in all our professional endeavors."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">About Our Chapter</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            We are the student chapter of ACM at St. Martin's Engineering College, 
            dedicated to fostering excellence in computing education and research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-blue-300 text-4xl mb-4">
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/80">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 text-shadow-lg">
                {stat.number}
              </div>
              <div className="text-white/80 text-shadow">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}