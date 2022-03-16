
import { Request, Response, NextFunction } from "express";

export interface ControllerInputs {
    query?: any,
    params?: any,
    body?: any
};

export interface HttpError {
    statusCode: number;
    message: string;
    name: string;
}

export class BadRequestError extends Error {
    statusCode: number;
    message: string;
    constructor(message: string) {
        super();
        this.name = 'Bad Request';
        this.statusCode = 400;
        this.message = message;
    }
};
export class UnprocessableError extends Error {
    statusCode: number;
    message: string;
    constructor (message: string) {
        super();
        this.name = 'Unprocessable Entity';
        this.statusCode = 422;
        this.message = message
    } 
}
export class NotFoundError extends Error {
    statusCode: number;
    message: string;
    constructor (message: string) {
        super();
        this.name =  'Not Found';
        this.statusCode = 404;
        this.message = message
    } 
}
export class DatabaseError extends Error {
    statusCode: number;
    message: string;
    constructor (message: string) {
        super();
        this.name =  'Not Acceptable';
        this.statusCode = 406;
        this.message = message
    } 
}

export interface HandlerInput {
    req: Request;
    res: Response;
    next: NextFunction;
    fn:Function
};
export interface  ResultAffectedDB {
    affectedRows: number;
};

export interface  ResultInsertDB {
    insertId: number;
};

export interface ParcelData {
    id: number;
    weight: number;
};
export interface TruckData {
    id: number;
    model: string;
    parcels: ParcelData[]
};

export interface ParcelModelUpdateWeight {
    id: number;
    weight: number;
}
export interface ParcelModelUpdateTruckId {
    id: number;
    truckId: number | null;
};