import { Router } from "express";
import type { Request, Response, NextFunction } from "express";

const router = Router();

interface CreateOrderBody {
  customerName: string;
  productIds: number[];
}

interface UpdateOrderStatusBody {
  status: string;
}

function validateBody(req: Request, res: Response, next: NextFunction) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "O corpo da requisição não pode estar vazio.",
    });
  }

  next();
}

router.post(
  "/",
  validateBody,
  (req: Request<{}, {}, CreateOrderBody>, res: Response) => {
    const order = req.body;

    return res.status(201).json({
      message: "Pedido criado com sucesso.",
      order,
    });
  },
);

router.patch(
  "/:id",
  (req: Request<{ id: string }, {}, UpdateOrderStatusBody>, res: Response) => {
    const id = req.params.id;
    const { status } = req.body;

    return res.status(200).json({
      message: "Status do pedido atualizado.",
      orderId: id,
      status,
    });
  },
);

router.delete("/:id", (req: Request, res: Response) => {
  return res.status(204).send();
});

export default router;
