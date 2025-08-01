import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "ACM Workshop Session",
    category: "Workshops"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tech Talk Event",
    category: "Events"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Coding Competition",
    category: "Competitions"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Team Meeting",
    category: "Activities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Networking Event",
    category: "Events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Student Presentation",
    category: "Workshops"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Group Discussion",
    category: "Activities"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Technical Seminar",
    category: "Events"
  }
];

const categories = ["All", "Events", "Workshops", "Competitions", "Activities"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg">
            Photo Gallery
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-shadow">
            Explore our vibrant community through memorable moments from events, workshops, and activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer glass-card hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                  <p className="text-blue-300 text-xs">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-4xl max-h-full flex flex-col items-center">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-medium">{selectedImageData.alt}</h3>
                <p className="text-blue-300 text-sm">{selectedImageData.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}