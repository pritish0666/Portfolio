'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="bg-secondary py-4 shadow-md">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          {/* Name on the left */}
          <div className="text-lg font-bold">
            Pritish
          </div>

          {/* Navigation links in the middle */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-accent transition-colors hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors hover:underline underline-offset-4">
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-accent transition-colors hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors hover:underline underline-offset-4">
              Contact
            </Link>
          </div>

          {/* Buy Me Coffee link on the right */}
          <div>
            <Button variant="outline" asChild className="btn-hover-effect">
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
    </div>
  );
};

export default Navigation;
