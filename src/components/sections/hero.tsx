
'use client';

import React from 'react';
import Image from 'next/image';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';
import {Github, Linkedin} from 'lucide-react';

const Hero = () => {
  return (
    <section className="container py-24 relative overflow-hidden">
      {/* Content Container (to ensure text is above the images) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Profile Photo */}
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-xl border-2 border-accent">
          <Image
            src={siteConfig.images.profile}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {/* Introduction */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-primary-foreground animate-slide-in-left text-center"
          style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'}}
        >
          {siteConfig.name}
        </h1>
        <p
          className="text-xl mb-8 text-pretty text-gray-300 animate-slide-in-left"
          style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)'}}
        >
          {siteConfig.description}
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-slide-in-left">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
        </div>
        {/* Download Resume Button */}
        <div className="animate-slide-in-left">
          <Button className="btn-hover-effect">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
