import mongoose from "mongoose";
import { brandSchema } from "./brandSchema.js";


export const BrandModel = mongoose.model("brand", brandSchema);
