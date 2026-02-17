import React from 'react';
import { useNavigate } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // Integrated SEO component

const services = [
  {
    title: "Bespoke MVP Development",
    desc: "Curating the essential path to your initial market impact with artisanal precision.",
    icon: "✧"
  },
  {
    title: "SaaS & Cloud Architecture",
    desc: "Sophisticated digital foundations engineered for elegant, effortless scaling.",
    icon: "✦"
  },
  {
    title: "AI-Powered Intelligence",
    desc: "Harmonizing advanced predictive analytics with your unique business workflow.",
    icon: "❂"
  },
  {
    title: "UI/UX Design Experience",
    desc: "Intuitive digital narratives crafted for conversion and a premium user aesthetic.",
    icon: "✺"
  }
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Integration: Anchors the core service pillars for search engine crawlers */}
      <SEO 
        title="Digital Mastery & Expertise" 
        description={`Discover the technical mastery of ${themeConfig.brand.name}. We specialize in bespoke MVP development, SaaS cloud architecture, and AI-powered business intelligence.`} 
        path="/"
      />

      <section 
        id="services" 
        className="py-32 px-10 text-white selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header with Luxury Spacing */}
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
            <FadeIn direction="right">
              <div className="max-w-xl">
                <h2 
                  className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                  style={{ color: themeConfig.colors.accent }}
                >
                  The Expertise
                </h2>
                <h3 className="serif-luxury text-5xl md:text-6xl text-white">
                  Digital <span className="italic opacity-60">Mastery</span>
                </h3>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 italic hidden md:block">
                Curated Solutions
              </p>
            </FadeIn>
          </div>

          {/* Minimalist Grid with Staggered FadeIn */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                  className="group p-10 border border-white/5 rounded-2xl shadow-xl transition-all duration-700 hover:-translate-y-2 cursor-default h-full"
                  style={{ backgroundColor: themeConfig.colors.secondary }}
                >
                  {/* Luminous Logo Accent Icon */}
                  <div 
                    className="text-3xl mb-8 transition-transform duration-700 group-hover:rotate-12 inline-block"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    {service.icon}
                  </div>
                  
                  <h4 className="serif-luxury text-2xl text-white mb-4 group-hover:text-[#3ed0e6] transition-colors duration-500">
                    {service.title}
                  </h4>
                  
                  <p className="text-[#8eb1b9] text-sm font-light leading-loose">
                    {service.desc}
                  </p>
                  
                  {/* Animated Luminous Line Reveal */}
                  <div className="mt-10 pt-6 border-t border-white/5 overflow-hidden">
                    <div 
                      className="w-0 group-hover:w-full h-[1px] transition-all duration-1000"
                      style={{ backgroundColor: themeConfig.colors.accent }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Collection Discovery Link */}
          <FadeIn direction="up" delay={0.5}>
            <div className="mt-20 text-center">
              <button 
                onClick={() => navigate('/services')}
                className="text-[10px] uppercase tracking-[0.4em] text-stone-500 hover:text-white transition-colors duration-500 border-b border-transparent hover:border-white/20 pb-2"
              >
                View Full Collection
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;