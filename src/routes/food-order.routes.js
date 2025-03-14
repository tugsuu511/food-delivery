import express from "express";
import { addFoodOrder } from "../controllers/order/create-order.js";
import { getOrder } from "../controllers/orders/get.food.order.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/", addFoodOrder);
foodOrderRouter.get("/", getOrder);