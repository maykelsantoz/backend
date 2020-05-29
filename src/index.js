import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes";

const app = express();
app.use(express.json());

require("dotenv").config();

app.use(cors());
app.use("/", routes);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
    //useFindAndModify: false
  },
  () => {
    console.log(`⚡ Database Connected ! `);
  }
);

app.listen(3333, () => {
  console.log("⚡ Server listening on Start");
});
