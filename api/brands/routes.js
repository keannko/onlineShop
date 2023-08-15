import { Router } from "express";
import {
  getBrandsController,
} from "./controlls.js";

export const brandsRouter = Router();

brandsRouter.get("/", getBrandsController);

