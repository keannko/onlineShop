import { Router } from "express";
import {
  getUserController,
} from "./controlls.js";

export const usersRouter = Router();

usersRouter.post("/auth", getUserController);


