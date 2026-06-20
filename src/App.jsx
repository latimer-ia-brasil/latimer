import React, { useState, useRef } from 'react';
import { TranslationProvider } from './context/TranslationContext';
import SovereignCanvas from './components/SovereignCanvas';
import SovereignHUD from './components/SovereignHUD';
import BusinessDashboard from './components/BusinessDashboard';
import LiquidityTicker from './components/LiquidityTicker';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const mouse = useRef([0, 0]);

  const handleMouseMove = (e) => {
    mouse.current = [
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    ];
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TranslationProvider>
      <div className="w-full min-h-screen bg-[#050505] relative overflow-x-hidden" onMouseMove={handleMouseMove}>
        <SovereignCanvas activeTab={activeTab} easterEgg={easterEgg} mouse={mouse} />
        <SovereignHUD scrollToSection={scrollToSection} />
        <BusinessDashboard 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setEasterEgg={setEasterEgg}
          onExport={() => alert("[INTELLIGENCE LOG] State Hologram data package generated successfully.")}
        />
        <LiquidityTicker />
      </div>
    </TranslationProvider>
  );
}
