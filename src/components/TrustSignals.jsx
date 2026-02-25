import React from 'react';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO'; // SEO Component Integration

const TrustSignals = () => {
  return (
    <>
      {/* SEO Integration: Enhances domain authority by linking your brand 
          to established projects and technical excellence.
      */}
      <SEO 
        title="Trusted Engineering Partner" 
        description={`Engineering excellence for innovative teams. Trusted by PakBNB, SMZ Biochar, and high-growth startups to deliver high-fidelity digital solutions.`} 
        path="/"
      />

      <section 
        className="py-16 border-y border-white/5"
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-10">
          <FadeIn direction="down">
            <p 
              className="text-center text-xs uppercase tracking-[0.4em] mb-10 opacity-40 font-bold"
              style={{ color: themeConfig.colors.textMuted }}
            >
              Engineering Excellence for Innovative Teams
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              {/* Project & Entity Logos derived from your portfolio and context */}
              <span className="serif-luxury text-xl md:text-2xl font-light text-white tracking-tighter">
                Pak<span className="italic">BNB</span>
              </span>
              <span className="serif-luxury text-xl md:text-2xl font-light text-white tracking-widest uppercase">
                EcoCarbon Solutions
              </span>
              <span className="serif-luxury text-xl md:text-2xl font-light text-white italic">
                Focus Solutions.
              </span>
              <span className="serif-luxury text-xl md:text-2xl font-light text-white tracking-tight">
                Hinew<span className="opacity-50">.global</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default TrustSignals;