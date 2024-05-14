import express from "express";
import {
  deleteUser,
  getAlluser,
  singleUser,
  updateUser,
} from "../controller/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

//find single user
router.get("/:id", verifyUser, singleUser);

//find all user
router.get("/", verifyAdmin, getAlluser);

export default router;
