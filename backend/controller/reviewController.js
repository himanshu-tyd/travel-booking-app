import Review from "../models/review.js";
import Tour from "../models/trour.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourid;
  const review = new Review({ ...req.body });

  try {
    const saveReview = await review.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: saveReview._id },
    });
    if (saveReview) {
      return res.status(200).json({
        success: true,
        message: "Feedback is submited",
        data: saveReview,
      });
    } else {
      res
        .status(304)
        .json({ success: false, message: "Feedback not submited try again" });
    }
  } catch (e) {
    console.log(`error while sumiting review => ${e}`);
    return res
      .status(500)
      .json({ success: false, message: "Failed to submit Feedback" });
  }
};
