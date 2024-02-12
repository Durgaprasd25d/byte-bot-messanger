import jwt from "jsonwebtoken";

const generateToken = async (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure:process.env.NODE_ENV !== 'development',
    });
    return token; // Return the generated token
  } catch (error) {
    console.error("Token Generation Error:", error);
    throw new Error("Error generating token");
  }
};

export default generateToken;
