import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // SEO Component Integration

const techCategories = [
  {
    id: 'web',
    label: 'Modern Web & Apps',
    description: 'We craft high-fidelity digital interfaces and robust full-stack ecosystems.',
    skills: ['React.js', 'Tailwind CSS', 'Node.js', 'PHP', 'Express', 'HTML5/CSS3'],
    icon: '✧'
  },
  {
    id: 'infra',
    label: 'Server & Infrastructure',
    description: 'Managed end-to-end deployment cycles and server hardening for high-traffic scalability.',
    skills: ['cPanel', 'WordPress', 'DNS Management', 'SSL Integration', 'MySQL', 'Oracle DB'],
    icon: '✦'
  },
  {
    id: 'devops',
    label: 'DevOps & Automation',
    description: 'Automated build, test, and deployment workflows integrated for zero-downtime releases.',
    skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Cypress Automation', 'SonarQube'],
    icon: '❂'
  },
  {
    id: 'intelligence',
    label: 'AI & Machine Learning',
    description: 'Integrating predictive analytics and computer vision into custom software solutions.',
    skills: ['Python', 'OpenCV', 'ML Pipelines', 'TensorFlow', 'Predictive Analytics'],
    icon: '✺'
  }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(techCategories[0]);
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Integration: Optimizes for high-intent technical keywords */}
      <SEO 
        title="Technical Architecture" 
        description={`Explore the engineering palette of ${themeConfig.brand.name}. Expert full-stack development, server hardening, automated DevOps, and custom AI/ML pipelines.`} 
        path="/"
      />

      <section 
        className="py-32 px-10 text-white selection:bg-[#3ed0e6]/30"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-24">
            <FadeIn direction="down">
              <h2 
                className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                style={{ color: themeConfig.colors.accent }}
              >
                Technical Architecture
              </h2>
              <h3 className="serif-luxury text-5xl md:text-6xl text-white">
                The <span className="italic opacity-60">Palette</span> of Innovation
              </h3>
            </FadeIn>
          </div>

          {/* Master-Detail Container */}
          <div className="grid lg:grid-cols-12 gap-12 border-t border-white/5 pt-12">
            
            {/* Master: Category List (Left Side) */}
            <div className="lg:col-span-5 space-y-4">
              {techCategories.map((cat, index) => (
                <FadeIn key={cat.id} delay={index * 0.1} direction="right">
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left p-8 rounded-2xl transition-all duration-500 border flex items-center justify-between group ${
                      activeCategory.id === cat.id 
                        ? 'border-[#3ed0e6]/40 shadow-[0_20px_60px_-15px_rgba(62,208,230,0.1)]' 
                        : 'border-transparent hover:bg-white/5'
                    }`}
                    style={{ backgroundColor: activeCategory.id === cat.id ? themeConfig.colors.secondary : 'transparent' }}
                  >
                    <div className="flex flex-col gap-1">
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                        activeCategory.id === cat.id ? 'text-[#3ed0e6]' : 'text-[#8eb1b9]'
                      }`}>
                        {cat.id}
                      </span>
                      <span className={`serif-luxury text-2xl transition-all ${
                        activeCategory.id === cat.id ? 'text-white pl-2' : 'text-white/40'
                      }`}>
                        {cat.label}
                      </span>
                    </div>
                    <span 
                      className={`text-xl transition-all duration-700 ${
                        activeCategory.id === cat.id ? 'scale-125 rotate-12' : 'text-white/10'
                      }`}
                      style={{ color: activeCategory.id === cat.id ? themeConfig.colors.accent : '' }}
                    >
                      {cat.icon}
                    </span>
                  </button>
                </FadeIn>
              ))}
            </div>

            {/* Detail: Expanded View (Right Side) */}
            <div className="lg:col-span-7 relative">
              <FadeIn direction="left" delay={0.4}>
                <div 
                  className="p-12 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[500px]"
                  style={{ backgroundColor: themeConfig.colors.secondary }}
                >
                  {/* Animated Glow Accent */}
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none animate-pulse opacity-20" 
                    style={{ backgroundColor: themeConfig.colors.accent }}
                  />
                  
                  <div key={activeCategory.id} className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-700">
                    <h4 className="serif-luxury text-4xl mb-6 text-white leading-tight">
                      {activeCategory.label}
                    </h4>
                    <p className="text-[#8eb1b9] font-light leading-relaxed text-lg mb-12 max-w-md italic">
                      {activeCategory.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-12">
                      {activeCategory.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div 
                            className="h-[1px] w-6 group-hover:w-10 transition-all duration-500" 
                            style={{ backgroundColor: themeConfig.colors.accent + '66' }}
                          />
                          <span className="text-sm tracking-widest uppercase font-bold text-white/80 group-hover:text-[#3ed0e6] transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Contextual Action Link */}
                    <button 
                      onClick={() => navigate('/contact')}
                      className="group flex items-center gap-4 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all active:scale-95 shadow-lg"
                      style={{ backgroundColor: themeConfig.colors.accent, color: themeConfig.colors.primary }}
                    >
                      Discuss {activeCategory.id}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;