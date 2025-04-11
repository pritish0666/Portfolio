
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

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
            Instagram
          </Link>
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            WhatsApp
          </Link>
          {/* Add more social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
