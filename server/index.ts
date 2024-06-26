import { Request, Response } from "express";

interface Username {
  username: string;
  id: string;
}
interface IRequest extends Request {
  userData: Username;
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require('dotenv').config()
const USERS = require("./models/user");

const authRoutes = require("./routes/auth.ts");
const { validateToken } = require("./JWT");
const postRoutes = require("./routes/posts.ts");

const app = express();
const PORT = process.env.PORT || 5000;
const origin = process.env.FRONTEND_URL;


app.use(cors({ credentials: true, origin: origin }));
app.use(express.json({ limit: "2000kb" }));
app.use(express.urlencoded({ limit: "2000kb", extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

// move this section to controllers later!
app.get("/profile", validateToken, async (req: IRequest, res: Response) => {
  try {
    const userId = req.userData.id;
    const userProfile = await USERS.findById(userId);
    res.status(200).json(userProfile);
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

mongoose.connect(
  process.env.DB_LOGIN,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req: Request, res: Response) => {
    if (!res) {
      console.log("server login failed");
    }
    console.log("MongoDB connected");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
