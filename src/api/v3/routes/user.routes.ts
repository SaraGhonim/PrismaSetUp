import express from "express";
import * as userController from "../controllers/user.controllers";
import { authorized } from "../middlewares/authorization";
import { validateUserData,validateId } from "../validators";

const router = express.Router();

router.get("/", authorized , userController.getUsers)

router.get("/:id", authorized,validateId,userController.getUserById)

router.post("/", authorized,validateUserData,userController.addUser)

router.put("/", authorized,validateUserData,userController.updateUser)

router.delete(`/:id`,authorized,validateId,userController.deleteUser);

export default router;
