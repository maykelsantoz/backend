const express = require("express");
const ProductController = require("./controller/ProductController");
const StockController = require("./controller/StockController");

const routes = new express.Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.data);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

routes.get("/stocks", StockController.index);
routes.post("/stocks", StockController.store);
routes.put("/stocks/:id", StockController.update);
routes.delete("/stocks/:id", StockController.delete);

module.exports = routes;
