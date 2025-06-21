
import React, { useState, useEffect } from 'react';
import { Github, BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10' 
        : 'bg-black/20 backdrop-blur-md border-b border-purple-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg group-hover:animate-pulse">
              <Github className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Git & GitHub Mastery
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: '#basics', label: 'Git Basics' },
              { href: '#github', label: 'GitHub Features' },
              { href: '#workflows', label: 'Workflows' },
              { href: '#best-practices', label: 'Best Practices' },
              { href: '#troubleshooting', label: 'Troubleshooting' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-purple-400 transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full px-4 py-2">
              <BookOpen className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">Advanced Guide</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-purple-500/20">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: '#basics', label: 'Git Basics' },
                { href: '#github', label: 'GitHub Features' },
                { href: '#workflows', label: 'Workflows' },
                { href: '#best-practices', label: 'Best Practices' },
                { href: '#troubleshooting', label: 'Troubleshooting' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
