import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Inauguration Event",
    date: "August 2, 2025",
    description: "Join us for the official inauguration ceremony of St. Martin's ACM Student Chapter. An exciting event to kickstart our journey in advancing computing education.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">Upcoming Events</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Join us for exciting workshops, seminars, and competitions designed to enhance your skills 
            and connect you with industry professionals.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {events.map((event, index) => (
            <div key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-blue-300 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-white/80 mb-4">
                  {event.description}
                </p>
                <button className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center">
                  Register Now <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}