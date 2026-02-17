import React from 'react';
import { Link } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const leadership = [
  { name: "Hamza Sheikh", role: "CEO & Founder", focus: "Strategy & Vision" },
  { name: "Immad Babar", role: "CTO & Architect", focus: "Systems & Engineering" },
  { name: "Hinew.global", role: "Established 2025", focus: "Digital Company" },
];

const storyChapters = [
  {
    title: "The Vision",
    content: "In late 2025, Hinew.global emerged from Hamza Sheikh's vision to redefine the Pakistani tech landscape, bridging the gap between local talent and global standards."
  },
  {
    title: "Engineering Excellence",
    content: "With Immad Babar as CTO, we established 'Company Logic'ensuring every line of code serves as a solid foundation for digital legacies."
  },
  {
    title: "Project: PakBNB",
    content: "Successfully engineered a bespoke full-stack platform, proving that high-fidelity design and rapid performance can coexist beautifully."
  },
  {
    title: "Project: SMZ Biochar",
    content: "Delivered a performance-oriented digital presence for sustainable agriculture, focusing on measurable impact and scalable growth."
  },
  {
    title: "Project: Focus Solutions",
    content: "Architected intuitive digital narratives that harmonize conversion goals with a premium user aesthetic."
  },
  {
    title: "Our Manifesto",
    content: "Today, we empower founders by crafting the technology that makes their vision inevitable through engineering integrity."
  }
];

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="Our Story & Projects" 
        description="Discover the history of Hinew.global. From founding visions by Hamza Sheikh to architectural mastery in PakBNB and SMZ Biochar." 
        path="/about"
      />

      <div 
        className="pt-48 pb-32 selection:bg-[#3ed0e6]/30 min-h-screen"
        style={{ backgroundColor: themeConfig.colors.primary, color: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Editorial Hero & Vertical Project Scroller */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-48">
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <h2 className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6" style={{ color: themeConfig.colors.accent }}>
                  The Narrative
                </h2>
                <h1 className="serif-luxury text-6xl md:text-8xl leading-[1.1] mb-12">
                  Technology with a <span className="italic text-stone-500">Soul.</span>
                </h1>
                <p className="text-[#8eb1b9] text-xl font-light leading-relaxed max-w-xl border-l border-white/10 pl-8">
                  "Hinew.global isn't just a software house; it's a digital Company where every project is an intentional stroke toward excellence."
                </p>
              </FadeIn>
            </div>
            
            {/* Vertical Project & Story Scroller */}
            <div className="lg:col-span-5 relative h-[500px] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#08202b] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#08202b] to-transparent z-10" />
              
              <div className="animate-vertical-story-fast space-y-16">
                {[...storyChapters, ...storyChapters].map((chapter, i) => (
                  <div key={i} className="group">
                    <span 
                      className="text-[9px] uppercase tracking-[0.3em] font-bold mb-3 block"
                      style={{ color: themeConfig.colors.accent }}
                    >
                      {chapter.title}
                    </span>
                    <p className="text-[#8eb1b9] text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                      {chapter.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infinite Scroll Leadership Section */}
          <div className="mb-48 overflow-hidden py-20 border-y border-white/5 bg-white/[0.02]">
            <div className="mb-12 px-10">
              <h2 className="serif-luxury text-4xl italic">The Minds Behind the Craft</h2>
            </div>
            
            <div className="relative">
              <div className="animate-infinite-scroll flex gap-20 items-center">
                {[...leadership, ...leadership, ...leadership].map((member, i) => (
                  <div key={i} className="flex items-center gap-12 min-w-[400px] border-l border-white/5 pl-12">
                    <div>
                      <h4 className="serif-luxury text-4xl md:text-5xl">{member.name}</h4>
                      <p className="text-[#3ed0e6] uppercase tracking-widest text-xs font-bold mt-2">
                        {member.role}
                      </p>
                      <p className="text-stone-500 text-sm mt-1">{member.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Manifesto Section */}
          <FadeIn direction="up">
            <div 
              className="relative overflow-hidden rounded-3xl py-24 md:py-32 px-12 text-center text-white border border-white/5"
              style={{ backgroundColor: themeConfig.colors.secondary }}
            >
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase mb-10 text-stone-500">The Manifesto</h2>
                <p className="serif-luxury text-4xl md:text-6xl leading-[1.2] mb-16">
                  To empower founders by crafting the technology that makes their vision <span className="italic font-light text-stone-400">inevitable.</span>
                </p>
                <Link 
                  to="/contact"
                  className="group relative inline-block px-12 py-5 overflow-hidden rounded-full border transition-all duration-500 hover:shadow-2xl"
                  style={{ borderColor: themeConfig.colors.accent + '40' }}
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">Commission Your Vision</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700" style={{ backgroundColor: themeConfig.colors.accent }} />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-[10px] uppercase tracking-[0.4em] font-bold text-[#08202b]">
                    Inquiry Now
                  </span>
                </Link>
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: themeConfig.colors.accent }} />
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
};

export default AboutPage;