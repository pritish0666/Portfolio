
import Image from 'next/image';
import {
  Navigation,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Achievements,
} from '@/components/sections';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <Navigation />
      </header>

      <main className="flex-1">
          <Hero />
          <About />
          <Achievements />
          <Projects />
          <Contact />
      </main>

      <Footer />
    </div>
  );
}
