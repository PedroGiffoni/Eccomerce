import express from "express";

import productsRoutes from "./routes/products.routes";
import ordersRoutes from "./routes/orders.routes";

import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API de E-commerce funcionando!",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
