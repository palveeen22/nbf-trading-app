// Core business types
export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  imageUrl?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Market {
  id: string;
  country: string;
  code: string; // ISO country code
  coordinates: {
    lat: number;
    lng: number;
  };
  isActive: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  mission: string[];
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone?: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// UI Component Props Types
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
