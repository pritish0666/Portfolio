'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/components/icons';

const Gallery = () => {
  const images = [
    '/p1.jpeg',
    '/p2.jpg',
    '/p3.jpeg',
    '/p4.jpg',
    '/p5.jpg',
  ];

  return (
    <section id="gallery" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
