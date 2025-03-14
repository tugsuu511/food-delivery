import express from "express";
import { addFood } from "../controllers/admins/add.food.js";
import { getFoods } from "../controllers/admins/get.food.js";
import { createFoodCategory } from "../controllers/categories/create.food.category.js";
import { getAllCategories } from "../controllers/categories/get.food.categpry.js";
import { deleteFoodCategory } from "../controllers/categories/delete.food.category.js";
import { deleteFood } from "../controllers/admins/delete.food.js";

export const foodsRouter = express.Router();

foodsRouter.post("/", addFood);
foodsRouter.get("/", getFoods);
foodsRouter.delete("/", deleteFood);

// authorization, isAdmin
foodsRouter.get("/category", getAllCategories);
foodsRouter.post("/category", createFoodCategory);
foodsRouter.delete("/category", deleteFoodCategory);
