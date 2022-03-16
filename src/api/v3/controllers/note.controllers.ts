import { RequestHandler } from "express";
import { retrieveNotes, retrieveNote,insertNote, editNote, removeNote } from "../Services/note.services";


export const getNotes: RequestHandler = async (req, res) => {
  const Notes = await retrieveNotes();
  res.send(Notes);
};

export const getNoteById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const Note = await retrieveNote(id)
  if(!Note) res.status(404).send("not found")
  res.send(Note);
};

export const addNote: RequestHandler = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const authorId = req.body.authorId;

  const result = await insertNote(title, content,authorId);
  res.send(result);
};

export const updateNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  const Note = await editNote(id, name);
  if(!Note) res.status(404).send("not found")
  res.send('Note is updated');
};

export const deleteNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const Note = await removeNote(id);
  if(!Note) res.status(404).send("not found")

  res.send("Note is deleted");
};
