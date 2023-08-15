import { app } from "./index.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connect");

    app.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`Server started on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
