import mongoose from "mongoose";

const connectToMongoDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Connection err", error.message);
  }
};
export default connectToMongoDb;
