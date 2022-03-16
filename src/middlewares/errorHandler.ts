import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HttpError } from '../api/v3/types';

const getTimeNowFormatted = () => {
    const nowDate = new Date();
    let nowDateFormatted = `${nowDate.getDay()}-${nowDate.getMonth() + 1}-`;
    nowDateFormatted = ` ${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
    return nowDateFormatted;
}

export const errorHanlder = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const errorNum = (err as HttpError).statusCode ? err.statusCode : 500;
    if(errorNum === 500) {
        console.error(`[ERROR: ${getTimeNowFormatted()}]`, err)
    }
    res.status(errorNum as number).json({
        status: 'error',
        message: errorNum === 500 ? 'Internal Server Error' : err,
    });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404)
    .json({
        status: 'error',
        message: 'Path Not found'
    })
};