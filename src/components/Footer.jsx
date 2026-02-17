import React from 'react';
import { Link } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import SEO from './SEO'; // Integrated SEO component

const Footer = () => {
  return (
    <>
      {/* Global SEO Fallback: Ensures that the brand's primary 
        metadata is always present in the DOM.
      */}
      <SEO 
        title="Bespoke IT Services" 
        description="A digital Company specializing in high-performance MVP development, SaaS architectures, and artisanal AI solutions." 
      />

      <footer 
        className="py-20 px-10 border-t border-white/5 selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            
            {/* Brand Identity */}
            <div className="max-w-sm">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div 
                  className="w-10 h-10 flex items-center justify-center font-light rounded-full border transition-all duration-500 group-hover:bg-white group-hover:text-[#08202b]"
                  style={{ borderColor: themeConfig.colors.accent + '33', color: themeConfig.colors.accent }}
                >
                  H
                </div>
                <span className="serif-luxury text-2xl tracking-tighter text-white">
                  Hinew<span className="italic" style={{ color: themeConfig.colors.textMuted }}>.global</span>
                </span>
              </Link>
              {/* Changed from text-stone-400 to text-gray-300 for better visibility */}
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                A bespoke digital Company engineering high-performance IT services 
                with the precision of a master artisan. Built for speed, curated for scale.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <h4 
                  className="text-[10px] uppercase tracking-[0.3em] font-bold"
                  style={{ color: themeConfig.colors.accent }}
                >
                  Company
                </h4>
                {/* Changed from text-stone-500 to text-gray-400 */}
                <ul className="flex flex-col gap-4 text-sm font-light text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">Collections</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
                  <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Works</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 
                  className="text-[10px] uppercase tracking-[0.3em] font-bold"
                  style={{ color: themeConfig.colors.accent }}
                >
                  Connect
                </h4>
                {/* Changed from text-stone-500 to text-gray-400 */}
                <ul className="flex flex-col gap-4 text-sm font-light text-gray-400">
                  <li><Link to="/contact" className="hover:text-white transition-colors">Inquiry</Link></li>
                  <li><a href={`https://${themeConfig.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href={`mailto:${themeConfig.contact.email}`} className="hover:text-white transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Grounding Line */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Changed from text-stone-500 to text-gray-400 */}
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-medium">
              © {themeConfig.brand.established} {themeConfig.brand.name} IT Services. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: themeConfig.colors.secondary === '#0c2a35' ? '#334a54' : '#d1d1d1' }}>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;