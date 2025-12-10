import { CompanyInfo, ProductCategory, CoreValue, Market, NavigationItem } from './type';

export const COMPANY_INFO: CompanyInfo = {
  name: 'NBF TRADING SYSTEM',
  legalName: 'PT NBF TRADING SYSTEM',
  tagline: 'Connecting Markets, Delivering Excellence',
  description: `NBF TRADING SYSTEM is a company based in Indonesia, specializing in the wholesale distribution of goods such as rice, coffee, food products, textiles, clothing, household goods, electronics, agricultural machinery and equipment. Our goal is to distribute products across international markets, including China and throughout the Asian region, including Indonesia, Thailand, Malaysia, and Singapore, while also enabling global payment options in case of successful contract agreements in the near future. We aim ourselves on establishing strong supply chains and maintaining excellent relationships with manufacturers and suppliers to ensure the consistent availability of products that meet international standards. NBF TRADING SYSTEM has strong existing customer base built through long-term relationships. To find new customers, we work with trusted partners and collaborators who refer us to their networks. We also attend industry events, trade shows to reach more potential clients.`,
  mission: [
    'To expand our distribution network across key Asian markets including China, Thailand, Malaysia, Singapore, and beyond.',
    'To develop strategic partnerships with international buyers, importers, and distributors seeking high-quality products at competitive prices.',
    'To streamline logistics and supply chain operations to ensure timely delivery and optimal inventory management.',
    'To implement advanced technology solutions for order processing, inventory tracking, and customer relationship management.',
  ],
  address: {
    street: 'Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53',
    city: 'Desa/Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan',
    province: 'Provinsi DKI Jakarta',
    postalCode: '12190',
    country: 'Indonesia',
  },
  contact: {
    email: 'nbftradingsystem@gmail.com',
    phone: undefined, // To be provided later
  },
};

export const NAVIGATION: NavigationItem[] = [
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'values', label: 'Our Values', href: '#values' },
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'markets', label: 'Markets', href: '#markets' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'rice',
    title: 'Rice & Secondary Crops',
    description: 'Premium quality rice and agricultural staples',
    icon: 'Wheat',
  },
  {
    id: 'coffee',
    title: 'Coffee, Tea, Cocoa',
    description: 'Finest beverages from premium sources',
    icon: 'Coffee',
  },
  {
    id: 'food',
    title: 'Food Products & Beverages',
    description: 'Diverse range of quality food items',
    icon: 'Utensils',
  },
  {
    id: 'textiles',
    title: 'Textiles & Clothing',
    description: 'Quality fabrics and apparel',
    icon: 'Shirt',
  },
  {
    id: 'household',
    title: 'Household Goods & Equipment',
    description: 'Essential items for modern living',
    icon: 'Home',
  },
  {
    id: 'electronics',
    title: 'Electronics & Computers',
    description: 'Latest technology and devices',
    icon: 'Laptop',
  },
  {
    id: 'machinery',
    title: 'Agricultural Machinery & Equipment',
    description: 'Advanced farming solutions',
    icon: 'TractorIcon',
  },
  {
    id: 'fertilizers',
    title: 'Fertilizers & Agrochemicals',
    description: 'Quality products for optimal yields',
    icon: 'Sprout',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'reliability',
    title: 'Reliability & Trust',
    description: 'We build enduring partnerships based on integrity, consistent product availability, and secure transactions, fostering long-term loyalty with our suppliers, partners, and clients.',
    icon: 'Shield',
  },
  {
    id: 'excellence',
    title: 'Strategic Excellence',
    description: 'We focus on intelligent market expansion, optimized supply chains, and operational efficiency to deliver superior value and competitive advantage in key Asian markets.',
    icon: 'Target',
  },
  {
    id: 'partnership',
    title: 'Global Partnership',
    description: 'We are dedicated to fostering mutually beneficial relationships, working collaboratively with international networks, manufacturers, and distributors to achieve shared success.',
    icon: 'Handshake',
  },
  {
    id: 'innovation',
    title: 'Innovation & Adaptation',
    description: 'We embrace advanced solutions and flexible approaches, from payment systems to logistics, to meet the evolving needs of global trade and ensure seamless operations.',
    icon: 'Lightbulb',
  },
  {
    id: 'quality',
    title: 'Commitment to Quality',
    description: 'We are unwavering in our dedication to sourcing and distributing products that meet international standards, ensuring excellence from our supply chain to our clients.',
    icon: 'Award',
  },
];

export const MARKETS: Market[] = [
  {
    id: 'indonesia',
    country: 'Indonesia',
    code: 'ID',
    coordinates: { lat: -6.2088, lng: 106.8456 },
    isActive: true,
  },
  {
    id: 'china',
    country: 'China',
    code: 'CN',
    coordinates: { lat: 39.9042, lng: 116.4074 },
    isActive: true,
  },
  {
    id: 'thailand',
    country: 'Thailand',
    code: 'TH',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    isActive: true,
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    code: 'MY',
    coordinates: { lat: 3.139, lng: 101.6869 },
    isActive: true,
  },
  {
    id: 'singapore',
    country: 'Singapore',
    code: 'SG',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    isActive: true,
  },
  {
    id: 'hongkong',
    country: 'Hong Kong',
    code: 'HK',
    coordinates: { lat: 22.3193, lng: 114.1694 },
    isActive: true,
  },
];
