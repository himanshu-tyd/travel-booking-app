import express from "express";
import dotevn from "dotenv";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import TourRouter from "./routes/tours.js";
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import reviewRouter from './routes/reviews.js'
import bookingRouter from './routes/bookings.js'


dotevn.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
  origin:true,
  credentials:true
}

//connection
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);

    console.log(`Database connection succesfully`);
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
app.use(cors(corsOptions)); //coross origin resource sharing it's allow to communicate with frontend
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tours", TourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/bookings", bookingRouter);


app.listen(port, () => {
  connection();
  console.log(`server is running at port ${port}`);
});
