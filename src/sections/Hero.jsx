import React from 'react';
import { useNavigate } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // Integrated SEO component

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Integration: Primary metadata for the homepage */}
      <SEO 
        title="Bespoke Digital Company" 
        description={`${themeConfig.brand.name} curates high-performance IT services and bespoke digital architectures with the precision of a master artisan. Built for speed, engineered for stability.`} 
        path="/"
      />

      <section 
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden text-white selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        {/* Luminous Architectural Light Effect matching Official Logo */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${themeConfig.colors.accent}, transparent)` }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-6xl">
          {/* Editorial Sub-header */}
          <FadeIn direction="down">
            <h2 
              className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-10 opacity-80"
              style={{ color: themeConfig.colors.accent }}
            >
              {themeConfig.brand.subtext}
            </h2>
          </FadeIn>

          {/* Large Luxury Serif Headline */}
          <FadeIn delay={0.2}>
            <h1 className="serif-luxury text-6xl md:text-9xl leading-[1.1] mb-12 tracking-tight">
              Innovate. <span className="italic text-stone-500 font-light">Grow.</span> <br />
              <span className="text-white">Transform.</span>
            </h1>
          </FadeIn>

          {/* High-Fidelity Description */}
          <FadeIn delay={0.4}>
            <p className="text-[#8eb1b9] text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Crafting bespoke digital architectures with the precision of a master artisan. 
              Your partner in <span className="text-white font-normal">Digital Excellence</span>.
            </p>
          </FadeIn>
          
          {/* Premium CTA Collection */}
          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => navigate('/services')}
                className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/10"
                style={{ backgroundColor: themeConfig.colors.accent, color: themeConfig.colors.primary }}
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">Explore Collections</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="text-[10px] uppercase tracking-[0.4em] font-bold border-b pb-2 transition-all duration-500 text-stone-400 hover:text-white"
                style={{ borderBottomColor: themeConfig.colors.accent + '33' }}
              >
                View Our Work
              </button>
            </div>
          </FadeIn>
        </div>

        

        {/* Background Micro-Interaction: Official Logo Symbol */}
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ backgroundColor: themeConfig.colors.accent }}
        />
      </section>
    </>
  );
};

export default Hero;