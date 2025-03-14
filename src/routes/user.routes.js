import express from "express";
import { userSignUp } from "../controllers/users/user-sign-up.js";
import { getUserRegisterById } from "../controllers/users/get.users.js";
import { loginUsers } from "../controllers/users/login.users.js";
import { authorizationMiddleware } from "../middleware/authorization.js";

export const usersRouter = express.Router();

usersRouter.post("/", userSignUp);
usersRouter.get("/", authorizationMiddleware, getUserRegisterById);
usersRouter.post("/login", loginUsers);
