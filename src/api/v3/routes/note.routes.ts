import express from "express";
import { authorized } from "../middlewares/authorization";
import { validateNoteData,validateId } from "../validators";
import * as noteController from "../controllers/note.controllers";

const router = express.Router();

router.get("/", authorized , noteController.getNotes)

router.get("/:id", authorized,validateId,noteController.getNoteById)

router.delete(`/:id`,authorized,validateId,noteController.deleteNote)

router.post("/", authorized,validateNoteData,noteController.addNote)

router.put("/", authorized,validateNoteData,noteController.updateNote)



export default router;
