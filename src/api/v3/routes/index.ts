import express from 'express';
import noteRoutes from './note.routes';
import userRoutes from './user.routes';
import { HandlerInput } from '../types';

const router = express.Router();

export const handler = async ({req: {params, body, query}, res, next, fn}: HandlerInput ) => {
    try{
        const data = await fn({ params, body, query });
        res.json(data);
    }
    catch(err:any) {
        // next(err);      ???? 
        res.status(400).send(err.details[0].message)
    }
};


router.use('/notes', noteRoutes);
router.use('/users', userRoutes);

export default router;
