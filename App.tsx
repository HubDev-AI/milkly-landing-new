import React, { useState } from 'react';
import Header from './components/Header';
import ScrollWheel from './components/ScrollWheel';
import GlassCard from './components/GlassCard';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);

  const activeData = SECTIONS.find(s => s.id === activeSectionId) || SECTIONS[0];

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-pearl-white selection:bg-primary/30 selection:text-primary flex flex-col">
      
      {/* --- LAYER 1: Ambient Background Blobs (concept-1) --- */}
      <div className="fixed inset-0 z-[-20] pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] blob-pink opacity-80 blur-3xl rounded-full mix-blend-multiply" style={{ animation: 'blob-float 25s infinite ease-in-out alternate' }}></div>
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] blob-cyan opacity-80 blur-3xl rounded-full mix-blend-multiply" style={{ animation: 'blob-float 25s infinite ease-in-out alternate-reverse', animationDelay: '-5s' }}></div>
        <div className="absolute top-[30%] -left-20 w-[600px] h-[600px] blob-orange opacity-60 blur-3xl rounded-full mix-blend-multiply" style={{ animation: 'blob-float 30s infinite ease-in-out alternate', animationDelay: '-10s' }}></div>
      </div>

      {/* --- LAYER 2: Glass Surface Overlay --- */}
      <div className="glass-surface-overlay"></div>

      {/* --- LAYER 3: Floating Liquid Orbs --- */}
      <div className="liquid-orb w-[500px] h-[500px] -top-20 -left-20 animate-float-orb opacity-30"></div>
      <div className="liquid-orb w-[250px] h-[250px] top-[15%] left-[35%] animate-float-orb-slow delay-700 opacity-50"></div>
      <div className="liquid-orb w-[180px] h-[180px] bottom-[20%] left-[10%] animate-float-orb delay-1000 opacity-25"></div>
      
      <Header />

      <main className="flex-1 flex flex-col md:flex-row pt-4 md:pt-[2.6rem] pb-28 md:pb-[6.2rem] px-5 md:px-12 gap-8 relative z-10 md:h-[100dvh]">
        
        {/* Left Column: 3D Scroll Wheel Navigation */}
        <div className="w-full md:w-4/12 flex flex-col justify-start md:justify-center relative perspective-container z-20 pl-2 md:pl-10">
          {/* Vertical Guide Line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent rounded-full hidden md:block"></div>
          
          <ScrollWheel 
            activeSectionId={activeSectionId} 
            onSectionChange={setActiveSectionId} 
          />
        </div>

        {/* Right Column: Email/OS Window Preview */}
        <div className="w-full md:w-8/12 flex items-start md:items-center justify-center md:justify-end py-4 md:py-0 relative z-10 pr-0 md:pr-12">
            
            {/* Floating Badge 1 */}
            <div className="absolute right-8 top-28 w-auto px-4 py-2 rounded-full glass-panel animate-float-y z-20 flex items-center gap-2 hidden md:flex" style={{ animationDelay: '-2s' }}>
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="font-display text-xs font-bold text-text-main">AI Powered</span>
            </div>
            
            <GlassCard data={activeData} />
        </div>
      </main>

      {/* Fixed footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 md:px-12 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="glass-panel rounded-2xl px-4 md:px-6 py-3 border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6 text-[11px] font-medium text-text-muted/80 font-display">
              <a className="hover:text-primary transition-colors" href="#">
                Instagram
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Twitter / X
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                LinkedIn
              </a>
            </div>

            <div
              className="w-auto px-4 py-2 rounded-full bg-text-main/90 border border-white/10 shadow-2xl flex items-center gap-3"
              style={{ animation: 'footer-pill-float 6s ease-in-out infinite', animationDelay: '-1.5s' }}
            >
              <div className="size-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-bold text-white tracking-widest uppercase font-display">
                Live Preview
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
