import express from "express";
import noteRoutes from "./note.routes";
import userRoutes from "./user.routes";

const router = express.Router();

router.use("/notes", noteRoutes);
router.use("/users", userRoutes);

export default router;
