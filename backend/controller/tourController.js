import Tour from "../models/trour.js";

//create tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const saveTour = await newTour.save();

    res
      .status(200)
      .json({ success: true, message: "successfully created", data: saveTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to create" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const update = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "successfully Updated", data: update });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to update" });
    console.log(`error while updating data=> ${error}`);
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const exist = await Tour.findOne({
      _id: id,
    });

    if (exist) {
      const dataDelete = await Tour.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        message: "successfully Deleted",
        data: dataDelete,
      });
    }
    res.status(404).json({ success: false, message: "Not found user" });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to Deleted" });
    console.log(`error while deleteing => ${error}`);
  }
};
//findSingle tour
export const findSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Tour.findById(id).populate("reviews");

    res
      .status(200)
      .json({ success: true, message: "User Found Successfully", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Not found such User" });
    console.log(`error while finding => ${error}`);
  }
};
//findAll tour
export const findAllTour = async (req, res) => {
  //for pagintion

  const page = parseInt(req.query.page);

  try {
    const allUser = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    if (allUser.length > 0) {
      return res.status(200).json({
        success: true,
        total: allUser.length,
        message: "successfully find all user ",
        data: allUser,
      });
    }
    return res.status(404).json({
      success: false,
      message: "Not found any user ",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to finding user" });
    console.log(`error while finding all user => ${error}`);
  }
};

//get tour by search
export const getTourSearchBy = async (req, res) => {
  //here i mean case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const searchResult = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    if (searchResult.length > 0) {
      res
        .status(200)
        .json({ success: true, message: "successfull", data: searchResult });
    } else {
      res
        .status(404)
        .json({ success: false, message: "No matching data found" });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "Failed to search" });
    console.log(`error while search by id => ${e}`);
  }
};

//get featured tour
export const getFeatureTour = async (req, res) => {
  try {
    const featureResult = await Tour.find({
      featured: true,
    }).limit(8);

    if (featureResult.length > 0) {
      res
        .status(200)
        .json({ success: true, message: "successfull", data: featureResult });
    } else {
      res
        .status(404)
        .json({ success: false, message: "No matching data found" });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "Failed to find feature" });
    console.log(`error while finding feature => ${e}`);
  }
};

//get total tour

export const getTotolCount = async (req, res) => {
  try {
    const totalCount = await Tour.estimatedDocumentCount({});

    if (totalCount >= 0) {
      res
        .status(200)
        .json({ success: true, message: "Data found", data: totalCount });
    }
    res.status(404).json({ success: false, message: "No Data found" });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "failed to find document" });
  }
};
