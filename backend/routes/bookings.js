import express from "express";
import { verifyUser,verifyAdmin } from "../utils/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../controller/bookigController.js";

const router = express.Router();

router.post("/",verifyUser, createBooking);
router.get("/:bookid",verifyUser, getBooking);
router.get("/",verifyAdmin, getAllBooking);

export default router;
