export interface NovaColor {
  name: string;
  hex: string;
  role: string;
  usage: string;
  bgClass: string;
  textClass: string;
  category: "primary" | "secondary" | "neutral";
}

export interface NovaPattern {
  id: string;
  name: string;
  concept: string;
  motifs: string[];
  colorway: string;
  monochrome: string;
  description: string;
}

export interface NovaGarment {
  id: string;
  name: string;
  type: string;
  pattern: string;
  colorway: string;
  application: string;
  notes: string;
}

export interface NovaPackagingItem {
  id: string;
  title: string;
  category: "Primary" | "Secondary" | "Inserts" | "Labels";
  material: string;
  finish: string;
  description: string;
}

export interface NovaSocialPost {
  id: string;
  title: string;
  type: "Post" | "Story" | "Carousel";
  concept: string;
  format: string;
  caption: string;
}

export interface NovaDesignDecision {
  number: string;
  title: string;
  why: string;
  response: string;
}

export const NOVA_COLORS: NovaColor[] = [
  {
    name: "Warm Cream",
    hex: "#F8F4EC",
    role: "Primary Canvas",
    usage: "Main background foundation, packaging exterior, editorial whitespace.",
    bgClass: "bg-[#F8F4EC]",
    textClass: "text-[#242424]",
    category: "primary",
  },
  {
    name: "Warm Charcoal",
    hex: "#242424",
    role: "Primary Contrast",
    usage: "Typography, primary logos, sharp structural details & borders.",
    bgClass: "bg-[#242424]",
    textClass: "text-[#F8F4EC]",
    category: "primary",
  },
  {
    name: "Soft Peach",
    hex: "#F3C7B5",
    role: "Warmth Accent",
    usage: "Apparel trims, tissue paper repeats, hero highlights.",
    bgClass: "bg-[#F3C7B5]",
    textClass: "text-[#242424]",
    category: "secondary",
  },
  {
    name: "Powder Blue",
    hex: "#C9DDEA",
    role: "Calm Accent",
    usage: "Cloud pattern colorways, sleepwear applications, social backdrops.",
    bgClass: "bg-[#C9DDEA]",
    textClass: "text-[#242424]",
    category: "secondary",
  },
  {
    name: "Sage",
    hex: "#B8C8B5",
    role: "Natural Accent",
    usage: "Botanical garden patterns, hang tag details, organic elements.",
    bgClass: "bg-[#B8C8B5]",
    textClass: "text-[#242424]",
    category: "secondary",
  },
  {
    name: "Soft Lavender",
    hex: "#D8CEE6",
    role: "Dreamy Accent",
    usage: "Moon & Dream collection, care label accents, packaging inserts.",
    bgClass: "bg-[#D8CEE6]",
    textClass: "text-[#242424]",
    category: "secondary",
  },
];

export const NOVA_PATTERNS: NovaPattern[] = [
  {
    id: "clouds",
    name: "01 / Little Clouds",
    concept: "Gentle floating silhouettes depicting soft sky movements for everyday essential wear.",
    motifs: ["Soft Cloud", "Curved Drift", "Dot Accents"],
    colorway: "Powder Blue & Warm Cream",
    monochrome: "Charcoal & Cream",
    description: "Designed with rounded curves to create a calming rhythm across baby rompers and swaddle wraps.",
  },
  {
    id: "garden",
    name: "02 / Tiny Garden",
    concept: "Botanical micro-motifs celebrating curious discoveries and quiet nature explorations.",
    motifs: ["Sprouted Leaf", "Petal Arc", "Organic Stem"],
    colorway: "Sage & Soft Peach",
    monochrome: "Charcoal & Cream",
    description: "Small-scale repeat maintaining high visual clarity on smaller apparel items like bibs and tees.",
  },
  {
    id: "moon",
    name: "03 / Moon & Dream",
    concept: "Bedtime-inspired celestial geometry evoking tranquil night atmospheres.",
    motifs: ["Crescent Moon", "Four-Point Star", "Night Cloud"],
    colorway: "Soft Lavender & Powder Blue",
    monochrome: "Charcoal & Cream",
    description: "Deep, soothing pattern pairing created specifically for sleepwear and nursery blankets.",
  },
  {
    id: "explorer",
    name: "04 / Little Explorer",
    concept: "Abstract organic shapes combining geometric balance with playful, tactile curiosity.",
    motifs: ["Arch Form", "Pebble Shape", "Sunburst Line"],
    colorway: "Multi-Pastel & Warm Cream",
    monochrome: "Charcoal & Cream",
    description: "A signature multi-element pattern developed for hero packaging boxes and outer layers.",
  },
];

