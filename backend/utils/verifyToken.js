import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken;


  //if token not exist
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You do not have accesss" });
  }

  //if token exist
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!user || !user.id || !user.role) {
      return res.status(401).json({ success: false, message: "Token invalid" });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "token is exired" });
    }
    console.log(`error while veriying token => ${error}`);
    return res.status(401).json({ success: false, message: "Token invalid" });
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You'r not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you'r not authorize" });
    }
  });
};
