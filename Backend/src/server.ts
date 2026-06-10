import express from "express";
import { connection } from "./database/connection";

import categoryRoutes from "./routes/category.routes";
import productsRoutes from "./routes/products.routes";

import { logger } from "./middlewares/logger";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/category", categoryRoutes);
app.use("/products", productsRoutes);

app.get("/", async (req, res) => {
  const [rows] = await connection.query("SELECT 1 AS status");

  return res.status(200).json({
    message: "API de E-commerce funcionando!",
    database: rows,
  });
});

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
