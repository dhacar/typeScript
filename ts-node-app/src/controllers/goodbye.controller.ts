import { Response } from "express";
import { GoodbyeRequest } from "../types/express";

export const sayGoodbye = (
  req: GoodbyeRequest,
  res: Response
) => {
  const { name } = req.query;

  // ⚠️ 3. Handle missing or invalid param
  if (!name || typeof name !== "string") {
    return res.status(400).json({
      error: "Name is required and must be a string",
    });
  }

  return res.json({
    farewell: `Goodbye, ${name}`,
  });
};