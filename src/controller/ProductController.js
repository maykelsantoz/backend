import Product from "../models/ProductSchema";
//const Product = require("../models/ProductSchema");

module.exports = {
  async index(req, res) {
    const produts = await Product.find();

    return res.json(produts);
  },

  async data(req, res) {
    try {
      const productId = await Product.findById(req.params.id);

      return res.json(productId);
    } catch (error) {
      return res.status(500).send({ message: "Producto não encontrado!" });
    }
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    try {
      const productId = req.params.id;

      const product = await Product.findById(productId);

      if (product) {
        product.productName = req.body.productName;
        product.image = req.body.image;
        product.from = req.body.from;
        product.nutrients = req.body.nutrients;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        product.organic = req.body.organic;
        product.description = req.body.description;

        const updateProduct = await product.save();

        if (updateProduct) {
          return res
            .status(200)
            .send({ message: "Produto atualizado com sucesso!" });
        }
      }
    } catch (err) {
      return res.status(500).send({ message: "Producto não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const productId = req.params.id;

      const product = await Product.findById(productId);

      if (product) {
        await Product.findByIdAndDelete(productId);

        return res
          .status(200)
          .send({ message: "Produto removido com sucesso!" });
      }
    } catch (err) {
      return res.status(500).send({ message: "Producto não encontrado!" });
    }
  },
};
