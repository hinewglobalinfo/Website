import React from 'react';
import { useNavigate } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // Added SEO component

const PortfolioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Integration: Optimized for "Selected Works" and "Engineering Excellence" */}
      <SEO 
        title="Selected Works" 
        description={`Explore the ${themeConfig.brand.name} collection: from full-stack platforms like PakBNB to advanced AI confidence analysis and automated DevOps pipelines.`} 
        path="/portfolio"
      />

      <div 
        className="pt-48 pb-32 selection:bg-[#3ed0e6]/30 min-h-screen"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Luxury Editorial Header */}
          <div className="mb-32 max-w-3xl relative">
            <FadeIn direction="right">
              {/* Soft Glow behind header matching official logo cyan */}
              <div 
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px] opacity-20"
                style={{ backgroundColor: themeConfig.colors.accent }}
              />
              
              <h2 
                className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                style={{ color: themeConfig.colors.accent }}
              >
                The Portfolio
              </h2>
              <h1 className="serif-luxury text-6xl md:text-8xl leading-[1.1] mb-10 text-white">
                Selected <span className="italic text-[#8eb1b9]">Works</span>
              </h1>
              <p className="text-[#8eb1b9] text-xl font-light leading-relaxed border-l border-[#3ed0e6]/30 pl-8">
                A curated gallery of engineering excellence, ranging from bespoke full-stack platforms like PakBNB to professional server administration and DevOps.
              </p>
            </FadeIn>
          </div>

          {/* Portfolio Gallery with Staggered FadeIn */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
            {themeConfig.portfolio.map((project, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="group cursor-default border-b border-white/5 pb-12 hover:border-[#3ed0e6]/30 transition-all duration-700">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8eb1b9] font-bold">
                      {project.category}
                    </span>
                    {/* Project specific abstract symbols */}
                    <span 
                      className="text-2xl transition-transform duration-700 group-hover:rotate-12"
                      style={{ color: themeConfig.colors.accent }}
                    >
                      {index % 3 === 0 ? "✧" : index % 3 === 1 ? "✦" : "❂"}
                    </span>
                  </div>
                  
                  <h3 className="serif-luxury text-4xl mb-6 text-white group-hover:text-[#3ed0e6] transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#8eb1b9] font-light leading-relaxed text-sm mb-8 max-w-md">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#8eb1b9]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Animated Luminous Line */}
                  <div 
                    className="h-[1px] w-0 group-hover:w-full transition-all duration-1000"
                    style={{ 
                      background: `linear-gradient(to right, ${themeConfig.colors.accent}, transparent)`,
                      boxShadow: `0 0 15px ${themeConfig.colors.accent}80` 
                    }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Final Luxury CTA Banner */}
          <FadeIn direction="up">
            <div 
              className="mt-48 text-center p-20 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: themeConfig.colors.secondary }}
            >
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${themeConfig.colors.accent}, transparent)` }}
              />
              
              <h2 className="serif-luxury text-4xl mb-8 text-white">Ready to Add Your Vision to Our Collection?</h2>
              
              <button 
                onClick={() => navigate('/contact')}
                className="group relative px-12 py-5 overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(62,208,230,0.4)]"
                style={{ backgroundColor: themeConfig.colors.accent, color: themeConfig.colors.primary }}
              >
                 <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">Begin Collaboration</span>
                 {/* Shimmer overlay */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;