export const NOVA_GARMENTS: NovaGarment[] = [
  {
    id: "romper",
    name: "NOVA Cloud Romper",
    type: "Apparel Essential",
    pattern: "Little Clouds",
    colorway: "Warm Cream / Powder Blue",
    application: "All-over repeating motif with snap closures",
    notes: "Restrained pattern density engineered to ensure comfort and visual harmony at miniature scale.",
  },
  {
    id: "tshirt",
    name: "NOVA Organic Pocket Tee",
    type: "Apparel Essential",
    pattern: "Tiny Garden",
    colorway: "Sage & Warm Charcoal",
    application: "Placed chest pocket motif & back label neck print",
    notes: "Combines a clean single-color body with subtle graphic accents on functional elements.",
  },
  {
    id: "hoodie",
    name: "NOVA Fleece Knit Hoodie",
    type: "Apparel Layering",
    pattern: "Little Explorer",
    colorway: "Soft Peach / Warm Cream",
    application: "Lined interior hood pattern & ribbed cuffs",
    notes: "Uses pattern as a hidden interior delight, balancing external minimalism with playful interior lining.",
  },
  {
    id: "sleepwear",
    name: "NOVA Dream Two-Piece Set",
    type: "Sleepwear",
    pattern: "Moon & Dream",
    colorway: "Soft Lavender / Powder Blue",
    application: "Seamless continuous repeat across top and bottoms",
    notes: "Soft tactile knit construction designed with soothing bedtime motifs.",
  },
  {
    id: "bib",
    name: "NOVA Organic Cotton Bib",
    type: "Accessories",
    pattern: "Tiny Garden",
    colorway: "Warm Cream / Sage",
    application: "Border print with centered monogram seal",
    notes: "Durable organic cotton finish accented with signature brand stitching.",
  },
];

export const NOVA_PACKAGING_ITEMS: NovaPackagingItem[] = [
  {
    id: "apparel-box",
    title: "Rigid Apparel Box",
    category: "Primary",
    material: "Uncoated FSC-certified textured paperboard",
    finish: "Embossed NOVA logo with blind stamped motif",
    description: "Tactile cream box housing wrapped garments, designed for reusability and gift presentation.",
  },
  {
    id: "shipping-box",
    title: "Outer Mailer Box",
    category: "Secondary",
    material: "Recycled kraft cardboard",
    finish: "Charcoal soy ink custom pattern print",
    description: "Protective exterior box featuring full repeat Little Explorer pattern on internal flaps.",
  },
  {
    id: "tissue",
    title: "Patterned Tissue Wrap",
    category: "Inserts",
    material: "17gsm translucent acid-free tissue paper",
    finish: "Single-color Little Clouds repeat print",
    description: "Delicate inner wrapping creating an intentional tactile unboxing experience.",
  },
  {
    id: "hang-tag",
    title: "Editorial Hang Tag",
    category: "Labels",
    material: "350gsm heavy cotton cardstock",
    finish: "Matte debossed monogram with organic cotton string",
    description: "Features brand statement, care instructions, and typographic hierarchy spec.",
  },
  {
    id: "sticker",
    title: "Brand Seal Stickers",
    category: "Labels",
    material: "Biodegradable paper stickers",
    finish: "Pastel peach and charcoal matte print",
    description: "Used to seal wrapped tissue paper and secure thank-you notes.",
  },
  {
    id: "thank-you",
    title: "Collector's Note Card",
    category: "Inserts",
    material: "Heavy cream stock",
    finish: "Charcoal foil typography and hand-written note field",
    description: "Personal note expressing NOVA's design philosophy to the recipient.",
  },
];

