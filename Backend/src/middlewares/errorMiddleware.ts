import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      errors: error.flatten(),
    });
  }

  return res.status(400).json({
    message: error.message || "Erro interno no servidor.",
  });
}
