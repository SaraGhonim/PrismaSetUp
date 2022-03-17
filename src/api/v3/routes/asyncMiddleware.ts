import { Request, Response, NextFunction } from "express";

const asyncMiddleware=function (controller: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {

      try {
        await controller(req, res);
      } 
      
      catch (err) {   // if there is an error
        next(err);    // will pass control to the next middleware which is error handler because : app.use(errorHandler)
      }
    };
  };
  

  
export default asyncMiddleware