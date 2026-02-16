import React, { useEffect, useRef, useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || triggerRef.current?.contains(target)) {
        return;
      }
      setIsMobileMenuOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 backdrop-blur-sm bg-white/10 border-b border-white/20 relative md:fixed">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-start group cursor-pointer">
          <span className="text-3xl font-black tracking-tighter uppercase font-brand group-hover:opacity-80 transition-colors text-text-main leading-[0.9]">
            Milkly
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] opacity-40 group-hover:opacity-60 transition-colors text-text-main">
            EST. 2026
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        <a href="#features" className="text-[13px] font-semibold text-text-muted hover:text-primary transition-colors tracking-wide font-display">
          Features
        </a>
        <a href="#about" className="text-[13px] font-semibold text-text-muted hover:text-primary transition-colors tracking-wide font-display">
          About
        </a>
        <button className="ml-2 px-6 py-2.5 rounded-full border border-text-main/15 bg-white/30 hover:bg-white/50 hover:border-text-main/25 backdrop-blur-md text-text-main transition-all text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md active:scale-95 font-display">
          Get Started
        </button>
      </nav>

      <button
        ref={triggerRef}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        className="md:hidden size-10 flex items-center justify-center text-text-main bg-white/35 backdrop-blur-md rounded-lg border border-white/50 shadow-sm leading-none"
      >
        <span className="material-symbols-outlined text-[20px] leading-none">
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {isMobileMenuOpen ? (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full right-6 mt-3 w-[min(20rem,calc(100vw-3rem))] glass-panel rounded-2xl border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.14)] p-4 flex flex-col gap-2 animate-cream-rise"
        >
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-text-main/90 hover:text-primary hover:bg-white/40 transition-colors font-display"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-text-main/90 hover:text-primary hover:bg-white/40 transition-colors font-display"
          >
            About
          </a>
          <a
            href="https://milkly.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-1 rounded-xl px-3 py-2.5 text-center text-sm font-bold uppercase tracking-wider bg-white/55 border border-white/70 text-text-main hover:bg-white/75 transition-colors font-display"
          >
            Get Started
          </a>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
