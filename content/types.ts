interface Banner {
  title: string;
  img: string;
  desc: string;
  priority?: boolean;
}

interface FeatureIcon {
  id: number;
  value?: string | string[];
}

interface Feature {
  id: number;
  value: string;
}

interface Video {
  title: string;
  youtubeId: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface SectionItem {
  name: string;
  value: string;
}

export interface Product {
  name: string;
  sku: string;
  link: string;
  categories: number[];
  imgs: string[];
  360: boolean;
  gen: string;
  banners: Banner[];
  shortDesc: string;
  longDesc: string;
  featuredFeatures: FeatureIcon[];
  includes: number[];
  downloads: string;
  features: Feature[];
  buyLink?: string;
  featuresSections?: Section[]; // If present, pls leave features: [] (TODO: fix this need)
  line?: string;
  variants?: string[];
  colors?: string[];
  videos?: Video[];
  top?: boolean;
  altBackground?: boolean;
  certNo?: string;
  noManual?: boolean;
}

export interface MainBanner {
  img: string,
  mobileImg: string,
  link: string,
  alt: string,
  text?: {
    title: string,
    subtitle?: string,
    cta?: string,
    align?: 'left' | 'center' | 'right'
    valign?: 'top' | 'center' | 'bottom'
    dark?: boolean
  }
}