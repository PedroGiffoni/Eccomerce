import type { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: Category;
}
