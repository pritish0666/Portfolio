
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const About = () => {
  return (
    <section id="about" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Photo */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <Image
            src={siteConfig.images.about}
            alt="About Me Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Description and Achievements */}
        <div>
          <p className="mb-4">
            {siteConfig.about.description}
          </p>

          <h3 className="text-xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside">
            {siteConfig.about.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
