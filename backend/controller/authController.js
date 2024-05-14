import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

//register user
export const register = async (req, res) => {
  const { username, email, password, photo, role } = req.body;

  try {
    const exits = await User.findOne({ email: email });

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
      role,
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
    console.log(`error while creating account => ${e}`);
    return res
      .status(500)
      .json({ success: false, message: "failed to create account" });
  }
};

//login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    //check if user match
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email and password",
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    //check if password match
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email and password",
      });
    }

    const { password: _, role, ...rest } = user._doc;

    //creating token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "10d" }
    );



    //set token in browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        success: true,
        message: "successfully login",
        role,
        data: { ...rest },
      });
  } catch (e) {
    console.log(`error while login => ${e}`);
    return res.status(500).json({ success: false, message: "failed to login" });
  }
};
