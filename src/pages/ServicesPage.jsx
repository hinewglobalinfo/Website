import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const signatureSpecialties = [
  {
    title: "AI & Neural Integration",
    desc: "Custom LLM training and predictive data pipelines to automate complex decision-making.",
    features: ["Custom GPT Fine-tuning", "Predictive Analytics", "NLP Workflows", "Computer Vision Systems"]
  },
  {
    title: "SaaS Multi-Tenancy",
    desc: "Scalable cloud architectures built for high-growth subscription models and data isolation.",
    features: ["Isolated DB Schemas", "Subscription Logic", "User Role Hierarchy", "Automated Billing"]
  },
  {
    title: "FinTech & Secure Ledgers",
    desc: "High-security financial systems designed for real-time transaction processing and auditing.",
    features: ["PCI-DSS Compliance", "Transaction Ledgering", "Fraud Detection", "Payment Gateways"]
  },
  {
    title: "Enterprise ERP Systems",
    desc: "Centralized business management software tailored for Pakistani retail and global supply chains.",
    features: ["Inventory Management", "HRM Modules", "Supply Chain Tracking", "Reporting Dashboards"]
  },
  {
    title: "Web3 & Blockchain",
    desc: "Decentralized applications and smart contracts engineered for transparency and trust.",
    features: ["Smart Contract Audits", "DApp Development", "Tokenomics Design", "NFT Ecosystems"]
  },
  {
    title: "Real-Time Data Viz",
    desc: "Sophisticated dashboards that transform raw data into actionable visual intelligence.",
    features: ["Live Socket Updates", "Interactive Graphs", "Cross-Platform Sync", "Custom Analytics"]
  },
  {
    title: "Cyber-Security Suite",
    desc: "End-to-end protection for digital assets through rigorous encryption and penetration testing.",
    features: ["Penetration Testing", "End-to-End Encryption", "DDoS Mitigation", "Vulnerability Audits"]
  },
  {
    title: "Cloud-Native DevOps",
    desc: "Automated infrastructure ensuring your presence is perpetually fast, secure, and online.",
    features: ["Kubernetes Clusters", "CI/CD Pipelines", "Auto-scaling Logic", "Serverless Functions"]
  },
  {
    title: "E-Commerce Engines",
    desc: "High-conversion digital storefronts optimized for the Pakistani Sabzi Mandi and global markets.",
    features: ["Omni-channel Support", "Custom Checkout Flows", "Inventory Sync", "SEO Optimization"]
  }
];

// New Framework Content
const frameworkPhilosophy = [
  {
    title: "Scalable Core Logic",
    desc: "Just as we prioritized booking logic in our Airbnb-style systems, we ensure your MVP's foundation is ready for 10x growth from day one.",
    metric: "99.9% Uptime"
  },
  {
    title: "Data-Driven Precision",
    desc: "Applying the full Data Science Pipeline—from EDA to Deployment—to ensure every feature is backed by user behavioral patterns.",
    metric: "Zero Latency"
  },
  {
    title: "Bespoke Performance",
    desc: "Every line of code is treated with the precision of a master artisan, focusing on stability over non-essential polish.",
    metric: "ISO Standard"
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSpecialty = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Signature Solutions | Hinew.global"
        description="Explore 9 specialized digital engineering categories from AI Integration to FinTech Ledgers."
        path="/services"
      />

      <div className="pt-48 pb-32 min-h-screen" style={{ backgroundColor: themeConfig.colors.primary }}>
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Header */}
          <div className="mb-24 text-center">
            <FadeIn direction="up">
              <h2 className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6" style={{ color: themeConfig.colors.accent }}>
                Bespoke Engineering
              </h2>
              <h1 className="serif-luxury text-6xl md:text-8xl leading-[1.1] text-white">
                Signature <span className="italic text-stone-500">Solutions</span>
              </h1>
            </FadeIn>
          </div>

          {/* Signature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureSpecialties.map((item, index) => (
              <div 
                key={index}
                className="group relative p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500"
                style={{ 
                  backgroundColor: openIndex === index ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                  borderColor: openIndex === index ? themeConfig.colors.accent + '40' : 'rgba(255,255,255,0.05)'
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="serif-luxury text-3xl text-white group-hover:text-[#3ed0e6] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <button 
                    onClick={() => toggleSpecialty(index)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500"
                    style={{ 
                      backgroundColor: openIndex === index ? themeConfig.colors.accent : 'transparent',
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <span className={`text-xl ${openIndex === index ? 'text-[#08202b]' : 'text-white'}`}>+</span>
                  </button>
                </div>

                <p className="text-[#8eb1b9] font-light text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Expandable Features */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index ? 'max-h-60 opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: themeConfig.colors.accent }}>
                      The Technical Palette
                    </p>
                    <ul className="grid grid-cols-2 gap-y-3">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-[11px] text-stone-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#3ed0e6]" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- NEW SECTION: THE FRAMEWORK OF EXCELLENCE --- */}
          <div className="relative mt-48 py-32 border-t border-white/5">
            <FadeIn direction="up">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2">
                  <h2 className="serif-luxury text-5xl md:text-7xl text-white leading-tight mb-8">
                    The Framework of <br />
                    <span className="italic text-stone-500 text-4xl md:text-6xl">Digital Longevity</span>
                  </h2>
                  <p className="text-[#8eb1b9] font-light text-lg leading-relaxed max-w-xl border-l border-[#3ed0e6]/30 pl-8">
                    We don't just build features; we architect ecosystems. Our approach is rooted in the discipline of 
                    high-stakes engineering—where stability, security, and core objectives define the blueprint of success.
                  </p>
                </div>

                <div className="lg:w-1/2 grid gap-8">
                  {frameworkPhilosophy.map((item, i) => (
                    <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent hover:border-[#3ed0e6]/30 transition-all duration-500">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="serif-luxury text-2xl text-white">{item.title}</h4>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#3ed0e6]">{item.metric}</span>
                      </div>
                      <p className="text-stone-500 text-sm font-light leading-relaxed group-hover:text-stone-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* --- PRODUCTION PIPELINE STRIP --- */}
          <div className="mt-48 grid grid-cols-2 md:grid-cols-4 gap-12 text-center py-20 border-y border-white/5">
             {[
               { label: "Discovery", sub: "Problem Definition" },
               { label: "Refinement", sub: "Data Cleaning" },
               { label: "Validation", sub: "Model Evaluation" },
               { label: "Deployment", sub: "Monitoring" }
             ].map((stat, i) => (
               <div key={i} className="group cursor-default">
                 <p className="serif-luxury text-3xl text-white mb-2 group-hover:text-[#3ed0e6] transition-colors">{stat.label}</p>
                 <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold">{stat.sub}</p>
               </div>
             ))}
          </div>

          {/* Final CTA */}
          <FadeIn direction="up">
            <div className="mt-40 text-center py-24">
              <p className="serif-luxury text-4xl mb-12 text-white">Curious about a specific build?</p>
              <button
                onClick={() => navigate('/contact')}
                className="group relative px-14 py-6 overflow-hidden rounded-full border border-white/20 transition-all hover:border-[#3ed0e6]"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold text-white group-hover:text-[#08202b] transition-colors duration-500">
                  Request a Consultation
                </span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700"
                     style={{ backgroundColor: themeConfig.colors.accent }} />
              </button>
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;