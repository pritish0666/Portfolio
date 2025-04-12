
'use client';

import React from 'react';
import Link from 'next/link';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';
import {Menu, X} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-secondary py-4 shadow-md">
      <div className="container py-4">
        <nav className="flex items-center justify-between w-full">
          {/* Name on the left */}
          <div className="text-lg font-bold">
            Portfolio
          </div>

          {/* Navigation links in the middle */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="nav-link-hover transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="nav-link-hover transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="nav-link-hover transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1"
            >
              Projects
            </Link>
              <Link
                  href="#gallery"
                  className="nav-link-hover transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1"
              >
                  Gallery
              </Link>
            <Link
              href="#contact"
              className="nav-link-hover transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button (hamburger icon) */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu (hidden by default) */}
          <div
            className={`md:hidden absolute top-full right-0 bg-secondary shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col items-end p-4">
              <Link
                href="/"
                className="block py-2 hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block py-2 hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block py-2 hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
                <Link
                    href="#gallery"
                    className="block py-2 hover:text-accent transition-colors"
                    onClick={toggleMenu}
                >
                    Gallery
                </Link>
              <Link
                href="#contact"
                className="block py-2 hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Buy Me Coffee link (always on the right) */}
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
