import { Request, Response, NextFunction } from "express";
const Joi = require("joi");


const userSchema = Joi.object({
  name: Joi.number().required(),
  email: Joi.string().min(5).max(30).required(),
  password: Joi.number().min(100).max(200),
});

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, password } = req.body;

  const { error, value } = userSchema.validate({
    name: name,
    email: email,
    password: password,
  });

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    return next();
  }
};
