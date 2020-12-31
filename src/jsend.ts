import { NextFunction, Request, Response } from 'express';

export const jsend = (): any => {
  return (_req: Request, res: Response, next: NextFunction): void => {
    res.jsend = {
      success: (data: any, statusCode: number = 200): void => {
        res.status(statusCode).send({
          status: 'success',
          data,
        });
      },
      fail: (data: any, statusCode: number = 400): void => {
        res.status(statusCode).send({
          status: 'fail',
          data,
        });
      },
      error: (message: string, statusCode: number = 500, code?: number, data?: any): void => {
        res.status(statusCode).send({
          status: 'error',
          message,
          code,
          data,
        });
      },
    };
    next();
  };
};
