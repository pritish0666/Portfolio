
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container flex items-center justify-between">
        {/* Copyright Message */}
        <div>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Instagram />
          </Link>
           <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Github />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Linkedin />
          </Link>
          {/* Add more social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


    