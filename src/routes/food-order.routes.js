import express from "express";
import { addFoodOrder } from "../controllers/orders/create.order.js";
import { getOrder } from "../controllers/orders/get.food.order.js";
import { authorizationMiddleware } from "../middleware/authorization.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/", authorizationMiddleware, addFoodOrder);
foodOrderRouter.get("/", getOrder);