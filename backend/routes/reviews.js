import express from "express";
import { createReview } from "../controller/reviewController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:tourid",verifyUser,createReview);

export default router;
