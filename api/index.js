import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
dotenv.config();

const app = express();
mongoose
  .connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json()); //allow json as the input of the server

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
