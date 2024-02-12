import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "../backend/routes/authRoute.js";
import messageRoute from "../backend/routes/messageRoute.js";
import userRoute from "../backend/routes/userRoute.js";
import connectToMongoDb from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages",  messageRoute);
app.use("/api/users",  userRoute);

app.get("/", (req, res) => {
  res.send({ message: "server is running" });
});

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server started at ${PORT}`);
});
