import React, { useCallback, useRef } from 'react';
import { SECTIONS } from '../constants';

interface ScrollWheelProps {
  activeSectionId: string;
  onSectionChange: (id: string) => void;
}

const ScrollWheel: React.FC<ScrollWheelProps> = ({ activeSectionId, onSectionChange }) => {
  const throttleRef = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const currentIndex = SECTIONS.findIndex(s => s.id === activeSectionId);

  const playNavTick = useCallback(() => {
    if (typeof window === 'undefined') return;

    const AudioContextCtor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextCtor();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(980, now);
    oscillator.frequency.exponentialRampToValueAtTime(620, now + 0.02);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.032);
  }, []);

  const navigate = useCallback((direction: 1 | -1) => {
    if (throttleRef.current) return;
    throttleRef.current = true;

    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < SECTIONS.length) {
      onSectionChange(SECTIONS[nextIndex].id);
      playNavTick();
    }

    setTimeout(() => { throttleRef.current = false; }, 500);
  }, [currentIndex, onSectionChange, playNavTick]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    // Keep native page scrolling on smaller screens.
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      return;
    }

    e.preventDefault();
    if (Math.abs(e.deltaY) > 10) {
      navigate(e.deltaY > 0 ? 1 : -1);
    }
  }, [navigate]);

  return (
    <div 
      className="flex flex-col gap-5 md:gap-6 py-2 md:py-8 select-none"
      onWheel={handleWheel}
    >
      {SECTIONS.map((section, idx) => {
        const isActive = section.id === activeSectionId;
        const distance = idx - currentIndex;

        let transformClass = '';
        let opacityClass = '';

        if (isActive) {
          transformClass = 'translate-x-[50px] md:translate-x-[60px] scale-100';
          opacityClass = 'opacity-100';
        } else if (Math.abs(distance) === 1) {
          transformClass = 'translate-x-[15px] scale-[0.88] rotate-y-[20deg]';
          opacityClass = 'opacity-50';
        } else {
          transformClass = 'translate-x-0 scale-[0.78] rotate-y-[30deg]';
          opacityClass = 'opacity-25';
        }

        return (
          <div
            key={section.id}
            onClick={() => {
              if (section.id !== activeSectionId) {
                onSectionChange(section.id);
                playNavTick();
              }
            }}
            className={`
              group relative cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${transformClass} ${opacityClass}
              ${!isActive ? 'hover:opacity-60 hover:translate-x-[25px]' : ''}
            `}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
            }}
          >
            {/* Active indicator line */}
            {isActive && (
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-[3px] bg-primary rounded-full shadow-[0_0_12px_rgba(250,142,41,0.6)]"></div>
            )}

            {/* Number + Label */}
            <span 
              className={`
                text-[10px] font-semibold tracking-[0.25em] uppercase block transition-all duration-400 font-display
                ${isActive ? 'opacity-100 text-primary mb-1' : 'opacity-0 h-0 mb-0'}
              `}
            >
              {section.number} — {section.label}
            </span>

            {/* Main Title */}
            <h2 
              className={`
                font-brand tracking-tight transition-all duration-500 leading-[0.85]
                ${isActive 
                  ? 'text-5xl md:text-7xl lg:text-[5.5rem] text-text-main' 
                  : 'text-4xl md:text-5xl lg:text-6xl text-text-main/25'
                }
              `}
            >
              {section.title}
            </h2>

            {/* Description (only active) */}
            <div 
              className={`
                overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isActive ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}
              `}
            >
              <p className="text-[13px] text-text-muted max-w-[260px] font-medium leading-relaxed border-l-2 border-primary/50 pl-3 font-display">
                {section.shortDesc}
              </p>
            </div>
          </div>
        );
      })}

      {/* Scroll hint */}
      <div className="ml-[60px] mt-4 flex items-center gap-2 opacity-40">
        <span className="material-symbols-outlined text-[14px] text-text-muted">mouse</span>
        <span className="text-[10px] font-medium tracking-widest uppercase text-text-muted font-display">Scroll to navigate</span>
      </div>
    </div>
  );
};

export default ScrollWheel;
