import express from "express";
import {
  deleteUser,
  getAlluser,
  singleUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

//update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

//find single user
router.get("/:id", singleUser);

//find all user
router.get("/", getAlluser);

export default router;
