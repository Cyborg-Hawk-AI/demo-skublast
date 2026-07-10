export const SAMPLE_PRODUCTS = [
  {
    sku: "TXN-1001",
    name: "Premium Cotton T-Shirt",
    brand: "TexNova",
    material: "100% Organic Cotton",
    weight: "180 GSM",
    colors: ["White", "Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    cost: 4.5,
    mrp: 899,
  },
  {
    sku: "TXN-1002",
    name: "Athletic Performance Polo",
    brand: "TexNova",
    material: "Polyester Blend",
    weight: "220 GSM",
    colors: ["Black", "Red"],
    sizes: ["M", "L", "XL", "XXL"],
    cost: 6.2,
    mrp: 1299,
  },
  {
    sku: "TXN-1003",
    name: "Classic Denim Jacket",
    brand: "TexNova",
    material: "98% Cotton, 2% Elastane",
    weight: "450 GSM",
    colors: ["Indigo", "Light Wash"],
    sizes: ["S", "M", "L"],
    cost: 18.0,
    mrp: 3499,
  },
  {
    sku: "TXN-1004",
    name: "Merino Wool Sweater",
    brand: "TexNova",
    material: "100% Merino Wool",
    weight: "280 GSM",
    colors: ["Oatmeal", "Forest Green"],
    sizes: ["S", "M", "L", "XL"],
    cost: 22.5,
    mrp: 4299,
  },
  {
    sku: "TXN-1005",
    name: "Water-Resistant Windbreaker",
    brand: "TexNova",
    material: "Nylon Shell with DWR Coating",
    weight: "120 GSM",
    colors: ["Black", "Yellow", "Blue"],
    sizes: ["M", "L", "XL"],
    cost: 14.8,
    mrp: 2799,
  },
];

export const COLUMN_MAPPINGS = [
  { source: "Product Name", amazon: "item_name", flipkart: "product_title", ebay: "Title", shopify: "Title", confidence: 98 },
  { source: "Brand", amazon: "brand_name", flipkart: "brand", ebay: "Brand", shopify: "Vendor", confidence: 99 },
  { source: "Material", amazon: "material_type", flipkart: "material", ebay: "Material", shopify: "Type", confidence: 94 },
  { source: "Weight (GSM)", amazon: "fabric_weight", flipkart: "specifications", ebay: "Custom Label", shopify: "Tags", confidence: 87 },
  { source: "MRP", amazon: "list_price", flipkart: "mrp", ebay: "Start Price", shopify: "Compare at Price", confidence: 96 },
  { source: "Colors", amazon: "color_name", flipkart: "color", ebay: "Variation", shopify: "Option1 Value", confidence: 91 },
  { source: "Sizes", amazon: "size_name", flipkart: "size", ebay: "Variation", shopify: "Option2 Value", confidence: 93 },
];

export const MARKETPLACES = [
  { id: "amazon", name: "Amazon", region: "Seller Central", color: "from-orange-500 to-amber-600" },
  { id: "flipkart", name: "Flipkart", region: "Seller Hub", color: "from-blue-500 to-indigo-600" },
  { id: "ebay", name: "eBay", region: "Seller Hub", color: "from-red-500 to-rose-600" },
  { id: "shopify", name: "Shopify", region: "Store", color: "from-emerald-500 to-green-600" },
];

export type GeneratedListing = {
  sku: string;
  productName: string;
  marketplace: string;
  title: string;
  bullets: string[];
  description: string;
  qualityScore: number;
  issues: { severity: "warning" | "error"; message: string; fix?: string }[];
  variants: { color: string; size: string; childSku: string }[];
};

export const GENERATED_LISTINGS: GeneratedListing[] = [
  {
    sku: "TXN-1001",
    productName: "Premium Cotton T-Shirt",
    marketplace: "Amazon",
    title: "TexNova Premium Cotton T-Shirt – 100% Organic Cotton, 180 GSM, Soft Breathable Everyday Tee for Men & Women",
    bullets: [
      "PREMIUM ORGANIC COTTON – Crafted from 100% GOTS-certified organic cotton for superior softness and breathability",
      "180 GSM MID-WEIGHT FABRIC – Perfect balance of durability and comfort for year-round wear",
      "PRE-SHRUNK & COLORFAST – Maintains shape and vibrant colors wash after wash",
      "AVAILABLE IN 3 COLORS & 4 SIZES – White, Navy, and Charcoal in S through XL",
      "SUSTAINABLE MANUFACTURING – Eco-friendly dyeing process with OEKO-TEX Standard 100 certification",
    ],
    description:
      "Elevate your everyday wardrobe with the TexNova Premium Cotton T-Shirt. Made from 100% organic cotton at 180 GSM, this tee delivers exceptional comfort without compromising durability. Ideal for casual wear, layering, or promotional merchandise.",
    qualityScore: 94,
    issues: [],
    variants: [
      { color: "White", size: "S", childSku: "TXN-1001-WH-S" },
      { color: "White", size: "M", childSku: "TXN-1001-WH-M" },
      { color: "Navy", size: "L", childSku: "TXN-1001-NV-L" },
      { color: "Charcoal", size: "XL", childSku: "TXN-1001-CH-XL" },
    ],
  },
  {
    sku: "TXN-1002",
    productName: "Athletic Performance Polo",
    marketplace: "Flipkart",
    title: "TexNova Athletic Polo – Moisture-Wicking Polyester Blend Sports Shirt | Black & Red | M-XXL",
    bullets: [
      "Moisture-wicking polyester blend keeps you dry during workouts",
      "220 GSM lightweight fabric with 4-way stretch",
      "Classic polo collar with 3-button placket",
      "UV protection UPF 30+ for outdoor activities",
      "Available in Black and Red, sizes M to XXL",
    ],
    description:
      "Stay cool and perform at your best with the TexNova Athletic Performance Polo. Engineered for active lifestyles with moisture-wicking technology and a comfortable athletic fit.",
    qualityScore: 88,
    issues: [
      {
        severity: "warning",
        message: "Title exceeds Flipkart recommended length (120 chars)",
        fix: "Shorten title to under 120 characters",
      },
    ],
    variants: [
      { color: "Black", size: "M", childSku: "TXN-1002-BK-M" },
      { color: "Red", size: "L", childSku: "TXN-1002-RD-L" },
    ],
  },
  {
    sku: "TXN-1003",
    productName: "Classic Denim Jacket",
    marketplace: "eBay",
    title: "TexNova Classic Denim Jacket – 98% Cotton Stretch Denim | Indigo & Light Wash | S-L",
    bullets: [
      "Classic trucker-style denim jacket with modern slim fit",
      "98% cotton, 2% elastane for comfortable stretch",
      "450 GSM heavyweight denim for durability",
      "Brass hardware and reinforced stitching",
      "Two colorways: Indigo and Light Wash",
    ],
    description:
      "A timeless wardrobe staple reimagined by TexNova. This classic denim jacket combines authentic vintage styling with modern stretch comfort.",
    qualityScore: 72,
    issues: [
      {
        severity: "error",
        message: "Missing required eBay item specifics: Condition",
        fix: "Add condition field (New with tags)",
      },
      {
        severity: "warning",
        message: "Description lacks care instructions",
        fix: "Add washing and care guidelines",
      },
    ],
    variants: [
      { color: "Indigo", size: "M", childSku: "TXN-1003-IN-M" },
      { color: "Light Wash", size: "L", childSku: "TXN-1003-LW-L" },
    ],
  },
  {
    sku: "TXN-1004",
    productName: "Merino Wool Sweater",
    marketplace: "Shopify",
    title: "TexNova Merino Wool Sweater – 100% Fine Merino | Oatmeal & Forest Green",
    bullets: [
      "100% fine merino wool – naturally temperature regulating",
      "280 GSM mid-weight knit for versatile layering",
      "Ribbed cuffs and hem for a refined silhouette",
      "Machine washable on gentle cycle",
      "Ethically sourced wool from certified farms",
    ],
    description:
      "Luxurious warmth meets everyday practicality. The TexNova Merino Wool Sweater is your go-to layer for cooler months.",
    qualityScore: 96,
    issues: [],
    variants: [
      { color: "Oatmeal", size: "M", childSku: "TXN-1004-OT-M" },
      { color: "Forest Green", size: "L", childSku: "TXN-1004-FG-L" },
    ],
  },
  {
    sku: "TXN-1005",
    productName: "Water-Resistant Windbreaker",
    marketplace: "Amazon",
    title: "TexNova Water-Resistant Windbreaker Jacket – Lightweight Nylon Shell, DWR Coating, Packable Travel Jacket",
    bullets: [
      "Water-resistant nylon shell with DWR coating",
      "Ultra-lightweight 120 GSM – packs into its own pocket",
      "Elastic cuffs and adjustable hem for wind protection",
      "Reflective accents for low-light visibility",
      "Available in Black, Yellow, and Blue",
    ],
    description:
      "Be prepared for any weather with the TexNova Water-Resistant Windbreaker. Lightweight, packable, and built for adventure.",
    qualityScore: 91,
    issues: [
      {
        severity: "warning",
        message: "Amazon backend keywords not generated",
        fix: "Run keyword optimizer for search terms",
      },
    ],
    variants: [
      { color: "Black", size: "M", childSku: "TXN-1005-BK-M" },
      { color: "Yellow", size: "L", childSku: "TXN-1005-YL-L" },
      { color: "Blue", size: "XL", childSku: "TXN-1005-BL-XL" },
    ],
  },
];

export const DEMO_STEPS = [
  { id: "upload", label: "Upload", icon: "📄" },
  { id: "map", label: "Map Columns", icon: "🔗" },
  { id: "generate", label: "Generate", icon: "✨" },
  { id: "review", label: "Review & Score", icon: "📊" },
  { id: "publish", label: "Publish", icon: "🚀" },
];

export const PUBLISH_RESULTS = [
  { marketplace: "Amazon", published: 12, failed: 0, status: "success" as const },
  { marketplace: "Flipkart", published: 8, failed: 0, status: "success" as const },
  { marketplace: "eBay", published: 6, failed: 2, status: "partial" as const },
  { marketplace: "Shopify", published: 12, failed: 0, status: "success" as const },
];
