import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import SEO from './SEO'; 
import LogoPic from '../images/Logo.jpeg'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <SEO 
        title="Bespoke IT Services" 
        description="A digital Company specializing in high-performance MVP development and SaaS architectures." 
      />

      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-700 px-8 md:px-16 ${
          isScrolled 
            ? 'py-4 backdrop-blur-xl border-b shadow-lg' 
            : 'py-10 bg-transparent'
        }`}
        style={{ 
          backgroundColor: isScrolled ? `${themeConfig.colors.primary}cc` : 'transparent',
          borderBottomColor: isScrolled ? 'rgba(255,255,255,0.05)' : 'transparent'
        }}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          
          {/* Luminous Logo Section - Updated to Square Frame */}
          <Link to="/" className="flex items-center gap-4 group">
            <div 
              className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl border transition-all duration-500 bg-white/5 group-hover:bg-white/10"
              style={{ borderColor: themeConfig.colors.accent + '40' }}
            >
              {/* Internal Glow for Square Container */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ backgroundColor: themeConfig.colors.accent }}
              />
              
              <img 
                src={LogoPic} 
                alt={`${themeConfig.brand.name} Logo`} 
                className="w-8 h-8 object-cover relative z-10 transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            <div className="flex flex-col">
              <span className="serif-luxury text-2xl tracking-tighter text-white leading-none">
                Hinew<span className="italic" style={{ color: themeConfig.colors.textMuted }}>.global</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 font-semibold mt-1">
                Digital Company
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-14 text-[10px] uppercase tracking-[0.4em] font-bold">
            {[
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Why Choose Us', path: '/why-choose-us' },
              { name: 'Portfolio', path: '/portfolio' }
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-all duration-500 hover:tracking-[0.5em] ${
                  isActive(link.path) ? 'text-white' : 'text-stone-500 hover:text-white'
                }`}
                style={{ 
                  borderBottom: isActive(link.path) ? `1px solid ${themeConfig.colors.accent}` : 'none', 
                  paddingBottom: '4px' 
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Premium CTA Collection */}
          <div className="flex items-center gap-8">
            <Link 
              to="/contact" 
              className={`hidden sm:block text-[10px] uppercase tracking-[0.3em] transition-colors font-bold ${
                isActive('/contact') ? 'text-white' : 'text-stone-500 hover:text-white'
              }`}
            >
              Inquiry
            </Link>
            <Link 
              to="/contact"
              className="group relative overflow-hidden px-9 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:shadow-2xl"
              style={{ 
                backgroundColor: themeConfig.colors.accent, 
                color: themeConfig.colors.primary,
                boxShadow: `0 10px 30px ${themeConfig.colors.accent}33`
              }}
            >
              <span className="relative z-10">Commission Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;