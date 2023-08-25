export interface Product {
  id: number;
  name: string;
  unit?: string;
  sku: string;
  collection: string;
  category: string;
  description?: ProductDescription;
  prices?: ProductPrice;
  images: ProductImage;
  createdAt: string;
}
export interface ProductDescription {
  quickDescription?: string[];
  fullDescription?: string;
  colors?: Colors;
}
export interface ProductPrice {
  price?: number;
  discount?: number;
  currency?: string;
}
export interface ProductImage {
  primary?: number;
  secondary?: number;
  list: string[];
}
export interface Colors {
  primary: string | number;
  secondary: string | number;
  tertiary: string | number;
  profile: string | number;
  list: string[]|number[];
}
