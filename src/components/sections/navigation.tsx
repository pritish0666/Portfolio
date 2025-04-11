
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <div className="container py-4">
      <nav className="flex items-center justify-between">
        {/* Name on the left */}
        <div className="text-lg font-bold">{siteConfig.name}</div>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Buy Me Coffee link on the right */}
        <div>
          <Button variant="outline" asChild>
            <Link
              href={siteConfig.links.buyMeCoffee}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Me Coffee
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
