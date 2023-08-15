import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  nickname: { type: String },
  email: { type: String },
  role: { type: String },
  phone: { type: Number },
  password: { type: String },
});

