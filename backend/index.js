import express from "express";
import dotevn from "dotenv";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import TourRouter from "./routes/tours.js";
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'


dotevn.config();
const app = express();
const port = process.env.PORT || 8000;

//connection
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);

    console.log(`Database connection ok`);
  } catch (error) {
    console.log(`connection failed => ${error}`);
  }
};

//test api

app.get("/", (req, res) => {
  res.send("hello there");
});

//midleware

app.use(express.json());
app.use(cors()); //coross origin resource sharing it's allow to communicate with frontend
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/tours", TourRouter);
app.use("/users", userRouter);


app.listen(port, () => {
  connection();
  console.log(`server is running ${port}`);
});
