import React from 'react';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // SEO Component Integration

const ProblemSolution = () => {
  return (
    <>
      {/* SEO Integration: Optimizes for search terms related to technical debt and scalability */}
      <SEO 
        title="The Competitive Edge" 
        description={`Scale your startup with ${themeConfig.brand.name}. We replace technical debt and fragile codebases with future-proof engineering curated from MVP to Enterprise.`} 
        path="/"
      />

      <section 
        className="py-32 px-10 text-white selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Editorial Sub-header */}
          <FadeIn direction="down">
            <h2 
              className="text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
              style={{ color: themeConfig.colors.accent }}
            >
              The Competitive Edge
            </h2>
          </FadeIn>
          
          {/* Serif Headline */}
          <FadeIn delay={0.2}>
            <h3 className="serif-luxury text-5xl md:text-7xl leading-tight mb-10 max-w-4xl mx-auto">
              Why Startups Scale with <span className="italic text-stone-500 font-light">{themeConfig.brand.name}.</span>
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-[#8eb1b9] text-xl font-light leading-relaxed max-w-3xl mx-auto mb-24">
              Early technical decisions shape long-term success. We provide the 
              foundation founders demand: speed without compromising quality, 
              and architecture curated for the next million users.
            </p>
          </FadeIn>
          
          {/* Contrast Grid: Problem vs. Solution */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-[1px] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            
            {/* The Problem: Deepest Dark */}
            <FadeIn direction="right" delay={0.6}>
              <div 
                className="p-16 h-full text-left group transition-colors duration-700 hover:bg-white/[0.02]"
                style={{ backgroundColor: themeConfig.colors.primary }}
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-4 block">The Friction</span>
                <h4 className="serif-luxury text-3xl mb-6 group-hover:text-stone-400 transition-colors duration-500">The Problem</h4>
                <div 
                  className="w-12 h-[1px] mb-8" 
                  style={{ backgroundColor: themeConfig.colors.accent }}
                />
                <p className="text-[#8eb1b9] font-light leading-loose text-lg">
                  Technical debt and fragile codebases that stall growth just as you gain momentum.
                </p>
              </div>
            </FadeIn>

            {/* The Solution: Luminous Secondary Teal */}
            <FadeIn direction="left" delay={0.6}>
              <div 
                className="p-16 h-full text-left group transition-colors duration-700 relative overflow-hidden"
                style={{ backgroundColor: themeConfig.colors.secondary }}
              >
                {/* Subtle background glow for the solution side */}
                <div 
                  className="absolute inset-0 opacity-5 pointer-events-none blur-3xl"
                  style={{ backgroundColor: themeConfig.colors.accent }}
                />
                
                <span 
                  className="text-[9px] uppercase tracking-[0.3em] font-bold mb-4 block"
                  style={{ color: themeConfig.colors.accent }}
                >
                  The Foundation
                </span>
                <h4 className="serif-luxury text-3xl mb-6 group-hover:text-white transition-colors duration-500">The Solution</h4>
                <div 
                  className="w-12 h-[1px] bg-white/20 mb-8 group-hover:w-20 transition-all duration-700" 
                />
                <p className="text-white opacity-80 font-light leading-loose text-lg">
                  Future-proof engineering that scales with your ambition, curated from MVP to Enterprise.
                </p>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;