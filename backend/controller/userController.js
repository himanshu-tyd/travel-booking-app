import user from "../models/user.js";
import User from "../models/user.js";

//update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const update = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (update) {
      return res
        .status(200)
        .json({ success: true, message: "profile updated", data: update });
    } else {
      res.status(304).json({ success: false, message: "failed to update" });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "failed to update server facing issue",
    });
    console.log(`error while updating => ${e}`);
  }
};

//delete user

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const exist = await User.findOne({
      _id: id,
    });

    if (exist) {
      const dataDelete = await User.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        message: "successfully Deleted",
        data: dataDelete,
      });
    }
    res.status(404).json({ success: false, message: "Not found user" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to Deleted" });
    console.log(`error while deleteing => ${error}`);
  }
};

//get single user

export const singleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const exist = await User.findById(id);
    
    if (exist) {
      return res
        .status(200)
        .json({ success: true, message: "user found", data: exist });
    } else {
      res.status(404).json({ success: false, message: "Not found user" });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "failed to find user" });

    console.log(`error while finding user => ${e}`);
  }
};

//get all user

export const getAlluser = async (req, res) => {

  try {
    const user=await User.find()

    if (user.length>=0) {
      return res
        .status(200)
        .json({ success: true, message: "user data found",total:user.length, data: user });
    } else {
      res.status(404).json({ success: false, message: "Not found any user" });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "failed to find user" });

    console.log(`error while finding usersss => ${e}`);
  }
};
