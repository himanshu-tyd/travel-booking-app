import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    userEmail: {
      type: String, 
      require: true,
    },
    tourName: {
      type: String,
      require: true,
    },
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    guestSize: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    bookingAt: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
