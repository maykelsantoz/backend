import express from "express";
import { Router } from "express";

import ProductController from "./controller/ProductController";
import StockController from "./controller/StockController";

const routes = new Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.data);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

routes.get("/stocks", StockController.index);
routes.post("/stocks", StockController.store);
routes.put("/stocks/:id", StockController.update);
routes.delete("/stocks/:id", StockController.delete);

export default routes;
