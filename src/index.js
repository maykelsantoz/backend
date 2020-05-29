const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

routes = require("./routes");
require("dotenv").config();

app.use(cors());
app.use("/", routes);

mongoose.connect(
  `${process.env.MONGO_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
    //useFindAndModify: false
  },
  () => {}
);

app.listen(process.env.PORT || 3333);
