'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600" onClick={() => scrollTo('hero')}>Portfolio</div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollTo('about')} className="hover:text-blue-600 transition">About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-blue-600 transition">Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-blue-600 transition">Projects</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-blue-600 transition">Experience</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-600 transition">Contact</button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollTo('about')} className="text-left hover:text-blue-600">About</button>
              <button onClick={() => scrollTo('skills')} className="text-left hover:text-blue-600">Skills</button>
              <button onClick={() => scrollTo('projects')} className="text-left hover:text-blue-600">Projects</button>
              <button onClick={() => scrollTo('experience')} className="text-left hover:text-blue-600">Experience</button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-blue-600">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
