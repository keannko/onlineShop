import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Array, required: true },
  salePrice: { type: Number, required: true },
  onStock: { type: Boolean, required: true },
  color: { type: Array, required: true },
  memory: { type: Array, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  discount: { type: Number, required: true },
  article: { type: String, required: true },
  simCard: { type: Number, required: true },
});

