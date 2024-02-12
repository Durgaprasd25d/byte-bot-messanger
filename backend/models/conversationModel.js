import mongoose from "mongoose";
import messageModel from "./messageModel.js"; // Import the messageModel

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Use the same name as registered in messageModel.js
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversationModel = mongoose.model("Conversation", conversationSchema); // Register with the name "Conversation"
export default conversationModel;
