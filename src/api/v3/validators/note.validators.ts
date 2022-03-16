import { Request, Response, NextFunction } from "express";
const Joi = require("joi");


const noteSchema = Joi.object({
  title: Joi.string().min(5).max(20).required(),
  content: Joi.string().min(10).max(300).required(),
});

export const validateNoteData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;

  const { error, value } = noteSchema.validate({
    title: title,
    content: content,
  });

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    return next();
  }
};
