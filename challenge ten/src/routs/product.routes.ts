
import { Router } from "express";
import {
  getProducts,
  updateProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/products", getProducts);
router.put("/products/:id", updateProduct);

export default router;