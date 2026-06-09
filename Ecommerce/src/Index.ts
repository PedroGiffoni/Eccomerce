import { Category } from "./models/Category";
import { Product } from "./models/Product";
import { User, UserRole } from "./models/User";
import { Cart } from "./models/Cart";

const electronics: Category = {
  id: 1,
  name: "Eletrônicos",
};

const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 3500,
  category: electronics,
};

const mouse: Product = {
  id: 2,
  name: "Mouse Gamer",
  price: 150,
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
