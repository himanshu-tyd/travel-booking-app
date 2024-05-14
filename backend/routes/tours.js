import express from "express";
import {
  createTour,
  deleteTour,
  findAllTour,
  findSingleTour,
  getFeatureTour,
  getTotolCount,
  getTourSearchBy,
  updateTour,
} from "../controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create tour
router.post("/", verifyAdmin, createTour);

//update tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//single tour
router.get("/:id", findSingleTour);

//all tour
router.get("/", findAllTour);

//findig search by
router.get("/search/searchby", getTourSearchBy);
router.get("/search/feature", getFeatureTour);
router.get("/search/count", getTotolCount);

export default router;
