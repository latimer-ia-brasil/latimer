
```jsx
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function BusinessDashboard({ activeTab, setActiveTab, setEasterEgg, onExport }) {
  const { t } = useTranslation();

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 3) {
      setEasterEgg(true);
      setTimeout(() => setEasterEgg(false), 8000);
    }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24 font-mono">
      {/* Hero Section */}
      <section id="inicio" className="mb-24 pt-12">
        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-white mb-4">
          {t.title}
        </h1>
        <p className="text-xs text-latimer-gold tracking-widest font-bold border-b border-zinc-800 pb-6 mb-8 uppercase">
          {t.chancela}
        </p>
        <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-4xl leading-relaxed font-serif italic">
          "{t.sovereign}"
        </p>
      </section>

      {/* Operations Matrix */}
      <section id="servicos" className="mb-24 scroll-mt-24">
        <div className="flex justify-between items-center mb-8 border-b border-zinc-900 pb-2">
          <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase">// MATRIX OPERACIONAL ESTADOS</h2>
          <button onClick={onExport} className="text-xs text-latimer-gold hover:underline">
            [ EXPORT_STATE_HOLOGRAPH ]
          </button>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {t.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`p-4 border text-left transition-all ${
                activeTab === idx
                  ? 'border-latimer-gold bg-zinc-950/80 text-white shadow-[0_0_15px_rgba(197,160,89,0.1)]'
                  : 'border-zinc-900 bg-black/40 text-zinc-600 hover:border-zinc-800 hover:text-zinc-400'
              }`}
            >
              <span className="text-xs block text-zinc-600 mb-1">0{idx + 1}.</span>
              <span className="font-bold text-sm tracking-wide">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 backdrop-blur-md min-h-[220px]">
          {activeTab === 0 && (
            <div>
              <h3 className="text-xl font-serif text-white mb-4">Rio de Janeiro — Infraestrutura Crítica e Telecomunicações</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-3xl">
                Operações de alta complexidade em redes de comunicação estratégica e subestações industriais. Atuação focada no restabelecimento de sistemas de alta criticidade e engenharia de campo em ambientes corporativos densos e faixas de domínio regulamentadas.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h3 className="text-xl font-serif text-white mb-4">Minas Gerais — Engenharia de Base e Matriz Energética</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-3xl">
                Desenvolvimento de projetos eletrotécnicos estruturantes, consultoria em eficiência energética industrial e implantação de usinas fotovoltaicas de alta performance. Gestão técnica de ativos e conexões em redes de distribuição com estrita conformidade normativa (CONFEA/CREA).
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h3 className="text-xl font-serif text-white mb-4">Espírito Santo — Logística de Implantação Massiva</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-3xl">
                {t.esDescription} Coordenação tática, engenharia civil/elétrica paralela e supervisão rigorosa de cronogramas físicos para ativação de infraestruturas logísticas e de conectividade sob demandas de altíssima escala.
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div className="animate-pulse">
              <h3 className="text-xl font-serif text-latimer-gold mb-4">[MÁXIMA ATIVAÇÃO] Visão Holística da Holding</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-3xl">
                Engenharia de Valor Integrada. Consolidação das frentes industriais, matrizes renováveis, inteligência preditiva e expansão educacional estruturada até o final de 2027. O código de infraestrutura está operacional em todo o território nacional.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CEO Trajectory */}
      <section id="ceo-trajetoria" className="mb-24 scroll-mt-24 grid md:grid-cols-3 gap-8 border-t border-zinc-950 pt-16">
        <div className="md:col-span-1">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">// TRAJETÓRIA DO FUNDADOR</h2>
          <div className="sticky top-28 bg-zinc-950/40 border border-zinc-900 p-4 backdrop-blur-sm">
            <div className="w-12 h-12 border border-latimer-gold flex items-center justify-center font-serif text-latimer-gold font-bold mb-4">HD</div>
            <p className="text-xs font-bold text-white mb-1">Helder Diniz Silva</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Founder & CEO</p>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div className="border-l-2 border-latimer-gold pl-6 relative">
            <div className="absolute w-3 h-3 bg-latimer-gold rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_#C5A059]" />
            <span className="text-xs font-bold text-latimer-gold">ANOS 90</span>
            <h4 className="text-lg font-serif font-bold text-white mt-1">Ascensão Meteórica e Gestão Financeira</h4>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Início de carreira fulminante como Gerente Regional das Empresas Financeiras FIAT aos 20/23 anos. Formação sólida e autodidata em administração de alta performance, finanças corporativas e estruturas de reestruturação organizacional.
            </p>
          </div>
          <div className="border-l-2 border-zinc-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <span className="text-xs font-bold text-zinc-500">CONSOLIDAÇÃO TÉCNICA</span>
            <h4 className="text-lg font-serif font-bold text-white mt-1">Engenharia e Liderança de Classe</h4>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Consolidação na Engenharia Elétrica e de Telecomunicações (CREA-MG 86351-D). Presidente da AEVESO, liderando a reestruturação e modernização digital de registros institucionais, regimentos e conformidade regulatória para o ecossistema profissional.
            </p>
          </div>
          <div className="border-l-2 border-zinc-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <span className="text-xs font-bold text-zinc-500">2026 – LATE 2027</span>
            <h4 className="text-lg font-serif font-bold text-latimer-gold mt-1">A Era Latimer e Inteligência Artificial</h4>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Graduando em Inteligência Artificial Generativa e desenvolvimento Python aplicado. Fusão definitiva da engenharia pesada com automação avançada, pavimentando o ecossistema rumo ao lançamento da Latimer Educação em 2027 como um player global.
            </p>
          </div>
        </div>
      </section>

      {/* Forensic Audit Panel */}
      <section className="mb-24 bg-gradient-to-r from-zinc-950 to-black border border-zinc-900 p-8 rounded-sm relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-2 text-[9px] text-zinc-800 tracking-widest font-mono">
          SECURE_CHANNEL_v3.4
        </div>
        <div className="max-w-3xl">
          <span className="text-[10px] bg-zinc-900 text-latimer-gold px-2 py-1 rounded font-bold uppercase tracking-widest">
            {t.auditTitle}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-white mt-4 mb-2">
            {t.auditSubtitle}
          </h3>
          <p className="text-zinc-500 text-xs mb-6 max-w-xl leading-relaxed">
            Pareceres técnicos de alta complexidade jurídica para arbitragem, auditorias contratuais de infraestrutura e diagnósticos de falhas sistêmicas em telecomunicações e energia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="https://wa.me/5500000000000" // Link estruturado para canal corporativo futuro
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-latimer-gold hover:bg-latimer-goldLight text-black font-bold text-xs px-6 py-3 tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(197,160,89,0.2)]"
            >
              {t.auditBtn}
            </a>
            <span className="text-[10px] text-zinc-600 italic">
              * {t.auditFooter}
            </span>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter */}
      <section id="contato" className="grid md:grid-cols-2 gap-12 border-t border-zinc-900 pt-16 scroll-mt-24">
        <div>
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">// CANAL DIRETO</h2>
          <h3 className="text-2xl font-serif text-white mb-4">Governança Corporativa e Contato</h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Para demandas periciais, engenharia consultiva internacional ou alinhamento institucional com a Holding.
          </p>
          <a 
            href="https://wa.me/5500000000000"
            className="inline-flex items-center gap-2 text-xs text-latimer-gold hover:text-white border border-latimer-gold/30 hover:border-white px-4 py-3 bg-zinc-950/40 transition-all font-bold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            {t.whatsappCall}
          </a>
        </div>

        <div id="newsletter" className="bg-zinc-950/20 border border-zinc-900/60 p-6 backdrop-blur-sm rounded-sm scroll-mt-24">
          <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">{t.newsletterTitle}</h4>
          <p className="text-xs text-zinc-500 mb-4">{t.newsletterSubtitle}</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("[INTELLIGENCE] Email registered to secure terminal dispatch list."); }} className="flex gap-2">
            <input 
              type="email" 
              placeholder="seu.email@corporativo.com" 
              required
              className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs px-3 py-2 flex-grow focus:outline-none focus:border-latimer-gold font-mono"
            />
            <button type="submit" className="bg-zinc-900 hover:bg-zinc-800 text-latimer-gold font-bold text-xs px-4 py-2 uppercase tracking-wider transition-colors border border-zinc-800">
              OK
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-zinc-950 text-center md:flex md:justify-between text-[10px] text-zinc-600">
        <p>MINAS GERAIS — BRASIL / INFRAESTRUTURA SOBERANA</p>
        <p className="mt-2 md:mt-0">© 2026 LATIMER. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
