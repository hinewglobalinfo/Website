import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrustSignals from './components/TrustSignals';

// Sections
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import ServicesGrid from './sections/ServicesGrid';
import TechStack from './sections/Teachstack';

// Pages
import ServicesPage from './pages/ServicesPage';

import AboutPage from './pages/AboutPage';

import WhyChooseUs from './pages/WhyChooseUs';

import ContactPage from './pages/ContactPage';

import PortfolioPage from './pages/PortfolioPage';
//import MobileMenu from './components/MobileMenu';
/**
 * We wrap the homepage sections into a single component 
 * so they don't appear on every single page.
 */
const Home = () => (
  <>
    <Hero />
    <TrustSignals />
    <ProblemSolution />
    <ServicesGrid />
    <TechStack />
    
    
    
  </>
);

function App() {
  return (
    <HelmetProvider>

    
    <div className="bg-[#061a14] text-white min-h-screen font-sans flex flex-col">
      {/* Navbar stays at the top of every page */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          {/* Route for the landing/home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the dedicated Services page */}
          <Route path="/services" element={<ServicesPage />} />
          {/*Route path="/about" element={<AboutPage />} />*/}
          <Route path="/about" element={<AboutPage />} />
          {/*Route for the WhyChooseS page*/}
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of every page */}
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;