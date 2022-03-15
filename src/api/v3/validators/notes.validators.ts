import {Request, Response, NextFunction} from 'express';


export const validateNoteInsertUpdate = (req: Request, res: Response, next: NextFunction) => {
    const {title,authorId } = req.body;
    if(!title) {
        throw ('Cannot create a Note without title');
    }
    if(!authorId) {
        throw ('Cannot create a Note without authorID');
    }
    next();
};

