import UserModel from "../models/userModel.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await UserModel.find({ _id: { $ne: loggedInUserId } }).select('-password')
    return res.status(200).json(allUsers);
  } catch (error) {}
  res.status(500).json({
    error: "Internal server error",
  });
};
