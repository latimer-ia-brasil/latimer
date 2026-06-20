import React from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function SovereignHUD({ scrollToSection }) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-zinc-900/50 font-mono">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <div 
          onClick={() => scrollToSection('inicio')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 border border-latimer-gold flex items-center justify-center font-serif text-latimer-gold font-bold text-sm group-hover:bg-latimer-gold group-hover:text-black transition-all">
            L
          </div>
          <span className="text-xs font-black tracking-[0.25em] text-white group-hover:text-latimer-gold transition-colors hidden sm:inline">
            LATIMER
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {t.menu.map((item, idx) => {
            const sections = ['inicio', 'servicos', 'ceo-trajetoria', 'contato', 'newsletter'];
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(sections[idx])}
                className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-latimer-gold transition-colors uppercase"
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Polyglot Selector Matrix */}
        <div className="flex items-center border border-zinc-800 bg-black/40 p-1 rounded-sm">
          {['PT', 'IT', 'EN', 'FR'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLocale(lang)}
              className={`text-[9px] font-bold px-2.5 py-1.5 transition-all rounded-sm ${
                locale === lang
                  ? 'bg-latimer-gold text-black shadow-[0_0_8px_rgba(197,160,89,0.3)]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
