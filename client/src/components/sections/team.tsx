import navyathaImage from "@assets/navyatasne2_1754029645258.jpg";
import tshashankImage from "@assets/TShashank_1754029815783.jpg";
import kruthiImage from "@assets/kruthisnr_1754029938930.jpg";
import sahasraImage from "@assets/sahasra_1754030161495.jpg";
import harshImage from "@assets/harshsnr_1754030317028.jpg";
import hariniImage from "@assets/harinisnr_1754030432845.jpg";

const leadMembers = [
  {
    name: "Navyatha Sayyaparaju",
    title: "Student Chair",
    image: navyathaImage,
  },
  {
    name: "T. Shashank",
    title: "Student Vice Chair",
    image: tshashankImage,
  },
  {
    name: "Kruthi Geerlapalli",
    title: "Secretary",
    image: kruthiImage,
  },
  {
    name: "Sahasra Banuri",
    title: "Treasurer",
    image: sahasraImage,
  },
  {
    name: "Harsh Rapaka",
    title: "Student Membership Chair",
    image: harshImage,
  },
  {
    name: "Harini Reddy",
    title: "Web Master",
    image: hariniImage,
  }
];

const coreMembers = [
  { name: "K. Shashank", role: "Operations Head" },
  { name: "Pramod Yadav", role: "Logistics Head" },
  { name: "Srikar Prasad", role: "Creative Head" },
  { name: "Manikanta Kasyap", role: "Logistics Co-Lead" },
  { name: "Sameer Meharaaz", role: "PR - Lead" },
  { name: "Gayathri", role: "Chapter Historian" },
  { name: "Vijay Mohan", role: "Photography" },
  { name: "Vaishnavi", role: "AI & Research Head" },
  { name: "K. Tanmayee", role: "Ambience and Setup Head" },
  { name: "Manas Kumar", role: "Content Creator" },
  { name: "Sarayu", role: "Innovation Architect" },
  { name: "Triaksh Thakur", role: "Executive Manager" },
  { name: "Gouthami", role: "Student Support Head" },
  { name: "Satish Kumar", role: "Content Creator Co-Lead" },
  { name: "Abhi Satwik", role: "AI & Research Co-Lead" },
  { name: "R. Vikas", role: "Creative Co-Lead" },
  { name: "K. Anirudh", role: "Student Support Co-Lead" },
  { name: "A. Abhinav", role: "Co-Executive Manager" }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-white font-semibold mb-1">{member.name}</p>
                  <p className="text-blue-300 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}