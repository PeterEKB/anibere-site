export interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  description: ProductDescription;
  prices: ProductPrice;
  images: string[];
  createdAt: string;
}
export interface ProductDescription {
  quickDescription: string;
  fullDescription: string;
}
export interface ProductPrice {
  price: number;
  discount: number;
  currency: string;
}