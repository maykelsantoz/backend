const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    control: String,
    boxbox: String,
    card: String,
    cart: String,
    heart: String,
    planet: String,
    lefthand: String,
    righthand: String,
    corn: String,
    broccoli: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", StockSchema);
