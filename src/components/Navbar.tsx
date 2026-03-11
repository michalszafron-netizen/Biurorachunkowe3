import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O firmie', href: '#o-firmie' },
    { name: 'Misja', href: '#misja' },
    { name: 'Usługi', href: '#uslugi' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-broken-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold text-muted-orange tracking-tight">Twój Doradca</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-advisor-dark hover:text-soft-orange transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+48123456789"
              className="flex items-center space-x-2 bg-soft-orange text-white px-5 py-2 rounded-full hover:bg-muted-orange transition-colors shadow-md"
            >
              <Phone size={16} />
              <span className="font-medium">Zadzwoń</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-advisor-dark hover:text-soft-orange transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-broken-white border-b border-warm-beige"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-advisor-dark hover:text-soft-orange hover:bg-warm-beige rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+48123456789"
                className="flex items-center justify-center space-x-2 bg-soft-orange text-white px-5 py-3 rounded-full mt-4"
              >
                <Phone size={18} />
                <span className="font-medium">Zadzwoń do nas</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
