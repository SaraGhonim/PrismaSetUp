import express, { Response, Request, NextFunction } from "express";
import * as noteController from "../controllers/notes.controllers";
import { checkAuthentication } from "../middlewares/userAuthentication";
import { validateNoteInsertUpdate } from "../validators/notes.validators";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get("/notes", async (req, res) => {
  const Notes = await prisma.note.findMany({
    where: { published: true },
  });
  res.json(Notes);
});

router.get("/note/:id", async (req, res) => {
  const { id } = req.params;

  const Notes = await prisma.note.findMany({
    where: { id: Number(id) },
  });
  res.json(Notes);
});

router.post(`/note`, async (req, res) => {
  const { title, content, authorEmail } = req.body;
  const result = await prisma.note.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
});

router.put("/publish/:id", async (req, res) => {
  const { id } = req.params;
  const Note = await prisma.note.update({
    where: { id: Number(id) },
    data: { published: true },
  });
  res.json(Note);
});

router.delete(`/note/:id`, async (req, res) => {
  const { id } = req.params;
  const Note = await prisma.note.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(Note);
});
export default router;
