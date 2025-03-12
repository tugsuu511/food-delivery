import express from "express";
import { addFood } from "../resolvers/admins/add.food.js";
import { getFoods } from "../resolvers/admins/get.food.js";
import { creadeFoodCategory } from "../resolvers/categories/food.category.js";
import { getAllCategories } from "../resolvers/categories/get.food.category.js";
import { deleteFoodCategory } from "../resolvers/categories/delete.food.category.js";

export const foodsRouter = express.Router();

foodsRouter.post("/", addFood)
foodsRouter.get("/", getFoods);
foodsRouter.get("/category", getAllCategories);
foodsRouter.post("/category", creadeFoodCategory);
foodsRouter.delete("/category", deleteFoodCategory);