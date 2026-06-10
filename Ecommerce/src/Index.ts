import type { Category } from "./models/Category";
import type { Product } from "./models/Product";
import type { User } from "./models/User";
import { UserRole } from "./models/User";
import { Cart } from "./models/Cart";

const electronics: Category = {
  id: 1,
  title: "Eletrônicos",
};

const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 3500,
  image: "/products/notebook1.jpg",

  images: [
    "/products/notebook1.jpg",
    "/products/notebook2.jpg",
    "/products/notebook3.jpg",
    "/products/notebook4.jpg",
    "/products/notebook5.jpg",
  ],
  category: electronics,
};

const mouse: Product = {
  id: 2,
  name: "Mouse Gamer",
  price: 150,
  image: "/products/mouse1.jpg",
  images: [
    "/products/mouse1.jpg",
    "/products/mouse2.jpg",
    "/products/mouse3.jpg",
    "/products/mouse4.jpg",
    "/products/mouse5.jpg",
  ],
  category: electronics,
};

const customer: User = {
  id: 1,
  username: "Pedro",
  email: "pedro@email.com",
  role: UserRole.CUSTOMER,
};

console.log("Usuário:");
console.log(customer);

const cart = new Cart();

cart.addItem(notebook, 1);
cart.addItem(mouse, 2);
cart.addItem(mouse, 3);

console.log("\nItens do Carrinho:");
console.log(cart.getItems());

console.log("\nTotal de Itens:");
console.log(cart.getTotalItems());

console.log("\nValor Final:");
console.log(`R$ ${cart.getFinalPrice().toFixed(2)}`);
