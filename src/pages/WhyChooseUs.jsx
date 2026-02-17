import React from 'react';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const argumentsList = [
  {
    title: "Fractional CTO Leadership",
    desc: "For Pakistani startups aiming for Silicon Valley standards, we provide the high-level technical oversight usually reserved for enterprise-scale firms.",
    icon: "✧"
  },
  {
    title: "Regional Market Context",
    desc: "We understand the unique scaling challenges of the MENA and APAC regions, from low-bandwidth optimization to localized payment gateways.",
    icon: "✦"
  },
  {
    title: "Elite Engineering Bench",
    desc: "Our team isn't just 'developers'—we are a curated collective of problem-solvers specializing in Python, React, and DevOps automation.",
    icon: "❂"
  }
];

const WhyChooseUs = () => {
  return (
    <>
      <SEO 
        title="Global Delivery, Local Precision" 
        description="Why Hinew.global is the preferred engineering partner for high-growth Pakistani startups and global enterprises seeking technical integrity." 
        path="/why-choose-us"
      />

      <div 
        className="pt-48 pb-32 text-white selection:bg-[#3ed0e6]/30 min-h-screen"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Section Header: Refined Editorial Tone */}
          <div className="mb-32">
            <FadeIn direction="right">
              <h2 
                className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                style={{ color: themeConfig.colors.accent }}
              >
                The Hinew Advantage
              </h2>
              <h1 className="serif-luxury text-6xl md:text-8xl leading-tight mb-8 max-w-4xl">
                Global Quality. <br />
                <span className="italic text-stone-500 font-light">Rooted Execution.</span>
              </h1>
              <p className="text-[#8eb1b9] text-xl font-light max-w-2xl leading-relaxed border-l border-[#3ed0e6]/20 pl-8">
                We bridge the gap between high-level Western architectural standards and the relentless agility of the Pakistani tech ecosystem.
              </p>
            </FadeIn>
          </div>

          {/* Comparison Table: Architectural Glass-morphism */}
          <FadeIn direction="up">
            <div className="mb-48 relative">
              <div className="absolute inset-0 bg-[#3ed0e6]/5 blur-[120px] pointer-events-none" />
              
              <div 
                className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-md"
                style={{ backgroundColor: themeConfig.colors.secondary + '80' }}
              >
                {/* Table Header */}
                <div className="grid grid-cols-2 md:grid-cols-3 p-8 border-b border-white/10 bg-white/5">
                  <div className="text-stone-500 font-bold uppercase tracking-[0.3em] text-[9px] self-center">Service Metric</div>
                  <div className="hidden md:block text-stone-500 font-bold uppercase tracking-[0.3em] text-[9px] text-center self-center">Typical Outsourcing</div>
                  <div className="font-bold uppercase tracking-[0.3em] text-[9px] text-right md:text-center self-center" style={{ color: themeConfig.colors.accent }}>
                    Hinew Logic
                  </div>
                </div>
                
                {/* Row 1 */}
                <div className="p-10 grid grid-cols-2 md:grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="serif-luxury text-xl">Technical Debt</div>
                  <div className="hidden md:block text-stone-500 text-center font-light italic">"Build it fast, fix it later"</div>
                  <div className="text-white font-medium text-right md:text-center">Clean Code First Architecture</div>
                </div>

                {/* Row 2 */}
                <div className="p-10 grid grid-cols-2 md:grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="serif-luxury text-xl">Partnership Level</div>
                  <div className="hidden md:block text-stone-500 text-center font-light italic">Ticket-based Tasking</div>
                  <div className="text-white font-medium text-right md:text-center">Fractional CTO Consulting</div>
                </div>

                {/* Row 3 */}
                <div className="p-10 grid grid-cols-2 md:grid-cols-3 hover:bg-white/5 transition-colors">
                  <div className="serif-luxury text-xl">Engineering DNA</div>
                  <div className="hidden md:block text-stone-500 text-center font-light italic">Generalist Developers</div>
                  <div className="text-white font-medium text-right md:text-center">Niche Logic Specialists</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Value Cards: Staggered Architecture */}
          <div className="grid md:grid-cols-3 gap-12 items-stretch">
            {argumentsList.map((arg, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div 
                  className="p-12 rounded-2xl border border-white/5 transition-all duration-700 hover:border-[#3ed0e6]/30 group h-full flex flex-col"
                  style={{ backgroundColor: themeConfig.colors.secondary }}
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 mb-8 transition-all duration-500 group-hover:bg-[#3ed0e6] group-hover:text-[#08202b]"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    <span className="text-xl">{arg.icon}</span>
                  </div>
                  <h3 className="serif-luxury text-3xl mb-6 text-white group-hover:text-[#3ed0e6] transition-colors">{arg.title}</h3>
                  <p className="text-[#8eb1b9] font-light leading-relaxed text-sm">
                    {arg.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;