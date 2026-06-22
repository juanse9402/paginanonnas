'use client';

import { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nuestro Método', href: '#metodo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center relative w-48 h-16">
            <a href="#inicio" className="absolute -top-6 md:-top-8 left-0 flex items-center gap-2">
              {!logoError ? (
                <img 
                  src="/logo.png.png" 
                  alt="Cuidado Nonnas Logo" 
                  className="h-28 md:h-36 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2 text-2xl font-bold text-[var(--color-nonnas-blue)] mt-6">
                  <HeartHandshake className="h-8 w-8 text-[#2B6CB0]" />
                  <span>Cuidado Nonnas</span>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[var(--color-nonnas-blue)] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-[var(--color-nonnas-blue)]/80 hover:bg-[var(--color-nonnas-blue)]/90 backdrop-blur-md border border-white/50 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_8px_32px_rgba(43,108,176,0.2)] hover:shadow-[0_8px_32px_rgba(43,108,176,0.4)]"
            >
              Cotizar Servicio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[var(--color-nonnas-blue)] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-[var(--color-nonnas-mint)] text-white px-4 py-3 rounded-md font-medium"
            >
              Cotizar Servicio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
