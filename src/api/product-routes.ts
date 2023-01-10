import { Router } from "express";
import { ProductService } from "../services";

const router = Router();

const productService = new ProductService();

router.get("/", async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});

router.post("/", async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.json(product);
});

export default router;
