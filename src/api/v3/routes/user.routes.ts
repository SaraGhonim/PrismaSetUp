import express from "express";
import * as userController from "../controllers/user.controllers";
import { authorized } from "../middlewares/authorization";
import { validateUserData,validateId } from "../validators";
import asyncMiddleware from "./asyncMiddleware"

const router = express.Router();

router.get("/:id", authorized,validateId,asyncMiddleware(userController.getUserById))

router.post("/", authorized,validateUserData,asyncMiddleware(userController.addUser))

router.get("/", authorized , asyncMiddleware(userController.getUsers))

router.put("/", authorized,validateUserData,asyncMiddleware(userController.updateUser))

router.delete('/:id',authorized,validateId,asyncMiddleware(userController.deleteUser));

export default router;
