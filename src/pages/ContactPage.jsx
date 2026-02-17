import React, { useState } from 'react';
import { themeConfig } from '../themeConfig';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('message');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    link: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Logic to trigger direct email correspondence
  const handleSendEmail = (e) => {
    e.preventDefault();
    
    // Dynamically pulls hinew.global@gmail.com from config
    const recipient = themeConfig.contact.email; 
    const subjectLine = encodeURIComponent(formData.subject || "New Project Inquiry");
    
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Client Email: ${formData.email}\n` +
      `Portfolio/Company Link: ${formData.link}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Opens user's default mail client with pre-filled details
    window.location.href = `mailto:${recipient}?subject=${subjectLine}&body=${body}`;
  };

  return (
    <>
      <SEO 
        title="Begin Collaboration" 
        description="Connect with Hinew.global. Send a direct message to Hamza Sheikh and Immad Babar regarding your next high-performance project." 
        path="/contact"
      />

      <div 
        className="pt-48 pb-32 min-h-screen selection:bg-[#3ed0e6]/30" 
        style={{ backgroundColor: themeConfig.colors.primary }}
      >
        <div className="max-w-4xl mx-auto px-10">
          
          {/* Interface Mode Toggle */}
          <div className="flex justify-center mb-16">
            <div 
              className="inline-flex p-1 rounded-full border border-white/10" 
              style={{ backgroundColor: themeConfig.colors.secondary }}
            >
              <button 
                type="button"
                onClick={() => setActiveTab('message')}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  activeTab === 'message' ? 'bg-white text-[#08202b]' : 'text-white-500 hover:text-white'
                }`}
              >
                Send us a Message
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('consultation')}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  activeTab === 'consultation' ? 'bg-white text-[#08202b]' : 'text-white-500 hover:text-white'
                }`}
              >
                Book a Consultation
              </button>
            </div>
          </div>

          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h1 className="serif-luxury text-4xl md:text-5xl text-white mb-4">
                {activeTab === 'message' ? 'Send us a Message' : 'Schedule a Session'}
              </h1>
              <p className="text-white-500 text-sm font-light">
                {activeTab === 'message' 
                  ? 'Fill in the details below to email us directly.' 
                  : 'Deep dive into your technical architecture with our experts.'
                }
              </p>
            </div>

            {/* Direct Email Inquiry Form */}
            <form onSubmit={handleSendEmail} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white-500 font-bold ml-2">
                    Full Name *
                  </label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-[#3ed0e6] transition-all text-white placeholder:text-white-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white-500 font-bold ml-2">
                    Email Address *
                  </label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-[#3ed0e6] transition-all text-white placeholder:text-white-700"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white-500 font-bold ml-2">
                    Email Subject *
                  </label>
                  <input 
                    required 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Enter your subject"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-[#3ed0e6] transition-all text-white placeholder:text-white-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white-500 font-bold ml-2">
                    Company/Portfolio Link
                  </label>
                  <input 
                    name="link" 
                    value={formData.link} 
                    onChange={handleChange} 
                    placeholder="Enter your link"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-[#3ed0e6] transition-all text-white placeholder:text-white-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white-500 font-bold ml-2">
                  Message *
                </label>
                <textarea 
                  required 
                  name="message" 
                  value={formData.message} 
                  rows="6" 
                  onChange={handleChange} 
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-[#3ed0e6] transition-all text-white placeholder:text-white-700 resize-none"
                />
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  type="submit"
                  className="group flex items-center gap-4 px-12 py-5 rounded-xl text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 shadow-lg hover:shadow-[#3ed0e6]/20"
                  style={{ backgroundColor: themeConfig.colors.accent, color: themeConfig.colors.primary }}
                >
                  <svg 
                    className="w-4 h-4 fill-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>
          
        </div>
      </div>
    </>
  );
};

export default ContactPage;