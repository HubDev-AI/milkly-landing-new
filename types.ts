export interface ArticleItem {
  title: string;
  source: string;
  snippet: string;
  accentColor: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
  colorClass: string;
}

export interface TipItem {
  title: string;
  body: string;
  icon: string;
  bgClass: string;
  borderClass: string;
  iconColor: string;
}

export interface CodePreview {
  mklyCode: string;
  htmlCode: string;
}

export interface SectionData {
  id: string;
  number: string;
  label: string;
  title: string;
  shortDesc: string;
  content: {
    issueNumber: string;
    date: string;
    mainTitle: string;
    quote: string;
    body: string;
    readTime: string;
    featuredImage: string;
    primaryTag: string;
    tags: string[];
    secondaryItems: Array<{
      icon: string;
      colorClass: string;
      title: string;
      description: string;
    }>;
    articles?: ArticleItem[];
    stats?: StatItem[];
    tip?: TipItem;
    codePreview?: CodePreview;
    githubUrl?: string;
  };
}
