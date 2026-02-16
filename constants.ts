import { SectionData } from "./types";

export const SECTIONS: SectionData[] = [
  {
    id: "milkly-app",
    number: "01",
    label: "Platform",
    title: "Milkly App",
    shortDesc: "Streams, linked streams, templates, and publishing in one editorial workspace.",
    content: {
      issueNumber: "APP EDITION #01",
      date: "FEB 07",
      mainTitle: "Your Editorial Command Center Just Arrived",
      quote: "\"We didn't build another email tool. We built the newsroom you'd design if you started from scratch.\"",
      body: "Milkly pulls from RSS, YouTube, and social into unified streams, then lets AI assemble 13 distinct section types into newsletters that look like you spent hours on them. One workspace. Every source. Zero tab-switching.",
      readTime: "6 mins",
      featuredImage: "/assets/app-dashboard.png",
      primaryTag: "Milkly App",
      tags: ["#NewsletterOps", "#EditorialWorkflow", "#ContentStreams", "#CreatorTools"],
      articles: [
        {
          title: "13 Section Types and Why Most Platforms Stop at 3",
          source: "Product Deep Dive",
          snippet: "Intros, featured spotlights, quick hits, tool roundups, community polls, sponsor blocks, and seven more. Each section type has its own layout rules, so your newsletter reads like an editorial spread, not a wall of text.",
          accentColor: "#fa8e29"
        },
        {
          title: "Streams: The RSS Reader That Feeds Your Newsletter",
          source: "Workflow Lab",
          snippet: "Connect any RSS feed, YouTube channel, or social account. Milkly aggregates everything into a single timeline you can drag directly into your next edition. Linked streams pull in external sources without leaving your workspace.",
          accentColor: "#10b981"
        },
        {
          title: "From Free to Mastery: How the 4-Tier Model Actually Works",
          source: "Pricing Breakdown",
          snippet: "Free gets you started with basic streams and templates. Essential unlocks AI generation. Pro adds the media library and analytics. Mastery turns on style learning, so the AI writes in your voice after three published editions.",
          accentColor: "#6366f1"
        }
      ],
      stats: [
        { label: "Section Types", value: "13", icon: "grid_view", colorClass: "bg-orange-50 text-primary" },
        { label: "Template Generation", value: "<8s", icon: "bolt", colorClass: "bg-emerald-50 text-emerald-500" },
        { label: "Source Integrations", value: "RSS \u00b7 YT \u00b7 Social", icon: "hub", colorClass: "bg-violet-50 text-violet-500" }
      ],
      tip: {
        title: "Pro Move: Linked Streams",
        body: "Connect an external source as a linked stream and Milkly will auto-generate a dedicated template for it. Your Monday tech digest and Friday culture roundup can have completely different designs, tones, and section layouts.",
        icon: "link",
        bgClass: "bg-amber-50/80",
        borderClass: "border-amber-200",
        iconColor: "text-amber-500"
      },
      secondaryItems: [
        {
          icon: "hub",
          colorClass: "bg-orange-50 text-primary",
          title: "Streams + Linked Streams",
          description: "Combine multiple sources into one curated pipeline."
        },
        {
          icon: "dashboard_customize",
          colorClass: "bg-emerald-50 text-emerald-500",
          title: "Templates + Publishing",
          description: "Compose faster with reusable layouts and delivery tools."
        },
        {
          icon: "shield_lock",
          colorClass: "bg-rose-50 text-rose-500",
          title: "Private Media Gallery",
          description: "Images stay private until you publish. No public URLs by default."
        }
      ]
    }
  },
  {
    id: "milkly-news",
    number: "02",
    label: "Publication",
    title: "Milkly News",
    shortDesc: "Public newsletter hub with archive pages, stream pages, and subscribe flows.",
    content: {
      issueNumber: "NEWS ISSUE #042",
      date: "JAN 28",
      mainTitle: "Every Edition Gets a Stage. Every Reader Gets a Door.",
      quote: "\"Publishing a newsletter without a public archive is like writing a book and burning every copy after the first read.\"",
      body: "Milkly News turns every published edition into a shareable, SEO-indexed page with its own URL. Your back catalog becomes a discovery engine that works while you sleep.",
      readTime: "5 mins",
      featuredImage: "/assets/newsletter-sample-news.png",
      primaryTag: "Milkly News",
      tags: ["#NewsletterSEO", "#PublicArchive", "#ReaderGrowth", "#ContentDiscovery"],
      articles: [
        {
          title: "The Archive Advantage: Why Searchable Back Issues Win Subscribers",
          source: "Publishing Intel",
          snippet: "Newsletters that maintain public archives see 34% more organic signups than those that gate everything behind email. Milkly auto-generates OG cards, Twitter previews, and structured data for every edition you publish.",
          accentColor: "#3b82f6"
        },
        {
          title: "Stream-Based Browsing: Readers Pick the Feed, Not Just the Issue",
          source: "UX Research",
          snippet: "Instead of scrolling a flat list of past editions, readers browse by stream. Your tech coverage, design picks, and industry analysis each get their own browsable lane with dedicated subscribe hooks.",
          accentColor: "#f59e0b"
        },
        {
          title: "One Link, Full Attribution: How Shareability Drives Growth",
          source: "Growth Playbook",
          snippet: "Every edition URL carries full reader analytics. You see exactly which shared links convert to subscribers, which sections get the most time, and where readers drop off. Distribution data, not vanity metrics.",
          accentColor: "#ec4899"
        }
      ],
      stats: [
        { label: "SEO Signals", value: "OG \u00b7 Twitter \u00b7 LD", icon: "travel_explore", colorClass: "bg-blue-50 text-blue-500" },
        { label: "Subscribe Flow", value: "1-Click", icon: "person_add", colorClass: "bg-sky-50 text-sky-500" },
        { label: "Reader Analytics", value: "Real-Time", icon: "monitoring", colorClass: "bg-indigo-50 text-indigo-500" }
      ],
      tip: {
        title: "Discovery Tip: Stream Pages",
        body: "Each stream generates its own public landing page. Share your 'AI Tools Weekly' stream URL on social and new readers land on a curated archive, not a generic signup wall. Conversion rates on stream pages run 2-3x higher than homepage signups.",
        icon: "explore",
        bgClass: "bg-blue-50/80",
        borderClass: "border-blue-200",
        iconColor: "text-blue-500"
      },
      secondaryItems: [
        {
          icon: "newsmode",
          colorClass: "bg-blue-50 text-blue-500",
          title: "Public Archive",
          description: "Browse editions by stream and publication date."
        },
        {
          icon: "mail",
          colorClass: "bg-amber-50 text-amber-600",
          title: "Subscriber Flow",
          description: "Newsletter and stream subscription endpoints built in."
        }
      ]
    }
  },
  {
    id: "milkly-ai",
    number: "03",
    label: "Generation",
    title: "Milkly AI",
    shortDesc: "Prompt-to-newsletter generation with visual preview and fast iteration loops.",
    content: {
      issueNumber: "AI RESULT #101",
      date: "FEB 07",
      mainTitle: "The AI That Reads Your Sources, Learns Your Voice, and Kills the Clich\u00e9s",
      quote: "\"We banned 60 words. 'Revolutionary' was the first to go. 'Leverage' didn't make it past lunch.\"",
      body: "Milkly AI scrapes your linked articles, writes 80-200 word editorial commentary for each, and adapts to your tone over time. It generates full newsletters in under 30 seconds with a kill list of every phrase that screams 'written by a robot.'",
      readTime: "4 mins",
      featuredImage: "/assets/newsletter-result-gen.png",
      primaryTag: "Milkly AI",
      tags: ["#AIWriting", "#StyleLearning", "#EditorialAI", "#AntiClich\u00e9"],
      articles: [
        {
          title: "Style Learning: How 3 Published Editions Train Your AI Voice",
          source: "AI Research",
          snippet: "After your third published edition, Milkly builds a style profile from your golden phrases, edit patterns, and tone preferences. By edition five, it generates a cross-template writing baseline. The AI gets better because you write, not because we prompt-engineer.",
          accentColor: "#8b5cf6"
        },
        {
          title: "The 60-Word Kill List: Banned Phrases and Why They Matter",
          source: "Editorial Standards",
          snippet: "Magic, seamless, groundbreaking, leverage, cutting-edge, and 55 more. Milkly's generation engine rejects AI clich\u00e9s at the prompt level and replaces them with specific facts, named sources, and sentence fragments that sound human.",
          accentColor: "#06b6d4"
        },
        {
          title: "5 Tone Profiles, 5 Design Systems: How Voice Shapes Layout",
          source: "Design Engineering",
          snippet: "Pick playful and you get rounded corners, warm callout boxes, and informal headings. Pick formal and the same content renders with serif fonts, sharp borders, and restrained spacing. Tone changes the CSS, not just the copy.",
          accentColor: "#f43f5e"
        }
      ],
      stats: [
        { label: "Generation Speed", value: "<30s", icon: "speed", colorClass: "bg-violet-50 text-violet-500" },
        { label: "Banned Clich\u00e9s", value: "60+", icon: "block", colorClass: "bg-cyan-50 text-cyan-500" },
        { label: "Editorial Notes", value: "80\u2013200 words", icon: "edit_note", colorClass: "bg-fuchsia-50 text-fuchsia-500" }
      ],
      tip: {
        title: "Under the Hood: URL Scraping",
        body: "When you add an article link, Milkly extracts the full text using Mozilla Readability, pulls up to 5,000 characters of content, then writes editorial commentary as if a senior newsletter editor read the whole piece. Not summaries. Opinions.",
        icon: "psychology",
        bgClass: "bg-violet-50/80",
        borderClass: "border-violet-200",
        iconColor: "text-violet-500"
      },
      secondaryItems: [
        {
          icon: "psychology",
          colorClass: "bg-violet-50 text-violet-500",
          title: "Prompt Engine",
          description: "Generate structured drafts from a single prompt."
        },
        {
          icon: "preview",
          colorClass: "bg-cyan-50 text-cyan-500",
          title: "Preview + Handoff",
          description: "Review output and continue in the main app."
        }
      ]
    }
  },
  {
    id: "milkly-mkly",
    number: "04",
    label: "Language",
    title: "mklyml",
    shortDesc: "A token-efficient markup language built for AI and structured content.",
    content: {
      issueNumber: "MKLYML SPEC #001",
      date: "FEB 08",
      mainTitle: "A Markup Language That Saves 58% of Your Tokens and Ships to Every Inbox",
      quote: "\"HTML was designed for browsers in 1993. We designed mklyml for AI models in 2026. The token bill notices.\"",
      body: "mklyml is an open-source markup language built for AI-generated content. 16 core blocks, a newsletter kit with 13 section-specific blocks, Zod validation, and a reverse parser that converts existing HTML back. Ship to Outlook, Gmail, and Apple Mail with the table-based email plugin.",
      readTime: "3 mins",
      featuredImage: "",
      primaryTag: "mklyml",
      tags: ["#OpenSource", "#MarkupLanguage", "#TokenEfficiency", "#DevTools"],
      githubUrl: "https://github.com/mklyml",
      codePreview: {
        mklyCode: `--- meta\nversion: 1\ntitle: Tech Weekly\n\n--- use: newsletter\n\n--- header\nlogo: /brand/logo.png\ntitle: Tech Weekly\n\n--- intro\n\nWelcome back! Here's what\nhappened this week in AI.\n\n--- category: Top Stories\n\n--- item\nsource: TechCrunch\nlink: /ai-story\nimage: /thumb.jpg\n\nNeural networks now generate\nfull newsletters in seconds.\n\n--- /category\n\n--- cta\nbuttonText: Subscribe`,
        htmlCode: `<header>\n  <h1>Tech Weekly</h1>\n</header>\n\n<div>\n  <p>Welcome back! Here's what happened this week in AI.</p>\n</div>\n\n<section>\n  <h2>Top Stories</h2>\n  <article>\n    <span>TechCrunch</span>\n    <p>Neural networks now generate full newsletters in seconds.</p>\n  </article>\n</section>`
      },
      articles: [
        {
          title: "55-60% Fewer Tokens: The Math Behind mklyml's Efficiency",
          source: "Benchmarks",
          snippet: "A typical newsletter section in HTML runs 340 tokens. The same content in mklyml: 142 tokens. Multiply by thousands of AI generations per day and the cost difference funds your entire infrastructure.",
          accentColor: "#6366f1"
        },
        {
          title: "HTML to mklyml: The Three-Tier Reverse Parser",
          source: "Open Source",
          snippet: "Drop in any HTML and the reverse converter handles it in three passes: structural analysis, block mapping, and property extraction. Existing newsletters convert in milliseconds. Full source on github.com/mklyml under MIT license.",
          accentColor: "#10b981"
        },
        {
          title: "The Email Plugin: Table-Based Rendering for the Inbox Dark Ages",
          source: "Engineering",
          snippet: "Outlook still renders with Word's HTML engine. Gmail strips half your CSS. The mklyml email plugin outputs nested table layouts with inline styles that survive every major client. Write modern markup, ship legacy-compatible HTML.",
          accentColor: "#f59e0b"
        }
      ],
      stats: [
        { label: "Token Reduction", value: "55\u201360%", icon: "savings", colorClass: "bg-indigo-50 text-indigo-500" },
        { label: "Block Library", value: "29+", icon: "widgets", colorClass: "bg-teal-50 text-teal-500" },
        { label: "Editor", value: "CodeMirror 6", icon: "code", colorClass: "bg-amber-50 text-amber-600" }
      ],
      tip: {
        title: "Try It: Browser Editor",
        body: "The mklyml editor runs entirely in the browser. CodeMirror 6 handles syntax highlighting, Zod validates your blocks in real time, and a split-pane preview renders the output as you type. Dark mode included. No install, no account, no build step.",
        icon: "terminal",
        bgClass: "bg-slate-50/80",
        borderClass: "border-slate-200",
        iconColor: "text-slate-500"
      },
      secondaryItems: [
        {
          icon: "token",
          colorClass: "bg-indigo-50 text-indigo-500",
          title: "AI-Native Format",
          description: "55-60% fewer tokens than HTML. Faster generation, lower cost."
        },
        {
          icon: "extension",
          colorClass: "bg-teal-50 text-teal-500",
          title: "Kits + Plugins",
          description: "Newsletter kit, docs kit, email plugin, SEO plugin \u2014 extensible by design."
        },
        {
          icon: "swap_horiz",
          colorClass: "bg-amber-50 text-amber-600",
          title: "Reverse Conversion",
          description: "Convert any HTML back to mklyml with three-tier smart parsing."
        }
      ]
    }
  }
];
