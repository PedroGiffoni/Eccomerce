export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Notebook",
    price: 3500,
    category: "eletronicos",
  },
  {
    id: 2,
    name: "Mouse Gamer",
    price: 150,
    category: "eletronicos",
  },
  {
    id: 3,
    name: "Camiseta",
    price: 80,
    category: "vestuario",
  },
];
