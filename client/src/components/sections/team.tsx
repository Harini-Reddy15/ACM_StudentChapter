import navyathaImage from "@assets/navyatasne2_1754029645258.jpg";

const leadMembers = [
  {
    name: "Navyatha Sayyaparaju",
    title: "Student Chair",
    image: navyathaImage,
  },
  {
    name: "Sarah Chen",
    title: "Vice President",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Michael Davis",
    title: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Emily Rodriguez",
    title: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "David Kim",
    title: "Treasurer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Lisa Thompson",
    title: "Secretary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  }
];

const coreMembers = [
  "John Anderson", "Maria Garcia", "Ryan Wilson", "Priya Patel",
  "Kevin Lee", "Amanda Brown", "Chris Taylor", "Jessica Wang",
  "Daniel Martinez", "Rachel Green", "Tony Stark", "Natasha Romanoff"
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">Our Team</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Meet the dedicated leaders and core members who drive our ACM Student Chapter forward.
          </p>
        </div>

        {/* Lead Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Leads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadMembers.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-300/50"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-blue-300 mb-4 font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Team Members</h3>
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coreMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-white font-medium">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}