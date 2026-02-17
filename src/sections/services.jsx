import React from 'react';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // Integrated SEO component

const services = [
  { 
    title: "Eco-Cloud Architecture", 
    desc: "Energy-efficient cloud migrations curated for the modern, conscious enterprise.",
    icon: "✧" 
  },
  { 
    title: "Digital Growth", 
    desc: "Bespoke scaling strategies for Hinew.global partners seeking sustainable excellence.",
    icon: "✦" 
  },
  { 
    title: "Sustainable AI", 
    desc: "Leveraging intelligent systems to optimize resources with artisanal precision.",
    icon: "❂" 
  }
];

const Services = () => {
  return (
    <>
      {/* SEO Integration: Targetting keywords for Technical Curation and Sustainability */}
      <SEO 
        title="Technical Curation" 
        description={`Explore the ${themeConfig.brand.name} collection of grounded innovation: Eco-Cloud architecture, sustainable AI systems, and bespoke digital growth strategies.`} 
        path="/services"
      />

      <section 
        id="services-curated" 
        className="py-32 px-10 text-white selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Editorial Header */}
          <div className="text-center mb-24">
            <FadeIn direction="down">
              <h2 
                className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                style={{ color: themeConfig.colors.accent }}
              >
                Technical Curation
              </h2>
              <h3 className="serif-luxury text-5xl md:text-6xl text-white">
                Grounded <span className="italic opacity-60">Innovation</span>
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div 
                  className="group p-12 rounded-2xl border border-white/5 transition-all duration-700 hover:-translate-y-3 cursor-default h-full"
                  style={{ backgroundColor: themeConfig.colors.secondary }}
                >
                  {/* Luxury Accent Symbol matching Official Logo */}
                  <div 
                    className="w-14 h-14 border rounded-full mb-8 flex items-center justify-center transition-all duration-500 text-xl group-hover:bg-white group-hover:text-[#08202b]"
                    style={{ borderColor: themeConfig.colors.accent + '33', color: themeConfig.colors.accent }}
                  >
                    {item.icon}
                  </div>
                  
                  <h4 className="serif-luxury text-3xl text-white mb-6 group-hover:text-[#3ed0e6] transition-colors duration-500">
                    {item.title}
                  </h4>
                  
                  <p className="text-[#8eb1b9] font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Decorative Detail Reveal */}
                  <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div 
                      className="h-[1px] w-8" 
                      style={{ backgroundColor: themeConfig.colors.accent }}
                    />
                    <span 
                      className="text-[9px] uppercase tracking-widest font-bold"
                      style={{ color: themeConfig.colors.accent }}
                    >
                      Explore Collection
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;