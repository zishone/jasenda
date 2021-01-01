import 'express';

declare global {
  namespace Express {
    interface Response {
      jsend: {
        success: (data: any, statusCode?: number) => void;
        fail: (data: any, statusCode?: number) => void;
        error: (message: string, code?: number, data?: any, statusCode?: number) => void;
      };
    }
  }
}
