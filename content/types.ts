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
  id: number;
  title: string;
  link: string;
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
  featuresSections?: Section[]; // If present, pls leave features: []
  line?: string;
  variants?: string[];
  colors?: string[];
  videos?: Video[];
  top?: boolean;
  altBackground?: boolean;
  certNo?: string;
  noManual?: boolean;
}