const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    image: String,
    from: String,
    nutrients: String,
    quantity: Number,
    price: Number,
    organic: Boolean,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
