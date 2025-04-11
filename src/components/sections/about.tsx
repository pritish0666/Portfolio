
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

const About = () => {
  return (
    <section id="about" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Photo */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg card-shadow">
          <Image
            src={siteConfig.images.about}
            alt="About Me Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Description and Achievements */}
        <div>
          <p className="mb-4 text-pretty text-justify">
            {siteConfig.about.description}
          </p>

          {/* Education Details Card */}
          <div className="rounded-lg card-shadow p-6 mb-8 bg-card">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="flex items-center mb-2">
              <Icons.school className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Dayananda Sagar College of Engineering</span>
            </div>
            <div className="flex items-center mb-2">
              <Icons.book className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Course:&nbsp; </span> BE-ECE
            </div> 
            <div className="flex items-center mb-2">
              <Icons.calendar className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Timeline:&nbsp; </span> 2022-26
            </div>
            <div className="flex items-center">
              <Icons.mapPin className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Location:&nbsp;</span> Bangalore
            </div>
          </div>


          {/* Achievements */} 
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
