. No grande campo de texto abaixo, **copie e cole** este código completo:

```jsx
import React, { useEffect, useState } from 'react';

export default function LiquidityTicker() {
  const [metrics, setMetrics] = useState({ freq: 60.00, load: 84.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        freq: +(59.95 + Math.random() * 0.1).toFixed(2),
        load: +(80.0 + Math.random() * 10).toFixed(1)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-zinc-900 z-50 py-1.5 font-mono text-[9px] text-zinc-500 tracking-widest overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-[marquee_30s_linear_infinite] uppercase">
        <span className="text-latimer-gold font-bold mx-4">// SYSTEM STATUS: ACTIVE</span>
        <span className="mx-4">GRID_FREQUENCY: {metrics.freq} Hz</span>
        <span className="mx-4">SUBSTATION_LOAD: {metrics.load}%</span>
        <span className="mx-4">TELECOM_BACKBONE: 99.998% UPTIME</span>
        <span className="text-zinc-400 mx-4">SOVEREIGN GOVERNANCE MATRIX OPERATIONAL</span>
        <span className="text-latimer-gold font-bold mx-4">// LATIMER ENGENHARIA E ENERGIA</span>
        <span className="mx-4">PHOTOVOLTAIC MATRIX GENERATION: +4.2 MW/h</span>
        <span className="mx-4">HYDROGEN RESEARCH DIVISION: STANDBY</span>
        <span className="mx-4">AEVESO REGISTER COMPLIANCE: 100% SECURE</span>
      </div>
      
      {/* Regra CSS injetada diretamente para a animação infinita de rolagem */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
