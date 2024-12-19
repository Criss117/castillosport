export type Product = {
  primaryImage: string;
  secondaryImage: string;
  title: string;
  slug: string;
  price: number;
  discountedPrice?: number;
  description: string;
  category: string;
};
