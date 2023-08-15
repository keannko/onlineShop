import mongoose from "mongoose";

export const brandSchema = new mongoose.Schema({
  brand: { type: String, required: true },
});

