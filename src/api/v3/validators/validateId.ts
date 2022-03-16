import { Request, Response, NextFunction } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).send("Id must be valid");
    }
    return next();
  };
  