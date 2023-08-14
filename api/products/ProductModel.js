import mongoose from "mongoose";
import { productSchema } from "./productSchema.js";

export const ProductModel = mongoose.model("product", productSchema);
