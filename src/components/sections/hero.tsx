
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container py-24 text-center">
      {/* Profile Photo */}
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 card-shadow">
        <Image
          src={siteConfig.images.profile}
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Introduction */}
      <h1 className="text-4xl font-bold mb-4 text-pretty">{siteConfig.name}</h1>
      <p className="text-lg mb-8 text-pretty">{siteConfig.description}</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-8">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <Linkedin />
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <Github />
        </Link>
        {/* Add more social media links here */}
      </div>

      {/* Download Resume Button */}
      <Button className="btn-hover-effect">
        <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </Button>
    </section>
  );
};

export default Hero;
