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

const router = express.Router();

//create tour
router.post("/", createTour);

//update tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//single tour
router.get("/:id", findSingleTour);

//all tour
router.get("/", findAllTour);
//findig search by
router.get("/search/searchby", getTourSearchBy);

//findig search by
router.get("/search/feature", getFeatureTour);

//findig search by
router.get("/search/count", getTotolCount);

export default router;
