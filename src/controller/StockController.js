const Stock = require("../models/StockSchema");

module.exports = {
  async index(req, res) {
    const stocks = await Stock.find();

    return res.json(stocks);
  },

  async store(req, res) {
    const stock = await Stock.create(req.body);
    return res.json(stock);
  },

  async update(req, res) {
    try {
      const stockId = req.params.id;

      const stock = await Stock.findById(stockId);

      if (stock) {
        stock.control = req.body.control;
        stock.boxbox = req.body.boxbox;
        stock.card = req.body.card;
        stock.cart = req.body.cart;
        stock.heart = req.body.heart;
        stock.planet = req.body.planet;
        stock.lefthand = req.body.lefthand;
        stock.righthand = req.body.righthand;
        stock.corn = req.body.corn;
        stock.broccoli = req.body.broccoli;

        const updateStock = await stock.save();

        if (updateStock) {
          return res
            .status(200)
            .send({ message: "Stock atualizado com sucesso!" });
        }
      }
    } catch (err) {
      return res.status(500).send({ message: "Stock não encontrado!" });
    }
  },

  async delete(req, res) {
    try {
      const stockId = req.params.id;

      const stock = await Stock.findById(stockId);

      if (stock) {
        await Stock.findByIdAndDelete(stockId);

        return res.status(200).send({ message: "Stock removido com sucesso!" });
      }
    } catch (err) {
      return res.status(500).send({ message: "Stock não encontrado!" });
    }
  },
};
