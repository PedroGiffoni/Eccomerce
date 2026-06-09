import express from "express";

import categoryRoutes from "./routes/category.routes";
import productsRoutes from "./routes/products.routes";

import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/category", categoryRoutes);
app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API de E-commerce funcionando!",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
