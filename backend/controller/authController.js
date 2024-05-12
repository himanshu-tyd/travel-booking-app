import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

//register user
export const register = async (req, res) => {
  const { username, email, password, photo, role } = req.body;

  try {
    const exits = await User.findOne({email:email});

    if (exits) {
      return res
        .status(403)
        .json({ success: false, message: "account already exits" });
    }
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
      photo,
    });

    const data = await newUser.save();

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "account created", data: data });
    }

    res
      .status(204)
      .json({ success: true, message: "can not create account try again" });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "failed to create account" });
    console.log(`error while creating account => ${e}`);
  }
};

//login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const checkPassword = bcrypt.compare(password, user.password);

    //check if user and password  match
    if (!exits && !checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email and password",
      });
    }

    const { password, role, ...rest } = user._doc;

    //creating token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "10d" }
    );

    //set token in browser cookies and send the response to the client
    res
      .cookie("accessToken", {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "successfully login",
        data: { ...rest },
      });
  } catch (e) {
    return res.status(500).json({ success: false, message: "failed to login" });

  }
};
