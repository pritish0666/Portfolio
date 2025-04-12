
'use client';

import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const images = [
  '/p1.jpeg',
  '/p2.jpg',
  '/p3.jpeg',
  'https://picsum.photos/id/240/3000/2000',
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (isAnimating) {
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duration of the transition, adjust as needed
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isAnimating]);

  return (
    <section id="gallery" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
                style={{width: '100%'}}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/50"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/50"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
