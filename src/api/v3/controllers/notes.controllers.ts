import { RequestHandler } from "express";
import {  insertNote } from "../Services/notes.services";


export const addNote: RequestHandler = async (req, res, next) => {
    const noteTitle = req.body.title;
    const noteContent = req.body.content;
  
    const response = await insertNote(noteTitle, noteContent);
    
  
    res.send(response);
  };
  

 