export const NOVA_SOCIAL_POSTS: NovaSocialPost[] = [
  {
    id: "post-1",
    title: "POST 01 — INTRODUCING NOVA",
    type: "Post",
    concept: "Brand launch statement introducing NOVA's design philosophy with quiet editorial typography.",
    format: "1:1 Square Feed Post",
    caption: "Soft beginnings. Designed with intention. Welcome to NOVA — a concept babywear identity built on thoughtful details and gentle everyday essentials.",
  },
  {
    id: "post-2",
    title: "POST 02 — LITTLE CLOUDS",
    type: "Post",
    concept: "Highlighting the inspiration behind the Little Clouds pattern collection.",
    format: "1:1 Square Feed Post",
    caption: "Every curve matters. Exploring how subtle sky movements transform into repeating textile graphics for gentle morning routines.",
  },
  {
    id: "post-3",
    title: "POST 03 — MADE FOR LITTLE MOMENTS",
    type: "Post",
    concept: "Editorial photographic & typography study celebrating quiet daily parenting routines.",
    format: "1:1 Square Feed Post",
    caption: "Crafted for peaceful mornings and comfortable afternoons. Organic cotton essentials designed to grow with your family.",
  },
  {
    id: "post-4",
    title: "POST 04 — PATTERN SPOTLIGHT",
    type: "Post",
    concept: "Close-up macro repeat of the Tiny Garden & Moon & Dream pattern systems.",
    format: "1:1 Square Feed Post",
    caption: "From digital vector tiles to tactile knit fabrics: a closer look at our custom pattern signatures.",
  },
  {
    id: "post-5",
    title: "POST 05 — NOVA WORLD",
    type: "Post",
    concept: "Comprehensive brand ecosystem spread uniting logo, packaging, apparel, and hang tags.",
    format: "1:1 Square Feed Post",
    caption: "One cohesive visual identity across physical garments, packaging, and digital touchpoints.",
  },
  {
    id: "story-1",
    title: "STORY 01 — COLOR PALETTE SCIENCE",
    type: "Story",
    concept: "Interactive story breaking down Warm Cream, Sage, and Soft Peach color pairings.",
    format: "9:16 Vertical Story",
    caption: "Exploring the emotional temperature of our pastel color pairings.",
  },
  {
    id: "story-2",
    title: "STORY 02 — BEHIND THE MONOGRAM",
    type: "Story",
    concept: "Vector construction sequence showing how the N-monogram was drawn.",
    format: "9:16 Vertical Story",
    caption: "Geometry meets softness: constructing the NOVA symbol mark.",
  },
  {
    id: "carousel-1",
    title: "CAROUSEL 01 — FULL IDENTITY CAROUSEL",
    type: "Carousel",
    concept: "Multi-slide breakdown covering Logo, Colors, Patterns, and Garment Mockups.",
    format: "10-Slide Swipable Grid",
    caption: "Swipe through the complete visual identity system created for NOVA.",
  },
];

export const NOVA_DESIGN_DECISIONS: NovaDesignDecision[] = [
  {
    number: "01",
    title: "Softness Without Childishness",
    why: "Many babywear brands rely on hyper-colorful cartoon figures that quickly feel dated or visually loud.",
    response: "NOVA adopts a restrained color palette, refined typography, and simplified organic motifs that feel modern, quiet, and enduring.",
  },
  {
    number: "02",
    title: "Restrained Color Palette",
    why: "Overusing bright colors dilutes brand recognition and degrades the feeling of premium craftsmanship.",
    response: "A foundational cream and charcoal base provides structure, allowing soft peach, sage, and lavender to act as deliberate, meaningful accents.",
  },
  {
    number: "03",
    title: "Patterns as a Recognizable Brand Asset",
    why: "A logo alone cannot sustain a complete apparel and packaging visual world across physical products.",
    response: "Four custom repeating SVG patterns serve as recognizable brand signatures across garments, tissue paper, box interiors, and digital feeds.",
  },
  {
    number: "04",
    title: "One Identity Across Physical and Digital",
    why: "Packaging, clothing, and digital presence often feel disconnected when designed in isolation.",
    response: "Shared typography rules, motif libraries, scale grids, and color tokens connect every touchpoint from social feeds to garment care labels.",
  },
];
