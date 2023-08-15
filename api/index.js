import express from "express";
import cors from "cors";
import { brandsRouter } from "./brands/routes.js";
import { productsRouter } from "./products/routes.js";
import { usersRouter } from "./users/routes.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);
app.use("/brands", brandsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
