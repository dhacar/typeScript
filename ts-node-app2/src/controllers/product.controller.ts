import { Request, Response } from "express";


// 🔹 Query type
interface ProductQuery {
  page?: string;
  limit?: string;
}

// 🔹 GET /products
export const getProducts = (
  req: Request<{}, {}, {}, ProductQuery>,
  res: Response
) => {
  const { page = "1", limit = "10" } = req.query;

  return res.json({
    message: `Page ${page} with ${limit} items`,
  });
};


// 🔹 Params + Body types
interface UpdateParams {
  id: string;
}

interface UpdateBody {
  name: string;
  price: number;
}

// 🔹 PUT /products/:id
export const updateProduct = (
  req: Request<UpdateParams, {}, UpdateBody>,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!name || typeof price !== "number") {
    return res.status(400).json({
      error: "Name and valid price are required",
    });
  }

  return res.json({
    message: `Product ${id} updated`,
    data: { name, price },
  });
};