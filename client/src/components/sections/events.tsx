import { Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import inaugurationImage from "@assets/groupPic.jpg";
import acmLogo from "@assets/acm logo_1753950471424.jpg";
import logoImage from "@assets/logo__1754028002215.png";

interface EventImage {
  src: string;
  alt: string;
  caption: string;
}

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  detailedDescription?: string;
  images?: EventImage[];
  highlights?: string[];
}

const events: Event[] = [
  {
    title: "Inauguration Event",
    date: "August 2, 2025",
    description: "Join us for the official inauguration ceremony of St. Martin's ACM Student Chapter. An exciting event to kickstart our journey in advancing computing education.",
    image: inaugurationImage,
    detailedDescription: `The ACM Student Chapter Inauguration at St. Martin's Engineering College marks a significant milestone in our institution's journey towards excellence in computing education. This prestigious event brings together students, faculty, industry professionals, and distinguished guests to celebrate the establishment of our ACM chapter.

Key Highlights:
• Official inauguration ceremony with traditional lamp lighting
• Keynote speeches from industry leaders and academic experts
• Interactive sessions on emerging technologies
• Networking opportunities with professionals
• Launch of various technical initiatives and programs

The event will feature workshops on cutting-edge technologies, panel discussions on career opportunities in computing, and demonstrations of innovative projects by our talented students.`,
    images: [
      { src: inaugurationImage, alt: "Inauguration Ceremony", caption: "Official inauguration ceremony with traditional lamp lighting" },
      { src: acmLogo, alt: "ACM Logo", caption: "ACM Student Chapter official logo" },
      { src: logoImage, alt: "St. Martin's Logo", caption: "St. Martin's Engineering College" },
    ],
    highlights: [
      "Traditional lamp lighting ceremony",
      "Keynote speeches from industry leaders",
      "Interactive technology workshops",
      "Networking sessions with professionals",
      "Project demonstrations by students",
      "Launch of technical initiatives"
    ]
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleExploreMore = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

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
                <button 
                  onClick={() => handleExploreMore(event)}
                  className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  Explore More <ArrowRight className="h-4 w-4 ml-1" />
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

      {/* Event Details Modal */}
      {isDialogOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 border border-gray-700 rounded-lg shadow-2xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedEvent.title}</h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Event Header */}
                <div className="flex items-center text-blue-300 text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{selectedEvent.date}</span>
                </div>

                {/* Main Image */}
                <div className="relative">
                  <img 
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Detailed Description */}
                <div className="text-white/90 leading-relaxed">
                  <h3 className="text-xl font-semibold text-white mb-3">Event Overview</h3>
                  <p className="whitespace-pre-line">{selectedEvent.detailedDescription}</p>
                </div>

                {/* Event Highlights */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Event Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEvent.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center text-white/80">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Images */}
                {selectedEvent.images && selectedEvent.images.length > 1 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Event Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedEvent.images.slice(1).map((img, index) => (
                        <div key={index} className="space-y-2">
                          <img 
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <p className="text-sm text-white/70 text-center">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Registration Button */}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 