import express from "express";
import { addFood } from "../controllers/admins/add.food.js";
import { getFoods } from "../controllers/admins/get.food.js";
import { createFoodCategory } from "../controllers/categories/create.food.category.js";
import { getAllCategories } from "../controllers/categories/get.food.category.js";
import { deleteFoodCategory } from "../controllers/categories/delete.food.category.js";
import { deleteFood } from "../controllers/admins/delete.food.js";
import { authorization, isAdmin } from "../middlewares/auth.middleware.js";
import { validateFood, validateCategory } from "../middlewares/validation.middleware.js";

export const foodsRouter = express.Router();


foodsRouter.post("/", validateFood, addFood);
foodsRouter.get("/", getFoods);
foodsRouter.delete("/:id", deleteFood);

foodsRouter.get("/category", getAllCategories);
foodsRouter.post("/category", authorization, isAdmin, validateCategory, createFoodCategory);
foodsRouter.delete("/category/:id", authorization, isAdmin, deleteFoodCategory);