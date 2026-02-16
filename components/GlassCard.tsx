import React, { useEffect, useRef, useState } from 'react';
import { SectionData } from '../types';

interface GlassCardProps {
  data: SectionData;
}

const GlassCard: React.FC<GlassCardProps> = ({ data }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRendered, setShowRendered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { content } = data;

  useEffect(() => {
    setIsAnimating(true);
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [data.id]);

  return (
    <div className="holo-box w-full max-w-[55rem] h-[64vh] sm:h-[66vh] md:h-[70vh] lg:h-[72vh] rounded-[2rem] flex flex-col relative overflow-hidden animate-float-y transition-all duration-700 shadow-2xl border border-white/60">

      {/* Window Chrome */}
      <div className="absolute top-0 left-0 w-full h-12 bg-white/40 backdrop-blur-md flex items-center px-5 gap-2 z-20 border-b border-white/20 shrink-0">
        <div className="size-3 rounded-full bg-[#FF5F57] shadow-sm border border-black/5"></div>
        <div className="size-3 rounded-full bg-[#FEBC2E] shadow-sm border border-black/5"></div>
        <div className="size-3 rounded-full bg-[#28C840] shadow-sm border border-black/5"></div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase font-display">{content.issueNumber}</span>
          <span className="material-symbols-outlined text-sm text-text-muted/60">mail</span>
        </div>
      </div>

      {/* Email Metadata Header */}
      <div className="mt-12 px-4 md:px-6 py-4 border-b border-text-main/8 bg-white/30 backdrop-blur-sm shrink-0">
         <div className="mx-auto w-full max-w-[640px] flex flex-col gap-2.5">
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-text-muted w-10 text-right uppercase tracking-wider font-display">From</span>
                <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                      <span className="text-white text-[10px] font-black font-brand">M</span>
                    </div>
                    <span className="text-sm font-semibold text-text-main font-display">Milkly Digest</span>
                    <span className="text-xs text-text-muted">&lt;hello@milkly.app&gt;</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-text-muted w-10 text-right uppercase tracking-wider font-display">Date</span>
                <span className="text-sm font-medium text-text-muted font-display">{content.date}, 2026</span>
            </div>
         </div>
      </div>

      {/* Email Body Content */}
      <div ref={scrollRef} className={`flex-grow overflow-y-auto no-scrollbar px-4 md:px-6 py-6 md:py-8 bg-white/30 transition-all duration-300 ${isAnimating ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'}`}>
        <div className="mx-auto w-full max-w-[640px]">
          {/* Subject Line */}
          <h3 className="font-editorial text-3xl md:text-4xl italic font-medium leading-[1.1] text-text-main mb-6">
              {content.mainTitle}
          </h3>

          {/* Read time + tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center gap-1 text-text-muted text-xs font-medium font-display">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {content.readTime}
            </span>
            <span className="text-text-muted/30">|</span>
            <span className="flex items-center gap-1 text-text-muted text-xs font-medium font-display">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              Trending
            </span>
          </div>

          {/* Code Preview (mklyml section) OR Featured Image */}
          {content.codePreview ? (
            <div className="w-full rounded-xl overflow-hidden border border-white/50 mb-8 shadow-sm">
              {/* mklyml Source */}
              <div className="bg-[#1e1e2e] p-4 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-violet-400 tracking-widest uppercase font-display">mklyml source</span>
                  <div className="flex-1 h-px bg-white/10"></div>
                  <span className="text-[10px] text-white/30 font-display">55-60% fewer tokens</span>
                </div>
                <pre className="text-[11px] leading-[1.6] font-mono overflow-x-auto text-white/90 whitespace-pre">
                  {content.codePreview.mklyCode.split('\n').map((line, i) => (
                    <div key={i}>
                      {line.startsWith('---') ? (
                        <span className="text-violet-400 font-bold">{line}</span>
                      ) : line.includes(':') && !line.startsWith(' ') && !line.startsWith('full') ? (
                        <>
                          <span className="text-cyan-400">{line.split(':')[0]}</span>
                          <span className="text-white/40">:</span>
                          <span className="text-emerald-300">{line.slice(line.indexOf(':') + 1)}</span>
                        </>
                      ) : (
                        <span className="text-white/70">{line}</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>

              {/* Arrow divider */}
              <div className="bg-gradient-to-r from-[#1e1e2e] to-white/90 flex items-center justify-center py-2 gap-2">
                <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase font-display">compiles to</span>
                <span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
              </div>

              {/* HTML Output */}
              <div className="bg-white/90 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase font-display">html output</span>
                  <div className="flex-1 h-px bg-text-main/10"></div>
                  <button
                    onClick={() => setShowRendered(!showRendered)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-text-main/10 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group"
                  >
                    <span className={`material-symbols-outlined text-[12px] transition-colors ${showRendered ? 'text-primary' : 'text-text-muted/50'}`}>
                      {showRendered ? 'code' : 'preview'}
                    </span>
                    <span className="text-[10px] font-bold text-text-muted/60 group-hover:text-primary tracking-wider uppercase font-display transition-colors">
                      {showRendered ? 'source' : 'preview'}
                    </span>
                  </button>
                </div>

                {showRendered ? (
                  <div
                    className="text-sm font-display text-text-main/80 leading-relaxed animate-fade-in [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mb-2 [&_h1]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:font-display [&_header]:mb-4 [&_header]:pb-3 [&_header]:border-b [&_header]:border-text-main/10 [&_img]:rounded-lg [&_img]:my-2 [&_img]:max-h-10 [&_p]:mb-2 [&_span]:text-xs [&_span]:text-text-muted [&_span]:font-medium [&_section]:mt-4 [&_section]:pt-3 [&_section]:border-t [&_section]:border-text-main/8 [&_article]:bg-pearl-white/50 [&_article]:rounded-lg [&_article]:p-3 [&_article]:mt-2 [&_article]:border [&_article]:border-white/60 [&_a]:text-primary [&_a]:font-semibold [&_a]:text-xs"
                    dangerouslySetInnerHTML={{ __html: content.codePreview.htmlCode }}
                  />
                ) : (
                  <pre className="text-[11px] leading-[1.6] font-mono overflow-x-auto text-text-main/80 whitespace-pre">
                    {content.codePreview.htmlCode.split('\n').map((line, i) => (
                      <div key={i}>
                        {line.match(/<\/?[a-z]/) ? (
                          <>
                            {line.split(/(<[^>]+>)/g).map((part, j) =>
                              part.startsWith('<') ? (
                                <span key={j} className="text-blue-600">{part}</span>
                              ) : (
                                <span key={j} className="text-text-main/70">{part}</span>
                              )
                            )}
                          </>
                        ) : (
                          <span className="text-text-main/60">{line}</span>
                        )}
                      </div>
                    ))}
                  </pre>
                )}
              </div>

              {/* GitHub link */}
              {content.githubUrl && (
                <a
                  href={content.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#1e1e2e] hover:bg-[#2a2a3e] transition-colors border-t border-white/10 group"
                >
                  <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-[11px] font-bold text-white/70 group-hover:text-white tracking-wider uppercase font-display transition-colors">github.com/mklyml</span>
                  <span className="material-symbols-outlined text-[14px] text-white/40 group-hover:text-white/70 transition-colors">arrow_outward</span>
                </a>
              )}
            </div>
          ) : (
            <div className="w-full aspect-[16/9] rounded-xl bg-pearl-white overflow-hidden relative group shadow-sm border border-white/50 mb-8">
              <img
                key={content.featuredImage}
                alt={content.mainTitle}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
                src={content.featuredImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-full border border-white/50 backdrop-blur-md shadow-sm">
                <span className="text-[10px] font-bold text-text-main tracking-widest uppercase font-display">{content.primaryTag}</span>
              </div>
              <button className="absolute bottom-4 right-4 h-9 w-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </button>
            </div>
          )}

          {/* Article Body */}
          <div className="space-y-5 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <p className="font-editorial text-xl text-text-main leading-snug border-l-[3px] border-primary/40 pl-4 italic">
              {content.quote}
            </p>
            <p className="text-text-main/80 leading-relaxed font-display text-[15px]">
              {content.body}
            </p>

            {/* Articles */}
            {content.articles && content.articles.length > 0 && (
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px flex-1 bg-text-main/8"></div>
                  <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase font-display">Featured Stories</span>
                  <div className="h-px flex-1 bg-text-main/8"></div>
                </div>
                {content.articles.map((article, idx) => (
                  <div
                    key={idx}
                    className="bg-white/50 rounded-xl p-4 border border-white/60 hover:bg-white/70 transition-all cursor-pointer group hover:shadow-sm"
                    style={{ borderLeftWidth: '3px', borderLeftColor: article.accentColor }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full font-display"
                            style={{
                              backgroundColor: article.accentColor + '15',
                              color: article.accentColor
                            }}
                          >
                            {article.source}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-text-main font-display leading-tight mb-1.5 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-[12px] text-text-muted leading-relaxed font-display">
                          {article.snippet}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-text-muted/30 group-hover:text-primary/50 transition-colors mt-1 shrink-0">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stats Row */}
            {content.stats && content.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {content.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/50 rounded-xl p-3 border border-white/60 text-center hover:bg-white/70 transition-all">
                    <div className={`size-8 rounded-lg ${stat.colorClass} flex items-center justify-center mx-auto mb-2`}>
                      <span className="material-symbols-outlined text-[16px]">{stat.icon}</span>
                    </div>
                    <div className="text-lg font-black text-text-main font-display leading-none">{stat.value}</div>
                    <div className="text-[10px] text-text-muted mt-1 font-display font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tip Callout */}
            {content.tip && (
              <div className={`rounded-xl p-4 border ${content.tip.bgClass} ${content.tip.borderClass}`}>
                <div className="flex items-start gap-3">
                  <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${content.tip.bgClass}`}>
                    <span className={`material-symbols-outlined text-lg ${content.tip.iconColor}`}>{content.tip.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-main font-display mb-1">{content.tip.title}</h4>
                    <p className="text-[12px] text-text-muted leading-relaxed font-display">{content.tip.body}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {content.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-pearl-white/80 text-text-muted text-xs font-semibold border border-white/60 font-display">{tag}</span>
              ))}
            </div>

            {/* Secondary Items */}
            <div className={`grid gap-4 mt-6 ${content.secondaryItems.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {content.secondaryItems.map((item, idx) => (
                <div key={idx} className="bg-white/50 p-4 rounded-xl border border-white/60 hover:bg-white/70 transition-all cursor-pointer group hover:shadow-sm">
                  <div className={`size-9 rounded-xl ${item.colorClass} flex items-center justify-center mb-3`}>
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-sm text-text-main font-display">{item.title}</h4>
                  <p className="text-[11px] text-text-muted mt-1 leading-relaxed font-display">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-10 pt-8 border-t border-text-main/8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="font-display font-bold text-lg text-text-main mb-1">Join 24,000+ subscribers</h4>
            <p className="text-xs text-text-muted mb-4 font-display">Get milky every week. No spam, unsubscribe anytime.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-primary opacity-15 blur-md rounded-xl transition-opacity duration-300 group-hover:opacity-25"></div>
              <div className="relative flex flex-col sm:flex-row bg-white/80 backdrop-blur-xl rounded-xl p-1.5 shadow-lg border border-white/60">
                <div className="relative flex-grow h-12">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-text-muted/50 text-[18px]">mail</span>
                  </div>
                  <input
                    className="w-full h-full pl-11 pr-4 py-0 bg-transparent border-none focus:ring-0 text-text-main placeholder:text-text-muted/60 font-medium font-display text-sm leading-none"
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
                <button
                  className="liquid-btn text-white font-bold py-3 px-8 rounded-lg text-sm tracking-wide uppercase flex items-center justify-center gap-2 shrink-0 font-display"
                  type="submit"
                >
                  <span>Subscribe</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
