
```jsx
import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const translations = {
  PT: {
    title: "LATIMER HOLDING GLOBAL",
    chancela: "CEO HELDER DINIZ SILVA • CREA-MG 86351-D • ENGENHEIRO ELETRICISTA E DE TELECOMUNICAÇÕES",
    sovereign: "Turnaround de projetos paralisados. Logística Greenfield em topografias extremas. Onde há obra crítica — a entrega acontece. MG · ES · RJ.",
    menu: ["INÍCIO", "SERVIÇOS", "CEO & TRAJETÓRIA", "CONTATO", "NEWSLETTER"],
    tabs: ["Rio de Janeiro", "Minas Gerais", "Espírito Santo", "Visão Geral"],
    esDescription: "10+ municípios em um único programa de implantação massiva, do interior serrano ao litoral e região metropolitana.",
    whatsappCall: "Direct Channel | Comunicação Suprema",
    auditTitle: "CONSELHO DE AUDITORIA PERICIAL",
    auditSubtitle: "Engenharia Forense de Ativos e Diagnósticos Críticos",
    auditBtn: "SOLICITAR PARECER TÁTICO",
    auditFooter: "Geração de Valor Soberano e Segurança Jurídica Estrutural",
    newsletterTitle: "LATIMER BRIEFING DIÁRIO",
    newsletterSubtitle: "Inteligência macroeconômica e análise de ativos diretamente na sua caixa de entrada antes da abertura do mercado."
  },
  IT: {
    title: "LATIMER HOLDING GLOBAL",
    chancela: "CEO HELDER DINIZ SILVA • CREA-MG 86351-D • INGEGNERE ELETTRICO E DELLE TELECOMUNICAZIONI",
    sovereign: "Turnaround di progetti paralizzati. Logistica Greenfield in topografie estreme. Dove c'è un'opera critica — la consegna avviene. MG · ES · RJ.",
    menu: ["INIZIO", "SERVIZI", "CEO & TRAIETTORIA", "CONTATTO", "NEWSLETTER"],
    tabs: ["Rio de Janeiro", "Minas Gerais", "Espírito Santo", "Panoramica Generale"],
    esDescription: "Oltre 10 comuni in un unico programma di implementazione massiccia, dall'interno montano alla costa e all'area metropolitana.",
    whatsappCall: "Direct Channel | Comunicazione Sovrana",
    auditTitle: "CONSIGLIO DI AUDIT PERITALE",
    auditSubtitle: "Ingegneria Forense degli Asset e Diagnostica Critica",
    auditBtn: "RICHIEDERE PARERE TATTICO",
    auditFooter: "Generazione di Valore Sovrano e Sicurezza Giuridica Strutturale",
    newsletterTitle: "IL BOLLETTINO QUOTIDIANO",
    newsletterSubtitle: "Intelligence macroeconomica e analisi degli asset direttamente nella tua casella di posta prima dell'apertura dei mercati."
  },
  EN: {
    title: "LATIMER HOLDING GLOBAL",
    chancela: "CEO HELDER DINIZ SILVA • CREA-MG 86351-D • ELECTRICAL AND TELECOMMUNICATIONS ENGINEER",
    sovereign: "Turnaround of paralyzed projects. Greenfield logistics in extreme topographies. Where there is a critical project — delivery happens. MG · ES · RJ.",
    menu: ["HOME", "SERVICES", "CEO & TRAJECTORY", "CONTACT", "NEWSLETTER"],
    tabs: ["Rio de Janeiro", "Minas Gerais", "Espírito Santo", "General Overview"],
    esDescription: "10+ municipalities in a single massive deployment program, from the mountainous interior to the coast and metropolitan region.",
    whatsappCall: "Direct Channel | Sovereign Communication",
    auditTitle: "BOARD OF EXPERT AUDIT",
    auditSubtitle: "Asset Forensic Engineering and Critical Diagnostics",
    auditBtn: "REQUEST TACTICAL OPINION",
    auditFooter: "Sovereign Value Generation and Structural Legal Security",
    newsletterTitle: "THE DAILY SOVEREIGN BRIEF",
    newsletterSubtitle: "Macro intelligence and asset analysis delivered straight to your inbox before the market opens."
  },
  FR: {
    title: "LATIMER HOLDING GLOBAL",
    chancela: "CEO HELDER DINIZ SILVA • CREA-MG 86351-D • INGÉNIEUR ÉLECTRICIEN ET EN TÉLÉCOMMUNICATIONS",
    sovereign: "Redressement de projets paralysés. Logistique Greenfield en topographies extrêmes. Là où il y a un chantier critique — la livraison s'accomplit. MG · ES · RJ.",
    menu: ["ACCUEIL", "SERVICES", "CEO & TRAJECTOIRE", "CONTACT", "NEWSLETTER"],
    tabs: ["Rio de Janeiro", "Minas Gerais", "Espírito Santo", "Vue d'Ensemble"],
    esDescription: "Plus de 10 municipalités dans un programme unique d'implantation massive, de l'intérieur montagneux au littoral et à la région métropolitaine.",
    whatsappCall: "Direct Channel | Communication Souveraine",
    auditTitle: "CONSEIL D'AUDIT EXPERT",
    auditSubtitle: "Ingénierie Forensique des Actifs et Diagnostics Critiques",
    auditBtn: "DEMANDER UN AVIS TACTIQUE",
    auditFooter: "Génération de Valor Souveraine et Sécurité Juridique Structurelle",
    newsletterTitle: "LE BRIEFING SOUVERAIN QUOTIDIEN",
    newsletterSubtitle: "Intelligence macroéconomique et analyse des actifs livrées directement dans votre boîte de réception avant l'ouverture des marchés."
  }
};

export const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState('PT');
  const t = translations[locale];
  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
