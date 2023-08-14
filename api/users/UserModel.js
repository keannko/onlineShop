import mongoose from "mongoose";
import { userSchema } from "./userSchema.js";

export const UserModel = mongoose.model("user", userSchema);
