import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Token not found" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decode.userId).select("-password");

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      // Fix: Handle invalid token error
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export default protectRoute;
