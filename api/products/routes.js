import { Router } from "express";
import {
  addProductController,
  deleteProductController,
  getOneProductController,
  getProductsByBrandController,
  getProductsController,
  updateProductController,
} from "./controlls.js";

export const productsRouter = Router();

productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getOneProductController);
productsRouter.put("/:id", updateProductController);
productsRouter.get("/get/:brand", getProductsByBrandController);
productsRouter.post("/", addProductController);
productsRouter.delete("/:id", deleteProductController);
