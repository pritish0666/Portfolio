'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/p5.jpeg',
  '/p2.jpg',
  '/p3.jpeg',
  '/p4.jpeg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
