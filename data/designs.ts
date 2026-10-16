import blurData from "./blur-data.json";

export interface DesignItem {
  id: string;
  title: string;
  category: "Event Flyers" | "Brand & Identity" | "Commercial Ads" | "Merch & Print";
  image: string;
  description: string;
  featured?: boolean;
  aspectRatio: "portrait" | "landscape" | "square";
  width: number;
  height: number;
  blurDataURL: string;
}

export const designCategories = [
  "All",
  "Event Flyers",
  "Brand & Identity",
  "Commercial Ads",
  "Merch & Print",
] as const;

export type DesignCategory = (typeof designCategories)[number];

function getBlur(publicPath: string) {
  const entry = (blurData as Record<
    string,
    { blurDataURL: string; width: number; height: number; aspectRatio: string }
  >)[publicPath];
  if (entry) return entry;
  return { blurDataURL: "", width: 1000, height: 1000, aspectRatio: "square" as const };
}

const rawDesigns: Omit<DesignItem, "aspectRatio" | "width" | "height" | "blurDataURL">[] = [
  // --- Event Flyers ---
  {
    id: "frenzyfest",
    title: "Frenzy Fest Music Event",
    category: "Event Flyers",
    image: "/SamplesCompressed/FRENZYFEST flyer.webp",
    description: "Vibrant jungle-themed music festival flyer with 3D typography and ticket tier layouts.",
    featured: true,
  },
  {
    id: "summer-hangout",
    title: "Summer Hangout Party",
    category: "Event Flyers",
    image: "/SamplesCompressed/summer hangout flyer.webp",
    description: "Tropical summer event promotional flyer with custom 3D texturing and talent spotlight.",
    featured: true,
  },
  {
    id: "snooker-tournament",
    title: "Snooker Tournament Poster",
    category: "Event Flyers",
    image: "/SamplesCompressed/snooker flyer.webp",
    description: "Championship sports flyer with high-contrast typography, registration tiers, and prize listings.",
    featured: true,
  },
  {
    id: "pubg-championship",
    title: "PUBG Esports Championship",
    category: "Event Flyers",
    image: "/SamplesCompressed/PUBG flyer.webp",
    description: "High-octane esports gaming tournament promotional flyer with dynamic gaming visuals and bracket details.",
    featured: true,
  },
  {
    id: "independence-day",
    title: "Botswana Independence Day Poster",
    category: "Event Flyers",
    image: "/SamplesCompressed/independance flyer.webp",
    description: "Patriotic national celebration commemorative artwork with cultural motifs and national colors.",
  },
  {
    id: "church-event",
    title: "Church & Ministry Event Flyer",
    category: "Event Flyers",
    image: "/SamplesCompressed/church flyer.webp",
    description: "Inspiring ministry worship conference flyer with warm lighting and elegant layout typography.",
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebration Flyer",
    category: "Event Flyers",
    image: "/SamplesCompressed/brithday flyer.webp",
    description: "Sleek celebration poster with custom portrait composition, gold typography, and event details.",
  },
  {
    id: "nightclub-flyer",
    title: "Club & DJ Night Flyer",
    category: "Event Flyers",
    image: "/SamplesCompressed/flyer04.webp",
    description: "Nightclub dance event flyer featuring layered lighting effects, lineup showcase, and entry passes.",
  },
  {
    id: "couples-night",
    title: "Couples Special Event Flyer",
    category: "Event Flyers",
    image: "/SamplesCompressed/couples flyer.webp",
    description: "Intimate event promotional creative with balanced typography and romantic lighting accents.",
  },

  // --- Brand & Identity ---
  {
    id: "revend-branding",
    title: "ReVend Brand Identity & System",
    category: "Brand & Identity",
    image: "/SamplesCompressed/Revend branding.webp",
    description: "Comprehensive logo breakdown, color harmony, and environmental UI design system for ReVend.",
    featured: true,
  },
  {
    id: "revend-visa-card",
    title: "ReVend x Orange Money Visa Card",
    category: "Brand & Identity",
    image: "/SamplesCompressed/revend visa card.webp",
    description: "Smart cashless reward card mockup integrating eco-friendly green branding with payment systems.",
    featured: true,
  },
  {
    id: "sizewell-cards",
    title: "Sizewell Corporate Business Cards",
    category: "Brand & Identity",
    image: "/SamplesCompressed/Business-Card.pdf.webp",
    description: "Tactile corporate business card mockup with dual-sided typography, logo placement, and modern accents.",
    featured: true,
  },
  {
    id: "mapleton-card",
    title: "Mapleton Business Card Design",
    category: "Brand & Identity",
    image: "/SamplesCompressed/mapleton business card design.webp",
    description: "Clean minimalist brand stationery design highlighting typography and corporate identity.",
  },
  {
    id: "dolla-branding",
    title: "Dolla Images Brand Identity",
    category: "Brand & Identity",
    image: "/SamplesCompressed/dolla images brading.webp",
    description: "Cohesive multi-asset brand visual identity system for creative photography and digital services.",
  },
  {
    id: "korpt-identity",
    title: "Korpt Brandmark & Profile",
    category: "Brand & Identity",
    image: "/SamplesCompressed/korptPP.webp",
    description: "Bold geometric monogram brandmark and institutional identity application mockup.",
  },
  {
    id: "magnum-recycling",
    title: "Magnum Recycling Environmental Flyer",
    category: "Brand & Identity",
    image: "/SamplesCompressed/Magnum Recycing flyer.webp",
    description: "Eco-conscious corporate informational flyer encouraging sustainable waste management.",
  },

  // --- Commercial Ads ---
  {
    id: "iphone-pricelist",
    title: "iPhone Product Pricelist & Specs",
    category: "Commercial Ads",
    image: "/SamplesCompressed/iphone price table flyer.webp",
    description: "High-legibility retail tech pricelist graphic formatted for digital catalogs and social promotion.",
    featured: true,
  },
  {
    id: "compression-vest",
    title: "Compression Vest Apparel Ad",
    category: "Commercial Ads",
    image: "/SamplesCompressed/compression vest flyer.webp",
    description: "Direct-response e-commerce apparel ad with feature benefit callouts and WhatsApp ordering CTA.",
    featured: true,
  },
  {
    id: "tadex-promo",
    title: "Tadex iPhone Promotional Ad",
    category: "Commercial Ads",
    image: "/SamplesCompressed/tadex iphone flyer.webp",
    description: "Clean consumer electronics promotional creative showcasing hardware aesthetics and deals.",
  },
  {
    id: "quick-bite",
    title: "Quick Bite Food & Dining Promo",
    category: "Commercial Ads",
    image: "/SamplesCompressed/quick bite food flyer.webp",
    description: "Appetizing culinary promotional poster designed for restaurant menus, billboards, and social media.",
  },
  {
    id: "absolute-perfume",
    title: "Absolute Perfume Luxury Ad",
    category: "Commercial Ads",
    image: "/SamplesCompressed/absolute pefume flyer.webp",
    description: "High-end luxury fragrance advertising poster with atmospheric lighting and product depth.",
  },
  {
    id: "icepop-promo",
    title: "Ice Pop Refreshment Promo",
    category: "Commercial Ads",
    image: "/SamplesCompressed/icepop flyer.webp",
    description: "Playful, bright commercial flyer design for summer beverage and confectionery promotions.",
  },
  {
    id: "lashes-studio",
    title: "Beauty & Lashes Studio Flyer",
    category: "Commercial Ads",
    image: "/SamplesCompressed/Lashes Flyer.webp",
    description: "Glamour beauty salon advertisement with clear service rate card and appointment booking info.",
  },
  {
    id: "dolla-flyer",
    title: "Dolla Images Promotional Flyer",
    category: "Commercial Ads",
    image: "/SamplesCompressed/dolla images flyer.webp",
    description: "Creative visual services promotional flyer with strong contrast and commercial styling.",
  },

  // --- Merch & Print ---
  {
    id: "korpt-apparel-1",
    title: "Korpt Apparel Streetwear Graphic",
    category: "Merch & Print",
    image: "/SamplesCompressed/Korpt Appreal Flyer.webp",
    description: "Direct-to-Film (DTF) apparel printing mockup showcasing custom streetwear garment graphics.",
    featured: true,
  },
  {
    id: "korpt-apparel-2",
    title: "Korpt Custom Apparel Collection",
    category: "Merch & Print",
    image: "/SamplesCompressed/Korpt Appreal Flyer 2.webp",
    description: "Full-apparel collection print layout engineered for high-precision fabric transfer printing.",
    featured: true,
  },
  {
    id: "gold-spectrum-print",
    title: "Gold Spectrum Print Production Flyer",
    category: "Merch & Print",
    image: "/SamplesCompressed/Gold spectrum flyer.webp",
    description: "Print and sublimation shop promotional flyer highlighting garment printing capabilities.",
  },
];

export const designs: DesignItem[] = rawDesigns.map((d) => {
  const meta = getBlur(d.image);
  return {
    ...d,
    aspectRatio: meta.aspectRatio as "portrait" | "landscape" | "square",
    width: meta.width,
    height: meta.height,
    blurDataURL: meta.blurDataURL,
  };
});
