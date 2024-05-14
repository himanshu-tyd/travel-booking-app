import Booking from "../models/booking.js";

//create booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const saveBooking = await newBooking.save();

    if (saveBooking) {
      return res.status(200).json({
        success: true,
        message: "Your trip has been successfully book",
        data: saveBooking,
      });
    }
    res.status(400).json({
      success: false,
      message: "We have some while booking trip please try again",
    });
  } catch (e) {
    console.log(`failed to book trip with => ${e}`);
    return res
      .status(500)
      .json({ success: false, message: "failed to book trip" });
  }
};

//get single booking
export const getBooking = async (req, res) => {
  const bookId = req.params.bookid;
  try {
    const book = await Booking.findById(bookId);
    if (book) {
      return res
        .status(200)
        .json({ success: true, message: "Trip found", data: book });
    }
    res
      .status(404)
      .json({ success: false, message: "there is not trip found" });
  } catch (e) {
    cconsole.log(`failed to find trip with => ${e}`);
    return res
      .status(500)
      .json({ success: false, message: "failed to find trip" });
  }
};

//get all booking

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    if (books.length >= 0) {
      return res
        .status(200)
        .json({ success: true, message: "booking found", data: books });
    }
    res.status(404).json({ success: false, message: "No any book found" });
  } catch (e) {
    cconsole.log(`failed to find all trip with => ${e}`);
    return res
      .status(500)
      .json({ success: false, message: "failed to find trips" });
  }
};
